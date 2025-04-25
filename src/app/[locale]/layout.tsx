import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import ContactCTA from '@/components/shared/ContactCTA';
import CustomCursor from '@/components/CustomCursor';
import ContactForm from '@/components/shared/ContactForm';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

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
      <body className={cn(inter.className, 'bg-primary-foreground text-black dark:bg-background dark:text-white')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            <div className="flex justify-center flex-row">
              <div className="w-full max-w-[1280px]">
                <Sidebar />
                <main className="flex sm:px-6 py-12">
                  <div className="mx-auto w-full md:pl-96">
                    {children}
                    <ContactCTA />
                    <ContactForm />
                  </div>
                </main>
              </div>
            </div>
            <CustomCursor />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
