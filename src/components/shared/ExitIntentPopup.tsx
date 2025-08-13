'use client';
import { useState, useEffect } from 'react';
import { FaTimes, FaClock, FaGift } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const pathname = usePathname();
  const isAutoZappr = pathname?.includes('/autozappr');
  const t = useTranslations(isAutoZappr ? 'autozappr.popup' : 'popup');

  useEffect(() => {
    let exitIntentShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown && !hasShown) {
        exitIntentShown = true;
        setHasShown(true);
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all scale-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute cursor-pointer top-4 right-4 text-white/80 hover:text-white"
          >
            <FaTimes className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <FaGift className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">{t('urgencyBadge')}</h3>
            <p className="text-red-100">{t('heading')}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t('paragraph1')}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('paragraph2')}
            </p>
            
            {/* Urgency indicator */}
            <div className="flex items-center justify-center gap-2 text-red-600 mb-4">
              <FaClock className="w-4 h-4" />
              <span className="text-sm font-medium">{t('scarcity')}</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{t('guarantee1')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{t('guarantee2')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{t('guarantee3')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="#contact"
              onClick={handleClose}
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-center transform hover:scale-105"
            >
              {t('button')}
            </a>
            <button
              onClick={handleClose}
              className="block cursor-pointer w-full text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-center"
            >
              {t('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}