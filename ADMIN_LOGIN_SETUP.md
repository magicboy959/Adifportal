# Admin Login Setup Guide

## Database Migration

1. Run the Prisma migration to add the User table:

```bash
npm run prisma:migrate
```

This will create the `User` table for storing admin credentials.

## Environment Variables

Add to `.env.local`:

```
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

**Important**: Change `your-super-secret-jwt-key-change-in-production` to a strong random string in production!

## First Login

1. Visit `http://localhost:3000/admin/login` (or your domain `/admin/login`)
2. Enter any email and password
3. The system will automatically create your first admin account
4. You'll be logged in and redirected to the admin dashboard

## Admin Dashboard

Access at `/admin/dashboard` - requires authentication

Features:
- **Overview**: Statistics on publications, media, and inquiries
- **Publications**: View all publications
- **Media**: View all media items
- **Contact Inquiries**: View all contact form submissions

## Security Notes

- ✅ Passwords are hashed with PBKDF2 (100,000 iterations)
- ✅ JWT tokens expire after 7 days
- ✅ Tokens stored in httpOnly cookies (CSRF safe)
- ⚠️ Change `JWT_SECRET` in production
- ⚠️ Use HTTPS in production (set secure cookie flag)

## Deployment

On your live server, set:

```bash
JWT_SECRET=your-production-secret-key
NODE_ENV=production
```

The Docker example:

```bash
docker run -d \
  --name adif-portal \
  -p 3000:3000 \
  -v /var/lib/adif/dev.db:/app/dev.db \
  --env DATABASE_URL="file:./dev.db" \
  --env JWT_SECRET=your-production-secret \
  --env NODE_ENV=production \
  --env SMTP_HOST=... \
  # ... other env vars
  adif-portal
```
