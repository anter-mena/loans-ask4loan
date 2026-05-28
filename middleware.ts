import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (static files)
  // - _vercel (Vercel specific files)
  // - Static files (e.g. favicon.ico, sitemap.xml, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
