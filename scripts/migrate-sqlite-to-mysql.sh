#!/usr/bin/env bash
set -euo pipefail

# Migrate data from local SQLite dev.db into MySQL (platform DB).
# Requirements:
# - sqlite3 CLI installed
# - mysql client installed with LOCAL INFILE enabled
# - environment variables DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD set
# - this script should be run from project root where dev.db is located

if [ ! -f dev.db ]; then
  echo "dev.db not found in current directory"
  exit 1
fi

: ${DB_HOST:?Need DB_HOST}
: ${DB_PORT:=3306}
: ${DB_NAME:?Need DB_NAME}
: ${DB_USER:?Need DB_USER}
: ${DB_PASSWORD:?Need DB_PASSWORD}

MYSQL_OPTS=( -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" --local-infile=1 )

echo "Creating schema on MySQL using database/schema-mysql-safe.sql"
mysql "${MYSQL_OPTS[@]}" < database/schema-mysql-safe.sql

TABLES=(Publication MediaItem ContactInquiry "User")

for t in "${TABLES[@]}"; do
  tab=${t//"/}
  echo "Exporting table $tab from SQLite"
  sqlite3 -header -csv dev.db "SELECT * FROM $tab;" > "/tmp/${tab}.csv"

  echo "Loading /tmp/${tab}.csv into MySQL table \\`$tab\\`"
  # Use LOAD DATA local infile with proper options
  mysql "${MYSQL_OPTS[@]}" -e "
    LOAD DATA LOCAL INFILE '/tmp/${tab}.csv'
    INTO TABLE \\`$tab\\`
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;
  "
  echo "Loaded $tab"
  rm -f "/tmp/${tab}.csv"
done

echo "Migration complete. Verify counts:"
for t in "${TABLES[@]}"; do
  tab=${t//"/}
  mysql "${MYSQL_OPTS[@]}" -e "SELECT COUNT(*) AS count FROM \\`$tab\\`;"
done

exit 0
