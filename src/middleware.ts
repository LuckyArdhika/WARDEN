// executed every rennder in server side
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function ProtectRoute(req: NextRequest) {
  if (!req.cookies.get('UserData')?.value) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
}