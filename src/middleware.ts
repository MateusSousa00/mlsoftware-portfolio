import createMiddleware from 'next-intl/middleware';
import { type NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = 'en';

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'pt', 'es'],
    defaultLocale
  });
  const response = handleI18nRouting(request);

  return response;
}
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
