import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedAdminUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const user = await getAuthenticatedAdminUser(request);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ id: user.id, email: user.email, role: user.role });
}
