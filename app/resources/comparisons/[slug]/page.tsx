import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ComparisonArticleClient from './ComparisonArticleClient';
import { comparisons, getComparisonBySlug } from '@/lib/comparisons';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return comparisons.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComparisonBySlug(slug);

  if (!entry) {
    return {};
  }

  const title = `${entry.title} | Ask4Loan Canada`;
  const url = `https://ask4loan.ca/resources/comparisons/${entry.slug}`;
  const keywords = buildArticleKeywords(entry.title, [
    entry.optionA.name,
    entry.optionB.name,
    `${entry.optionA.name} vs ${entry.optionB.name}`,
  ]);

  return {
    title,
    description: entry.description,
    keywords,
    alternates: {
      canonical: `/resources/comparisons/${entry.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description: entry.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: entry.description,
    },
  };
}

export default async function ComparisonArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getComparisonBySlug(slug);

  if (!entry) {
    notFound();
  }

  return <ComparisonArticleClient entry={entry} />;
}
