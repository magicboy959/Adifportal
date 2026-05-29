# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
COPY prisma ./prisma
COPY tsconfig.json next.config.ts ./
COPY .npmrc .npmrc
RUN npm install

COPY . .
RUN npm run build
RUN DATABASE_URL="file:./dev.db" npx prisma migrate deploy
RUN DATABASE_URL="file:./dev.db" npm run prisma:seed

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dev.db ./dev.db
COPY --from=builder /app/next.config.ts ./next.config.ts

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
