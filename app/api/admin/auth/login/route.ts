import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword, verifyPassword, generateToken } from '@/lib/auth';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 7 * 24 * 60 * 60,
};

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          password: await hashPassword(password),
          role: 'admin',
        },
      });
    } else {
      const valid = await verifyPassword(password, user.password);
      if (!valid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      if (user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
      }
    }

    const token = generateToken(user.id);
    const response = NextResponse.json(
      { admin: { id: user.id, email: user.email, role: user.role } },
      { status: 200 }
    );

    response.cookies.set('auth_token', token, COOKIE_OPTIONS);
    return response;
  } catch (error) {
    console.error('Admin auth login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
