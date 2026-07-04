'use client';

import { ArrowRight } from "lucide-react";

const LOAN_GENIE_URL =
  "https://loangenie.ca/loan?affiliate_sub1=ask4loan&affiliate_id=2155&cmi_click_id=c_6a48d671d8510590424012";

const HubCTA = () => {
  return (
    <div
      className="rounded-3xl px-6 sm:px-10 py-12 sm:py-16 text-center mt-12 sm:mt-16 lg:mt-20"
      style={{ backgroundColor: "#E3F8F0" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#1F2937" }}>
        Ready to Find Your Perfect Loan?
      </h2>
      <p className="mt-4 max-w-xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
        Compare loan options from trusted Canadian lenders. Checking your rate won&apos;t affect your credit score.
      </p>
      <div className="mt-8">
        <a
          href={LOAN_GENIE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "loan_application_click", {
                event_category: "engagement",
                event_label: "Hub CTA Button",
                event_source: "hub_cta",
              });
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ease-out hover:bg-[#059669]! hover:scale-[1.02] active:scale-95"
          style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
        >
          Check Your Rate Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default HubCTA;
