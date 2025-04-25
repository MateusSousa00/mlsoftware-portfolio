'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaDev, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeId = useScrollSpy(['about', 'experience', 'projects']);
  const pathName = usePathname();
  const t = useTranslations('sidebar');

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <aside className="w-full md:w-96 md:fixed top-0 md:top-auto md:h-screen z-20 bg-primary-foreground dark:bg-background border-neutral-200 dark:border-neutral-800 px-6 py-6 md:py-10 flex flex-col md:justify-between">
      {/* Top Content */}
      <div>
        <Link href={'/'} className="text-5xl font-bold mb-1">
          Mateus Lima
        </Link>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-4">M&L Software Founder.</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Software Engineer</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 italic mb-10">{t('impact')}</p>

        {/^\/(en|pt|es)?$/.test(pathName) && (
          <nav className="space-y-3 hidden md:block">
            <Link
              href="#about"
              className={cn(
                'block text-sm transition-all duration-300',
                activeId === 'about' && 'font-bold underline underline-offset-4'
              )}
            >
              {t('about')}
            </Link>
            <Link
              href="#experience"
              className={cn(
                'block text-sm transition-all duration-300',
                activeId === 'experience' && 'font-bold underline underline-offset-4'
              )}
            >
              {t('experience')}
            </Link>
            <Link
              href="#projects"
              className={cn(
                'block text-sm transition-all duration-300',
                activeId === 'projects' && 'font-bold underline underline-offset-4'
              )}
            >
              {t('projects')}
            </Link>
          </nav>
        )}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Link href="https://github.com/mateussousa00" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5" />
        </Link>
        <Link href="https://linkedin.com/mateussousa00" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5" />
        </Link>
        <Link href="https://dev.to/mateussousa00" target="_blank" rel="noopener noreferrer">
          <FaDev className="w-5 h-5" />
        </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:scale-110 cursor-pointer transition-transform text-neutral-600 dark:text-neutral-300"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        )}
        <LocaleSwitcher />
      </div>
    </aside>
  );
}
