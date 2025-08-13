'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';

interface AutoZapprSolutionProps {
  locale?: Locale;
}

export default function AutoZapprSolution({}: AutoZapprSolutionProps) {
  const t = useTranslations('autozappr.solution');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  const features = [
    {
      icon: '⚡',
      title: t('feature1.title'),
      description: t('feature1.description'),
      color: 'from-blue-500 to-blue-600',
      benefit: 'Economia de tempo'
    },
    {
      icon: '👥',
      title: t('feature2.title'),
      description: t('feature2.description'),
      color: 'from-purple-500 to-purple-600',
      benefit: 'Mais alcance'
    },
    {
      icon: '🛡️',
      title: t('feature3.title'),
      description: t('feature3.description'),
      color: 'from-green-500 to-green-600',
      benefit: 'Proteção única'
    },
    {
      icon: '🎯',
      title: t('feature4.title'),
      description: t('feature4.description'),
      color: 'from-orange-500 to-orange-600',
      benefit: 'Campanhas ricas'
    },
    {
      icon: '🇧🇷',
      title: t('feature5.title'),
      description: t('feature5.description'),
      color: 'from-green-600 to-yellow-500',
      benefit: 'Suporte local'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-background to-blue-50 dark:from-green-900/20 dark:via-background dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full mb-6">
            <span className="mr-2">✅</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{t('subheading')}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
            >
              {/* Feature Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>

              {/* Feature Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>

              {/* Feature Benefit Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full">
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Unique Value Proposition Highlight */}
        <div className="bg-green-500 dark:bg-primary-foreground rounded-2xl p-8 md:p-12 text-white text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">🛡️ Garantia Exclusiva de Proteção</h3>
            <p className="text-xl mb-8 opacity-90">
              Somos os únicos que oferecemos backup automático dos seus contatos. Se o WhatsApp banir sua conta, você
              não perde nada!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
                <h4 className="font-bold mb-2 text-white">Backup Automático</h4>
                <p className="text-sm opacity-90 text-white">Seus contatos salvos em nuvem segura todo dia</p>
              </div>
              <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
                <h4 className="font-bold mb-2 text-white">Recuperação Rápida</h4>
                <p className="text-sm opacity-90 text-white">Em caso de problema, restauramos tudo em minutos</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsapp}?text=Quero%20proteger%20meus%20contatos%20com%20AutoZappr`}
              className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('cta')}
            </a>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before - Without AutoZappr */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border-l-4 border-red-400">
            <h4 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center">
              <span className="mr-3">❌</span>
              Sem AutoZappr
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Mensagens importantes chegam atrasadas ou nem chegam para todos
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Trabalha até tarde respondendo mensagens
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Perde tempo enviando manualmente para cada contato e grupo
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Risco de perder todos os contatos se a conta for banida
              </li>
            </ul>
          </div>

          {/* After - With AutoZappr */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border-l-4 border-green-400">
            <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center">
              <span className="mr-3">✅</span>
              Com AutoZappr
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Mensagens e campanhas agendadas entregues na hora certa para todos os contatos e grupos
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Libera horas do seu dia para focar no que realmente importa
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Comunicação consistente que aumenta vendas e engajamento
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Contatos sempre seguros com backup automático na nuvem
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
