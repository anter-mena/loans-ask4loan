'use client';

import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { comparisons } from "@/lib/comparisons";
import { comparisonIcons } from "@/lib/comparison-icons";

const ComparisonsClient = () => {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Oval Gradient Background */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Comparisons" },
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <Scale className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "#1F2937" }}>
            Loan Comparisons — Canada
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Side-by-side comparisons to help you choose the right borrowing option in Canada.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {comparisons.map(({ slug, title, description, icon }) => {
            const Icon = comparisonIcons[icon];
            return (
            <Link
              key={slug}
              href={`/resources/comparisons/${slug}`}
              className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:border-[#10B981]!"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#10B981]!"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                  <Icon className="w-5 h-5 transition-colors duration-300 group-hover:text-white!" style={{ color: "#10B981" }} />
                </div>
                <ArrowRight
                  className="w-4 h-4 mt-2 transition-colors duration-300 group-hover:text-[#10B981]!"
                  style={{ color: "#64748B" }}
                />
              </div>
              <h2
                className="font-bold text-base mb-2 transition-colors duration-300"
                style={{ color: "#1F2937" }}
              >
                {title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                {description}
              </p>
            </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonsClient;
