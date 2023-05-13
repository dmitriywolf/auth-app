import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { PATHS } from '@/common/constants';

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  });

  if (pathname == PATHS.profile) {
    if (!token) return NextResponse.redirect(`${process.env.NEXTAUTH_URL}${PATHS.logIn}`);
  }

  if (pathname == PATHS.logIn || pathname == PATHS.signUp) {
    if (token) return NextResponse.redirect(`${origin}`);
  }
}
