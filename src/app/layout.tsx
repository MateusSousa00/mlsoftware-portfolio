import { ReactNode } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import '@/app/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import FacebookPixel from '@/components/shared/FacebookPixel';
import { GoogleAnalytics } from '@next/third-parties/google';

type Props = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk'
});

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const gaId = process.env.GA_ID;
  const fbPixelId = process.env.FB_PIXEL_ID;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          'font-sans bg-background text-foreground antialiased'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {fbPixelId && <FacebookPixel pixelId={fbPixelId} />}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
