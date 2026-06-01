import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect /admin/dashboard routes
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    // Only check for the presence of an auth cookie in the Edge middleware.
    // Full token verification (HMAC/crypto) runs on the server where Node APIs
    // are available (API routes and server components).
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      // Redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
