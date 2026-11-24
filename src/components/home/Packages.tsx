'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';
import { trackScheduleClick } from '@/components/shared/FacebookPixel';
import { stagger } from '@/lib/motion';

const PACKAGES = ['squad', 'automation', 'ai'] as const;

export default function Packages() {
  const t = useTranslations('packages');
  const calendly = process.env.NEXT_PUBLIC_CALENDIFY_URL || '';

  return (
    <section id="packages" className="scroll-mt-24 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{t('heading')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subheading')}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((id, i) => {
            const includes = t.raw(`items.${id}.includes`) as string[];
            return (
              <article
                key={id}
                data-reveal=""
                style={stagger(i)}
                className="flex flex-col rounded-2xl border border-border bg-card/70 dark:bg-transparent p-7 md:p-8"
              >
                <span className="mb-4 inline-flex w-fit rounded-full border border-primary/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {t(`items.${id}.type`)}
                </span>
                <h3 className="font-display text-xl font-semibold md:text-2xl">{t(`items.${id}.name`)}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(`items.${id}.description`)}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={calendly || '#contact'}
                  target={calendly ? '_blank' : undefined}
                  rel={calendly ? 'noopener noreferrer' : undefined}
                  onClick={() => trackScheduleClick()}
                  className="mt-8 inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary active:scale-[0.97]"
                >
                  {t('cta')}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
