'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustBadges from "@/components/shared/TrustBadges";
import SocialProof from "@/components/shared/SocialProof";
import PurposeLoanCalculator from "@/components/shared/PurposeLoanCalculator";
import ContentBlocks, { findFaqBlock } from "@/components/shared/ContentBlocks";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/home/CTASection";
import type { GuideMeta, GuideContent } from "@/lib/guides";
import { getRelatedGuides } from "@/lib/guides";
import { guideIcons } from "@/lib/guide-icons";

const trackClick = (label: string, slug: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "loan_application_click", {
      event_category: "engagement",
      event_label: label,
      event_source: `guide_${slug}`,
    });
  }
};

const GuideArticleClient = ({
  entry,
  content,
}: {
  entry: GuideMeta;
  content: GuideContent;
}) => {
  const Icon = guideIcons[entry.icon];
  const relatedGuides = getRelatedGuides(entry.slug);
  const faqBlock = findFaqBlock(content.blocks);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      {faqBlock && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqBlock.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* Oval Gradient Background */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Guides", href: "/resources/guides" },
              { label: entry.title },
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <Icon className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            {entry.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            {content.subtitle}
          </p>

          <div className="mt-6 mb-8">
            <TrustBadges />
          </div>

          <div className="flex justify-center">
            <SocialProof />
          </div>

          {entry.calculator && (
            <div className="mt-8 flex justify-center">
              <PurposeLoanCalculator
                purposeLabel={entry.calculator.purposeLabel}
                defaultAmount={entry.calculator.defaultAmount}
                defaultTerm={entry.calculator.defaultTerm}
                guideSlug={entry.slug}
              />
            </div>
          )}
        </div>

        {/* Content Blocks */}
        <ContentBlocks blocks={content.blocks} />

        {/* Ready to Apply */}
        <div
          className="text-center rounded-2xl p-8 mt-16 border"
          style={{ backgroundColor: "#F0FDF9", borderColor: "#D1FAE5" }}
        >
          <h2 className="text-lg font-bold mb-2" style={{ color: "#1F2937" }}>
            Ready to Apply?
          </h2>
          <p className="text-sm mb-5" style={{ color: "#64748B" }}>
            Our network of lenders works with all credit types. Check your rates in 2 minutes without affecting your credit score.
          </p>
          <Button
            asChild
            className="rounded-full ring-2 ring-emerald-200 ring-offset-2 ring-offset-white shadow-lg shadow-emerald-200/50 hover:bg-[#059669]! hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
          >
            <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => trackClick("Guide Article Ready to Apply", entry.slug)}
            >
              Check Your Rates Now
              <ArrowRight />
            </a>
          </Button>
        </div>

        {/* Explore More */}
        {relatedGuides.length > 0 && (
          <div className="text-center mt-16">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
              Explore More Guides
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/guides/${guide.slug}`}
                  className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-emerald-300"
                  style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
};

export default GuideArticleClient;
