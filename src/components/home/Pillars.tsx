'use client';
import { useTranslations } from 'next-intl';

export const PILLARS = ['payments', 'documents', 'whatsapp', 'legacy'] as const;

export default function Pillars() {
  const t = useTranslations('pillars');

  return (
    <section id="solutions" className="scroll-mt-24 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div data-reveal="">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{t('heading')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subheading')}</p>
        </div>

        <div className="mt-12 divide-y divide-border">
          {PILLARS.map((id, i) => (
            <article
              key={id}
              id={id}
              data-reveal=""
              className="grid scroll-mt-24 gap-4 py-10 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <span className="font-display text-sm font-semibold text-primary md:pt-1.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold md:text-2xl">{t(`items.${id}.title`)}</h3>

                <dl className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t('whyLabel')}
                    </dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{t(`items.${id}.why`)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t('whatLabel')}
                    </dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{t(`items.${id}.what`)}</dd>
                  </div>
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 md:col-span-2">
                    <dt className="text-xs font-medium uppercase tracking-wider text-primary">{t('resultLabel')}</dt>
                    <dd className="mt-2 font-medium leading-relaxed text-foreground">{t(`items.${id}.result`)}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
