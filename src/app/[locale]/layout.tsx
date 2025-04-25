import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { Locale, locales } from '@/i18n';
import ContactCTA from '@/components/shared/ContactCTA';
import CustomCursor from '@/components/CustomCursor';
import ContactForm from '@/components/shared/ContactForm';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-primary-foreground text-black dark:bg-background dark:text-white')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
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
