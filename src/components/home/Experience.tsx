'use client';

import { getIndexedKeysFromMessages } from '@/lib/utils';
import { useTranslations, useMessages, Locale } from 'next-intl';
import Link from 'next/link';
import { use } from 'react';
import { FaCode } from 'react-icons/fa';

type Props = {
  locale: Locale;
};

export default function Experience({ locale }: Props) {
  const t = useTranslations('experience');
  const messages = useMessages();
  const jobKeys = getIndexedKeysFromMessages(messages, 'experience.jobs');

  return (
    <section className="space-y-8 px-5 py-10 mb-14" id="experience">
      <h1 className="md:hidden text-2xl text-left mb-6">{t('heading')}</h1>

      {jobKeys.map((key) => {
        const title = t(`jobs.${key}.title`);
        const company = t(`jobs.${key}.company`);
        const startDate = t(`jobs.${key}.startDate`);
        const endDate = t(`jobs.${key}.endDate`);
        const link = t(`jobs.${key}.link`);
        const description = t(`jobs.${key}.description`);
        const stackKeys = getIndexedKeysFromMessages(messages, `experience.jobs.${key}.stack`);

        return (
          <Link href={link} key={key}>
            <div className="rounded-2xl p-6 mb-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:bg-muted/30 hover:shadow-md">
              <h3 className="text-lg font-semibold">
                {title} – {company}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {startDate} – {endDate}
              </p>
              <p className="mb-4 text-base text-foreground">{description}</p>
              <div className="flex flex-wrap gap-2">
                {stackKeys.map((i) => (
                  <div key={i} className="px-3 py-1 rounded-md text-sm flex items-center gap-1 bg-primary">
                    <FaCode className="text-xs" /> {t(`jobs.${key}.stack.${i}`)}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        );
      })}

      <Link
        href={`/${locale}/experience`}
        className="text-accent-foreground text-left dark:text-primary underline underline-offset-4 hover:opacity-80"
      >
        {t('cta')}
      </Link>
    </section>
  );
}
