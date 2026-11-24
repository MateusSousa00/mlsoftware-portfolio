import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  // Portuguese is served at "/" without a prefix; English and Spanish at "/en" and "/es".
  localePrefix: 'as-needed',
  // Always serve Portuguese at "/" instead of redirecting by Accept-Language.
  localeDetection: false
});
