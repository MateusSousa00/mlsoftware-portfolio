'use client';

import { Locale } from '@/i18n';
import { useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const locales = ['en', 'pt', 'es'] as const;

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  function handleLocaleChange(newLocale: Locale): void {
    console.log(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-300 hover:underline cursor-pointer"
      >
        {locale.toUpperCase()}
        {open ? (
          <>
            <FaChevronDown className="w-3 h-3 md:hidden" />
            <FaChevronUp className="w-3 h-3 hidden md:block" />
          </>
        ) : (
          <FaChevronDown className="w-3 h-3" />
        )}
      </button>

      {open && (
        <div
          className="absolute right-0 z-10 text-sm bg-background border border-border rounded-md shadow-md
          mt-1 top-full md:bottom-full md:top-auto md:mb-1"
        >
          {locales
            .filter((l) => l !== locale)
            .map((l) => (
              <button
                key={l}
                onClick={() => handleLocaleChange(l)}
                className="block px-4 py-2 w-full text-left hover:bg-muted cursor-pointer"
              >
                {l.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
