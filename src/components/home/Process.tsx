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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 -z-10">
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
                  <h3 className="text-xl font-bold mb-4">{t(`${step.id}.title`)}</h3>
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

        {/* Client Testimonials */}
        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('imagesHeading')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                  &quot;I&apos;ve expected something and M&L Software gave me even better&quot;
                </p>
                <p className="text-xs text-gray-500">Strategy consultation meeting with client</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                  &quot;Software development is the core and the passion of M&L Software&quot;
                </p>
                <p className="text-xs text-gray-500">Software development in progress</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaFileAlt className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                  &quot;high load of testing to make sure we don&apos;t deliver anything buggy&quot;
                </p>
                <p className="text-xs text-gray-500">Mobile application testing</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                  &quot;We are always happy because our deployment always make our clients happy&quot;
                </p>
                <p className="text-xs text-gray-500">Successful project launch celebration</p>
              </div>
            </div>
          </div>
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