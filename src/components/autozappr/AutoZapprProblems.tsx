'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import { useState } from 'react';

interface AutoZapprProblemsProps {
  locale?: Locale;
}

export default function AutoZapprProblems({}: AutoZapprProblemsProps) {
  const t = useTranslations('autozappr.problems');
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  const problems = [
    {
      icon: '🌙',
      title: t('problem1.title'),
      description: t('problem1.description'),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: '📅',
      title: t('problem2.title'),
      description: t('problem2.description'),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: '📊',
      title: t('problem3.title'),
      description: t('problem3.description'),
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: '⚡',
      title: t('problem4.title'),
      description: t('problem4.description'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full mb-6">
            <span className="mr-2">⚠️</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('subheading')}</p>
        </div>

        {/* Interactive Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                selectedProblem === index
                  ? 'border-red-300 bg-card shadow-xl scale-105'
                  : 'border-border bg-card hover:border-muted-foreground hover:shadow-lg'
              }`}
              onClick={() => setSelectedProblem(selectedProblem === index ? null : index)}
            >
              {/* Problem Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${problem.color} flex items-center justify-center text-2xl text-white mb-6`}
              >
                {problem.icon}
              </div>

              {/* Problem Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{problem.title}</h3>

              {/* Problem Description - expandable */}
              <p
                className={`text-muted-foreground transition-all duration-300 ${
                  selectedProblem === index ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {problem.description}
              </p>

              {/* Selection Indicator */}
              {selectedProblem === index && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Money Loss Visualization */}
        <div className="dark:bg-primary-foreground bg-green-500 rounded-2xl p-8 text-white text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">💰 Quanto Isso Te Custa Por Mês?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2 text-white">5-10</div>
                <div className="text-sm opacity-90 text-white">clientes perdidos</div>
              </div>
              <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2 text-white">R$200-500</div>
                <div className="text-sm opacity-90 text-white">ticket médio</div>
              </div>
              <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2 text-white">R$2.000+</div>
                <div className="text-sm opacity-90 text-white">perdas mensais</div>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6">{t('conclusion')}</p>
            <a
              href={`https://wa.me/${whatsapp}?text=Quero%20parar%20de%20perder%20vendas%20no%20WhatsApp`}
              className="inline-block bg-card text-primary font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('cta')}
            </a>
          </div>
        </div>

        {/* Brazilian Business Context */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🏪</div>
              <h4 className="font-bold text-foreground mb-2">Restaurantes</h4>
              <p className="text-muted-foreground text-sm">Pedidos noturnos e de fim de semana perdidos</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">💼</div>
              <h4 className="font-bold text-foreground mb-2">Consultores</h4>
              <p className="text-muted-foreground text-sm">Propostas que ficam sem resposta rápida</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">💄</div>
              <h4 className="font-bold text-foreground mb-2">Serviços</h4>
              <p className="text-muted-foreground text-sm">Agendamentos que vão para a concorrência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
