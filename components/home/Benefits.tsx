'use client';

import {
  Percent,
  Shield,
  Zap,
  FileX,
  UserCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Benefits = () => {
  const benefits = [
    {
      icon: Percent,
      title: "Low Interest Rates",
      description: "Access competitive rates from multiple lenders, often lower than credit cards.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is protected with bank-level 256-bit SSL encryption.",
    },
    {
      icon: Zap,
      title: "Fast Funding",
      description: "Get approved in minutes and receive funds as soon as the next business day.",
    },
    {
      icon: FileX,
      title: "No Hidden Fees",
      description: "Transparent terms with no surprise charges. What you see is what you get.",
    },
    {
      icon: UserCheck,
      title: "All Credit Welcome",
      description: "Whether your credit is excellent or needs work, we have options for you.",
    },
    {
      icon: Sparkles,
      title: "Personalized Offers",
      description: "Get loan offers tailored to your specific needs and financial situation.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            >
              Benefits
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            Why Choose Ask4loan for Personal Loans
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            Ask4loan Canada connects you with top lenders, so you can find the best rates without the bank runaround.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group relative overflow-hidden cursor-pointer rounded-3xl p-6 border transition-all duration-300 ease-out"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
              }}
            >
              {/* Icon - Top Left */}
              <div className="flex justify-start mb-6">
                <div
                  className="benefit-icon-container flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                  }}
                >
                  <benefit.icon
                    className="transition-all duration-300"
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#10B981",
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#1F2937" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <a
            href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'loan_application_click', {
                  event_category: 'engagement',
                  event_label: 'Benefits CTA Button',
                  event_source: 'benefits_section'
                });
              }
            }}
            className="inline-block"
          >
            <button
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              Start Your Application
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .benefit-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          border-color: rgba(16, 185, 129, 0.3) !important;
        }
        .benefit-card:hover .benefit-icon-container {
          background-color: rgba(16, 185, 129, 0.2) !important;
        }
        button:hover {
          background-color: #059669 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Benefits;
