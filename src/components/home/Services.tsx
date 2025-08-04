'use client';
import { useTranslations } from 'next-intl';
import { FaRocket, FaBolt, FaCheck, FaFile, FaShoppingCart } from 'react-icons/fa';

export default function Services() {
  const t = useTranslations('services');
  
  const services = [
    {
      id: 'landing',
      icon: FaFile,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      id: 'mvp',
      icon: FaRocket,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      id: 'optimization',
      icon: FaBolt,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800'
    },
    {
      id: 'ecommerce',
      icon: FaShoppingCart,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800'
    }
  ];

  return (
    <section id="services" className="px-5 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('heading')}</h2>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t('subheading')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className={`relative p-8 rounded-2xl border-2 ${service.borderColor} ${service.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              {/* Popular Badge */}
              {service.id === 'mvp' && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-3 rounded-full text-sm font-semibold z-20">
                  {t('popular')}
                </div>
              )}
              
              {/* Service Icon */}
              <div className={`inline-flex p-4 rounded-full ${service.bgColor} mb-6 ring-2 ring-white/20`}>
                <Icon className={`w-8 h-8 ${service.color}`} />
              </div>

              {/* Service Info */}
              <h3 className="text-2xl font-bold mb-4">{t(`${service.id}.title`)}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {t(`${service.id}.description`)}
              </p>

              {/* Timeline */}
              <div className="mb-6">
                <div className="text-lg font-semibold text-primary mb-2">
                  {t(`${service.id}.timeline`)}
                </div>
                <div className="text-sm text-neutral-500">
                  {t('customPricing')}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t(`${service.id}.feature${index}`)}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  service.id === 'mvp'
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : `border-2 ${service.borderColor} ${service.color} hover:bg-primary hover:text-white hover:border-primary`
                }`}
              >
                {t('scheduleCta')}
              </a>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          {t('bottomText')}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105"
        >
          {t('customSolutionCta')}
        </a>
      </div>
    </section>
  );
}