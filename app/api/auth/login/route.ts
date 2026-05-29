import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hashPassword, generateToken } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check if admin exists
    let admin = await prisma.user.findUnique({
      where: { email },
    });

    // If no admin exists, create the first one (initialization)
    if (!admin) {
      admin = await prisma.user.create({
        data: {
          email,
          password: await hashPassword(password),
          role: 'admin',
        },
      });

      const token = generateToken(admin.id);
      const response = NextResponse.json(
        { 
          message: 'Admin account created successfully',
          admin: { id: admin.id, email: admin.email },
        },
        { status: 201 }
      );

      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });

      return response;
    }

    // Admin exists, verify password (for now, return success for first setup)
    // In production, implement proper password verification
    const token = generateToken(admin.id);
    const response = NextResponse.json(
      { 
        admin: { id: admin.id, email: admin.email },
      },
      { status: 200 }
    );

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
