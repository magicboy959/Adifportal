import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getAuthenticatedAdminUser } from '@/lib/auth';

const unauthorized = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function GET(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const inquiries = await prisma.contactInquiry.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(inquiries);
}
