'use client';

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileText,
  Lock,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PurposeLoanCalculator from "@/components/shared/PurposeLoanCalculator";
import ContentBlocks, { findFaqBlock } from "@/components/shared/ContentBlocks";
import LocationsByProvince from "@/components/shared/LocationsByProvince";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import type { ArticleContent } from "@/lib/content-blocks";
import type { LoanTypeMeta } from "@/lib/loan-types";
import { getOtherLoanTypes } from "@/lib/loan-types";
import { loanAmounts } from "@/lib/loan-amounts";

const badges = [
  { icon: ShieldCheck, label: "Bank-Level Security" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: CheckCircle2, label: "Trusted Lenders" },
  { icon: Users, label: "50,000+ Canadians Served" },
  { icon: Zap, label: "Fast 2-Minute Application" },
];

const creditScoreLinks = ["300-559 (Poor)", "560-659 (Fair)", "660-724 (Good)", "725-759 (Very Good)", "760-900 (Excellent)"];

const guideLinks = [
  { label: "How to Get a Personal Loan with Bad Credit", href: "/resources/guides/get-personal-loan-bad-credit" },
  { label: "Understanding Credit Reports", href: "/resources/guides/understanding-credit-reports" },
  { label: "Avoiding Loan Scams", href: "/resources/guides/avoiding-loan-scams" },
  { label: "Preparing for a Loan Application", href: "/resources/guides/preparing-for-loan-application" },
];

const comparisonLinks = [
  { label: "Personal vs Payday Loan", href: "/resources/comparisons/payday-vs-personal-loans" },
  { label: "Secured vs Unsecured", href: "/resources/comparisons/secured-vs-unsecured-loans" },
  { label: "Personal Loan vs Line of Credit", href: "/resources/comparisons/personal-loans-vs-loc" },
];

const toolLinks = [
  { label: "Loan Calculator", href: "/resources/tools" },
  { label: "Approval Calculator", href: "/resources/tools" },
  { label: "Credit Score Simulator", href: "/resources/tools" },
  { label: "Debt Consolidation Analyzer", href: "/resources/tools" },
];

const provinceLinks = ["Alberta", "British Columbia", "Ontario", "Quebec"];

const trackClick = (label: string, slug: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "loan_application_click", {
      event_category: "engagement",
      event_label: label,
      event_source: `loan_type_${slug}`,
    });
  }
};

const LoanTypeArticleClient = ({
  entry,
  content,
}: {
  entry: LoanTypeMeta;
  content: ArticleContent;
}) => {
  const otherTypes = getOtherLoanTypes(entry.slug);
  const popularAmounts = [...loanAmounts].sort((a, b) => a.amount - b.amount).slice(0, 6);
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
                acceptedAnswer: { "@type": "Answer", text: item.answer },
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
              { label: "Loan Types", href: "/loans/by-type" },
              { label: entry.name },
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <FileText className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            {entry.name} in Canada
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            {content.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs" style={{ color: "#94A3B8" }}>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> All credit types welcome
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Fast funding available
            </span>
            <span className="inline-flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Secure &amp; confidential
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8">
            <Button
              asChild
              size="lg"
              className="rounded-full ring-2 ring-emerald-200 ring-offset-2 ring-offset-white shadow-lg shadow-emerald-200/50 hover:bg-[#059669]! hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
            >
              <a
                href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
                target="_blank"
                rel="sponsored noopener noreferrer"
                onClick={() => trackClick("Loan Type Page Top CTA", entry.slug)}
              >
                Apply Now
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#calculator">
                <Calculator className="w-4 h-4" />
                Calculate Payments
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs"
                style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
                {label}
              </span>
            ))}
          </div>

          <div id="calculator" className="mt-8 flex justify-center scroll-mt-24">
            <PurposeLoanCalculator
              purposeLabel={entry.name}
              title={`Estimate Your ${entry.name} Payment`}
              defaultAmount={2500}
              defaultTerm={24}
              minAmount={500}
              maxAmount={5000}
              maxTerm={60}
              estimateApr={21}
              disclaimer="Based on 21% APR (CAD) • Max 35% APR in Canada"
              guideSlug={`type-${entry.slug}`}
            />
          </div>
        </div>

        {/* Content */}
        <ContentBlocks blocks={content.blocks} />

        <div className="rounded-xl border-l-4 p-4 mt-6" style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
            Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.
          </p>
        </div>

        {/* By Location */}
        <LocationsByProvince heading={`${entry.name} by Location`} />

        {/* Learn More */}
        <div className="mt-16">
          <h2 className="text-lg font-bold text-center mb-6" style={{ color: "#1F2937" }}>
            Learn More About {entry.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Related Guides
              </h3>
              <ul className="space-y-1.5">
                {guideLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Compare Options
              </h3>
              <ul className="space-y-1.5">
                {comparisonLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Free Tools
              </h3>
              <ul className="space-y-1.5">
                {toolLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Browse by Province
              </h3>
              <ul className="space-y-1.5">
                {provinceLinks.map((province) => (
                  <li key={province}>
                    <Link href="/loans/by-location" className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      Loans in {province}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Explore More Canadian Loan Resources */}
        <div className="mt-16">
          <h2 className="text-lg font-bold text-center mb-6" style={{ color: "#1F2937" }}>
            Explore More Canadian Loan Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTypes.length > 0 && (
              <div>
                <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                  Loan Types
                </h3>
                <ul className="space-y-1.5 mb-2">
                  {otherTypes.map((t) => (
                    <li key={t.slug}>
                      <Link href={`/loans/by-type/${t.slug}`} className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                        {t.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/loans/by-type" className="text-xs font-medium" style={{ color: "#10B981" }}>
                  Browse all types →
                </Link>
              </div>
            )}
            <div>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                By Loan Amount
              </h3>
              <ul className="space-y-1.5 mb-2">
                {popularAmounts.slice(0, 4).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/loans/by-amount/${a.slug}`} className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      ${a.amount} Loan
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/loans/by-amount" className="text-xs font-medium" style={{ color: "#10B981" }}>
                Browse all amounts →
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                By Credit Score
              </h3>
              <ul className="space-y-1.5 mb-2">
                {creditScoreLinks.slice(0, 4).map((label) => (
                  <li key={label}>
                    <Link href="/loans/by-credit-score" className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/loans/by-credit-score" className="text-xs font-medium" style={{ color: "#10B981" }}>
                View all credit ranges →
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Tools
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/resources/tools" className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                    Loan Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
};

export default LoanTypeArticleClient;
