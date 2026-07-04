'use client';

import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, Zap, ShieldCheck, TrendingDown } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustBadges from "@/components/shared/TrustBadges";
import SocialProof from "@/components/shared/SocialProof";
import HubCTA from "@/components/shared/HubCTA";
import { canadaLocations } from "@/lib/canada-locations";

const microBadges = ["All 10 provinces & 3 territories covered", "Same-day approval available", "PIPEDA-compliant & secure"];

const whyChoose = [
  { icon: Zap, text: "Fast Online Application: Complete your application in just 2 minutes from any device." },
  { icon: CheckCircle2, text: "Compare Multiple Lenders: See offers from several lenders with one application." },
  { icon: ShieldCheck, text: "All Credit Types Welcome: Bad credit, fair credit, or good credit — we have options for everyone." },
  { icon: TrendingDown, text: "No Impact on Credit Score: Checking your rate won't affect your credit score." },
  { icon: Zap, text: "Quick Funding: Funds deposited as soon as the next business day." },
];

const majorCities = [
  "Toronto, Ontario",
  "Vancouver, BC",
  "Calgary, Alberta",
  "Montreal, Quebec",
  "Winnipeg, Manitoba",
  "Halifax, Nova Scotia",
];

const applySteps = [
  "Choose your location — Select your province or city from the list above.",
  "Complete the form — Provide basic information about yourself and the loan amount you need.",
  "Compare offers — Review loan offers from multiple lenders quickly.",
  "Get funded — Accept your preferred offer and have the funds deposited to your account.",
];

const LoansByLocationClient = () => {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loans by Location" }]} />
        </div>

        <div className="text-center mb-12">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <MapPin className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "#1F2937" }}>
            Personal Loans Across Canada
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Find personal loans from $300 to $5,000 CAD in your province or city. Compare offers with trusted Canadian lenders — bad credit welcome.
          </p>

          <div className="mt-6 mb-8">
            <TrustBadges />
          </div>

          <div className="flex justify-center mb-4">
            <SocialProof />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {microBadges.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs"
                style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Loans by Province & Territory */}
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: "#1F2937" }}>
          Loans by Province &amp; Territory
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {canadaLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/loans/by-location/${location.slug}`}
              className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:border-[#10B981]!"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#10B981]!"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                  <MapPin className="w-5 h-5 transition-colors duration-300 group-hover:text-white!" style={{ color: "#10B981" }} />
                </div>
                <ArrowRight
                  className="w-4 h-4 mt-2 transition-colors duration-300 group-hover:text-[#10B981]!"
                  style={{ color: "#64748B" }}
                />
              </div>
              <h3 className="font-bold text-base mb-1" style={{ color: "#1F2937" }}>
                {location.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                Compare local lenders serving {location.cities.length}+ communities.
              </p>
            </Link>
          ))}
        </div>

        {/* Body content */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#1F2937" }}>
              Personal Loans for Canadians in Every Province
            </h2>
            <p className="leading-relaxed" style={{ color: "#64748B" }}>
              Ask4Loan connects Canadians with trusted lenders across the country. Whether you&apos;re in a major city like Toronto, Vancouver, or Montreal, or a smaller community in rural Canada, our network of lenders can help you access the funds you need — quickly and securely.
            </p>
            <p className="leading-relaxed" style={{ color: "#64748B" }}>
              Our lenders understand local regulations and provincial lending laws. From Ontario&apos;s consumer protection standards to British Columbia&apos;s payday loan rules, our partners comply with all applicable regulations to ensure a positive borrowing experience.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#1F2937" }}>
              Why Canadians Choose Ask4Loan
            </h2>
            <ul className="space-y-2.5">
              {whyChoose.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#1F2937" }}>
              Personal Loans in Major Canadian Cities
            </h2>
            <p className="leading-relaxed" style={{ color: "#64748B" }}>
              Our lending partners serve Canadians in all of the country&apos;s major cities. The most popular locations for personal loan applications include:
            </p>
            <ul className="space-y-2.5">
              {majorCities.map((city) => (
                <li key={city} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#1F2937" }}>
              How to Apply for a Personal Loan
            </h2>
            <ol className="space-y-2.5">
              {applySteps.map((step, index) => (
                <li key={step} className="flex items-start gap-2.5">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                    style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10B981" }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <HubCTA />
      </div>
    </div>
  );
};

export default LoansByLocationClient;
