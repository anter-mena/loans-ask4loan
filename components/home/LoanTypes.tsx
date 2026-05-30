'use client';

import {
  ArrowRight,
  BookOpen,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from 'next-intl';

const LoanTypes = () => {
  const t = useTranslations('homepage.loanTypes');

  const loanCategories = [
    {
      title: t('categories.popular.title'),
      items: [
        {
          name: t('categories.popular.items.personal.name'),
          desc: t('categories.popular.items.personal.desc'),
          href: "#",
        },
        {
          name: t('categories.popular.items.badCredit.name'),
          desc: t('categories.popular.items.badCredit.desc'),
          href: "#",
        },
        {
          name: t('categories.popular.items.emergency.name'),
          desc: t('categories.popular.items.emergency.desc'),
          href: "#",
        },
        {
          name: t('categories.popular.items.debtConsolidation.name'),
          desc: t('categories.popular.items.debtConsolidation.desc'),
          href: "#",
        },
      ],
    },
    {
      title: t('categories.provinces.title'),
      items: [
        {
          name: t('categories.provinces.items.ontario.name'),
          desc: t('categories.provinces.items.ontario.desc'),
          href: "#",
        },
        {
          name: t('categories.provinces.items.quebec.name'),
          desc: t('categories.provinces.items.quebec.desc'),
          href: "#",
        },
        {
          name: t('categories.provinces.items.bc.name'),
          desc: t('categories.provinces.items.bc.desc'),
          href: "#",
        },
        {
          name: t('categories.provinces.items.alberta.name'),
          desc: t('categories.provinces.items.alberta.desc'),
          href: "#",
        },
      ],
    },
    {
      title: t('categories.resources.title'),
      items: [
        {
          name: t('categories.resources.items.creditGuide.name'),
          desc: t('categories.resources.items.creditGuide.desc'),
          icon: BookOpen,
          href: "#",
        },
        {
          name: t('categories.resources.items.howLoansWork.name'),
          desc: t('categories.resources.items.howLoansWork.desc'),
          icon: CreditCard,
          href: "#",
        },
        {
          name: t('categories.resources.items.faq.name'),
          desc: t('categories.resources.items.faq.desc'),
          icon: HelpCircle,
          href: "#",
        },
      ],
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            >
              {t('badge')}
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            {t('title')}
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            {t('description')}
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {loanCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: "#1F2937" }}
              >
                {category.title}
              </h3>

              <div className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-xl transition-colors group"
                    style={{ backgroundColor: "rgba(248, 250, 252, 0.5)" }}
                  >
                    <div>
                      <p
                        className="item-name font-medium transition-colors text-sm sm:text-base group-hover:text-[#10B981]"
                        style={{ color: "#1F2937" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-xs sm:text-sm"
                        style={{ color: "#64748B" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight
                      className="item-arrow w-4 h-4 transition-colors group-hover:text-[#10B981]"
                      style={{ color: "#64748B" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base mb-4" style={{ color: "#64748B" }}>
            {t('ctaQuestion')}
          </p>
          <a
            href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'loan_application_click', {
                  event_category: 'engagement',
                  event_label: 'Loan Types CTA Button',
                  event_source: 'loan_types_section'
                });
              }
            }}
            className="inline-block"
          >
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              {t('cta')}
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        a:hover {
          background-color: rgba(16, 185, 129, 0.1) !important;
        }
        button:hover {
          background-color: #059669 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default LoanTypes;
