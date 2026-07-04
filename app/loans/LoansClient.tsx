'use client';

import Link from "next/link";
import { DollarSign, Target, CreditCard, FileText, MapPin, List, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import HubCTA from "@/components/shared/HubCTA";

const loanCategories = [
  {
    icon: DollarSign,
    title: "By Amount",
    description: "$300 - $5,000 loans matched to how much you need.",
    href: "/loans/by-amount",
  },
  {
    icon: Target,
    title: "By Purpose",
    description: "Debt consolidation, emergencies, and more.",
    href: "/loans/by-purpose",
  },
  {
    icon: CreditCard,
    title: "By Credit Score",
    description: "Find loans that fit your credit range.",
    href: "/loans/by-credit-score",
  },
  {
    icon: FileText,
    title: "By Type",
    description: "Personal, emergency, and same-day loans.",
    href: "/loans/by-type",
  },
  {
    icon: MapPin,
    title: "By Location",
    description: "Loans available across Canada.",
    href: "/loans/by-location",
  },
];

const LoansClient = () => {
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
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loans" }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <List className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "#1F2937" }}>
            All Loan Options
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Browse personal loans by amount, purpose, credit score, type, or location to find the option that fits you.
          </p>
        </div>

        {/* Loan Category Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {loanCategories.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl p-6 border flex items-start gap-4 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)]"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "#10B981" }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-bold text-lg" style={{ color: "#1F2937" }}>
                    {title}
                  </h2>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 transition-colors group-hover:text-[#10B981]"
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

export default LoansClient;
