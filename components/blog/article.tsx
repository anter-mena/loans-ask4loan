import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { PostImage } from "@/components/blog/post-image";
import { TableOfContents } from "@/components/blog/table-of-contents";
import CTASection from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/json-ld";
import { formatDate, type ArticleSection, type Post } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { extractToc } from "@/lib/toc";

/** Full article page, shared by blog posts and news items. */
export function Article({ post, section }: { post: Post; section: ArticleSection }) {
  const { meta, content } = post;
  const path = `${section.path}/${meta.slug}`;
  const toc = extractToc(content);
  const internal = meta.related.filter((link) => !link.href.startsWith("http"));
  const sources = meta.related.filter((link) => link.href.startsWith("http"));
  const faq = faqJsonLd(meta.faqs);

  const byline =
    section.dateLine === "published"
      ? `By the ${meta.author} · Published ${formatDate(meta.date)}${
          meta.updated !== meta.date ? ` · Updated ${formatDate(meta.updated)}` : ""
        } · ${meta.readingTime} min read`
      : `Reviewed by the ${meta.author} · Updated ${formatDate(meta.updated)} · ${meta.readingTime} min read`;

  return (
    <div className="relative overflow-x-clip" style={{ backgroundColor: "#FFFFFF" }}>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: section.label, path: section.path },
            { name: meta.title, path },
          ]),
          articleJsonLd(meta, section),
          ...(faq ? [faq] : []),
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
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: section.label, href: section.path },
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
            {byline}
          </p>
        </div>

        {/* Mobile-first: single column; 2-column grid with sticky TOC rail at lg+ */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12 lg:items-start">
          <article className="min-w-0 w-full max-w-[760px] mx-auto lg:mx-0">
            {/* Mobile TOC (collapsible, above article) */}
            <TableOfContents items={toc} variant="mobile" />

            <div className="blog-prose prose prose-lg max-w-none">
              {/* rehype-raw lets posts embed HTML (figures, video, iframes);
                  rehype-slug gives headings the ids the table of contents uses. */}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                components={{ img: PostImage }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* Related reading + sources */}
            {(internal.length > 0 || sources.length > 0) && (
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
                {sources.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
                      Sources
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {sources.map((link) => (
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

            {/* Back to the listing */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
              <Link
                href={section.path}
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#059669] transition-colors"
                style={{ color: "#1F2937" }}
              >
                <ArrowLeft className="w-4 h-4" />
                {section.backLabel}
              </Link>
              <Link
                href={section.next.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#059669] transition-colors"
                style={{ color: "#1F2937" }}
              >
                {section.next.label}
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
              {meta.faqs.map((item) => (
                <div
                  key={item.question}
                  className="border-b py-5 last:border-b-0"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#1F2937" }}>
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {item.answer}
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
