'use client';

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  DollarSign,
  Lock,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SocialProof from "@/components/shared/SocialProof";
import FaqAccordion from "@/components/shared/FaqAccordion";
import PurposeLoanCalculator from "@/components/shared/PurposeLoanCalculator";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import {
  creditTiers,
  monthlyPayment,
  getOtherLoanAmounts,
  CRIMINAL_RATE_APR,
  type LoanAmountEntry,
} from "@/lib/loan-amounts";

const badges = [
  { icon: ShieldCheck, label: "Bank-Level Security" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: CheckCircle2, label: "Trusted Lenders" },
  { icon: Users, label: "50,000+ Canadians Served" },
  { icon: Zap, label: "Fast 2-Minute Application" },
];

const commonReasons = [
  "A car repair or towing bill",
  "An emergency utility bill",
  "A rent or mortgage shortfall",
  "A short-term gap until payday",
  "A dental or vision expense not covered by insurance",
  "A security deposit on a new apartment",
];

const eligibilityRequirements = [
  "Age 18 or older (19+ in some provinces)",
  "Canadian residency and a government-issued ID",
  "An active bank account for e-Transfer or direct deposit",
  "Verifiable monthly income — employment, self-employment, EI, CPP, OAS, or support payments",
];

const speedTable = [
  { when: "Weekday morning before 11am", result: "Same-day, often within 2-4 hours" },
  { when: "Weekday afternoon or evening", result: "Same-day or next business morning" },
  { when: "Weekend or statutory holiday", result: "Next business day" },
];

const checklist = (amount: number) => [
  `Confirm you actually need $${amount} — a smaller amount costs less, a larger amount means less scrambling later`,
  "Check the lender is licensed in your province — provincial regulators (FSRA in Ontario, Consumer Protection BC, and others) publish licensee lists",
  "Compare 2-3 offers — even a small APR difference adds up over the life of the loan",
  "Read the fine print before you apply — origination fees, NSF fees, and prepayment penalties can change the real cost",
  "Have a repayment plan — know which upcoming paycheque covers the payment before you sign",
];

const purposeLinks = [
  "Adoption Expenses",
  "Appliance Replacement",
  "Baby Expenses",
  "Back to School",
  "Birthday & Special Occasions",
  "Business Startup Costs",
];

const creditScoreLinks = [
  "300-559 (Poor)",
  "560-659 (Fair)",
  "660-724 (Good)",
  "725-759 (Very Good)",
  "760-900 (Excellent)",
];

const comparisonLinks = [
  { label: "Personal vs Payday Loan", href: "/resources/comparisons/payday-vs-personal-loans" },
  { label: "Secured vs Unsecured", href: "/resources/comparisons/secured-vs-unsecured-loans" },
  { label: "Fixed vs Variable Rate", href: "/resources/comparisons/fixed-vs-variable-rates" },
  { label: "Loans vs Line of Credit", href: "/resources/comparisons/personal-loans-vs-loc" },
  { label: "Online vs Traditional Lenders", href: "/resources/comparisons/online-vs-traditional-lenders" },
];

const cityLinks = ["Toronto, ON", "Montreal, QC", "Calgary, AB", "Ottawa, ON", "Edmonton, AB", "Vancouver, BC"];

const trackClick = (label: string, slug: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "loan_application_click", {
      event_category: "engagement",
      event_label: label,
      event_source: `loan_amount_${slug}`,
    });
  }
};

