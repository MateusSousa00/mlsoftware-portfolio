import About from '@/components/home/About';
import Problem from '@/components/home/Problem';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import SocialProof from '@/components/home/SocialProof';
import { Locale } from 'next-intl';
import { use } from 'react';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Home({ params }: Props) {
  const { } = use(params);
  return (
    <>
      <About />
      <Problem />
      <Services />
      <Process />
      <SocialProof />
    </>
  );
}
