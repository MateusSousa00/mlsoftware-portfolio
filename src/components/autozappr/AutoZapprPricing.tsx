'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import { useState, useEffect } from 'react';

interface AutoZapprPricingProps {
  locale?: Locale;
}

export default function AutoZapprPricing({}: AutoZapprPricingProps) {
  const t = useTranslations('autozappr.pricing');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer for urgency (set to 48 hours from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
    t('feature5'),
    t('feature6'),
    t('feature7'),
    t('feature8')
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-6 animate-pulse">
            <span className="mr-2">🔥</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('subheading')}</p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white text-center mb-12">
          <h3 className="text-xl font-bold mb-4">⏰ Oferta de Lançamento Termina Em:</h3>
          <div className="flex justify-center gap-4 text-center">
            <div className="bg-card bg-opacity-20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold text-black dark:text-white">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-black dark:text-white">DIAS</div>
            </div>
            <div className="bg-card bg-opacity-20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold text-black dark:text-white">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-black dark:text-white">HORAS</div>
            </div>
            <div className="bg-card bg-opacity-20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold text-black dark:text-white">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-black dark:text-white">MIN</div>
            </div>
            <div className="bg-card bg-opacity-20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold text-black dark:text-white">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-black dark:text-white">SEG</div>
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="bg-muted rounded-3xl shadow-2xl border-4 border-green-400 relative">
            {/* Discount Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                {t('discount')}
              </div>
            </div>

            <div className="p-8 pt-12">
              {/* Plan Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('planName')}</h3>
                <div className="text-gray-500 dark:text-gray-400 line-through text-lg mb-2">
                  {t('originalPrice')}
                  {t('period')}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-green-600">{t('discountedPrice')}</span>
                  <span className="text-muted-foreground">{t('period')}</span>
                </div>
                <div className="text-sm text-green-600 font-semibold mt-2">Apenas no primeiro mês</div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 mr-3 font-bold">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Main CTA */}
              <div className="text-center mb-6">
                <a
                  href={`https://wa.me/${whatsapp}?text=Quero%20começar%20com%20AutoZappr%20por%20R$48,50`}
                  className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  {t('cta')}
                </a>
              </div>

              {/* Guarantee */}
              <div className="text-center text-sm text-muted-foreground mb-4">{t('guarantee')}</div>

              {/* Urgency */}
              <div className="text-center text-sm text-orange-600 font-semibold">{t('urgency')}</div>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
            <h4 className="text-xl font-bold text-foreground mb-3">Setup Instantâneo</h4>
            <p className="text-muted-foreground text-sm">
              Em 5 minutos você está agendando mensagens para envio automatizado. Sem complicação, sem técnico.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
            <h4 className="text-xl font-bold text-foreground mb-3">Proteção Total</h4>
            <p className="text-muted-foreground text-sm">
              Backup automático dos seus contatos. Nunca mais perca sua base de clientes.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
            <h4 className="text-xl font-bold text-foreground mb-3">100% Nacional</h4>
            <p className="text-muted-foreground text-sm">
              Suporte em português, pagamento via Pix, feito por brasileiros para brasileiros.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-card rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">💳 Formas de Pagamento</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-foreground mb-2">PIX</h4>
              <p className="text-sm text-muted-foreground mb-2">Desconto de 5%</p>
              <div className="text-green-600 dark:text-green-400 font-semibold">R$46,07 no 1º mês</div>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-xl">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-bold text-foreground mb-2">Cartão de Crédito</h4>
              <p className="text-sm text-muted-foreground mb-2">Parcelamento disponível</p>
              <div className="text-gray-700 dark:text-gray-300">R$48,50 no 1º mês</div>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-xl">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-bold text-foreground mb-2">Boleto Bancário</h4>
              <p className="text-sm text-muted-foreground mb-2">Vencimento flexível</p>
              <div className="text-gray-700 dark:text-gray-300">R$48,50 no 1º mês</div>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="bg-green-500 dark:bg-primary-foreground rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">🛡️ Garantia Total de Satisfação</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
              <h4 className="font-bold mb-2 text-white">7 Dias Grátis</h4>
              <p className="text-sm opacity-90 text-white">
                Teste completamente grátis por uma semana inteira. Sem cobrança, sem compromisso.
              </p>
            </div>
            <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
              <h4 className="font-bold mb-2 text-white">Dinheiro de Volta</h4>
              <p className="text-sm opacity-90 text-white">
                Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
          <p className="text-lg opacity-90 mb-6">Risco ZERO para você. Teste AutoZappr sem compromisso.</p>
          <a
            href={`https://wa.me/${whatsapp}?text=Quero%20testar%20AutoZappr%20grátis%20por%207%20dias`}
            className="inline-block bg-white text-green-500 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Começar Teste Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
