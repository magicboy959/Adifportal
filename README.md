# ADIF Organization Website

Production-ready Next.js 15 App Router website for ADIF Organization.

## Stack

- Next.js 15, React 19, TypeScript
- TailwindCSS, shadcn/ui-compatible primitives
- Framer Motion
- Local backend content for publications and media
- SEO metadata, sitemap, robots
- Arabic language routes with RTL support under `/ar`
- Donation section and donor inquiry pages

## Run

```bash
npm install
npm run dev
```

## Quality

```bash
npm run typecheck
npm run lint
npm run build
```

## Static Export

```bash
npm run export
```

Static export writes the site to `out/`.

Static export does not include the `/api/contact` email endpoint. Use normal Next.js deployment with `npm run build` for the contact form to send email.

## Local Backend Content

This project is served with local backend content for publications and media. No Sanity CMS backend is required for the public site.

Publications and media items are stored in a local SQLite database and exposed through backend routes. The database is managed through Prisma, and `lib/local-content.ts` uses the database when it is available.

The `/api/publications` and `/api/media` routes return the same local content, so the project can run entirely from a normal Next.js server without an external CMS.

## Database Setup

Create a `.env.local` file from `.env.example` and set:

```bash
DATABASE_URL="file:./dev.db"
```

Then run:

```bash
npm install
npm run prisma:migrate
npm run prisma:seed
```

This creates `dev.db` and populates the local project database with sample publications and media items.

## Docker / Live Server

This project runs as a normal Next.js server and requires a writable SQLite database file.

Build the Docker image:

```bash
docker build -t adif-portal .
```

Run the container with environment variables and a persistent database volume:

```bash
docker run -d \
  --name adif-portal \
  -p 3000:3000 \
  -v "$PWD/dev.db:/app/dev.db" \
  --env DATABASE_URL="file:./dev.db" \
  --env SMTP_HOST=adiforganization.org \
  --env SMTP_PORT=465 \
  --env SMTP_USER=info@adiforganization.org \
  --env SMTP_PASS=<mailbox-password> \
  --env CONTACT_TO_EMAIL=info@adiforganization.org \
  adif-portal
```

If you do not want to persist the SQLite file on the host, you can omit the `-v` mount, but the database will only live inside the container.

> Note: serverless platforms like Vercel do not reliably persist SQLite files. Use a VPS, Docker host, or dedicated Node.js server for the live backend.

## Contact Email

The contact form sends email through SMTP in normal Next.js deployment mode.

Set these variables in `.env.local` and in production hosting:

```bash
SMTP_HOST=adiforganization.org
SMTP_PORT=465
SMTP_USER=info@adiforganization.org
SMTP_PASS=<mailbox-password>
CONTACT_TO_EMAIL=info@adiforganization.org
```

The contact API also accepts `SMTP_PASSWORD` as an alternate password env variable and `CONTACT_RECIPIENT` as a legacy fallback.

Do not commit the SMTP password. Static export builds do not include API routes, so the contact form email endpoint requires a Next.js server deployment.

## Deployment Environment Variables

When deploying to a hosting platform, set these environment variables:

### Required

```bash
# Application
NODE_ENV=production
JWT_SECRET=<your-strong-random-secret>  # Generate: openssl rand -base64 32

# Database (if using platform's managed MySQL)
DB_HOST=<database-hostname>
DB_PORT=3306
DB_NAME=<database-name>
DB_USER=<database-username>
DB_PASSWORD=<database-password>

# Alternative: Local SQLite (for VPS/Docker)
DATABASE_URL=file:./dev.db
```

### Optional

```bash
# Contact form email via SMTP (traditional)
SMTP_HOST=<smtp-server>
SMTP_PORT=587
SMTP_USER=<email-address>
SMTP_PASSWORD=<password>
SMTP_SECURE=true  # Set to "true" for port 465, omit for 587

# Contact form email via HTTPS API (for restricted network environments)
SMTP_API_URL=<https://email-api-endpoint>
SMTP_API_KEY=<api-key>
SMTP_FROM=<from-address>

# Recipient overrides
CONTACT_TO_EMAIL=<recipient-email>
CONTACT_RECIPIENT=<recipient-email>  # Legacy fallback

# Site configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Notes:**
- `JWT_SECRET` is required in production. The app will fail to start if missing.
- For MySQL deployments, either set `DB_*` vars or `DATABASE_URL`.
- Email can use SMTP (traditional) or HTTPS API (for restricted ports). If both are set, HTTPS API takes priority.
- `NODE_ENV` must be `production` for proper security headers and build optimization.
- `JWT_SECRET` protects the new admin portal and admin API routes.

## Admin Portal

Admin pages are available under `/admin` and use secure JWT authentication with a server cookie.

- `/admin/login` — admin login page
- `/admin/dashboard` — admin dashboard overview
- `/admin/publications` — manage publications
- `/admin/media` — manage media items
- `/admin/contacts` — review contact inquiries
- `/admin/users` — manage admin users

New admin APIs are available under `/api/admin/*`.

## API Endpoints

The site now exposes backend JSON endpoints for dynamic content and contact support:

- `POST /api/contact` — send contact form messages via SMTP
- `GET /api/publications?locale=en` — fetch publication list from local backend data
- `GET /api/media?locale=en` — fetch media stories and video items from local backend data

## Languages

- English: `/`
- Arabic: `/ar`

Shared locale utilities and Arabic copy live in `lib/i18n.ts`.

Donation routes:

- English: `/donate`
- Arabic: `/ar/donate`
