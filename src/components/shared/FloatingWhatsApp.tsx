'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { trackWhatsAppClick } from './FacebookPixel';
import { useStickyCTA } from '../../contexts/StickyCTAContext';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTranslations('contactCta');
  const whatsapp: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const { isMinimized, isClosed } = useStickyCTA();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after a delay
      setTimeout(() => setShowTooltip(true), 2000);
      // Hide tooltip after showing it
      setTimeout(() => setShowTooltip(false), 8000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!whatsapp) return null;

  // Calculate dynamic positioning based on StickyCTA state
  const getBottomPosition = () => {
    if (isClosed) {
      return 'bottom-8'; // Normal position when StickyCTA is closed
    }
    if (isMinimized) {
      return 'bottom-16'; // Align with the minimize arrow when minimized
    }
    return 'bottom-28'; // Higher position when StickyCTA is expanded
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed ${getBottomPosition()} right-8 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-16 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-lg shadow-xl border max-w-xs transform transition-all duration-300 ${
            showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="text-sm font-medium mb-1">💬 {t('help')}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {t('whatsapp')}
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
          >
            <FaTimes className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
        </div>

        {/* WhatsApp Button */}
        <Link
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          onClick={() => trackWhatsAppClick('floating-button')}
        >
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          
          {/* WhatsApp Icon */}
          <FaWhatsapp className="relative z-10 w-7 h-7" />
          
          {/* Hover tooltip */}
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {t('whatsappHover')}
          </div>
        </Link>
      </div>

      {/* Mobile bottom padding to avoid floating button overlap */}
      <div className="block md:hidden h-20"></div>
    </>
  );
}