'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

const NAV = [
  { key: 'solutions', href: '#solutions' },
  { key: 'packages', href: '#packages' },
  { key: 'cases', href: '#cases' },
  { key: 'contact', href: '#contact' }
] as const;

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('header');

  // Mount gate to avoid theme hydration mismatch with next-themes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Crossfade light <-> dark with a view transition instead of an abrupt brightness jump.
  // flushSync makes next-themes apply the class inside the transition's DOM-update callback.
  const toggleTheme = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }
    document.startViewTransition(() => flushSync(() => setTheme(next)));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 dark:bg-background/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Show image on small screens */}
          <div className="sm:hidden">
            <Image
              src="/M.png"
              alt="M&L Logo"
              width={32}
              height={32}
              priority
            />
          </div>
          {/* Show text on larger screens */}
          <div className="hidden sm:inline">
            <Image
              src="/mlsoftware.png"
              alt="M&L Logo"
              width={300}
              height={100}
              priority
            />
          </div>
        </Link>

        {/* Section nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV.map(({ key, href }) => (
            <a key={key} href={href} className="transition-colors hover:text-foreground">
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        {/* Right side - Theme toggle, Language switcher, CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              title="Toggle Theme"
            >
              {resolvedTheme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
          )}

          {/* Language Switcher */}
          <LocaleSwitcher />

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </header>
  );
}