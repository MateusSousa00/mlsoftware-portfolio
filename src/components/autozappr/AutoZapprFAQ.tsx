'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import { useState } from 'react';

interface AutoZapprFAQProps {
  locale?: Locale;
}

export default function AutoZapprFAQ({}: AutoZapprFAQProps) {
  const t = useTranslations('autozappr.faq');
  const [openQuestion, setOpenQuestion] = useState<number | null>(0); // First question open by default

  const faqs = [
    {
      question: t('question1'),
      answer: t('answer1'),
      icon: '🛡️',
      color: 'from-red-500 to-red-600'
    },
    {
      question: t('question2'),
      answer: t('answer2'),
      icon: '⚡',
      color: 'from-blue-500 to-blue-600'
    },
    {
      question: t('question3'),
      answer: t('answer3'),
      icon: '📱',
      color: 'from-green-500 to-green-600'
    },
    {
      question: t('question4'),
      answer: t('answer4'),
      icon: '🇧🇷',
      color: 'from-yellow-500 to-green-500'
    },
    {
      question: t('question5'),
      answer: t('answer5'),
      icon: '🔄',
      color: 'from-purple-500 to-purple-600'
    },
    {
      question: t('question6'),
      answer: t('answer6'),
      icon: '💳',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-6">
            <span className="mr-2">❓</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('subheading')}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden"
            >
              {/* Question */}
              <button
                className="w-full text-left p-6 hover:bg-muted dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-muted dark:focus:bg-gray-700"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.color} flex items-center justify-center text-xl text-white mr-4 flex-shrink-0`}
                    >
                      {faq.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">{faq.question}</h3>
                  </div>
                  <div
                    className={`transform transition-transform duration-200 ${
                      openQuestion === index ? 'rotate-180' : ''
                    } flex-shrink-0`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-400 dark:text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="ml-16 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Signals */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">🔒 Sua Segurança é Nossa Prioridade</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Diferente de outras ferramentas que te deixam na mão, AutoZappr foi desenvolvido pensando na proteção dos
              seus dados e na longevidade do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6 text-center">
              <h4 className="font-bold mb-2 text-white">Proteção Avançada</h4>
              <p className="text-sm opacity-90 text-white">
                Seguimos rigorosamente as diretrizes do WhatsApp para maximizar a segurança da sua conta.
              </p>
            </div>

            <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6 text-center">
              <h4 className="font-bold mb-2 text-white">Backup Automático</h4>
              <p className="text-sm opacity-90 text-white">
                Seus contatos são salvos em nuvem segura. Garantia única no mercado.
              </p>
            </div>

            <div className="bg-muted-foreground bg-opacity-20 rounded-xl p-6 text-center">
              <h4 className="font-bold mb-2 text-white">Suporte 24/7</h4>
              <p className="text-sm opacity-90 text-white">
                Time brasileiro disponível via WhatsApp. Resposta média em 30 minutos.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Best Practices */}
        <div className="bg-secondary rounded-2xl p-8 dark:text-white text-black mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">📚 Como Usar WhatsApp de Forma Segura</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Seguimos as melhores práticas recomendadas pelos especialistas para manter sua conta protegida e seus
              resultados consistentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card bg-opacity-20 rounded-xl p-6">
              <h4 className="font-bold mb-2 text-black dark:text-white">Mensagens Personalizadas</h4>
              <p className="text-sm opacity-90 text-black dark:text-white">
                AutoZappr personaliza automaticamente cada mensagem com informações específicas do cliente para parecer
                natural.
              </p>
            </div>

            <div className="bg-card bg-opacity-20 rounded-xl p-6">
              <h4 className="font-bold mb-2 text-black dark:text-white">Crescimento Gradual</h4>
              <p className="text-sm opacity-90 text-black dark:text-white">
                Começamos devagar e aumentamos o volume progressivamente, seguindo padrões naturais de uso.
              </p>
            </div>

            <div className="bg-card bg-opacity-20 rounded-xl p-6">
              <h4 className="font-bold mb-2 text-black dark:text-white">Apenas Clientes Interessados</h4>
              <p className="text-sm opacity-90 text-black dark:text-white">
                Enviamos apenas para contatos que demonstraram interesse, evitando reclamações desnecessárias.
              </p>
            </div>

            <div className="bg-card bg-opacity-20 rounded-xl p-6">
              <h4 className="font-bold mb-2 text-black dark:text-white">Backup Preventivo</h4>
              <p className="text-sm opacity-90 text-black dark:text-white">
                Seus contatos ficam sempre seguros na nuvem, mesmo se algo inesperado acontecer com sua conta.
              </p>
            </div>
          </div>
        </div>

        {/* Common Concerns Address */}
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">💭 Outras Preocupações Comuns</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">&ldquo;E se eu não souber usar?&rdquo;</h4>
                  <p className="text-muted-foreground text-sm">
                    Interface mais simples que WhatsApp Web. Video-aulas incluídas + suporte individual.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">&ldquo;Vale a pena o investimento?&rdquo;</h4>
                  <p className="text-muted-foreground text-sm">
                    Se paga em menos de 3 dias. Nossos clientes economizam R$2.000+ por mês.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    &ldquo;E se não funcionar para meu negócio?&rdquo;
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    7 dias grátis + garantia total. Risco zero para testar.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">&ldquo;Preciso trocar de número?&rdquo;</h4>
                  <p className="text-muted-foreground text-sm">
                    Não! Funciona com seu WhatsApp atual. Seus clientes nem percebem mudança.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">&ldquo;E a concorrência descobre?&rdquo;</h4>
                  <p className="text-muted-foreground text-sm">
                    Mensagens parecem naturais. Seus clientes pensam que você responde pessoalmente.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">&ldquo;Posso usar em vários números?&rdquo;</h4>
                  <p className="text-muted-foreground text-sm">
                    Sim! Perfeito para quem tem WhatsApp pessoal + Business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final FAQ CTA */}
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">🤔 Ainda Tem Dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Converse direto conosco via WhatsApp. Nossa equipe responde em minutos e pode esclarecer qualquer pergunta
              específica sobre seu negócio.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}?text=Tenho%20dúvidas%20sobre%20o%20AutoZappr`}
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <span className="mr-2">💬</span>
              Tirar Dúvidas via WhatsApp
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            ⚡ Resposta média em 30 minutos • 🇧🇷 Suporte 100% em português
          </div>
        </div>
      </div>
    </section>
  );
}