const AmountLoanClient = ({ entry }: { entry: LoanAmountEntry }) => {
  const { amount, slug } = entry;
  const otherAmounts = getOtherLoanAmounts(slug);

  const faqItems = [
    {
      question: `Can I get a $${amount} loan with no credit check?`,
      answer:
        "Most Canadian lenders use a soft credit-check pre-approval that doesn't affect your score, though the final approval before funding usually involves a hard check. Lenders advertising a truly \"no credit check\" loan tend to charge much higher rates to offset their risk.",
    },
    {
      question: "Will applying hurt my credit score?",
      answer:
        "Pre-qualification uses a soft pull that never affects your credit. Only a formal application and acceptance of a firm offer triggers a hard inquiry, which may cause a small, temporary dip.",
    },
    {
      question: `Can I pay back $${amount} early without penalty?`,
      answer:
        "Most personal loans allow early repayment without penalty, but confirm this with your lender before signing — some lenders deduct a small early-payment fee.",
    },
    {
      question: `What's the difference between a $${amount} personal loan and a payday loan?`,
      answer: `A personal loan is repaid in installments over months at a rate capped by law at ${CRIMINAL_RATE_APR}% APR, while a payday loan is due in full on your next payday and can carry an effective APR well over 300% once annualized.`,
    },
    {
      question: `How quickly can I get a $${amount} loan?`,
      answer:
        "Many online lenders can approve you within minutes and fund your account by e-Transfer the same business day, provided you apply before their daily cut-off time.",
    },
    {
      question: `What are the requirements for a $${amount} loan?`,
      answer:
        "You'll need to be of legal age in your province, a Canadian resident with a valid ID, have an active bank account, and show verifiable income. Most lenders don't require perfect credit.",
    },
    {
      question: `Can I get a $${amount} loan with bad credit?`,
      answer:
        "Yes. Several Canadian lenders specialize in smaller loans for borrowers with less-than-perfect credit, though your APR will typically land at the higher end of the legal range.",
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
              { label: "Loans by Amount", href: "/loans/by-amount" },
              { label: `I Need to Borrow $${amount} Today` },
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <DollarSign className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            I Need to Borrow ${amount} Today — Here&apos;s How (Canada, 2026)
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Need to borrow ${amount} today in Canada? Apply online in 2 minutes for same-day funding. Bad credit OK, APR capped at {CRIMINAL_RATE_APR}%.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs" style={{ color: "#94A3B8" }}>
            <span className="inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Same-day funding
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Quick application
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
                onClick={() => trackClick("Amount Page Top CTA", slug)}
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

          <div className="flex justify-center">
            <SocialProof />
          </div>

          <div id="calculator" className="mt-8 flex justify-center scroll-mt-24">
            <PurposeLoanCalculator
              purposeLabel={`$${amount}`}
              title={`Estimate Your $${amount} Payment`}
              defaultAmount={amount}
              defaultTerm={24}
              minAmount={100}
              maxAmount={5000}
              disclaimer="Estimate at 19.99% APR. Actual rate may vary (5%-35% APR)."
              guideSlug={`amount-${slug}`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5">
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            If you need to borrow ${amount} today in Canada, you have real options. Same-day personal loans are widely available online from lenders and brokers that use a soft credit-check pre-approval, meaning you can compare offers with no impact to your credit score and no in-person bank appointment.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            How to Borrow ${amount} Today: The 3-Step Path
          </h2>
          <div className="relative my-2">
            <div className="absolute left-3.25 top-3 bottom-3 w-0.5" style={{ backgroundColor: "#D1FAE5" }} />
            <div className="space-y-6">
              {[
                {
                  title: "Apply online (2-3 minutes)",
                  body: "Use a Canadian lender or broker that offers soft credit-check pre-approval — no impact to your credit score.",
                },
                {
                  title: "Get a decision in minutes",
                  body: "Most reputable lenders return an answer the same day, often within an hour during business hours.",
                },
                {
                  title: "Receive funds by Interac e-Transfer",
                  body: `Once approved and verified, $${amount} lands in your chequing account — typically same-day if you apply before mid-afternoon on a business day.`,
                },
              ].map((step, index) => (
                <div key={step.title} className="relative flex gap-4">
                  <span
                    className="relative z-10 shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
                  >
                    {index + 1}
                  </span>
                  <div className="flex-1 pb-1">
                    <h3 className="font-bold text-base mb-1" style={{ color: "#1F2937" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Why ${amount} Is a Common &quot;Today&quot; Amount
          </h2>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            ${amount} is one of the most-searched short-term borrowing amounts because it lines up closely with the cost of:
          </p>
          <ul className="space-y-2.5">
            {commonReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {reason}
                </span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            It&apos;s large enough to actually solve the problem, small enough that you can pay it off without restructuring your budget.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            What a ${amount} Loan Costs in Canada
          </h2>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            Under federal law, the Criminal Rate of Interest caps personal loan APRs at {CRIMINAL_RATE_APR}% — legitimate Canadian lenders cannot charge more than that, no matter your credit profile.
          </p>
          <div className="rounded-2xl border overflow-hidden my-2" style={{ borderColor: "#E2E8F0" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC" }}>
                    <th className="text-left font-semibold p-4" style={{ color: "#1F2937" }}>
                      Credit profile
                    </th>
                    <th className="text-left font-semibold p-4" style={{ color: "#10B981" }}>
                      Typical APR range
                    </th>
                    <th className="text-left font-semibold p-4" style={{ color: "#10B981" }}>
                      Monthly payment on ${amount} (12 mo)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {creditTiers.map((tier, index) => {
                    const lowPayment = monthlyPayment(amount, tier.minApr, 12);
                    const highPayment = monthlyPayment(amount, tier.maxApr, 12);
                    return (
                      <tr key={tier.label} style={{ borderTop: index === 0 ? "none" : "1px solid #E2E8F0" }}>
                        <td className="p-4 font-medium whitespace-nowrap" style={{ color: "#1F2937" }}>
                          {tier.label}
                        </td>
                        <td className="p-4" style={{ color: "#64748B" }}>
                          {tier.minApr}% - {tier.maxApr}%
                        </td>
                        <td className="p-4" style={{ color: "#64748B" }}>
                          ${Math.round(lowPayment)} - ${Math.round(highPayment)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            Sample math for a mid-range 20% APR on ${amount}: a 6-month term costs about ${Math.round(monthlyPayment(amount, 20, 6))}/month, a 12-month term about ${Math.round(monthlyPayment(amount, 20, 12))}/month, and a 24-month term about ${Math.round(monthlyPayment(amount, 20, 24))}/month — longer terms lower the payment but increase total interest paid.
          </p>
          <div className="rounded-xl border-l-4 p-4" style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              Avoid payday loans for ${amount}: a typical payday loan costs $15-$21 per $100 borrowed for a two-week term, which annualizes to roughly 390%-546% APR. A personal loan at even the {CRIMINAL_RATE_APR}% legal maximum is dramatically cheaper.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Who Qualifies for a ${amount} Loan in Canada Today
          </h2>
          <ul className="space-y-2.5">
            {eligibilityRequirements.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            You do <strong>not</strong> need perfect credit. Several Canadian lenders specialize in small personal loans for borrowers with accessible credit, including those rebuilding after a consumer proposal or bankruptcy.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            How Fast Can You Actually Get ${amount}?
          </h2>
          <div className="rounded-2xl border overflow-hidden my-2" style={{ borderColor: "#E2E8F0" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC" }}>
                    <th className="text-left font-semibold p-4" style={{ color: "#1F2937" }}>
                      When you apply
                    </th>
                    <th className="text-left font-semibold p-4" style={{ color: "#10B981" }}>
                      When funds typically land
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {speedTable.map((row, index) => (
                    <tr key={row.when} style={{ borderTop: index === 0 ? "none" : "1px solid #E2E8F0" }}>
                      <td className="p-4 font-medium whitespace-nowrap" style={{ color: "#1F2937" }}>
                        {row.when}
                      </td>
                      <td className="p-4" style={{ color: "#64748B" }}>
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            Speed depends on three things: how quickly you complete identity verification, whether your bank supports instant Interac e-Transfer, and the lender&apos;s daily funding cut-off time.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2" style={{ color: "#1F2937" }}>
            Smart Borrowing Checklist Before You Click &quot;Apply&quot;
          </h2>
          <ul className="space-y-2.5">
            {checklist(amount).map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6" style={{ color: "#1F2937" }}>
              ${amount} Loan FAQ — Canada
            </h2>
            <FaqAccordion items={faqItems} variant="flat" />
          </div>

          <div className="rounded-xl border-l-4 p-4 mt-6" style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.
            </p>
          </div>
        </div>

        {/* Ready to Apply */}
        <div
          className="text-center rounded-2xl p-8 mt-16 border"
          style={{ backgroundColor: "#F0FDF9", borderColor: "#D1FAE5" }}
        >
          <h2 className="text-lg font-bold mb-2" style={{ color: "#1F2937" }}>
            Ready to Borrow ${amount} Today?
          </h2>
          <p className="text-sm mb-5" style={{ color: "#64748B" }}>
            Check your rate in under 2 minutes with a soft credit check — no impact, no obligation. Compare offers from Canadian lenders that fund ${amount} same-day.
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
              onClick={() => trackClick("Amount Page Ready to Apply", slug)}
            >
              Check Your Rate Now
              <ArrowRight />
            </a>
          </Button>
        </div>

        {/* Explore by Purpose / Credit Score */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
            <h3 className="font-bold text-base mb-4" style={{ color: "#1F2937" }}>
              Explore by Loan Purpose
            </h3>
            <ul className="space-y-2 mb-3">
              {purposeLinks.map((label) => (
                <li key={label}>
                  <Link href="/loans/by-purpose" className="text-sm hover:text-emerald-600" style={{ color: "#64748B" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/loans/by-purpose" className="text-sm font-medium" style={{ color: "#10B981" }}>
              View all purposes →
            </Link>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
            <h3 className="font-bold text-base mb-4" style={{ color: "#1F2937" }}>
              Explore by Credit Score
            </h3>
            <ul className="space-y-2 mb-3">
              {creditScoreLinks.map((label) => (
                <li key={label}>
                  <Link href="/loans/by-credit-score" className="text-sm hover:text-emerald-600" style={{ color: "#64748B" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/loans/by-credit-score" className="text-sm font-medium" style={{ color: "#10B981" }}>
              View all credit ranges →
            </Link>
          </div>
        </div>

        {/* Other Loan Amounts */}
        {otherAmounts.length > 0 && (
          <div className="text-center mt-16">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
              Other Loan Amounts
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherAmounts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/loans/by-amount/${other.slug}`}
                  className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-emerald-300"
                  style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
                >
                  ${other.amount}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Keep Exploring */}
        <div className="mt-16">
          <h2 className="text-lg font-bold text-center mb-6" style={{ color: "#1F2937" }}>
            Keep Exploring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#1F2937" }}>
                Browse by Credit Score
              </h3>
              <ul className="space-y-1.5">
                {creditScoreLinks.map((label) => (
                  <li key={label}>
                    <Link href="/loans/by-credit-score" className="text-xs hover:text-emerald-600" style={{ color: "#64748B" }}>
                      {label}
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

export default AmountLoanClient;
