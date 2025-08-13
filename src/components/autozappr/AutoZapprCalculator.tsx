'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import { useState } from 'react';

interface AutoZapprCalculatorProps {
  locale?: Locale;
}

export default function AutoZapprCalculator({}: AutoZapprCalculatorProps) {
  const t = useTranslations('autozappr.calculator');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  const [clientsPerDay, setClientsPerDay] = useState(5);
  const [averageTicket, setAverageTicket] = useState(300);
  const [delayRate, setDelayRate] = useState(20);
  const monthlyLoss = clientsPerDay * 30 * averageTicket * (delayRate / 100);
  const autoZapprCost = 97;
  const paybackDays = Math.ceil(autoZapprCost / (monthlyLoss / 30));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 text-sm font-semibold rounded-full mb-6">
            <span className="mr-2">📊</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('subheading')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🧮 Calculadora de Prejuízo</h3>

            <div className="space-y-8">
              {/* Clients Per Day */}
              <div>
                <label className="block text-sm font-semibold dark:text-white text-gray-700 mb-3">
                  {t('clientsPerDay')}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={clientsPerDay}
                    onChange={(e) => setClientsPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs dark:text-white text-gray-500 mt-2">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg text-lg">
                    {clientsPerDay} clientes/dia
                  </span>
                </div>
              </div>

              {/* Average Ticket */}
              <div>
                <label className="block text-sm font-semibold dark:text-white text-gray-700 mb-3">
                  {t('averageTicket')}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={averageTicket}
                    onChange={(e) => setAverageTicket(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs dark:text-white text-gray-500 mt-2">
                    <span>R$50</span>
                    <span>R$2.000</span>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 font-bold rounded-lg text-lg">
                    {formatCurrency(averageTicket)}
                  </span>
                </div>
              </div>

              {/* Delay Rate */}
              <div>
                <label className="block text-sm font-semibold dark:text-white text-gray-700 mb-3">
                  {t('delayRate')}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={delayRate}
                    onChange={(e) => setDelayRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs dark:text-white text-gray-500 mt-2">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 font-bold rounded-lg text-lg">
                    {delayRate}% perdidos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Monthly Loss */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-4">{t('result')}</h3>
              <div className="text-4xl md:text-5xl font-bold mb-2">{formatCurrency(monthlyLoss)}</div>
              <p className="text-lg opacity-90">{t('perMonth')}</p>
            </div>

            {/* Payback Period */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">{t('payback')}</h3>
              <div className="text-4xl font-bold mb-2">
                {paybackDays} {t('days')}
              </div>
              <p className="text-sm opacity-90">Para AutoZappr se pagar completamente</p>
            </div>

            {/* Yearly Impact */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">📈 Impacto Anual</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">{formatCurrency(monthlyLoss * 12)}</div>
                  <div className="text-sm text-muted-foreground">Perda sem AutoZappr</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{formatCurrency(autoZapprCost * 12)}</div>
                  <div className="text-sm text-muted-foreground">Custo do AutoZappr</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t text-center">
                <div className="text-lg font-bold text-green-600">
                  Economia: {formatCurrency(monthlyLoss * 12 - autoZapprCost * 12)}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href={`https://wa.me/${whatsapp}?text=Calculei%20que%20estou%20perdendo%20${formatCurrency(monthlyLoss)}%20por%20mês%20-%20quero%20o%20AutoZappr`}
                className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                {t('cta')}
              </a>
              <div className="text-sm text-gray-500 mt-3">💡 Resultado baseado em dados reais de nossos clientes</div>
            </div>
          </div>
        </div>

        {/* Industry Benchmarks */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">📊 Benchmarks por Setor</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900 rounded-xl">
              <div className="text-3xl mb-3">🏪</div>
              <h4 className="font-bold text-foreground mb-2">Restaurantes</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>8-15 clientes/dia</div>
                <div>R$80-150 ticket médio</div>
                <div>25-35% perda por delay</div>
              </div>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900 rounded-xl">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-bold text-foreground mb-2">Consultores</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>3-8 leads/dia</div>
                <div>R$500-2000 ticket médio</div>
                <div>15-25% perda por delay</div>
              </div>
            </div>
            <div className="text-center p-6 bg-pink-50 dark:bg-pink-900 rounded-xl">
              <div className="text-3xl mb-3">💄</div>
              <h4 className="font-bold text-foreground mb-2">Beleza</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>5-12 clientes/dia</div>
                <div>R$100-300 ticket médio</div>
                <div>20-30% perda por delay</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
