'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ProfileImage from '@/components/shared/ProfileImage';
import { useEffect, useState } from 'react';

export default function About() {
  const t = useTranslations('hero');
  const whatsapp: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Headline */}
        <div className="text-center mb-16">
        {/* Professional Profile Image */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <ProfileImage 
            src="/ML_SOFTWARE.png" 
            alt="M&L Software - Professional Software Development"
            size="xl"
            className="mx-auto"
            priority={true}
          />
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {t('headline')}
        </h1>
        <p className={`text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {t('subheadline')}
        </p>
        
        {/* Value Propositions */}
        <div className={`grid md:grid-cols-3 gap-6 mb-10 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center md:text-left p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">3x</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('metric1')}</p>
          </div>
          <div className="text-center md:text-left p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5k+</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('metric2')}</p>
          </div>
          <div className="text-center md:text-left p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">4-8</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('metric3')}</p>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <a
            href="#contact"
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-center shadow-xl hover:shadow-2xl group overflow-hidden"
          >
            <span className="relative z-10">{t('primaryCTA')}</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          {whatsapp && (
            <Link
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('secondaryCTA')}
            </Link>
          )}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {t('trustIndicator1')}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {t('trustIndicator2')}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {t('trustIndicator3')}
          </span>
        </div>
        </div>

        {/* About Content - More Focused */}
        <div className="text-center space-y-4 max-w-4xl mx-auto mt-16">
          <p className="text-lg leading-relaxed">{t('parOne')}</p>
          <p className="text-lg leading-relaxed">{t('parTwo')}</p>
        </div>
      </div>
    </section>
  );
}
