import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// 1. Protect everything starting with /user
const isUserRoute = createRouteMatcher(['/user(.*)']);

const isPublicRoute = createRouteMatcher([
  '/', 
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // 2. If the user is NOT logged in and tries to access ANY /user path
  if (isUserRoute(req) && !userId) {
    // This will automatically redirect them to your sign-in page
    return (await auth()).redirectToSignIn();
  }

  // 3. Logic for logged-in users visiting the landing page
  if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/user/dashboard', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};