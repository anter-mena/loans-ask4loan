'use client';

import Link from "next/link";
import { Calculator, Scale, BookOpen, HelpCircle, Grid3x3, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import HubCTA from "@/components/shared/HubCTA";

const resources = [
  {
    icon: Calculator,
    title: "Tools",
    description: "Calculators and helpful tools to plan your loan and repayments.",
    href: "/resources/tools",
  },
  {
    icon: Scale,
    title: "Comparisons",
    description: "Compare personal loans against credit cards, lines of credit, and more.",
    href: "/resources/comparisons",
  },
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step guides on credit scores, eligibility, and borrowing responsibly.",
    href: "/resources/guides",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions about applying for and repaying a personal loan.",
    href: "/resources/faq",
  },
];

const ResourcesClient = () => {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Oval Gradient Background */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <Grid3x3 className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "#1F2937" }}>
            Resources
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Tools, guides, and answers to help you make an informed borrowing decision.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {resources.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl p-6 border flex items-start gap-4 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] hover:shadow-lg hover:border-[#10B981]!"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#10B981]!"
                style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
              >
                <Icon className="w-6 h-6 transition-colors duration-300 group-hover:text-white!" style={{ color: "#10B981" }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-bold text-lg" style={{ color: "#1F2937" }}>
                    {title}
                  </h2>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 transition-colors duration-300 group-hover:text-[#10B981]!"
                    style={{ color: "#64748B" }}
                  />
                </div>
                <p className="text-sm mt-1" style={{ color: "#64748B" }}>
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <HubCTA />
      </div>
    </div>
  );
};

export default ResourcesClient;
