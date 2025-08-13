'use client';

import { useTranslations } from 'next-intl';
import { Locale } from 'next-intl';
import { useState, useEffect } from 'react';

interface AutoZapprTestimonialsProps {
  locale?: Locale;
}

export default function AutoZapprTestimonials({}: AutoZapprTestimonialsProps) {
  const t = useTranslations('autozappr.testimonials');
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: t('testimonial1.text'),
      name: t('testimonial1.name'),
      business: t('testimonial1.business'),
      result: t('testimonial1.result'),
      avatar: '👨‍💼',
      color: 'from-blue-500 to-blue-600'
    },
    {
      text: t('testimonial2.text'),
      name: t('testimonial2.name'),
      business: t('testimonial2.business'),
      result: t('testimonial2.result'),
      avatar: '👩‍⚕️',
      color: 'from-pink-500 to-pink-600'
    },
    {
      text: t('testimonial3.text'),
      name: t('testimonial3.name'),
      business: t('testimonial3.business'),
      result: t('testimonial3.result'),
      avatar: '👨‍⚖️',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 text-sm font-semibold rounded-full mb-6">
            <span className="mr-2">⭐</span>
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heading')}</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('subheading')}</p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-white italic mb-8 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonials[currentTestimonial].color} flex items-center justify-center text-2xl text-white`}
                >
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-foreground text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].business}</div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-600 text-sm font-semibold rounded-full mt-2">
                    📈 {testimonials[currentTestimonial].result}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-muted-foreground">Empresários ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-muted-foreground">Mensagens agendadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-muted-foreground">Taxa de entrega</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">0</div>
            <div className="text-muted-foreground">Contas banidas*</div>
          </div>
        </div>

        {/* Industry-Specific Success Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl mr-4">🏪</div>
              <div>
                <h4 className="font-bold text-foreground">Restaurantes</h4>
                <div className="text-sm text-gray-500">15+ estabelecimentos</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              &ldquo;Pedidos de delivery aumentaram 60% com mensagens agendadas noturnas&rdquo;
            </p>
            <div className="text-blue-600 font-semibold text-sm">+60% pedidos noturnos</div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl mr-4">
                💼
              </div>
              <div>
                <h4 className="font-bold text-foreground">Consultores</h4>
                <div className="text-sm text-gray-500">20+ profissionais</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              &ldquo;Follow-ups agendados converteram 40% mais propostas em contratos&rdquo;
            </p>
            <div className="text-purple-600 font-semibold text-sm">+40% conversões</div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-pink-400">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl mr-4">💄</div>
              <div>
                <h4 className="font-bold text-foreground">Beleza & Estética</h4>
                <div className="text-sm text-gray-500">10+ salões</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              &ldquo;Lembretes agendados reduziram faltas em 80%, agenda sempre lotada&rdquo;
            </p>
            <div className="text-pink-600 font-semibold text-sm">-80% no-shows</div>
          </div>
        </div>

        {/* Social Proof CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white inline-block">
            <h3 className="text-2xl font-bold mb-4">Junte-se aos Empresários de Sucesso</h3>
            <p className="mb-6 opacity-90">Não fique para trás enquanto seus concorrentes automatizam e vendem mais</p>
            <a
              href={`https://wa.me/${whatsapp}?text=Quero%20ter%20resultados%20como%20esses%20casos%20de%20sucesso`}
              className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('cta')}
            </a>
          </div>
          <div className="text-xs text-gray-500 mt-4">*Com nosso método de proteção e backup de contatos</div>
        </div>
      </div>
    </section>
  );
}
