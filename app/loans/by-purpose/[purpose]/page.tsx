import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PurposeArticleClient from './PurposeArticleClient';
import { loanPurposes, getLoanPurposeBySlug } from '@/lib/loan-purposes';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return loanPurposes.map((entry) => ({ purpose: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ purpose: string }>;
}): Promise<Metadata> {
  const { purpose } = await params;
  const entry = getLoanPurposeBySlug(purpose);

  if (!entry) {
    return {};
  }

  const title = `${entry.name} Loan Canada | Ask4Loan`;
  const description = entry.description;
  const url = `https://ask4loan.ca/loans/by-purpose/${entry.slug}`;
  const keywords = buildArticleKeywords(`${entry.name} loan`, [
    `personal loan for ${entry.name.toLowerCase()}`,
    `${entry.name.toLowerCase()} loan canada`,
  ]);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/loans/by-purpose/${entry.slug}`,
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

export default async function PurposeArticlePage({
  params,
}: {
  params: Promise<{ purpose: string }>;
}) {
  const { purpose } = await params;
  const entry = getLoanPurposeBySlug(purpose);

  if (!entry) {
    notFound();
  }

  let content;
  try {
    content = (await import(`@/lib/loan-purpose-content/${purpose}`)).default;
  } catch {
    notFound();
  }

  return <PurposeArticleClient entry={entry} content={content} />;
}
