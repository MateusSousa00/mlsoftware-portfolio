'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';

interface AutoZapprComparisonProps {
  locale?: Locale;
}

export default function AutoZapprComparison({}: AutoZapprComparisonProps) {
  const t = useTranslations('autozappr.comparison');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  const features = [
    {
      feature: t('feature1'),
      autoZappr: t('autoZapprValues.price'),
      concorrenteA: t('concorrenteAValues.price'),
      concorrenteB: t('concorrenteBValues.price'),
      others: t('othersValues.price'),
      autoZapprColor: 'text-green-600',
      icon: '💰'
    },
    {
      feature: t('feature2'),
      autoZappr: t('autoZapprValues.setup'),
      concorrenteA: t('concorrenteAValues.setup'),
      concorrenteB: t('concorrenteBValues.setup'),
      others: t('othersValues.setup'),
      autoZapprColor: 'text-green-600',
      icon: '⚡'
    },
    {
      feature: t('feature3'),
      autoZappr: t('autoZapprValues.protection'),
      concorrenteA: t('concorrenteAValues.protection'),
      concorrenteB: t('concorrenteBValues.protection'),
      others: t('othersValues.protection'),
      autoZapprColor: 'text-green-600',
      icon: '🛡️'
    },
    {
      feature: t('feature4'),
      autoZappr: t('autoZapprValues.scheduling'),
      concorrenteA: t('concorrenteAValues.scheduling'),
      concorrenteB: t('concorrenteBValues.scheduling'),
      others: t('othersValues.scheduling'),
      autoZapprColor: 'text-green-600',
      icon: '📅'
    },
    {
      feature: t('feature5'),
      autoZappr: t('autoZapprValues.market'),
      concorrenteA: t('concorrenteAValues.market'),
      concorrenteB: t('concorrenteBValues.market'),
      others: t('othersValues.market'),
      autoZapprColor: 'text-green-600',
      icon: '🎯'
    },
    {
      feature: t('feature6'),
      autoZappr: t('autoZapprValues.support'),
      concorrenteA: t('concorrenteAValues.support'),
      concorrenteB: t('concorrenteBValues.support'),
      others: t('othersValues.support'),
      autoZapprColor: 'text-green-600',
      icon: '💬'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
            <span className="mr-2">⚖️</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{t('subheading')}</p>
        </div>

        {/* Comparison Table - Mobile Responsive */}
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden mb-12">
          {/* Table Header - Desktop */}
          <div className="hidden md:grid md:grid-cols-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 font-semibold text-gray-700 dark:text-gray-300 border-b dark:border-gray-600">
            <div className="text-center">Recurso</div>
            <div className="text-center bg-green-50 dark:bg-green-900/30 rounded-lg p-2 mx-2">
              <div className="text-green-600 font-bold">{t('autoZappr')}</div>
              <div className="text-xs text-green-500 mt-1">⭐ Recomendado</div>
            </div>
            <div className="text-center">{t('concorrenteA')}</div>
            <div className="text-center">{t('concorrenteB')}</div>
            <div className="text-center">{t('others')}</div>
          </div>

          {/* Table Rows */}
          {features.map((row, index) => (
            <div key={index}>
              {/* Desktop Row */}
              <div className="hidden md:grid md:grid-cols-5 p-6 hover:bg-muted dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600">
                <div className="flex items-center font-semibold text-foreground">
                  <span className="mr-3 text-lg">{row.icon}</span>
                  {row.feature}
                </div>
                <div
                  className={`text-center font-semibold ${row.autoZapprColor} bg-green-50 dark:bg-green-900/30 rounded-lg p-2 mx-2 flex items-center justify-center`}
                >
                  {row.autoZappr}
                </div>
                <div className="text-center text-muted-foreground flex items-center justify-center">
                  {row.concorrenteA}
                </div>
                <div className="text-center text-muted-foreground flex items-center justify-center">
                  {row.concorrenteB}
                </div>
                <div className="text-center text-muted-foreground flex items-center justify-center">{row.others}</div>
              </div>

              {/* Mobile Card */}
              <div className="md:hidden p-6 border-b border-gray-100 dark:border-gray-600">
                <div className="flex items-center font-semibold text-foreground mb-4">
                  <span className="mr-3 text-lg">{row.icon}</span>
                  {row.feature}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
                    <span className="font-semibold text-green-600">{t('autoZappr')}</span>
                    <span className="font-semibold text-green-600">{row.autoZappr}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('concorrenteA')}</span>
                    <span className="text-muted-foreground">{row.concorrenteA}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('concorrenteB')}</span>
                    <span className="text-muted-foreground">{row.concorrenteB}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('others')}</span>
                    <span className="text-muted-foreground">{row.others}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Advantages Highlight */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">Preço Justo</h3>
            <p className="text-sm opacity-90">R$97/mês fixo vs R$147-397/mês dos concorrentes. Sem pegadinhas.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Setup Rápido</h3>
            <p className="text-sm opacity-90">5 minutos para começar vs 30+ minutos dos outros. Tempo é dinheiro.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Proteção Única</h3>
            <p className="text-sm opacity-90">
              Backup automático que nenhum concorrente oferece. Seus contatos seguros.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">A Escolha é Óbvia</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Enquanto outros complicam, nós simplificamos. Enquanto outros cobram caro, nós oferecemos preço justo.
            Enquanto outros te abandonam, nós protegemos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`https://wa.me/${whatsapp}?text=Quero%20escolher%20AutoZappr%20vs%20concorrentes`}
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('cta')}
            </a>
            <div className="text-center">
              <div className="text-sm opacity-90">⚡ Setup em 5 minutos</div>
              <div className="text-sm opacity-90">🛡️ Backup garantido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
