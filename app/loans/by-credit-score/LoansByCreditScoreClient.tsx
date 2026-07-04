'use client';

import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustBadges from "@/components/shared/TrustBadges";
import SocialProof from "@/components/shared/SocialProof";
import HubCTA from "@/components/shared/HubCTA";
import { creditScoreRanges } from "@/lib/credit-scores";

const microBadges = ["All credit types welcome", "Same-day approval available", "Secure application"];

const LoansByCreditScoreClient = () => {
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
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Loans by Credit Score" }]} />
        </div>

        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <TrendingUp className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "#1F2937" }}>
            Loans by Credit Score
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            Find loans that match your credit profile
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

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            Your credit score affects the loan terms you&apos;re offered — but it doesn&apos;t have to stop you from getting funded. Canadian lenders offer options for every credit range, from excellent (740+) to poor (below 580).
          </p>
          <p className="leading-relaxed" style={{ color: "#64748B" }}>
            Select your credit score range below to see lenders who specialize in your tier. You&apos;ll find estimated APR ranges, approval tips, and credit-building strategies. Checking your rate through our platform won&apos;t impact your score.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8" style={{ color: "#1F2937" }}>
          Browse Loans by Credit Score
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {creditScoreRanges.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/loans/by-credit-score/${slug}`}
              className="group w-full sm:w-[calc(50%-0.75rem)] rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:border-[#10B981]!"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#10B981]!"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                >
                  <TrendingUp className="w-5 h-5 transition-colors duration-300 group-hover:text-white!" style={{ color: "#10B981" }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base" style={{ color: "#1F2937" }}>
                    Credit Score {label}
                  </h3>
                  <p className="text-sm" style={{ color: "#64748B" }}>
                    Lenders for your credit level
                  </p>
                </div>
                <ArrowRight
                  className="w-4 h-4 shrink-0 transition-colors duration-300 group-hover:text-[#10B981]!"
                  style={{ color: "#64748B" }}
                />
              </div>
            </Link>
          ))}
        </div>

        <HubCTA />
      </div>
    </div>
  );
};

export default LoansByCreditScoreClient;
