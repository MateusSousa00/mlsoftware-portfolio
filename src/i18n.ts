import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

// @ts-expect-error: We don't want to return `locale` here
export default getRequestConfig(async ({ locale }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
