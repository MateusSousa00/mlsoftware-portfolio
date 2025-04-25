import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';

export const locales = ['en', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português'
};

export const defaultLocale: Locale = 'en';
export const localePrefix = 'as-needed';

const messageImports = {
  en: () => import('../messages/en.json'),
  es: () => import('../messages/es.json'),
  pt: () => import('../messages/pt.json')
} as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.includes(locale as Locale);
}

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = (locale?.split('-')[0] ?? defaultLocale) as Locale;

  if (!isValidLocale(baseLocale)) {
    notFound();
  }

  const messages = (await messageImports[baseLocale]()).default;

  return {
    locale: baseLocale,
    messages
  };
});
