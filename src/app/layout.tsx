import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import ContactCTA from '@/components/shared/ContactCTA';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'M&L Software LTDA',
  description: 'Your best option for web design and scalable products.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-primary-foreground text-black dark:bg-background dark:text-white')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex justify-center flex-row">
            <div className="w-full max-w-[1280px]">
              <Sidebar />
              <main className="flex sm:px-6 py-12">
                <div className="mx-auto w-full md:pl-96">
                  {children}
                  <ContactCTA />
                </div>
              </main>
            </div>
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
