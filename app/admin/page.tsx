import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';

export default async function AdminRoot() {
  const token = (await cookies()).get('auth_token')?.value;

  if (token && verifyToken(token)) {
    redirect('/admin/dashboard');
  }

  redirect('/admin/login');
}
