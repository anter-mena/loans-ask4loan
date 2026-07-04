'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const amountOptions = ["$500", "$1,000", "$1,500", "$2,000", "$3,000", "$5,000"];

const RateCheckCard = () => {
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "loan_application_click", {
        event_category: "engagement",
        event_label: "Rate Check Card",
        event_source: "rate_check_card",
      });
    }
    window.open(
      "https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-sm rounded-2xl border p-6 text-left shadow-sm"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
    >
      <div className="text-center mb-4">
        <h2 className="font-bold text-base" style={{ color: "#1F2937" }}>
          Check Your Rate
        </h2>
        <p className="text-xs mt-1" style={{ color: "#64748B" }}>
          No impact to your credit score
        </p>
      </div>

      <div className="space-y-3">
        <Select value={amount} onValueChange={setAmount}>
          <SelectTrigger
            className="w-full h-10 rounded-lg"
            style={{ borderColor: "#E2E8F0" }}
          >
            <SelectValue placeholder="Select loan amount" />
          </SelectTrigger>
          <SelectContent>
            {amountOptions.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="h-10 rounded-lg"
          style={{ borderColor: "#E2E8F0" }}
          required
        />

        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 rounded-lg"
          style={{ borderColor: "#E2E8F0" }}
          required
        />

        <Button
          type="submit"
          className="w-full h-10 rounded-lg font-bold ring-2 ring-emerald-200 ring-offset-2 ring-offset-white shadow-lg shadow-emerald-200/50 hover:bg-[#059669]! hover:scale-[1.02] active:scale-95"
          style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
        >
          Get My Loan Offers
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <p
        className="text-[11px] mt-3 text-center leading-relaxed"
        style={{ color: "#94A3B8" }}
      >
        By clicking, you agree to our{" "}
        <Link href="/privacy-policy" className="underline" style={{ color: "#10B981" }}>
          privacy policy
        </Link>{" "}
        and consent to receive communications.
      </p>
    </form>
  );
};

export default RateCheckCard;
