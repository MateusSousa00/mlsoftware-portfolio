import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/experience': {
      pt: '/experiencia',
      es: '/experiencia'
    }
  }
});
