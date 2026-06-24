import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import { cn } from '@/lib/utils';
import { getLocale } from 'next-intl/server';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-primary-foreground text-black dark:bg-background dark:text-white')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
