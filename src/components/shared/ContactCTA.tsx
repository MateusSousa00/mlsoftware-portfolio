'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { trackScheduleClick, trackWhatsAppClick } from './FacebookPixel';

const CALENDLY_FALLBACK = 'https://calendly.com/mateus-lsousa00/30min';

export default function ContactCTA() {
  const t = useTranslations('contactCta');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const calendly = process.env.NEXT_PUBLIC_CALENDIFY_URL || CALENDLY_FALLBACK;

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border px-8 py-14 text-center md:px-12 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('paragraph')}</p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackScheduleClick()}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            >
              {t('book')}
            </Link>
            {whatsapp && (
              <Link
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact-cta')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 text-base font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
              >
                <FaWhatsapp className="h-5 w-5" />
                {t('whatsapp')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
