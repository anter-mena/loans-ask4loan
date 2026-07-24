import type { Metadata } from "next";

export const SITE_NAME = "Ask4Loan";
export const BASE_URL = "https://ask4loan.ca";

/** Shared metadata builder for the blog + news content sections. */
export function buildContentMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Ask4Loan — Quick and easy personal loans in Canada." }],
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
    },
    twitter: { images: ["/opengraph-image.png"],
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${BASE_URL}${path}`,
    })),
  };
}
