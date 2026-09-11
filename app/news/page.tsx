import type { Metadata } from "next";
import { Newspaper } from "lucide-react";

import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { PostGrid } from "@/components/blog/post-grid";
import CTASection from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllNews, NEWS_DESCRIPTION, NEWS_SECTION } from "@/lib/news";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: NEWS_SECTION.label,
  description: NEWS_DESCRIPTION,
  path: NEWS_SECTION.path,
  keywords: [
    "canada loan news",
    "interest rate news canada",
    "consumer lending news canada",
    "ask4loan news",
  ],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${NEWS_SECTION.path}/feed.xml` },
  },
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: NEWS_SECTION.label, path: NEWS_SECTION.path },
          ]),
          ...(news.length > 0 ? [itemListJsonLd(NEWS_SECTION, news)] : []),
        ]}
      />

      {/* Oval gradient background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: NEWS_SECTION.label }]} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <Newspaper className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            Loan &amp; Rate News
          </h1>
          <p className="mt-4 leading-relaxed" style={{ color: "#64748B" }}>
            Bank of Canada decisions, lending data, and rule changes that affect what you
            pay to borrow — reported in plain English.
          </p>
        </div>

        {/* Items */}
        <PostGrid
          posts={news}
          section={NEWS_SECTION}
          empty={{
            title: "News coming soon",
            text: "We're tracking Bank of Canada decisions, lending data, and rule changes that affect Canadian borrowers. Check back shortly — the latest updates will be posted here.",
            link: { label: "In the meantime, read the blog", href: "/blog" },
          }}
        />
      </div>

      <CTASection />
    </div>
  );
}
