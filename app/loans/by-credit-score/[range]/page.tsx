import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CreditScoreArticleClient from './CreditScoreArticleClient';
import { creditScoreRanges, getCreditScoreBySlug } from '@/lib/credit-scores';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return creditScoreRanges.map((entry) => ({ range: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ range: string }>;
}): Promise<Metadata> {
  const { range } = await params;
  const entry = getCreditScoreBySlug(range);

  if (!entry) {
    return {};
  }

  const title = `Credit Score ${entry.label} Loans Canada | Ask4Loan`;
  const description = `Explore personal loan options, interest rates, and terms for Canadians with ${entry.tier.toLowerCase()} credit scores (${entry.label}).`;
  const url = `https://ask4loan.ca/loans/by-credit-score/${entry.slug}`;
  const keywords = buildArticleKeywords(`credit score ${entry.label} loan`, [
    `loans for credit score ${entry.label}`,
    `${entry.tier.toLowerCase()} credit loans canada`,
  ]);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/loans/by-credit-score/${entry.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CreditScoreArticlePage({
  params,
}: {
  params: Promise<{ range: string }>;
}) {
  const { range } = await params;
  const entry = getCreditScoreBySlug(range);

  if (!entry) {
    notFound();
  }

  return <CreditScoreArticleClient entry={entry} />;
}
