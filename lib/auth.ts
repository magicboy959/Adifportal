import * as crypto from 'crypto';
import { NextRequest } from 'next/server';
import { prisma } from './db';
import type { User } from '@prisma/client';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  // Using Node.js built-in crypto for password hashing
  const salt = crypto.randomBytes(16).toString('hex');
  const iterations = 100000;
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, 64, 'sha512')
    .toString('hex');
  return `${salt}:${hash}`;
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const [salt, hash] = hashedPassword.split(':');
  const iterations = 100000;
  const derived = crypto
    .pbkdf2Sync(password, salt, iterations, 64, 'sha512')
    .toString('hex');
  return derived === hash;
}

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("Missing JWT_SECRET environment variable.");
  }

  return secret;
}

export function generateToken(userId: string): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64').replace(/=/g, '');
  const payload = Buffer.from(
    JSON.stringify({
      userId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 days
    })
  )
    .toString('base64')
    .replace(/=/g, '');

  const signature = crypto
    .createHmac('sha256', getJwtSecret())
    .update(`${header}.${payload}`)
    .digest('base64')
    .replace(/=/g, '');

  return `${header}.${payload}.${signature}`;
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    const [header, payload, signature] = token.split('.');
    
    // Verify signature
    const verifySignature = crypto
      .createHmac('sha256', getJwtSecret())
      .update(`${header}.${payload}`)
      .digest('base64')
      .replace(/=/g, '');

    if (verifySignature !== signature) {
      return null;
    }

    // Decode payload
    const decoded = JSON.parse(Buffer.from(payload, 'base64').toString());

    // Check expiration
    if (decoded.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return { userId: decoded.userId };
  } catch (error) {
    return null;
  }
}

export function getAuthToken(request: NextRequest): string | null {
  return request.cookies.get('auth_token')?.value ?? null;
}

export async function getAuthenticatedAdminUser(
  request: NextRequest
): Promise<User | null> {
  const token = getAuthToken(request);
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  if (!user || user.role !== 'admin') return null;

  return user;
}
