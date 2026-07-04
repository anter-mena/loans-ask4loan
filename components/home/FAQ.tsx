'use client';

import { Badge } from "@/components/ui/badge";
import FaqAccordion from "@/components/shared/FaqAccordion";
import Link from "next/link";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I get my loan?",
      answer: "Once approved, funds can be deposited into your bank account as soon as the next business day. Many of our partner lenders offer same-day funding for applications submitted early in the morning.",
    },
    {
      question: "Will checking my rate affect my credit score?",
      answer: "No! We use a soft credit pull to check your rate, which does not impact your credit score. Only when you accept a loan offer and proceed with a specific lender will a hard inquiry be made.",
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "We work with a wide network of lenders who accept all credit types. Whether you have excellent credit, fair credit, or are still building your credit history, we have options for you.",
    },
    {
      question: "How much can I borrow?",
      answer: "Our partner lenders offer personal loans ranging from $200 to $5,000. The amount you qualify for depends on your income, credit profile, and other factors.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! All terms, including interest rates and fees, are disclosed upfront before you accept any loan offer. We believe in complete transparency.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-level 256-bit SSL encryption to protect your data. Your information is never sold to third parties and is only shared with lenders you choose to work with.",
    },
    {
      question: "Do I need to be a Canadian citizen to apply?",
      answer: "You must be either a Canadian citizen or a permanent resident with a valid Social Security Number. You must also be at least 18 years old.",
    },
    {
      question: "Which provinces do you serve?",
      answer: "We connect borrowers with lenders in most Canadian provinces. Loan availability and terms may vary by province due to local regulations.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            >
              FAQ
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            Frequently Asked Questions About Personal Loans in CANADA
          </h2>
          <p
            className="mt-4 leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            Find answers to common questions about our loan process, rates, and requirements.
          </p>
        </div>

        {/* FAQ Accordion */}
        <FaqAccordion items={faqs} />

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base mb-4" style={{ color: "#64748B" }}>
            Still have questions?
          </p>
          <Link href='/contact'>
            <button
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 hover:bg-[#059669] hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
