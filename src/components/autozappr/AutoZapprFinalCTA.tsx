'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import { useState, useEffect } from 'react';

interface AutoZapprFinalCTAProps {
  locale?: Locale;
}

export default function AutoZapprFinalCTA({}: AutoZapprFinalCTAProps) {
  const t = useTranslations('autozappr.finalCta');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-blue-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-muted-foreground bg-opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-muted-foreground bg-opacity-5 rounded-full filter blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-muted-foreground bg-opacity-5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-red-500 bg-opacity-90 text-white text-sm font-semibold rounded-full mb-8 animate-pulse">
          <span className="mr-2">⚠️</span>
          {t('badge')}
        </div>

        {/* Main Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {t('heading')}
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-90 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {t('subheading')}
        </p>

        {/* Key Benefits */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="bg-card bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl mb-4">🚀</div>
            <div className="font-bold text-lg mb-2 text-black dark:text-white">{t('benefit1')}</div>
            <p className="text-sm opacity-90 text-black dark:text-white">
              Mensagens agendadas e grupos automáticos 24h por dia
            </p>
          </div>

          <div className="bg-card bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl mb-4">💰</div>
            <div className="font-bold text-lg mb-2 text-black dark:text-white">{t('benefit2')}</div>
            <p className="text-sm opacity-90 text-black dark:text-white">
              Mais vendas com menos esforço, enquanto você dorme
            </p>
          </div>

          <div className="bg-card bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl mb-4">🛡️</div>
            <div className="font-bold text-lg mb-2 text-black dark:text-white">{t('benefit3')}</div>
            <p className="text-sm opacity-90 text-black dark:text-white">
              Backup automático que nenhum concorrente oferece
            </p>
          </div>
        </div>

        {/* Urgency Timer */}
        <div
          className={`bg-red-500 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-3 animate-bounce">⏰</span>
            <span className="font-bold text-lg">{t('urgency')}</span>
          </div>
          <div className="text-sm opacity-90 text-black dark:text-white">
            Apenas 100 vagas na oferta de lançamento • 73 já foram ocupadas
          </div>
          <div className="mt-3">
            <div className="bg-card bg-opacity-30 rounded-full h-3 overflow-hidden">
              <div className="bg-yellow-400 h-full rounded-full w-3/4 animate-pulse"></div>
            </div>
            <div className="text-xs mt-1 text-black dark:text-white">27 vagas restantes</div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div
          className={`mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <a
            href={`https://wa.me/${whatsapp}?text=Quero%20começar%20com%20AutoZappr%20agora%20-%20R$48,50%20no%20primeiro%20mês`}
            className="inline-block bg-card text-green-600 font-bold py-6 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 text-xl md:text-2xl mb-4 animate-pulse"
          >
            {t('cta')}
          </a>
        </div>

        {/* Final Guarantees */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-8 text-sm mb-12 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="flex items-center bg-card bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="mr-2">🛡️</span>
            <span className="text-black dark:text-white">{t('guarantee')}</span>
          </div>
          <div className="flex items-center bg-card bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="mr-2">💡</span>
            <span className="text-black dark:text-white">{t('risk')}</span>
          </div>
        </div>

        {/* Social Proof Footer */}
        <div
          className={`border-t border-white border-opacity-30 pt-12 transition-all duration-1000 delay-1300 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Empresários usando</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0%</div>
              <div className="text-sm opacity-80">Contas banidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">Taxa de satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-80">Suporte brasileiro</div>
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Mais de 2.000 empresários já escolheram automatizar ao invés de trabalhar 24h por dia.
              <br />
              <strong>Não fique para trás enquanto seus concorrentes vendem mais trabalhando menos.</strong>
            </p>

            {/* WhatsApp Direct Contact */}
            <div className="bg-card bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-black dark:text-white">💬 Fale Direto com Nossa Equipe</h4>
              <p className="text-sm opacity-90 mb-4 text-black dark:text-white">
                Tire suas dúvidas ou comece agora mesmo pelo WhatsApp
              </p>
              <a
                href={`https://wa.me/${whatsapp}`}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <span className="mr-2">📱</span>
                Chamar no WhatsApp Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Animation */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <div className="absolute -inset-2 bg-green-500 rounded-full animate-ping opacity-30"></div>
          <a
            href={`https://wa.me/${whatsapp}?text=Vi%20o%20AutoZappr%20e%20quero%20saber%20mais`}
            className="relative bg-green-500 hover:bg-green-600 text-black dark:text-white p-4 rounded-full shadow-lg transition-colors duration-300 block"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
