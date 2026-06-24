'use client';
import { useTranslations } from 'next-intl';

export default function WhoFor() {
  const t = useTranslations('whoFor');

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl border-l-2 border-primary pl-6 md:pl-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
          {t('label')}
        </p>
        <p className="text-xl leading-relaxed text-foreground md:text-2xl md:leading-relaxed">
          {t('text')}
        </p>
      </div>
    </section>
  );
}
