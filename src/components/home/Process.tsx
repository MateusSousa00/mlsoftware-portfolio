'use client';
import { useTranslations } from 'next-intl';

const STEPS = ['consultation', 'proposal', 'development', 'launch'] as const;

export default function Process() {
  const t = useTranslations('process');

  return (
    <section id="process" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t('heading')}
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((id, i) => (
            <li key={id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-display text-lg font-semibold">{t(`${id}.title`)}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {t(`${id}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
