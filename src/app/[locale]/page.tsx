import Articles from '@/components/home/Articles';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import HighlightProjects from '@/components/home/HighlightProjects';
import { Locale } from 'next-intl';
import { use } from 'react';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);
  return (
    <>
      <About />
      <Experience locale={locale} />
      <HighlightProjects />
      <Articles />
    </>
  );
}
