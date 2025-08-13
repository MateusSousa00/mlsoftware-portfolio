'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import Link from 'next/link';

interface AutoZapprHeroProps {
  locale?: Locale;
}

export default function AutoZapprHero({}: AutoZapprHeroProps) {
  const t = useTranslations('autozappr.hero');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-background dark:from-green-900/20 dark:to-background overflow-hidden">
      {/* WhatsApp-themed background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Launch Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full mb-8 shadow-lg">
            <span className="animate-pulse mr-2">🚀</span>
            {t('badge')}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t('headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('subheadline')}
          </p>

          {/* Hero Features */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 text-foreground">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-md">
              <span>{t('heroFeature1')}</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-md">
              <span>{t('heroFeature2')}</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-md">
              <span>{t('heroFeature3')}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link
              href={`https://wa.me/${whatsapp}?text=Quero%20começar%20com%20AutoZappr`}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {t('primaryCTA')}
            </Link>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{t('secondaryCTA')}</div>
              <div className="text-sm text-gray-500">Oferta de lançamento</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground mb-16">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {t('trustIndicator1')}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {t('trustIndicator2')}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {t('trustIndicator3')}
            </div>
          </div>

          {/* Video Placeholder Section */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Video Thumbnail/Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                {/* Play Button */}

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Veja AutoZappr em Ação</h3>
                  <p className="text-lg opacity-90 mb-4">
                    Demonstração completa: do setup à primeira mensagem agendada em 3 minutos
                  </p>
                  <div className="flex items-center gap-4 text-sm opacity-75">
                    <span>⏱️ 3:45 min</span>
                    <span>⭐ Setup real de cliente</span>
                  </div>
                </div>

                {/* Mock Video Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-card bg-opacity-20">
                  <div className="h-full bg-green-500 w-0 animate-pulse" style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* Video Info Panel */}
              <div className="bg-card p-6">
                {/* Video Topics Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>0:30 - Conectando WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>1:15 - Primeira mensagem</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>2:30 - Backup automático</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-Action Below Video */}
            <div className="mt-8 text-center">
              <div className="bg-muted rounded-xl p-6 border border-border">
                <h4 className="text-xl font-bold text-foreground mb-2">Quer ver uma demo personalizada?</h4>
                <p className="text-muted-foreground mb-4">Agende uma apresentação exclusiva com dados do seu negócio</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    📞 Agendar Demo Grátis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
