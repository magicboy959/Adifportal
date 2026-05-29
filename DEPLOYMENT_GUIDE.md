# Live Server Deployment - Step by Step Guide

## Prerequisites
- SSH access to your live server
- Linux server with Node.js 18+ (or Docker)
- Domain name configured
- SSL certificate (Let's Encrypt)

---

## STEP 1: Prepare Database Files

✅ **Database files ready to upload:**
- `database/schema.sql` - Empty database structure
- `database/seed-data.sql` - Sample publications & media

### What they contain:
- **4 Tables**: Publications, MediaItems, ContactInquiries, Users
- **Indexes** for performance
- **Sample data** in English & Arabic

---

## STEP 2: SSH into Your Live Server

```bash
ssh user@your-server-ip
```

Replace:
- `user` = your SSH username (e.g., `root`, `admin`)
- `your-server-ip` = your server's IP address or domain

---

## STEP 3: Clone Repository

```bash
cd /var/www
git clone https://github.com/your-repo/adif-portal.git
cd adif-portal
```

---

## STEP 4: Set Up Environment Variables

Create `.env.local`:

```bash
nano .env.local
```

Paste (update with your values):

```
# Database
DATABASE_URL="file:./dev.db"

# JWT (generate a strong random string!)
JWT_SECRET=$(openssl rand -base64 32)

# Site
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SANITY_PROJECT_ID=kj7wgnfr
NEXT_PUBLIC_SANITY_DATASET=production

# Email (SMTP)
SMTP_HOST=adiforganization.org
SMTP_PORT=465
SMTP_USER=info@adiforganization.org
SMTP_PASS=your-mailbox-password
CONTACT_TO_EMAIL=info@adiforganization.org

# Production
NODE_ENV=production
```

Save: `Ctrl+O` → `Enter` → `Ctrl+X`

---

## STEP 5: Initialize Database

Option A: **Using Prisma (Recommended)**

```bash
npm install
npm run prisma:migrate deploy
npm run prisma:seed
```

Option B: **Using SQL files directly**

```bash
# Install sqlite3
sudo apt update && sudo apt install sqlite3 -y

# Create database
sqlite3 dev.db < database/schema.sql
sqlite3 dev.db < database/seed-data.sql

# Verify data loaded
sqlite3 dev.db "SELECT COUNT(*) FROM Publication;"
```

---

## STEP 6: Build the Application

```bash
npm install
npm run build
```

This creates the `.next/` production build folder.

---

## STEP 7: Run Application (Choose One)

### Option A: PM2 (Recommended for updates/monitoring)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start app
pm2 start npm --name "adif-portal" -- start

# Enable auto-restart on reboot
pm2 startup
pm2 save

# Monitor
pm2 logs adif-portal
pm2 status
```

### Option B: Docker (Recommended for isolation)

```bash
# Build image
docker build -t adif-portal .

# Create persistent database volume
sudo mkdir -p /var/lib/adif

# Run container
docker run -d \
  --name adif-portal \
  -p 3000:3000 \
  -v /var/lib/adif/dev.db:/app/dev.db \
  --env-file .env.local \
  --restart unless-stopped \
  adif-portal

# Check logs
docker logs -f adif-portal
```

---

## STEP 8: Set Up Nginx Reverse Proxy

```bash
sudo apt update && sudo apt install nginx -y

# Create config
sudo tee /etc/nginx/sites-available/adif > /dev/null <<EOF
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Enable site
sudo ln -s /etc/nginx/sites-available/adif /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

---

## STEP 9: Get SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

Follow prompts. Certificates auto-renew.

---

## STEP 10: Test Live Site

```bash
# From your computer
curl -I https://your-domain.com
```

Should return `200 OK`.

Visit:
- `https://your-domain.com` - Public site
- `https://your-domain.com/admin/login` - Admin login

---

## Database Backup & Restore

### Backup locally (on live server):

```bash
# Backup database
sqlite3 dev.db ".dump" > dev-backup-$(date +%Y%m%d).sql

# Compress
gzip dev-backup-*.sql

# Download to local machine
scp user@your-server-ip:/var/www/adif-portal/dev-backup-*.sql.gz ./
```

### Restore from backup:

```bash
# Upload SQL file
scp dev-backup-20260529.sql user@your-server-ip:/var/www/adif-portal/

# SSH to server
ssh user@your-server-ip

# Restore (CAUTION: overwrites database!)
sqlite3 dev.db < dev-backup-20260529.sql
```

---

## Update Application (After Code Changes)

### With PM2:

```bash
cd /var/www/adif-portal
git pull origin main
npm install
npm run build
pm2 reload adif-portal
```

### With Docker:

```bash
cd /var/www/adif-portal
git pull origin main
docker stop adif-portal
docker rm adif-portal
docker build -t adif-portal .
docker run -d \
  --name adif-portal \
  -p 3000:3000 \
  -v /var/lib/adif/dev.db:/app/dev.db \
  --env-file .env.local \
  --restart unless-stopped \
  adif-portal
```

---

## Troubleshooting

### App won't start:
```bash
# Check logs
pm2 logs adif-portal
# or
docker logs adif-portal

# Check database
sqlite3 dev.db "SELECT COUNT(*) FROM sqlite_master WHERE type='table';"
```

### Database locked:
```bash
# Restart app
pm2 restart adif-portal
# or
docker restart adif-portal
```

### Admin login not working:
```bash
# Check User table
sqlite3 dev.db "SELECT * FROM User;"

# Verify JWT_SECRET in .env.local
echo $JWT_SECRET
```

### Nginx not connecting:
```bash
# Check nginx config
sudo nginx -t

# Check if port 3000 is open
sudo netstat -tlnp | grep 3000
```

---

## Summary Checklist

- [ ] SSH to server
- [ ] Clone repository
- [ ] Create `.env.local` with JWT_SECRET
- [ ] Initialize database (Prisma or SQL)
- [ ] Build application
- [ ] Start with PM2 or Docker
- [ ] Configure Nginx reverse proxy
- [ ] Set up SSL certificate
- [ ] Test site is live
- [ ] Create admin account at `/admin/login`
- [ ] Backup database regularly

---

## Need Help?

Check logs:
```bash
# PM2
pm2 logs

# Docker
docker logs adif-portal

# Nginx
sudo tail -f /var/log/nginx/error.log
```

Next: Set up automated backups and monitoring!
