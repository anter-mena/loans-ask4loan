import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AmountLoanClient from './AmountLoanClient';
import { loanAmounts, getLoanAmountBySlug } from '@/lib/loan-amounts';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return loanAmounts.map((entry) => ({ amount: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ amount: string }>;
}): Promise<Metadata> {
  const { amount } = await params;
  const entry = getLoanAmountBySlug(amount);

  if (!entry) {
    return {};
  }

  const title = `$${entry.amount} Loan Canada — Borrow Today (2026) | Ask4Loan`;
  const description = `Need to borrow $${entry.amount} today in Canada? Apply online in 2 minutes for same-day funding. Bad credit OK, APR capped at 35%.`;
  const url = `https://ask4loan.ca/loans/by-amount/${entry.slug}`;
  const keywords = buildArticleKeywords(`$${entry.amount} loan`, [
    `borrow $${entry.amount}`,
    `$${entry.amount} loan canada`,
    `same day $${entry.amount} loan`,
  ]);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/loans/by-amount/${entry.slug}`,
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

export default async function AmountLoanPage({
  params,
}: {
  params: Promise<{ amount: string }>;
}) {
  const { amount } = await params;
  const entry = getLoanAmountBySlug(amount);

  if (!entry) {
    notFound();
  }

  return <AmountLoanClient entry={entry} />;
}
