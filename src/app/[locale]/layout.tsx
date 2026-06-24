import { Sidebar } from '@/components/Sidebar';
import ContactCTA from '@/components/shared/ContactCTA';
import ContactForm from '@/components/shared/ContactForm';
import HtmlLang from '@/components/HtmlLang';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale });

  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <HtmlLang locale={locale} />
      <div className="flex justify-center flex-row">
        <div className="w-full max-w-[1280px]">
          <Sidebar />
          <main className="flex sm:px-6 py-12">
            <div className="mx-auto w-full md:pl-96">
              {children}
              <ContactCTA />
              <ContactForm />
              <Toaster richColors />
            </div>
          </main>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
