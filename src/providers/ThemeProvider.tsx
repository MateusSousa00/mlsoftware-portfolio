'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// next-themes injects an inline <script> to set the theme before paint. On the server it must stay
// executable; on the client React 19 warns about rendering <script>, unless it's a data block
// (e.g. type="application/json"), which React ignores. The script already ran from the SSR HTML.
const scriptProps =
  typeof window === 'undefined' ? undefined : ({ type: 'application/json' } as const);

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider scriptProps={scriptProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
