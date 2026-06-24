'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

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

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

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
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={index}
                className="group rounded-xl border transition-all duration-500 ease-out overflow-hidden"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                  boxShadow: isOpen
                    ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between transition-all duration-300 ease-out focus:outline-none border-none"
                  style={{
                    color: "#1F2937",
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4 transition-colors duration-300 group-hover:text-slate-600">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-1">
                    <ChevronDown
                      className={`w-5 h-5 transition-all duration-500 ease-out text-slate-400 group-hover:text-slate-600 ${
                        isOpen ? "rotate-180 scale-105 text-emerald-500" : "rotate-0 scale-100"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-500 ease-out ${
                    isOpen
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }`}
                  style={{
                    overflow: "hidden",
                    transformOrigin: "top",
                  }}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ease-out ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        color: "#64748B",
                        transitionDelay: isOpen ? "150ms" : "0ms",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
