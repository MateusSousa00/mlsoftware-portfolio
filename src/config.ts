import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const locales = ['en', 'es', 'pt'] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/': '/',
  '/experience': '/experience'
};

export const localePrefix: LocalePrefix<Locales> = 'always';
