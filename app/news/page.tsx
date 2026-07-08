import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import { buildContentMetadata, BASE_URL } from "@/lib/content-seo";
import { getAllNews } from "@/lib/news";

const base = buildContentMetadata({
  title: "News | Ask4Loan Canada",
  description:
    "Loan and interest-rate news for Canadian borrowers — Bank of Canada decisions, lending data, and regulatory changes, explained in plain English.",
  path: "/news",
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
    types: {
      "application/rss+xml": `${BASE_URL}/news/feed.xml`,
    },
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function NewsIndex() {
  const items = getAllNews();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${BASE_URL}/news/${p.slug}`,
    })),
  };

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
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
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "News" }]} />
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
        {items.length === 0 ? (
          <div className="max-w-lg mx-auto text-center flex flex-col items-center py-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
            >
              <Newspaper className="w-7 h-7" style={{ color: "#10B981" }} strokeWidth={1.75} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1F2937" }}>
              News coming soon
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "#64748B" }}>
              We&apos;re tracking Bank of Canada decisions, lending data, and rule changes
              that affect Canadian borrowers. Check back shortly — the latest updates will
              be posted here.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#059669] transition-colors"
              style={{ color: "#10B981" }}
            >
              In the meantime, read the blog
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex flex-col rounded-2xl border overflow-hidden transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/50"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.04) 60%, transparent 100%)",
                      }}
                    />
                  )}
                  <span
                    className="absolute top-3 left-3 backdrop-blur-sm text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#059669" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2
                    className="text-lg font-bold leading-snug mb-2 transition-colors group-hover:text-[#059669]"
                    style={{ color: "#1F2937" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#64748B" }}>
                    {post.description}
                  </p>
                  <div
                    className="flex items-center gap-2 text-[0.72rem] uppercase tracking-wide"
                    style={{ color: "#94A3B8" }}
                  >
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: "#10B981" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CTASection />
    </div>
  );
}
