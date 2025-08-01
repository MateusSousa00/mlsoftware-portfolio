'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('header');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          M&L Software
        </Link>

        {/* Right side - Theme toggle, Language switcher, CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
          )}

          {/* Language Switcher */}
          <LocaleSwitcher />

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </header>
  );
}