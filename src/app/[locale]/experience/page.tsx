'use client';

import { getIndexedKeysFromMessages } from '@/lib/utils';
import { useTranslations, useMessages } from 'next-intl';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

export default function ExperiencePage() {
  const t = useTranslations('fullExperience');
  const messages = useMessages();
  const jobKeys = getIndexedKeysFromMessages(messages, 'fullExperience.jobs');

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 space-y-16">
      <Link
        href="/"
        className="text-accent-foreground text-left dark:text-primary underline underline-offset-4 hover:opacity-80"
      >
        {t('back')}
      </Link>
      <div className="pt-4">
        <h1 className="text-3xl font-bold mb-2">{t('heading')}</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">{t('intro')}</p>
      </div>

      {jobKeys.map((key) => {
        const title = t(`jobs.${key}.title`);
        const company = t(`jobs.${key}.company`);
        const startDate = t(`jobs.${key}.startDate`);
        const endDate = t(`jobs.${key}.endDate`);
        const link = t(`jobs.${key}.link`);
        const descriptionItems = getIndexedKeysFromMessages(messages, `fullExperience.jobs.${key}.description`);
        const stack = getIndexedKeysFromMessages(messages, `fullExperience.jobs.${key}.stack`);

        return (
          <Link href={link} key={key}>
            <div className="p-6 mb-4 shadow-sm">
              <h3 className="text-lg font-semibold">
                {title} – {company}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {startDate} – {endDate}
              </p>

              <ul className="list-disc pl-5 mb-4 text-base text-foreground space-y-1">
                {descriptionItems.map((_, i) => (
                  <li key={i}>{t(`jobs.${key}.description.${i}`)}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {stack.map((_, i) => (
                  <div key={i} className="px-3 py-1 rounded-md text-sm flex items-center gap-1 bg-primary text-white">
                    <FaCode className="text-xs" /> {t(`jobs.${key}.stack.${i}`)}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        );
      })}

      <div className="pt-20 text-center">
        <p className="text-xl font-medium mb-2">{t('closing')}</p>
        <Link
          href={t('resume')}
          target="_blank"
          className="inline-block px-6 py-3 rounded-md bg-primary text-white hover:bg-opacity-90 transition"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}
