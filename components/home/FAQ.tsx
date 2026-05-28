'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const FAQ = () => {
  const t = useTranslations('homepage.faq');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: t('questions.q1.question'),
      answer: t('questions.q1.answer'),
    },
    {
      question: t('questions.q2.question'),
      answer: t('questions.q2.answer'),
    },
    {
      question: t('questions.q3.question'),
      answer: t('questions.q3.answer'),
    },
    {
      question: t('questions.q4.question'),
      answer: t('questions.q4.answer'),
    },
    {
      question: t('questions.q5.question'),
      answer: t('questions.q5.answer'),
    },
    {
      question: t('questions.q6.question'),
      answer: t('questions.q6.answer'),
    },
    {
      question: t('questions.q7.question'),
      answer: t('questions.q7.answer'),
    },
    {
      question: t('questions.q8.question'),
      answer: t('questions.q8.answer'),
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
              {t('badge')}
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            {t('title')}
          </h2>
          <p
            className="mt-4 leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            {t('description')}
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
            {t('ctaQuestion')}
          </p>
          <Link href='/contact'>
            <button
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 hover:bg-[#059669] hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              {t('cta')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
