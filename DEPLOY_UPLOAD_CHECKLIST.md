Deployment Upload Checklist

1) Create a deployment package (zip) locally or on server

- From project root run:

```bash
# generate zip locally (excludes node_modules, .next, etc.)
./scripts/prepare-deploy.sh
```

- Confirm the generated zip is < 100 MB

2) Upload package via cPanel File Manager or SFTP

- In cPanel: File Manager → Upload the ZIP to `public_html` or desired folder
- Or via SFTP:

```bash
sftp youruser@your-server
put adif-portal-deploy-YYYYMMDD-HHMMSS.zip
```

3) Extract on server (SSH)

```bash
# SSH into server
ssh youruser@your-server-ip
cd ~/public_html
unzip adif-portal-deploy-YYYYMMDD-HHMMSS.zip -d adif-portal
cd adif-portal
```

4) Install & build (requires Node.js on server / cPanel Node app)

```bash
# If Node.js is available on host; otherwise use platform Node app or a VPS
npm install
npx prisma generate
# If platform provides DB env vars, run migrations
npx prisma migrate deploy
npm run prisma:seed   # optional
npm run build
npm start
```

5) If no Node on shared host

- Use the platform's Node.js App Manager (cPanel "Setup Node.js App") if available.
- Otherwise host the backend on a Node-capable host and serve the static `out/` folder on cPanel.

6) Database migration (if you have a local SQLite `dev.db`)

- You can migrate local SQLite data to the platform MySQL using:

```bash
# Set DB env vars before running the script
export DB_HOST=...
export DB_PORT=3306
export DB_NAME=...
export DB_USER=...
export DB_PASSWORD=...

# Run migration script (from project root)
./scripts/migrate-sqlite-to-mysql.sh
```

7) Verify

- Visit your domain and admin login: `/admin/login`
- Check DB tables on the platform with the mysql client

8) Backup

- Create DB dump:

```bash
mysqldump -h $DB_HOST -u $DB_USER -p $DB_PASSWORD $DB_NAME > backup.sql
```

9) Notes

- Do not upload `node_modules` (platform runs `npm install`)
- Ensure `JWT_SECRET` and SMTP environment variables are set in the platform
- If your host does not allow `npm` on shared cPanel, move to a Node-capable host or use platform Node app
