import type { Metadata } from "next";
import { Newspaper } from "lucide-react";

import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { PostGrid } from "@/components/blog/post-grid";
import CTASection from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_DESCRIPTION, BLOG_SECTION, getAllPosts } from "@/lib/blog";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: BLOG_SECTION.label,
  description: BLOG_DESCRIPTION,
  path: BLOG_SECTION.path,
  keywords: [
    "personal loan blog canada",
    "loan tips canada",
    "borrowing advice canada",
    "ask4loan blog",
  ],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${BLOG_SECTION.path}/feed.xml` },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: BLOG_SECTION.label, path: BLOG_SECTION.path },
          ]),
          ...(posts.length > 0 ? [itemListJsonLd(BLOG_SECTION, posts)] : []),
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: BLOG_SECTION.label }]} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <Newspaper className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            The Ask4Loan Blog
          </h1>
          <p className="mt-4 leading-relaxed" style={{ color: "#64748B" }}>
            Borrowing tips, rate insights, and honest guides to help Canadians make
            confident decisions about personal loans.
          </p>
        </div>

        {/* Posts */}
        <PostGrid
          posts={posts}
          section={BLOG_SECTION}
          empty={{
            title: "New posts coming soon",
            text: "We're putting together fresh borrowing tips, rate insights, and honest guides for Canadian borrowers. Check back shortly — new articles will be posted here soon.",
            link: { label: "In the meantime, explore our loan guides", href: "/resources/guides" },
          }}
        />
      </div>

      <CTASection />
    </div>
  );
}
