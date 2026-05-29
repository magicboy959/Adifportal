import * as crypto from 'crypto';

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
    .createHmac('sha256', process.env.JWT_SECRET || 'your-secret-key-change-in-production')
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
      .createHmac('sha256', process.env.JWT_SECRET || 'your-secret-key-change-in-production')
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
