import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

function buildDatabaseUrlFromEnv(): string | undefined {
  const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
  if (DB_HOST && DB_USER && DB_NAME) {
    const port = DB_PORT || '3306';
    const user = encodeURIComponent(DB_USER);
    const pass = DB_PASSWORD ? encodeURIComponent(DB_PASSWORD) : '';
    return `mysql://${user}:${pass}@${DB_HOST}:${port}/${DB_NAME}`;
  }
  return process.env.DATABASE_URL;
}

const runtimeDbUrl = buildDatabaseUrlFromEnv();

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
    ...(runtimeDbUrl ? { datasources: { db: { url: runtimeDbUrl } } } : {}),
  });

export { prisma };

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
