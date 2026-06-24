'use client';

import { useEffect } from 'react';

// Keeps <html lang> in sync on client-side locale switches. The root layout
// (which renders <html>) does not re-render on locale navigation, so we update
// the attribute from the [locale] segment, which does.
export default function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
