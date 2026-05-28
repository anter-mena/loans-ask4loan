import { getTranslations } from 'next-intl/server';
import TermsClient from './TermsClient';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: `${t('hero.title')} | Ask4Loan Canada`,
    description: t('hero.description'),
    alternates: {
      canonical: `https://ask4loan.ca/${locale}/terms`,
    },
  };
}

export default function TermsPage() {
  return <TermsClient />;
}
