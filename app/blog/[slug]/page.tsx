import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { buildContentMetadata, BASE_URL } from "@/lib/content-seo";
import { getAllPosts, getPost } from "@/lib/blog";
import { extractToc } from "@/lib/toc";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const base = buildContentMetadata({
    title: `${post.meta.title} | Ask4Loan`,
    description: post.meta.description,
    path: `/blog/${slug}`,
    keywords: post.meta.keywords.length
      ? post.meta.keywords
      : [post.meta.title.toLowerCase(), "personal loan canada", "ask4loan blog"],
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updated,
      authors: [post.meta.author],
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content } = post;
  const toc = extractToc(content);
  const url = `${BASE_URL}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "Ask4Loan",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` },
    },
    mainEntityOfPage: url,
    url,
  };

  const faqJsonLd =
    meta.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: meta.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const internal = meta.related.filter((l) => !l.href.startsWith("http"));
  const external = meta.related.filter((l) => l.href.startsWith("http"));

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: meta.title },
            ]}
          />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            className="text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: "#059669" }}
          >
            {meta.category}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "#1F2937" }}>
            {meta.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            {meta.description}
          </p>
          <p className="mt-4 text-sm" style={{ color: "#94A3B8" }}>
            Reviewed by the {meta.author} · Updated {formatDate(meta.updated)} · {meta.readingTime} min read
          </p>
        </div>

        {/* Mobile-first: single column; 2-column grid with sticky TOC rail at lg+ */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12 lg:items-start">
          <article className="min-w-0 w-full max-w-[760px] mx-auto lg:mx-0">
            {/* Mobile TOC (collapsible, above article) */}
            <TableOfContents items={toc} variant="mobile" />

            <div className="blog-prose prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* Related reading + sources */}
            {(internal.length > 0 || external.length > 0) && (
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {internal.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
                      Related Reading
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {internal.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline underline-offset-2"
                            style={{ color: "#10B981" }}
                          >
                            {link.label}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {external.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
                      Sources
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {external.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm hover:text-[#059669] underline underline-offset-2"
                            style={{ color: "#64748B" }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Back to hub */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#059669] transition-colors"
                style={{ color: "#1F2937" }}
              >
                <ArrowLeft className="w-4 h-4" />
                All blog posts
              </Link>
              <Link
                href="/resources/guides"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#059669] transition-colors"
                style={{ color: "#1F2937" }}
              >
                In-depth loan guides
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Desktop sticky TOC rail */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <TableOfContents items={toc} variant="sidebar" />
          </aside>
        </div>

        {/* FAQ */}
        {meta.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{ color: "#1F2937" }}>
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col">
              {meta.faqs.map((f) => (
                <div
                  key={f.question}
                  className="border-b py-5 last:border-b-0"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#1F2937" }}>
                    {f.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTASection />
    </div>
  );
}
