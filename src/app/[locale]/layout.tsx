import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import ContactCTA from '@/components/shared/ContactCTA';
import CustomCursor from '@/components/CustomCursor';
import ContactForm from '@/components/shared/ContactForm';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import StickyCTA from '@/components/shared/StickyCTA';
import ExitIntentPopup from '@/components/shared/ExitIntentPopup';
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

const inter = Inter({ subsets: ['latin'] });

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
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-white text-black dark:bg-background dark:text-white')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
            <StickyCTA />
            <ExitIntentPopup />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
