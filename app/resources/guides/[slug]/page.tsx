import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import GuideArticleClient from './GuideArticleClient';
import { guides, getGuideBySlug } from '@/lib/guides';
import { buildArticleKeywords } from '@/lib/seo-keywords';

export function generateStaticParams() {
  return guides.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);

  if (!entry) {
    return {};
  }

  const title = `${entry.title} | Ask4Loan Canada`;
  const url = `https://ask4loan.ca/resources/guides/${entry.slug}`;
  const keywords = buildArticleKeywords(entry.title, [entry.category]);

  return {
    title,
    description: entry.description,
    keywords,
    alternates: {
      canonical: `/resources/guides/${entry.slug}`,
    },
    openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
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

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);

  if (!entry) {
    notFound();
  }

  let content;
  try {
    content = (await import(`@/lib/guide-content/${slug}`)).default;
  } catch {
    notFound();
  }

  return <GuideArticleClient entry={entry} content={content} />;
}
