'use client';
import { useTranslations } from 'next-intl';
import { FaCalendarAlt, FaFileAlt, FaCode, FaRocket } from 'react-icons/fa';

export default function Process() {
  const t = useTranslations('process');
  
  const steps = [
    {
      id: 'consultation',
      icon: FaCalendarAlt,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500'
    },
    {
      id: 'proposal',
      icon: FaFileAlt,
      color: 'text-green-500',
      bgColor: 'bg-green-500'
    },
    {
      id: 'development',
      icon: FaCode,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500'
    },
    {
      id: 'launch',
      icon: FaRocket,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500'
    }
  ];

  return (
    <section id="process" className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('heading')}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-[120%] h-0.5 bg-neutral-200 dark:bg-neutral-700 -z-10">
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-neutral-400 rounded-full"></div>
                  </div>
                )}
                
                <div className="text-center">
                  {/* Step Number & Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 ${step.bgColor} rounded-full mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Info */}
                  <h3 className="text-lg font-bold mb-4">{t(`${step.id}.title`)}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {t(`${step.id}.description`)}
                  </p>
                  
                  {/* Duration */}
                  <div className="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm font-medium">
                    {t(`${step.id}.duration`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('ctaHeading')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              {t('ctaText')}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}