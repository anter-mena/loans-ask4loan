'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { HelpCircle, Search, ArrowRight } from "lucide-react";
import FaqAccordion, { FaqItem } from "@/components/shared/FaqAccordion";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustBadges from "@/components/shared/TrustBadges";
import SocialProof from "@/components/shared/SocialProof";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

const categories: FaqCategory[] = [
  {
    title: "General",
    items: [
      {
        question: "What is a personal loan?",
        answer: "A personal loan is a fixed amount of money you borrow and repay in regular installments over an agreed term, usually with interest. Unlike a mortgage or auto loan, it isn't tied to a specific purchase, so you can use the funds for almost anything.",
      },
      {
        question: "How much can I borrow with Ask4Loan?",
        answer: "Our partner lenders offer personal loans ranging from $200 to $5,000. The exact amount you're offered depends on factors like your income, credit profile, and the lender you're matched with.",
      },
      {
        question: "What can I use a personal loan for?",
        answer: "Most personal loans can be used for almost any purpose, including debt consolidation, emergency expenses, car repairs, medical bills, or unexpected bills. Your lender may ask what the loan is for, but it typically won't restrict how you spend the funds once approved.",
      },
      {
        question: "How long does it take to get a personal loan?",
        answer: "Once approved, funds can be deposited into your bank account as soon as the next business day. Many of our partner lenders offer same-day funding for applications submitted early in the morning.",
      },
      {
        question: "Are personal loans safe?",
        answer: "Yes. We use bank-level 256-bit SSL encryption to protect your personal information, and your details are only shared with the lenders you choose to proceed with, never sold to third parties. Always read the terms of any offer carefully before accepting, and only borrow what you can comfortably repay.",
      },
    ],
  },
  {
    title: "Eligibility",
    items: [
      {
        question: "What credit score do I need to qualify?",
        answer: "There's no single minimum credit score required to check your rate. We work with a network of lenders who consider all credit types, whether you have excellent credit, fair credit, or are still building your credit history.",
      },
      {
        question: "Can I get a personal loan with bad credit?",
        answer: "Yes. Many of our partner lenders specialize in working with borrowers who have less-than-perfect credit. Your rate and terms may differ from someone with excellent credit, but a lower credit score doesn't automatically disqualify you.",
      },
      {
        question: "What documents do I need to apply?",
        answer: "Typically you'll need a valid government-issued ID, proof of income, an active checking account in your name, and a valid email address and phone number. Some lenders may request additional documents depending on your situation.",
      },
      {
        question: "Can I get a personal loan if I'm self-employed?",
        answer: "Yes. Self-employed applicants can qualify, though you may be asked to provide additional proof of income, such as recent bank statements, since you won't have traditional pay stubs.",
      },
      {
        question: "What income do I need to qualify?",
        answer: "There's no fixed income threshold across all lenders, requirements vary based on the lender and the loan amount you're requesting. Generally you'll need a steady source of income and an active checking account to be considered.",
      },
      {
        question: "Can I get a loan if I'm new to Canada?",
        answer: "You need to be a Canadian citizen or permanent resident, at least 18 years old, to apply through Ask4Loan. Some lenders may have additional requirements around how long you've held a Canadian bank account or credit history, which can vary by lender.",
      },
    ],
  },
  {
    title: "Rates & Terms",
    items: [
      {
        question: "What interest rates can I expect?",
        answer: "Interest rates vary by lender and depend on factors like your credit profile, loan amount, and term length. Any rate and fees you're offered are disclosed clearly before you accept a loan, so you can compare offers with no obligation.",
      },
      {
        question: "Are personal loan rates fixed or variable?",
        answer: "This depends on the lender. Most of our partner lenders offer fixed-rate loans, meaning your interest rate and payment stay the same for the life of the loan, but always confirm the rate type on the specific offer you're reviewing.",
      },
      {
        question: "What loan terms are available?",
        answer: "Loan terms vary by lender and loan amount. You'll see the exact repayment period, along with your rate and total cost, clearly laid out in your offer before you accept anything.",
      },
      {
        question: "Are there any fees I should know about?",
        answer: "No hidden fees! Any fees a lender charges are disclosed upfront in your loan offer, before you agree to anything. We believe in complete transparency.",
      },
      {
        question: "What's the difference between APR and interest rate?",
        answer: "Your interest rate is the cost of borrowing the principal, expressed as a percentage. APR (Annual Percentage Rate) includes the interest rate plus any additional lender fees, giving you a fuller picture of the true annual cost. When comparing offers, APR is usually the more accurate number to look at.",
      },
    ],
  },
  {
    title: "Application",
    items: [
      {
        question: "How long does the application process take?",
        answer: "Our application takes just a few minutes to complete online. After you submit your information, you'll typically see your matched offers right away, with no obligation to accept any of them.",
      },
      {
        question: "Will applying affect my credit score?",
        answer: "No! We use a soft credit pull to check your rate, which does not impact your credit score. Only when you accept a loan offer and proceed with a specific lender will a hard inquiry be made.",
      },
      {
        question: "Can I apply with a co-signer?",
        answer: "Co-signer availability depends on the individual lender you're matched with, not all lenders in our network offer co-signed loans. If having a co-signer would help your application, it's worth mentioning when you review your offers.",
      },
      {
        question: "What happens after I apply?",
        answer: "We match you with offers from our network of lenders based on your profile. You can review the rates, terms, and fees for each offer with no obligation, and choose the one that works best for you before proceeding with that lender directly.",
      },
      {
        question: "Can I apply for multiple loans at once?",
        answer: "Our process is designed to show you multiple matched offers from a single application, so there's no need to submit separate applications to compare options. Applying to several lenders separately outside our network could result in multiple hard credit inquiries.",
      },
    ],
  },
  {
    title: "Repayment",
    items: [
      {
        question: "How do I make payments on my personal loan?",
        answer: "Once you accept an offer, your chosen lender sets up your repayment method, usually automatic withdrawals from your checking account on a set schedule. Exact payment options depend on the lender.",
      },
      {
        question: "Can I pay off my loan early?",
        answer: "This depends on your lender's terms, which will be disclosed in your loan offer. Many lenders allow early repayment without penalty, but always check the specific terms before accepting an offer if paying it off early matters to you.",
      },
      {
        question: "What happens if I miss a payment?",
        answer: "Missing a payment can result in late fees and may affect your credit score, depending on your lender's policy. If you think you'll have trouble making a payment, contact your lender as soon as possible, many are willing to work with you on a revised plan.",
      },
      {
        question: "Can I change my payment due date?",
        answer: "Some lenders allow you to adjust your payment due date to better align with your pay schedule. This isn't guaranteed across all lenders, so check with your specific lender directly once you've accepted an offer.",
      },
      {
        question: "What if I can't afford my payments?",
        answer: "Reach out to your lender directly and as early as possible, many offer hardship options like adjusted payment plans. Avoiding the issue can lead to late fees and credit score damage, so it's always better to communicate early.",
      },
    ],
  },
  {
    title: "Comparison",
    items: [
      {
        question: "Personal loan vs. credit card: which is better?",
        answer: "It depends on your needs. Personal loans typically offer a fixed rate, fixed term, and predictable monthly payment, which can suit a one-time expense or debt consolidation. Credit cards offer ongoing, revolving credit but often carry higher rates if you carry a balance.",
      },
      {
        question: "Personal loan vs. home equity loan: what's the difference?",
        answer: "A personal loan is typically unsecured and doesn't require collateral, while a home equity loan is secured against your home and generally requires built-up equity. Home equity loans can offer lower rates but put your home at risk; personal loans don't carry that risk but may have higher rates.",
      },
      {
        question: "Should I get a personal loan or a line of credit?",
        answer: "A personal loan gives you a lump sum upfront with a fixed repayment schedule, which suits a specific, one-time expense. A line of credit gives you ongoing access to funds up to a limit, which you can draw from as needed, better suited to variable or recurring expenses.",
      },
      {
        question: "Are online lenders or banks better for personal loans?",
        answer: "Both have trade-offs. Online lenders, like the network Ask4Loan connects you with, often offer faster approvals, more flexibility across credit profiles, and a fully online process. Traditional banks may offer relationship perks if you're already a customer, but often have stricter criteria and slower processing.",
      },
      {
        question: "Should I use a credit union for my personal loan?",
        answer: "Credit unions can be a good option if you're already a member, sometimes offering competitive rates and more personalized service. They may, however, have stricter membership requirements and slower approval processes compared to the online lender network Ask4Loan connects you with.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

const FAQClient = () => {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query]);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Oval Gradient Background */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "FAQ" },
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <HelpCircle className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: "#1F2937" }}
          >
            Frequently Asked Questions — Canada
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#64748B" }}
          >
            Find answers to common questions about personal loans in Canada. Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="underline underline-offset-4" style={{ color: "#10B981" }}>Contact us</Link> for personalized assistance.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mb-6">
          <TrustBadges />
        </div>

        {/* Social Proof */}
        <div className="flex justify-center mb-10">
          <SocialProof />
        </div>

        {/* Search */}
        <div className="relative max-w-sm mx-auto mb-12 sm:mb-16">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
            style={{ color: "#94A3B8" }}
          />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="pl-8"
            style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
          />
        </div>

        {/* Categories */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-12 sm:space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.title}>
                <h2
                  className="text-xl sm:text-2xl font-bold mb-6"
                  style={{ color: "#1F2937" }}
                >
                  {category.title}
                </h2>
                <FaqAccordion items={category.items} variant="flat" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm" style={{ color: "#64748B" }}>
            No questions match &quot;{query}&quot;. Try a different search or{" "}
            <Link href="/contact" className="underline underline-offset-4" style={{ color: "#10B981" }}>
              contact us
            </Link>
            .
          </p>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-sm sm:text-base mb-4" style={{ color: "#64748B" }}>
            Still have questions?
          </p>
          <Button
            asChild
            size="lg"
            className="ring-2 ring-emerald-200 ring-offset-2 ring-offset-white shadow-lg shadow-emerald-200/50 hover:bg-[#059669]! hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
          >
            <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'loan_application_click', {
                    event_category: 'engagement',
                    event_label: 'FAQ Page CTA Button',
                    event_source: 'faq_page',
                  });
                }
              }}
            >
              Apply Now
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQClient;
