'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-6xl font-bold mb-6 text-primary dark:text-primary-foreground">404</h1>
      <p className="text-xl text-muted-foreground mb-4">{t('message')}</p>
      <Link href="/" className="text-accent underline underline-offset-4 hover:text-accent-foreground transition">
        {t('goHome')}
      </Link>
    </main>
  );
}
