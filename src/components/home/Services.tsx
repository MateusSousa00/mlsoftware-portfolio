'use client';
import { useTranslations } from 'next-intl';

const SERVICES = ['web', 'ai', 'backend'] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t('heading')}
        </h2>

        <div className="mt-12 divide-y divide-border">
          {SERVICES.map((id, i) => (
            <div
              key={id}
              className="grid gap-2 py-8 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <span className="font-display text-sm font-semibold text-primary md:pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {t(`${id}.title`)}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                  {t(`${id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
