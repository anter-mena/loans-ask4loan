import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/**
 * Breadcrumb trail in the Ask4Loan style (same markup as components/shared/Breadcrumb).
 * Its structured data is rendered by the page through JsonLd, not here.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex justify-center">
      <ol className="flex items-center flex-wrap justify-center gap-2 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#1F2937]"
                  style={{ color: "#64748B" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{ color: last ? "#1F2937" : "#64748B" }}
                  className={last ? "font-medium" : ""}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="w-4 h-4" style={{ color: "#94A3B8" }} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
