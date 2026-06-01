import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getAuthenticatedAdminUser, hashPassword } from '@/lib/auth';

const unauthorized = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function GET(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      email,
      password: await hashPassword(password),
      role: 'admin',
    },
  });

  return NextResponse.json(
    { id: user.id, email: user.email, role: user.role, createdAt: user.createdAt },
    { status: 201 }
  );
}
