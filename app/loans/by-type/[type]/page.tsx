import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LoanTypeArticleClient from './LoanTypeArticleClient';
import { loanTypes, getLoanTypeBySlug } from '@/lib/loan-types';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return loanTypes.map((entry) => ({ type: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const entry = getLoanTypeBySlug(type);

  if (!entry) {
    return {};
  }

  const title = `${entry.name} in Canada | Ask4Loan`;
  const description = entry.description;
  const url = `https://ask4loan.ca/loans/by-type/${entry.slug}`;
  const keywords = buildArticleKeywords(`${entry.name}`, [
    `${entry.name.toLowerCase()} canada`,
    `apply for ${entry.name.toLowerCase()}`,
  ]);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/loans/by-type/${entry.slug}`,
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

export default async function LoanTypeArticlePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const entry = getLoanTypeBySlug(type);

  if (!entry) {
    notFound();
  }

  let content;
  try {
    content = (await import(`@/lib/loan-type-content/${type}`)).default;
  } catch {
    notFound();
  }

  return <LoanTypeArticleClient entry={entry} content={content} />;
}
