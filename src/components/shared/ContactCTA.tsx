'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaClock, FaShieldAlt, FaFire } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { trackWhatsAppClick } from './FacebookPixel';

export default function ContactCTA() {
  const pathname = usePathname();
  const isAutoZappr = pathname?.includes('/autozappr');
  const t = useTranslations(isAutoZappr ? 'autozappr.contactCta' : 'contactCta');
  const whatsapp: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  
  return (
    <section className="mt-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-20 px-6 text-center rounded-2xl max-w-4xl mx-auto border border-primary/20">
      {/* Urgency Indicator */}
      <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <FaFire className="w-4 h-4" />
        {t('urgencyBadge')}
      </div>
      
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {t('heading')}
      </h2>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
        {t('paragraph')}
      </p>

      {/* Value Props */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <FaClock className="w-4 h-4 text-primary" />
          {t('guarantee1')}
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <FaShieldAlt className="w-4 h-4 text-primary" />
          {t('guarantee2')}
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <FaFire className="w-4 h-4 text-primary" />
          {t('guarantee3')}
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {whatsapp && (
          <Link
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
            onClick={() => trackWhatsAppClick('contact-cta')}
          >
            {t('whatsapp')}
          </Link>
        )}
        <a
          href="#contact"
          className="px-8 py-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold shadow-lg"
        >
          {t('email')}
        </a>
      </div>

      {/* Scarcity */}
      <p className="text-sm text-neutral-500 italic">
        {t('scarcity')}
      </p>
    </section>
  );
}
