'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useMessages } from 'next-intl';
import { getIndexedKeysFromMessages } from '@/lib/utils';

const projectAssets = [
  {
    image: '/projects/software_architecture.png',
    link: 'https://github.com/orgs/4SOAT-G48/repositories'
  },
  {
    image: '/projects/sentiment_analysis.png',
    link: 'https://github.com/MateusSousa00/sentiment-analysis'
  },
  {
    image: '/projects/version.png',
    link: 'https://version.com.br'
  },
  {
    image: '/projects/confiare.png',
    link: 'https://confiareservicos.com.br'
  }
];

export default function HighlightProjects() {
  const t = useTranslations('highlightProjects');
  const messages = useMessages();
  const projectKeys = getIndexedKeysFromMessages(messages, 'highlightProjects.projects');

  return (
    <section id="projects" className="space-y-6 px-5 py-10 mb-14">
      <h2 className="md:hidden text-2xl font-bold">{t('heading')}</h2>

      {projectKeys.map((key, index) => {
        const name = t(`projects.${key}.name`);
        const description = t(`projects.${key}.description`);
        const { image, link } = projectAssets[index];

        return (
          <Link key={key} href={link} target="_blank">
            <div className="flex items-center gap-6 border border-muted rounded-2xl p-6 shadow-sm transition-transform transform hover:scale-[1.02] hover:bg-muted/30 hover:shadow-md mb-4">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image src={image} alt={name} fill className="object-cover rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{name}</h3>
                <p className="text-base text-foreground">{description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
