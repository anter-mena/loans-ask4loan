'use client';

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  Clock,
  FileCheck,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import type { CreditScoreRange } from "@/lib/credit-scores";
import { getOtherCreditScores } from "@/lib/credit-scores";
import { loanAmounts } from "@/lib/loan-amounts";
import { loanPurposes } from "@/lib/loan-purposes";

const badges = [
  { icon: ShieldCheck, label: "Bank-Level Security" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: CheckCircle2, label: "Trusted Lenders" },
  { icon: Users, label: "50,000+ Canadians Served" },
  { icon: Zap, label: "Fast 2-Minute Application" },
];

const comparisonLinks = [
  { label: "Personal vs Payday Loans", href: "/resources/comparisons/payday-vs-personal-loans" },
  { label: "Secured vs Unsecured", href: "/resources/comparisons/secured-vs-unsecured-loans" },
  { label: "Fixed vs Variable Rate", href: "/resources/comparisons/fixed-vs-variable-rates" },
  { label: "Loans vs Credit Cards", href: "/resources/comparisons/loans-vs-credit-cards" },
  { label: "Online vs Traditional Lenders", href: "/resources/comparisons/online-vs-traditional-lenders" },
  { label: "Credit Union vs Bank", href: "/resources/comparisons/credit-union-vs-bank" },
];

const cityLinks = ["Toronto, ON", "Montreal, QC", "Calgary, AB", "Ottawa, ON", "Edmonton, AB", "Vancouver, BC"];

const trackClick = (label: string, slug: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "loan_application_click", {
      event_category: "engagement",
      event_label: label,
      event_source: `credit_score_${slug}`,
    });
  }
};

