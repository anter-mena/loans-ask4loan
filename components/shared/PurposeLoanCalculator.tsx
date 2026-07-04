'use client';

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const DEFAULT_ESTIMATE_APR = 19.99;

const sliderColorClasses =
  "[&_[data-slot=slider-track]]:bg-[#E2E8F0] [&_[data-slot=slider-range]]:bg-[#E2E8F0] [&_[data-slot=slider-thumb]]:bg-emerald-500 [&_[data-slot=slider-thumb]]:border-emerald-500";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const PurposeLoanCalculator = ({
  purposeLabel,
  defaultAmount,
  defaultTerm,
  minAmount = 500,
  maxAmount = 5000,
  minTerm = 6,
  maxTerm = 72,
  guideSlug,
  title,
  disclaimer,
  lockAmount = false,
  estimateApr = DEFAULT_ESTIMATE_APR,
}: {
  purposeLabel: string;
  defaultAmount: number;
  defaultTerm: number;
  minAmount?: number;
  maxAmount?: number;
  minTerm?: number;
  maxTerm?: number;
  guideSlug: string;
  title?: string;
  disclaimer?: string;
  lockAmount?: boolean;
  estimateApr?: number;
}) => {
  const [amount, setAmount] = useState(defaultAmount);
  const [term, setTerm] = useState(defaultTerm);

  const monthlyPayment = useMemo(() => {
    const r = estimateApr / 100 / 12;
    return (amount * r * Math.pow(1 + r, term)) / (Math.pow(1 + r, term) - 1);
  }, [amount, term, estimateApr]);

  return (
    <div
      className="mx-auto w-full max-w-md rounded-2xl border p-6 text-left"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
    >
      <h3 className="font-bold text-base mb-4 text-center" style={{ color: "#1F2937" }}>
        {title ?? `Estimate Your ${purposeLabel} Payment`}
      </h3>

      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm" style={{ color: "#64748B" }}>
              Loan Amount
            </span>
            <span className="text-sm font-semibold" style={{ color: "#1F2937" }}>
              {formatCurrency(amount)}
            </span>
          </div>
          <Slider
            value={[amount]}
            onValueChange={([value]) => setAmount(value)}
            min={minAmount}
            max={maxAmount}
            step={100}
            disabled={lockAmount}
            className={sliderColorClasses}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm" style={{ color: "#64748B" }}>
              Loan Term
            </span>
            <span className="text-sm font-semibold" style={{ color: "#1F2937" }}>
              {term} months
            </span>
          </div>
          <Slider
            value={[term]}
            onValueChange={([value]) => setTerm(value)}
            min={minTerm}
            max={maxTerm}
            step={6}
            className={sliderColorClasses}
          />
        </div>

        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#F0FDF9" }}>
          <p className="text-xs mb-1" style={{ color: "#64748B" }}>
            Estimated Monthly Payment
          </p>
          <p className="text-2xl font-bold" style={{ color: "#10B981" }}>
            {formatCurrency(monthlyPayment)}
            <span className="text-sm font-normal">/mo</span>
          </p>
          <p className="text-[11px] mt-1" style={{ color: "#94A3B8" }}>
            {disclaimer ?? `Based on ${estimateApr}% APR for ${purposeLabel.toLowerCase()} loans in Canada`}
          </p>
        </div>

        <Button
          asChild
          className="w-full rounded-full ring-2 ring-emerald-200 ring-offset-2 ring-offset-white shadow-lg shadow-emerald-200/50 hover:bg-[#059669]! hover:scale-[1.02] active:scale-95"
          style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
        >
          <a
            href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "loan_application_click", {
                  event_category: "engagement",
                  event_label: "Purpose Calculator CTA",
                  event_source: `guide_${guideSlug}`,
                });
              }
            }}
          >
            Check Your Rate — No Credit Impact
            <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PurposeLoanCalculator;
