'use client';

import { FileText, GitCompare, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Quick Application",
      description: "Fill out our simple online form in just 2 minutes. No paperwork, no hassle.",
    },
    {
      number: "02",
      icon: GitCompare,
      title: "Compare Offers",
      description: "We match you with personalized loan offers from our network of trusted lenders.",
    },
    {
      number: "03",
      icon: Wallet,
      title: "Get Your Funds",
      description: "Choose the best offer for you and receive funds directly to your bank account.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            >
              Simple Process
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            How to Get a Personal Loan in 3 Easy Steps
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            Our streamlined process gets you from application to funding faster than traditional banks.
          </p>
        </div>

        {/* Steps Grid with Background Line */}
        <div className="relative">
          {/* Continuous Background Line - Desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.2)" }}
          />

          {/* Continuous Background Line - Mobile (Vertical) */}
          <div
            className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 transform -translate-x-1/2"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.2)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative overflow-visible">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card group relative rounded-2xl p-6 sm:p-8 shadow-lg border transition-all duration-300 overflow-visible cursor-pointer"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                }}
              >
                {/* Step Number - Top Right - Minimal z-index to stay within card context but below navbar */}
                <div className="absolute -top-4 right-6 sm:right-8 z-[1] pointer-events-none">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm shadow-md"
                    style={{
                      backgroundColor: "#1F2937",
                      color: "#FFFFFF",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icon - Background always visible */}
                <div className="mt-4 mb-6">
                  <div
                    className="icon-container w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                    }}
                  >
                    <step.icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: "#10B981" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-lg sm:text-xl font-bold mb-3"
                  style={{ color: "#1F2937" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm mb-4" style={{ color: "#64748B" }}>
            Ready to get started?
          </p>
          <a
            href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'loan_application_click', {
                  event_category: 'engagement',
                  event_label: 'How It Works CTA Button',
                  event_source: 'how_it_works_section'
                });
              }
            }}
            className="inline-block"
          >
            <button
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              Start Your Application
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .step-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-4px);
        }
        .step-card:hover .icon-container {
          background-color: rgba(16, 185, 129, 0.15) !important;
        }
        button:hover {
          background-color: #059669 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
