import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getAuthenticatedAdminUser } from '@/lib/auth';

const unauthorized = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function GET(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const media = await prisma.mediaItem.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(media);
}

export async function POST(request: NextRequest) {
  const admin = await getAuthenticatedAdminUser(request);
  if (!admin) return unauthorized();

  const body = await request.json();
  const { title, type, language, slug, excerpt, publishedAt, image } = body;

  if (!title || !type || !language) {
    return NextResponse.json({ error: 'Missing required media fields' }, { status: 400 });
  }

  const mediaItem = await prisma.mediaItem.create({
    data: {
      title,
      type,
      language,
      slug: slug || null,
      excerpt: excerpt || null,
      publishedAt: publishedAt || null,
      image: image || null,
    },
  });

  return NextResponse.json(mediaItem, { status: 201 });
}
