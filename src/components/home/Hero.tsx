'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { trackScheduleClick, trackWhatsAppClick } from '@/components/shared/FacebookPixel';
import { PILLARS } from './Pillars';
import { motion } from '@/lib/motion';

export default function Hero() {
  const t = useTranslations('hero');
  const tp = useTranslations('pillars.items');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const calendly = process.env.NEXT_PUBLIC_CALENDIFY_URL || '';

  return (
    <section id="about" className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Single subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        {/* Left: copy */}
        <div className="text-center md:text-left">
          <p className="enter mb-5 text-sm font-medium tracking-wide text-muted-foreground" style={motion(0, 20)}>
            {t('eyebrow')}
          </p>

          <h1 style={motion(0, 20)} className="enter font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {t('headline')}
          </h1>

          <p style={motion(120)} className="enter mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            {t('subheadline')}
          </p>

          <div
            style={motion(220, 12)}
            className="enter mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:justify-start"
          >
            <Link
              href={calendly || '#contact'}
              target={calendly ? '_blank' : undefined}
              rel={calendly ? 'noopener noreferrer' : undefined}
              onClick={() => trackScheduleClick()}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 active:scale-[0.97]"
            >
              {t('primaryCTA')}
            </Link>
            {whatsapp && (
              <Link
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 text-base font-semibold text-foreground transition hover:border-primary/60 hover:text-primary active:scale-[0.97]"
              >
                <FaWhatsapp className="h-5 w-5" />
                {t('secondaryCTA')}
              </Link>
            )}
          </div>
        </div>

        {/* Right: pillars panel */}
        <div style={motion(300, 8)} className="enter relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl border border-primary/30" />
          <div className="rounded-2xl border border-border bg-card dark:bg-background p-7 shadow-xl md:p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-wider text-primary">{t('panelLabel')}</p>
            <ol className="space-y-5">
              {PILLARS.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-baseline gap-4">
                    <span className="font-display text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-lg font-semibold leading-snug transition group-hover:text-primary">
                      {tp(`${id}.title`)}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
