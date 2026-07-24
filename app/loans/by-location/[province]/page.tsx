import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProvinceLocationClient from './ProvinceLocationClient';
import { canadaLocations, getProvinceBySlug } from '@/lib/canada-locations';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return canadaLocations.map((entry) => ({ province: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ province: string }>;
}): Promise<Metadata> {
  const { province } = await params;
  const entry = getProvinceBySlug(province);

  if (!entry) {
    return {};
  }

  const title = `Personal Loans in ${entry.name} | Ask4Loan`;
  const description = `Compare personal loans from $300 to $5,000 CAD in ${entry.name}. Learn the real provincial lending rules, interest rate caps, and how to apply safely today.`;
  const url = `https://ask4loan.ca/loans/by-location/${entry.slug}`;
  const keywords = buildArticleKeywords(`${entry.name} personal loans`, [
    `loans in ${entry.name.toLowerCase()}`,
    `${entry.name.toLowerCase()} loan regulations`,
  ]);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/loans/by-location/${entry.slug}`,
    },
    openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
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

export default async function ProvinceLocationPage({
  params,
}: {
  params: Promise<{ province: string }>;
}) {
  const { province } = await params;
  const entry = getProvinceBySlug(province);

  if (!entry) {
    notFound();
  }

  let content;
  try {
    content = (await import(`@/lib/province-content/${province}`)).default;
  } catch {
    notFound();
  }

  return <ProvinceLocationClient province={entry} content={content} />;
}
