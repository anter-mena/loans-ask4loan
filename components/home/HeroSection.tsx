'use client';

import Image from "next/image";
import { Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Oval Gradient Background */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
        />
        <div
          className="absolute top-1/4 left-0 w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
          {/* Trust Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E2E8F0",
            }}
          >
            <span style={{ color: "#64748B" }}>
              Trusted by 50,000+ Canadians
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ color: "#1F2937" }}
            >
              Fast Personal Loans
              <br />
              <span style={{ color: "#10B981" }}>Up to $5,000</span>
            </h1>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0"
              style={{ color: "#64748B" }}
            >
              Compare offers from 50+ lenders. No hidden fees. No credit score impact. Get funded as fast as 24 hours.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm border"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
            >
              <Shield className="w-4 h-4" style={{ color: "#10B981" }} />
              <span style={{ color: "#1F2937" }}>256-bit SSL Secured</span>
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm border"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
            >
              <Clock className="w-4 h-4" style={{ color: "#10B981" }} />
              <span style={{ color: "#1F2937" }}>Funds in 24 Hours</span>
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm border"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: "#10B981" }} />
              <span style={{ color: "#1F2937" }}>Any Credit Accepted</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt={`Customer ${index + 1}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 object-cover"
                  style={{ borderColor: "#FFFFFF" }}
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
                Trusted by 50,000+ borrowers
              </p>
              <p className="text-xs" style={{ color: "#64748B" }}>
                No credit score impact to check your rate
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <div className="mt-10 sm:mt-12">
            <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'loan_application_click', {
                    event_category: 'engagement',
                    event_label: 'Hero CTA Button',
                    event_source: 'hero_section'
                  });
                }
              }}
              className="inline-block"
            >
              <button
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-2 sm:py-2 rounded-lg font-bold text-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white active:scale-95 shadow-lg shadow-emerald-200/50"
                style={{
                  backgroundColor: "#10B981",
                  color: "#FFFFFF",
                }}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        button:hover {
          background-color: #059669 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
