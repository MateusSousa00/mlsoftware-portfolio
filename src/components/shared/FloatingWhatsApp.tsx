'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { trackWhatsAppClick } from './FacebookPixel';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('contactCta');
  const whatsapp: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!whatsapp) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Link
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsapp')}
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        onClick={() => trackWhatsAppClick('floating-button')}
      >
        <FaWhatsapp className="relative z-10 w-7 h-7" />
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {t('whatsapp')}
        </span>
      </Link>
    </div>
  );
}
