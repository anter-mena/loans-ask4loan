'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

const SITE_URL = "https://ask4loan.ca";

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  const pathname = usePathname();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href ?? pathname}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ol className="flex items-center flex-wrap justify-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#1F2937]"
                  style={{ color: "#64748B" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{ color: isLast ? "#1F2937" : "#64748B" }}
                  className={isLast ? "font-medium" : ""}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="w-4 h-4" style={{ color: "#94A3B8" }} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
