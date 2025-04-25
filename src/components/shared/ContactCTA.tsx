import { useTranslations } from 'next-intl';

export default function ContactCTA() {
  const t = useTranslations('contactCta');
  return (
    <section className="mt-32 bg-primary-light dark:bg-primary-dark py-16 px-6 text-center rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{t('heading')}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">{t('paragraph')}</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
        >
          {t('whatsapp')}
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-md border border-neutral-400 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {t('email')}
        </a>
      </div>
    </section>
  );
}
