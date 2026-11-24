import { Header } from '@/components/Header';
import ContactCTA from '@/components/shared/ContactCTA';
import CustomCursor from '@/components/CustomCursor';
import ContactForm from '@/components/shared/ContactForm';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';

const SITE_URL = 'https://mlsoftware.com.br';

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

  const path = locale === routing.defaultLocale ? '/' : `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t('metadata.title'),
    description: t('metadata.description'),
    alternates: {
      canonical: path,
      languages: {
        'pt-BR': '/',
        en: '/en',
        es: '/es',
        'x-default': '/'
      }
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: path,
      siteName: 'M&L Software',
      locale: locale === 'pt' ? 'pt_BR' : locale,
      type: 'website'
    }
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <Header />
      <main className="pt-20">
        <div className="mx-auto w-full">
          {children}
          <ContactCTA />
          <ContactForm />
          <Toaster richColors />
        </div>
      </main>
      <CustomCursor />
      <FloatingWhatsApp />
      <ScrollReveal />
    </NextIntlClientProvider>
  );
}
