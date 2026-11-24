import { ReactNode, ViewTransition } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import '@/app/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import AmbientBackground from '@/components/shared/AmbientBackground';
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
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          'font-sans bg-background text-foreground antialiased'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AmbientBackground />
          {/* Crossfades the page when the locale switcher navigates (router.replace runs in a transition). */}
          <ViewTransition>{children}</ViewTransition>
        </ThemeProvider>
        {fbPixelId && <FacebookPixel pixelId={fbPixelId} />}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
