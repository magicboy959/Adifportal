# Database Deployment - Quick Reference

## Files Ready to Upload

Located in `/database/`:

1. **schema.sql** - MySQL / MariaDB database tables & indexes
2. **schema-mysql-safe.sql** - Safe version for existing databases (adds missing columns safely)
3. **seed-data.sql** - Sample publications & media

## 10-Minute Database Setup

### On Your Live Server:

```bash
# 1. Install sqlite3 (if not already installed)
sudo apt update && sudo apt install sqlite3 -y

# 2. Navigate to app folder
cd /var/www/adif-portal

# 3. Create database from schema
sqlite3 dev.db < database/schema.sql

# 4. Load sample data
sqlite3 dev.db < database/seed-data.sql

# 5. Verify tables created
sqlite3 dev.db "SELECT name FROM sqlite_master WHERE type='table';"
```

Expected output:
```
ContactInquiry
MediaItem
Publication
User
```

### Verify Data Loaded:

```bash
# Check publications
sqlite3 dev.db "SELECT COUNT(*) FROM Publication;" 
# Output: 6 (3 English + 3 Arabic)

# Check media items
sqlite3 dev.db "SELECT COUNT(*) FROM MediaItem;"
# Output: 5 (3 English + 2 Arabic)

# Check tables size
sqlite3 dev.db ".tables"
```

---

## Using Prisma Instead (Recommended)

If you prefer Prisma migrations:

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate deploy

# Seed sample data
npm run prisma:seed
```

---

## Set Proper Permissions

```bash
# Make database writable by app
chmod 664 dev.db
chmod 755 $(dirname dev.db)

# If running as www-data (Nginx):
sudo chown www-data:www-data dev.db
```

---

## Create Admin Account

1. Visit: `https://your-domain.com/admin/login`
2. Enter email: `admin@adiforganization.org`
3. Enter password: `your-secure-password`
4. First login creates the account automatically
5. Redirects to admin dashboard

---

## Backup Database

```bash
# One-time backup
sqlite3 dev.db ".dump" > backup-$(date +%Y%m%d-%H%M%S).sql

# Compress for download
gzip backup-*.sql

# Download to local machine
scp user@server:/path/to/backup-*.sql.gz ./
```

---

## Database File Info

- **Format**: SQLite 3
- **Location**: `dev.db` (in app root)
- **Size**: ~100KB initially
- **Storage**: Persistent volume mount (Docker)

---

## Next Steps

1. ✅ Upload database files
2. ✅ Initialize on server (schema.sql + seed-data.sql)
3. ✅ Configure .env.local with JWT_SECRET
4. ✅ Build & start app
5. ✅ Create admin account
6. ✅ Test admin dashboard at /admin/dashboard

See **DEPLOYMENT_GUIDE.md** for full step-by-step instructions.
