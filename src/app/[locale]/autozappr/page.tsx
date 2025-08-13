import { getTranslations } from 'next-intl/server';
import { Locale } from 'next-intl';
import AutoZapprHero from '@/components/autozappr/AutoZapprHero';
import AutoZapprProblems from '@/components/autozappr/AutoZapprProblems';
import AutoZapprSolution from '@/components/autozappr/AutoZapprSolution';
import AutoZapprComparison from '@/components/autozappr/AutoZapprComparison';
import AutoZapprTestimonials from '@/components/autozappr/AutoZapprTestimonials';
import AutoZapprCalculator from '@/components/autozappr/AutoZapprCalculator';
import AutoZapprPricing from '@/components/autozappr/AutoZapprPricing';
import AutoZapprFAQ from '@/components/autozappr/AutoZapprFAQ';
import AutoZapprFinalCTA from '@/components/autozappr/AutoZapprFinalCTA';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'autozappr.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function AutoZapprPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <AutoZapprHero locale={locale} />
      <AutoZapprProblems locale={locale} />
      <AutoZapprSolution locale={locale} />
      <AutoZapprComparison locale={locale} />
      <AutoZapprTestimonials locale={locale} />
      <AutoZapprCalculator locale={locale} />
      <AutoZapprPricing locale={locale} />
      <AutoZapprFAQ locale={locale} />
      <AutoZapprFinalCTA locale={locale} />
    </div>
  );
}