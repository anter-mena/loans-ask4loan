import { MetadataRoute } from 'next';
import { comparisons } from '@/lib/comparisons';
import { guides } from '@/lib/guides';
import { loanAmounts } from '@/lib/loan-amounts';
import { loanPurposes } from '@/lib/loan-purposes';
import { loanTypes } from '@/lib/loan-types';
import { creditScoreRanges } from '@/lib/credit-scores';
import { canadaLocations } from '@/lib/canada-locations';
import { getAllPosts } from '@/lib/blog';
import { getAllNews } from '@/lib/news';

const host = 'https://ask4loan.ca';

// Fixed publish date for the current content set. Bump this manually only when
// page content actually changes — recomputing it on every request/build (e.g.
// `new Date()`) makes Search Console distrust the sitemap's freshness signal.
const lastModified = '2026-06-15';

type PageConfig = {
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
};

const pages: PageConfig[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/loans', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/loans/by-amount', priority: 0.6, changeFrequency: 'monthly' },
  ...loanAmounts.map((entry): PageConfig => ({
    path: `/loans/by-amount/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/loans/by-purpose', priority: 0.6, changeFrequency: 'monthly' },
  ...loanPurposes.map((entry): PageConfig => ({
    path: `/loans/by-purpose/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/loans/by-type', priority: 0.6, changeFrequency: 'monthly' },
  ...loanTypes.map((entry): PageConfig => ({
    path: `/loans/by-type/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/loans/by-credit-score', priority: 0.6, changeFrequency: 'monthly' },
  ...creditScoreRanges.map((entry): PageConfig => ({
    path: `/loans/by-credit-score/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/loans/by-location', priority: 0.6, changeFrequency: 'monthly' },
  ...canadaLocations.map((entry): PageConfig => ({
    path: `/loans/by-location/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/tools', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/comparisons', priority: 0.6, changeFrequency: 'monthly' },
  ...comparisons.map((entry): PageConfig => ({
    path: `/resources/comparisons/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/resources/guides', priority: 0.6, changeFrequency: 'monthly' },
  ...guides.map((entry): PageConfig => ({
    path: `/resources/guides/${entry.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly',
  })),
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/news', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms-of-use', priority: 0.4, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${host}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${host}/blog/${post.slug}`,
    lastModified: post.updated || lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = getAllNews().map((item) => ({
    url: `${host}/news/${item.slug}`,
    lastModified: item.updated || lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...newsEntries];
}
