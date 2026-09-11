import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { formatDate, type ArticleSection, type PostMeta } from "@/lib/content";

/** Card grid for the blog and news listing pages, with an empty state. */
export function PostGrid({
  posts,
  section,
  empty,
}: {
  posts: PostMeta[];
  section: ArticleSection;
  empty: { title: ReactNode; text: string; link: { label: string; href: string } };
}) {
  if (posts.length === 0) {
    return (
      <div className="max-w-lg mx-auto text-center flex flex-col items-center py-8">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
        >
          <Newspaper className="w-7 h-7" style={{ color: "#10B981" }} strokeWidth={1.75} />
        </div>
        <h2 className="text-2xl font-bold mb-3" style={{ color: "#1F2937" }}>
          {empty.title}
        </h2>
        <p className="leading-relaxed mb-8" style={{ color: "#64748B" }}>
          {empty.text}
        </p>
        <Link
          href={empty.link.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#059669] transition-colors"
          style={{ color: "#10B981" }}
        >
          {empty.link.label}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`${section.path}/${post.slug}`}
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
  );
}