const CreditScoreArticleClient = ({ entry }: { entry: CreditScoreRange }) => {
  const otherRanges = getOtherCreditScores(entry.slug);
  const popularAmounts = [...loanAmounts].sort((a, b) => a.amount - b.amount).slice(0, 6);
  const popularPurposes = loanPurposes.slice(0, 6);

  const faqItems = [
    {
      question: `Can I get a loan with a ${entry.label} credit score?`,
      answer: `Yes. Canadian lenders offer personal loan options for the ${entry.label} range, though your rate and terms will reflect the ${entry.tier.toLowerCase()} tier your score falls into.`,
    },
    {
      question: `What interest rates can I expect with a ${entry.label} credit score?`,
      answer: entry.rateInfo,
    },
    {
      question: `How can I improve my ${entry.label} credit score?`,
      answer:
        "Pay every bill on time, keep your credit utilization below 30%, avoid closing old accounts, and check your credit report regularly for errors with Equifax and TransUnion Canada.",
    },
    {
      question: `Will applying affect my ${entry.label} credit score?`,
      answer:
        "Checking your rate through a soft credit check won't affect your score. Only a formal application and acceptance of a firm offer triggers a hard inquiry, which may cause a small, temporary dip.",
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
              { label: "Loans by Credit Score", href: "/loans/by-credit-score" },
              { label: `Score ${entry.label}` },
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <TrendingUp className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            Personal Loans for Credit Scores {entry.label} in Canada
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Explore personal loan options, interest rates, and terms for Canadians with {entry.tier.toLowerCase()} credit scores ({entry.label}).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs" style={{ color: "#94A3B8" }}>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Last updated: Jul 4, 2026
            </span>
            <span className="inline-flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5" /> Specialized lenders available
            </span>
            <span className="inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Quick decisions
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Soft credit check only
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
                rel="noopener noreferrer"
                onClick={() => trackClick("Credit Score Page Top CTA", entry.slug)}
              >
                Check Your Options
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/resources/tools">
                <Calculator className="w-4 h-4" />
                Calculate Payments
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
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
        </div>

        {/* Content */}
        <div className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            What a {entry.label} Credit Score Means in Canada
          </h2>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            {entry.whatItMeans}
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Loan Options Available for This Credit Range
          </h2>
          <ul className="space-y-2.5">
            {entry.loanOptions.map((option) => (
              <li key={option.name} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  <strong>{option.name}:</strong> {option.description}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Expected Interest Rates and Terms
          </h2>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            {entry.rateInfo}
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            How to Improve Your Chances of Approval
          </h2>
          <ul className="space-y-2.5">
            {entry.approvalTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {tip}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Tips for Improving Your Credit Score
          </h2>
          <ul className="space-y-2.5">
            {entry.creditTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {tip}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Alternative Options If You&apos;re Having Trouble Qualifying
          </h2>
          <ul className="space-y-2.5">
            {entry.alternatives.map((alt) => (
              <li key={alt} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {alt}
                </span>
              </li>
            ))}
          </ul>

          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            {entry.closing}
          </p>

          {/* Content Freshness */}
          <div className="rounded-2xl border p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm" style={{ borderColor: "#E2E8F0" }}>
            <span style={{ color: "#64748B" }}>
              <strong style={{ color: "#1F2937" }}>First Published:</strong> April 13, 2026
            </span>
            <span style={{ color: "#64748B" }}>
              <strong style={{ color: "#1F2937" }}>Last Updated:</strong> April 13, 2026
            </span>
            <span style={{ color: "#64748B" }}>
              <strong style={{ color: "#1F2937" }}>Reviewed by:</strong> Ask4Loan Editorial Team
            </span>
            <span style={{ color: "#64748B" }}>
              <strong style={{ color: "#1F2937" }}>Next Review:</strong> July 2026
            </span>
          </div>

          <div className="rounded-xl border-l-4 p-4" style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.
            </p>
          </div>
        </div>

        {/* Explore by Amount / Purpose */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
            <h3 className="font-bold text-base mb-4" style={{ color: "#1F2937" }}>
              Explore by Loan Amount
            </h3>
            <ul className="space-y-2 mb-3">
              {popularAmounts.map((a) => (
                <li key={a.slug}>
                  <Link href={`/loans/by-amount/${a.slug}`} className="text-sm hover:text-emerald-600" style={{ color: "#64748B" }}>
                    ${a.amount} Loans
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/loans/by-amount" className="text-sm font-medium" style={{ color: "#10B981" }}>
              Browse all amounts →
            </Link>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
            <h3 className="font-bold text-base mb-4" style={{ color: "#1F2937" }}>
              Explore by Loan Purpose
            </h3>
            <ul className="space-y-2 mb-3">
              {popularPurposes.map((p) => (
                <li key={p.slug}>
                  <Link href={`/loans/by-purpose/${p.slug}`} className="text-sm hover:text-emerald-600" style={{ color: "#64748B" }}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/loans/by-purpose" className="text-sm font-medium" style={{ color: "#10B981" }}>
              Explore all purposes →
            </Link>
          </div>
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

        {/* Loans for Other Credit Scores */}
        {otherRanges.length > 0 && (
          <div className="text-center mt-16">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
              Loans for Other Credit Scores
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherRanges.map((r) => (
                <Link
                  key={r.slug}
                  href={`/loans/by-credit-score/${r.slug}`}
                  className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-emerald-300"
                  style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
                >
                  Score {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="pt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6" style={{ color: "#1F2937" }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqItems} variant="flat" />
        </div>

        {/* Keep Exploring */}
        <div className="mt-16">
          <h2 className="text-lg font-bold text-center mb-2" style={{ color: "#1F2937" }}>
            Keep Exploring
          </h2>
          <p className="text-sm text-center mb-6" style={{ color: "#64748B" }}>
            Related pages to help you find the right loan faster.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Browse by Loan Amount
              </h3>
              <ul className="space-y-1.5">
                {popularAmounts.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/loans/by-amount/${a.slug}`} className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      ${a.amount} Loan
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Compare Your Options
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
                Loans in Top Cities
              </h3>
              <ul className="space-y-1.5">
                {cityLinks.map((city) => (
                  <li key={city}>
                    <Link href="/loans/by-location" className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      {city}
                    </Link>
                  </li>
                ))}
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

export default CreditScoreArticleClient;
