import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getAuthenticatedAdminUser } from '@/lib/auth';

const unauthorized = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function GET(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const publications = await prisma.publication.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(publications);
}

export async function POST(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const body = await request.json();
  const { title, type, date, topic, excerpt, language } = body;

  if (!title || !type || !date || !topic || !language) {
    return NextResponse.json({ error: 'Missing required publication fields' }, { status: 400 });
  }

  const publication = await prisma.publication.create({
    data: {
      title,
      type,
      date,
      topic,
      excerpt: excerpt ?? '',
      language,
    },
  });

  return NextResponse.json(publication, { status: 201 });
}
