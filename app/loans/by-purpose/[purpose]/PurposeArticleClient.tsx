'use client';

import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Target } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustBadges from "@/components/shared/TrustBadges";
import PurposeLoanCalculator from "@/components/shared/PurposeLoanCalculator";
import ContentBlocks from "@/components/shared/ContentBlocks";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import type { ArticleContent } from "@/lib/content-blocks";
import type { LoanPurposeMeta } from "@/lib/loan-purposes";
import { getOtherLoanPurposes } from "@/lib/loan-purposes";
import { loanAmounts } from "@/lib/loan-amounts";

const trackClick = (label: string, slug: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "loan_application_click", {
      event_category: "engagement",
      event_label: label,
      event_source: `purpose_${slug}`,
    });
  }
};

const PurposeArticleClient = ({
  entry,
  content,
}: {
  entry: LoanPurposeMeta;
  content: ArticleContent;
}) => {
  const otherPurposes = getOtherLoanPurposes(entry.slug);
  const popularAmounts = [...loanAmounts].sort((a, b) => a.amount - b.amount).slice(0, 6);

  const faqItems = [
    {
      question: `How do I apply for a loan for ${entry.name.toLowerCase()}?`,
      answer:
        "Compare a few lenders, check your credit score, gather your ID, proof of income, and banking details, then apply online with a soft credit-check pre-approval that won't affect your score.",
    },
    {
      question: `What loan amounts are available for ${entry.name.toLowerCase()}?`,
      answer:
        "Ask4Loan's network offers personal loans from $300 to $5,000. Your ideal amount depends on your specific costs — borrow only what you need to keep your payments manageable.",
    },
    {
      question: `How fast can I get funds for ${entry.name.toLowerCase()}?`,
      answer:
        "Many lenders can approve you within minutes and deposit funds by Interac e-Transfer the same business day, provided you apply before their daily cut-off time.",
    },
    {
      question: `Are there alternatives to a personal loan for ${entry.name.toLowerCase()}?`,
      answer:
        "Depending on your situation, a line of credit, a 0% introductory credit card, savings, or a relevant government or provincial assistance program may also be worth considering before you borrow.",
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />

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
              { label: "Loans by Purpose", href: "/loans/by-purpose" },
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
            <Target className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            Personal Loans for {entry.name} in Canada
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
                onClick={() => trackClick("Purpose Page Top CTA", entry.slug)}
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

          <div className="mb-8">
            <TrustBadges />
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
              guideSlug={`purpose-${entry.slug}`}
            />
          </div>
        </div>

        {/* Content */}
        <ContentBlocks blocks={content.blocks} />

        <div className="pt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6" style={{ color: "#1F2937" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqItems} variant="flat" />
        </div>

        <div className="rounded-xl border-l-4 p-4 mt-6" style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
            Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.
          </p>
        </div>

        {/* Popular Loan Amounts */}
        <div className="text-center mt-16">
          <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
            Popular Loan Amounts
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {popularAmounts.map((a) => (
              <Link
                key={a.slug}
                href={`/loans/by-amount/${a.slug}`}
                className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-emerald-300"
                style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
              >
                ${a.amount}
              </Link>
            ))}
          </div>
          <Link href="/loans/by-amount" className="text-sm font-medium mt-3 inline-block" style={{ color: "#10B981" }}>
            View all loan amounts →
          </Link>
        </div>

        {/* Other Loan Purposes */}
        {otherPurposes.length > 0 && (
          <div className="text-center mt-16">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
              Other Loan Purposes
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherPurposes.map((p) => (
                <Link
                  key={p.slug}
                  href={`/loans/by-purpose/${p.slug}`}
                  className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-emerald-300"
                  style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
                >
                  {p.name}
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

export default PurposeArticleClient;
