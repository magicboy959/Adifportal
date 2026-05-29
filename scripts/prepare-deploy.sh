#!/usr/bin/env bash
set -euo pipefail

# Create a deployment zip excluding heavy folders (reads .zipignore)
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

ZIPFILE="adif-portal-deploy-$(date +%Y%m%d-%H%M%S).zip"

# Build exclude arguments from .zipignore
EXCLUDES=()
if [ -f .zipignore ]; then
  while IFS= read -r line; do
    # skip comments and blank lines
    [[ "$line" =~ ^# ]] && continue
    [[ -z "$line" ]] && continue
    EXCLUDES+=("-x" "$line")
  done < .zipignore
fi

# Ensure zip is installed
if ! command -v zip >/dev/null 2>&1; then
  echo "zip is not installed. Install zip or create archive manually."
  exit 1
fi

echo "Creating $ZIPFILE excluding patterns from .zipignore"
zip -r "$ZIPFILE" . "${EXCLUDES[@]}"

echo "Created $ZIPFILE"

# Show size
du -h "$ZIPFILE"

exit 0
