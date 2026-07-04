'use client';

import {
  ArrowRight,
  BookOpen,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LoanTypes = () => {
  const loanCategories = [
    {
      title: "Popular Loan Types",
      items: [
        {
          name: "Personal Loans",
          desc: "Flexible terms up to $5,000",
          href: "/loans/by-type/personal-loans",
        },
        {
          name: "Bad Credit Loans",
          desc: "All credit scores welcome",
          href: "/loans/by-type/bad-credit-loans",
        },
        {
          name: "Emergency Loans",
          desc: "Fast funding when you need it",
          href: "/loans/by-type/emergency-loans",
        },
        {
          name: "Debt Consolidation",
          desc: "Simplify your payments",
          href: "/loans/by-type/debt-consolidation-loans",
        },
      ],
    },
    {
      title: "Loans by Province",
      items: [
        {
          name: "Ontario Loans",
          desc: "Toronto, Ottawa & more",
          href: "/loans/by-location/ontario",
        },
        {
          name: "Quebec Loans",
          desc: "Montreal, Quebec City & more",
          href: "/loans/by-location/quebec",
        },
        {
          name: "British Columbia Loans",
          desc: "Vancouver, Victoria & more",
          href: "/loans/by-location/british-columbia",
        },
        {
          name: "Alberta Loans",
          desc: "Calgary, Edmonton & more",
          href: "/loans/by-location/alberta",
        },
      ],
    },
    {
      title: "Helpful Resources",
      items: [
        {
          name: "Credit Score Guide",
          desc: "Learn what lenders look for",
          icon: BookOpen,
          href: "/loans/by-credit-score",
        },
        {
          name: "How Loans Work",
          desc: "Complete guide",
          icon: CreditCard,
          href: "/resources/guides/personal-loans",
        },
        {
          name: "FAQ",
          desc: "Common questions answered",
          icon: HelpCircle,
          href: "/resources/faq",
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
              Loan Types
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            Find the Right Loan for You
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            Explore our comprehensive resources to make informed borrowing decisions
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
            Ready to get started?
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
              Get Your Loan Today
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
