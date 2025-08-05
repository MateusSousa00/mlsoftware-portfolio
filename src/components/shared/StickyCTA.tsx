'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FaTimes, FaClock } from 'react-icons/fa';
import { useStickyCTA } from '../../contexts/StickyCTAContext';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMinimized, isClosed, setIsMinimized, setIsClosed } = useStickyCTA();
  const t = useTranslations('contactCta');

  useEffect(() => {
    // Check if it was previously closed
    const wasClosed = sessionStorage.getItem('stickyCTAClosed') === 'true';
    if (wasClosed) {
      setIsClosed(true);
      return; // Don't add scroll listener if already closed
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem('stickyCTAClosed', 'true');
  };

  if (isClosed || !isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-500 ${isMinimized ? 'translate-y-12' : 'translate-y-0'}`}>
      {/* Main CTA Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex">
            {/* Left side - Urgency message */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <FaClock className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">
                  {t('scarcity')}
                </span>
              </div>
            </div>

            {/* Center - Main CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm">
                <span className="font-semibold">{t('heading')}</span>
                <span className="ml-2 opacity-90">{t('paragraph')}</span>
              </div>
            </div>

            {/* Right side - Action buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-1 py-2 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                <h1 className='font-semibold text-sm w-28 mt-1 md:mt-auto text-center'>{t('email')}</h1>
              </a>
              
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile version - simplified */}
          <div className="md:hidden mt-2 text-center">
            <div className="text-sm mb-2">
              <span className="font-semibold">{t('heading')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimize button */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute -top-11 md:-top-6 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-t-lg text-xs hover:from-blue-700 hover:to-purple-700 transition-colors"
      >
        {isMinimized ? '↑' : '↓'}
      </button>
    </div>
  );
}