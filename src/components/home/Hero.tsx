'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { trackScheduleClick, trackWhatsAppClick } from '@/components/shared/FacebookPixel';

const CALENDLY_FALLBACK = 'https://calendly.com/mateus-lsousa00/30min';

export default function Hero() {
  const t = useTranslations('hero');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const calendly = process.env.NEXT_PUBLIC_CALENDIFY_URL || CALENDLY_FALLBACK;

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
          <p className="mb-5 text-sm font-medium tracking-wide text-muted-foreground">
            <span className="text-foreground">{t('name')}</span>
            <span className="mx-2 text-primary">—</span>
            {t('role')}
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {t('headline')}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            {t('subheadline')}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:justify-start">
            <Link
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackScheduleClick()}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            >
              {t('primaryCTA')}
            </Link>
            {whatsapp && (
              <Link
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 text-base font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
              >
                <FaWhatsapp className="h-5 w-5" />
                {t('secondaryCTA')}
              </Link>
            )}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl border border-primary/30" />
          <Image
            src="/mateus.png"
            alt={t('name')}
            width={640}
            height={800}
            priority
            sizes="(max-width: 768px) 18rem, 24rem"
            className="w-full rounded-2xl border border-border object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
