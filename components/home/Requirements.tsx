'use client';

import { Check, ArrowRight, DollarSign, FileCheck, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Requirements = () => {
  const requirements = [
    "Be a CA citizen or permanent resident, and over 18",
    "Have a valid checking account in your name",
    "Provide a valid email address and phone number",
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Loan Amounts",
      value: "$200 – $5,000",
      desc: "Borrow what you need, nothing more",
    },
    {
      icon: FileCheck,
      title: "Requirements",
      value: "Minimal",
      desc: "CA citizen, 18+, checking account",
    },
    {
      icon: Shield,
      title: "Credit Check",
      value: "Soft Pull Only",
      desc: "No impact to your credit score",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Requirements */}
          <div className="order-1 lg:order-1">
            <div className="flex justify-center lg:justify-start mb-4">
              <Badge
                variant="secondary"
                className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
              >
                Requirements
              </Badge>
            </div>
            <h2 className="text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4">
              <span style={{ color: "#1E293B" }}>
                Personal Loan Requirements:{" "}
              </span>
              <span style={{ color: "#10B981" }}>Simple & Fast</span>
            </h2>
            <p
              className="text-center lg:text-left mb-6 sm:mb-8 leading-relaxed"
              style={{ color: "#64748B" }}
            >
              We&apos;ve simplified the borrowing process to make it accessible for everyone. No complicated paperwork, no lengthy approval times.
            </p>

            {/* Requirements List */}
            <div className="space-y-4 mb-6 sm:mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                  >
                    <Check className="w-4 h-4" style={{ color: "#10B981" }} />
                  </div>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "#1F2937" }}
                  >
                    {req}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'loan_application_click', {
                    event_category: 'engagement',
                    event_label: 'Requirements CTA Button Desktop',
                    event_source: 'requirements_section_desktop'
                  });
                }
              }}
              className="hidden lg:inline-block"
            >
              <button
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white active:scale-95"
                style={{
                  backgroundColor: "#10B981",
                  color: "#FFFFFF",
                }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </a>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-4 order-2 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group rounded-2xl p-4 sm:p-6 border flex items-center gap-4 sm:gap-6 shadow-sm transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                }}
              >
                {/* Icon */}
                <div
                  className="feature-icon-container w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                  <feature.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
                    style={{ color: "#10B981" }}
                  />
                </div>

                {/* Content */}
                <div>
                  <p
                    className="text-xs sm:text-sm mb-1"
                    style={{ color: "#64748B" }}
                  >
                    {feature.title}
                  </p>
                  <p
                    className="text-lg sm:text-xl font-bold mb-1"
                    style={{ color: "#1F2937" }}
                  >
                    {feature.value}
                  </p>
                  <p
                    className="text-xs sm:text-sm"
                    style={{ color: "#64748B" }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-8 lg:hidden flex justify-center">
          <a
            href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'loan_application_click', {
                  event_category: 'engagement',
                  event_label: 'Requirements CTA Button',
                  event_source: 'requirements_section'
                });
              }
            }}
            className="inline-block"
          >
            <button
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              Apply Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover .feature-icon-container {
          background-color: rgba(16, 185, 129, 0.2) !important;
        }
        .feature-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        button:hover {
          background-color: #059669 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Requirements;
