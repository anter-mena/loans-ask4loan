import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { canadaLocations } from "@/lib/canada-locations";
import { comparisons } from "@/lib/comparisons";
import { creditScoreRanges } from "@/lib/credit-scores";
import { guides } from "@/lib/guides";
import { loanAmounts } from "@/lib/loan-amounts";
import { loanPurposes } from "@/lib/loan-purposes";
import { loanTypes } from "@/lib/loan-types";
import { getAllNews } from "@/lib/news";
import { BASE_URL } from "@/lib/seo";

// Each section is served at /sitemap/<section>.xml and listed by the index at /sitemap.xml
export const sitemapSections = ["pages", "loans", "resources", "blog", "news"] as const;

export type SitemapSection = (typeof sitemapSections)[number];

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = "weekly" | "monthly" | "yearly";

// Last real content change of each page group (YYYY-MM-DD), taken from git history.
// Update a date only when that group's VISIBLE content changes (text, data, FAQs,
// tables, body links, sections added/removed) — not for metadata, JSON-LD,
// analytics/tracking, styling or code-only changes — and never use new Date() or
// the build time, so search engines can keep trusting these dates.
// A group covers its hub page and all of its item pages (e.g. byAmount = /loans/by-amount
// and every /loans/by-amount/<slug>). The blog and news hubs are not listed here:
// they always take the date of their newest post.
const pageLastModified = {
  home: "2026-08-07",
  about: "2026-06-24",
  contact: "2026-08-15",
  applicationForm: "2026-08-07",
  privacyPolicy: "2026-06-24",
  termsOfUse: "2026-06-24",
  loans: "2026-07-04",
  byAmount: "2026-08-07",
  byPurpose: "2026-08-07",
  byType: "2026-08-07",
  byCreditScore: "2026-08-07",
  byLocation: "2026-08-07",
  resources: "2026-07-04",
  tools: "2026-08-07",
  faq: "2026-08-07",
  comparisons: "2026-08-07",
  guides: "2026-08-07",
};

type PageGroup = keyof typeof pageLastModified;

function page(
  path: string,
  group: PageGroup,
  priority: number,
  changeFrequency: ChangeFrequency,
): SitemapEntry {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: pageLastModified[group],
    changeFrequency,
    priority,
  };
}

// A hub page plus one page per item slug, all sharing the group's date.
function hubWithItems(
  path: string,
  group: PageGroup,
  items: { slug: string }[],
): SitemapEntry[] {
  return [
    page(path, group, 0.6, "monthly"),
    ...items.map((item) => page(`${path}/${item.slug}`, group, 0.5, "monthly")),
  ];
}

// Listing pages change whenever their newest post does.
function newestDay(days: string[]): string | undefined {
  if (days.length === 0) return undefined;
  return days.reduce((latest, day) => (day > latest ? day : latest));
}

export function isSitemapSection(value: string): value is SitemapSection {
  return (sitemapSections as readonly string[]).includes(value);
}

export function getSitemapEntries(section: SitemapSection): MetadataRoute.Sitemap {
  if (section === "blog") {
    const posts = getAllPosts();
    return [
      {
        url: `${BASE_URL}/blog`,
        lastModified: newestDay(posts.map((post) => post.updated)),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      ...posts.map(
        (post): SitemapEntry => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: post.updated,
          changeFrequency: "weekly",
          priority: 0.7,
        }),
      ),
    ];
  }

  if (section === "news") {
    const news = getAllNews();
    return [
      {
        url: `${BASE_URL}/news`,
        lastModified: newestDay(news.map((item) => item.updated)),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      ...news.map(
        (item): SitemapEntry => ({
          url: `${BASE_URL}/news/${item.slug}`,
          lastModified: item.updated,
          changeFrequency: "weekly",
          priority: 0.7,
        }),
      ),
    ];
  }

  if (section === "loans") {
    return [
      page("/loans", "loans", 0.8, "monthly"),
      ...hubWithItems("/loans/by-amount", "byAmount", loanAmounts),
      ...hubWithItems("/loans/by-purpose", "byPurpose", loanPurposes),
      ...hubWithItems("/loans/by-type", "byType", loanTypes),
      ...hubWithItems("/loans/by-credit-score", "byCreditScore", creditScoreRanges),
      ...hubWithItems("/loans/by-location", "byLocation", canadaLocations),
    ];
  }

  if (section === "resources") {
    return [
      page("/resources", "resources", 0.6, "monthly"),
      page("/resources/tools", "tools", 0.6, "monthly"),
      page("/resources/faq", "faq", 0.6, "monthly"),
      ...hubWithItems("/resources/comparisons", "comparisons", comparisons),
      ...hubWithItems("/resources/guides", "guides", guides),
    ];
  }

  return [
    page("", "home", 1, "weekly"),
    page("/about", "about", 0.8, "monthly"),
    page("/application-form", "applicationForm", 0.9, "monthly"),
    page("/contact", "contact", 0.7, "monthly"),
    page("/privacy-policy", "privacyPolicy", 0.4, "yearly"),
    page("/terms-of-use", "termsOfUse", 0.4, "yearly"),
  ];
}

// Same markup Next.js generates for a built-in app/sitemap.ts, which can't be
// used here because it would take over /sitemap.xml from the index.
export function toUrlsetXml(entries: MetadataRoute.Sitemap): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of entries) {
    xml += "<url>\n";
    xml += `<loc>${entry.url}</loc>\n`;
    if (entry.lastModified) {
      const lastModified =
        entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified;
      xml += `<lastmod>${lastModified}</lastmod>\n`;
    }
    if (entry.changeFrequency) {
      xml += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
    }
    if (typeof entry.priority === "number") {
      xml += `<priority>${entry.priority}</priority>\n`;
    }
    xml += "</url>\n";
  }

  xml += "</urlset>\n";
  return xml;
}

export function toSitemapIndexXml(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const section of sitemapSections) {
    xml += "<sitemap>\n";
    xml += `<loc>${BASE_URL}/sitemap/${section}.xml</loc>\n`;
    xml += "</sitemap>\n";
  }

  xml += "</sitemapindex>\n";
  return xml;
}
