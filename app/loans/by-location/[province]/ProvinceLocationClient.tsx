'use client';

import Link from "next/link";
import { MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TrustBadges from "@/components/shared/TrustBadges";
import ContentBlocks, { findFaqBlock } from "@/components/shared/ContentBlocks";
import CTASection from "@/components/home/CTASection";
import type { ArticleContent } from "@/lib/content-blocks";
import type { CanadaLocation } from "@/lib/canada-locations";
import { getOtherProvinces } from "@/lib/canada-locations";

const relatedRegulationGuides: Record<string, string> = {
  ontario: "lending-regulations-ontario",
  alberta: "lending-regulations-alberta",
  "british-columbia": "lending-regulations-british-columbia",
  quebec: "lending-regulations-quebec",
  manitoba: "lending-regulations-manitoba",
};

const primarySources: Record<string, { name: string; url: string }> = {
  ontario: { name: "Ontario.ca — Payday Loans: Your Rights", url: "https://www.ontario.ca/page/payday-loan-your-rights" },
  alberta: { name: "Alberta.ca — Payday Loans", url: "https://www.alberta.ca/payday-loans" },
  "british-columbia": {
    name: "Consumer Protection BC — Payday Loans",
    url: "https://www.consumerprotectionbc.ca/consumer-help/consumer-information-payday-loans/",
  },
  quebec: { name: "Office de la protection du consommateur", url: "https://www.opc.gouv.qc.ca/" },
  manitoba: { name: "Manitoba Consumer Protection Office — Payday Loans", url: "https://www.gov.mb.ca/cp/cpo/info/payday.html" },
  saskatchewan: {
    name: "Financial and Consumer Affairs Authority of Saskatchewan",
    url: "https://fcaa.gov.sk.ca/regulated-businesses-persons/businesses/payday-lenders/compliance-with-legislation",
  },
  "nova-scotia": { name: "Government of Nova Scotia — Payday Loans: Your Rights", url: "https://www.novascotia.ca/payday-loans-your-rights" },
  "new-brunswick": { name: "FCNB — Payday Loans", url: "https://fcnb.ca/en/personal-finances/payday-loans" },
  "newfoundland-and-labrador": { name: "Government of Newfoundland and Labrador", url: "https://www.gov.nl.ca" },
  "prince-edward-island": {
    name: "Government of Prince Edward Island — Payday Loans Act",
    url: "https://www.princeedwardisland.ca/sites/default/files/legislation/P-02-1-Payday%20Loans%20Act.pdf",
  },
  "northwest-territories": {
    name: "Financial Consumer Agency of Canada — Payday Loans",
    url: "https://www.canada.ca/en/financial-consumer-agency/services/loans/payday-loans.html",
  },
  yukon: {
    name: "Financial Consumer Agency of Canada — Payday Loans",
    url: "https://www.canada.ca/en/financial-consumer-agency/services/loans/payday-loans.html",
  },
  nunavut: {
    name: "Financial Consumer Agency of Canada — Payday Loans",
    url: "https://www.canada.ca/en/financial-consumer-agency/services/loans/payday-loans.html",
  },
};

const ProvinceLocationClient = ({
  province,
  content,
}: {
  province: CanadaLocation;
  content: ArticleContent;
}) => {
  const otherProvinces = getOtherProvinces(province.slug);
  const faqBlock = findFaqBlock(content.blocks);
  const relatedGuideSlug = relatedRegulationGuides[province.slug];
  const primarySource = primarySources[province.slug];

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      {faqBlock && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqBlock.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
      )}

      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Loans by Location", href: "/loans/by-location" },
              { label: province.name },
            ]}
          />
        </div>

        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <MapPin className="w-7 h-7" style={{ color: "#10B981" }} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1F2937" }}>
            Personal Loans in {province.name}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
            {content.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs" style={{ color: "#94A3B8" }}>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Last updated: Jul 4, 2026
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> All credit types welcome
            </span>
          </div>

          <div className="mt-6 mb-2">
            <TrustBadges />
          </div>
        </div>

        {/* Content */}
        <ContentBlocks blocks={content.blocks} />

        <div className="rounded-2xl border p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-6" style={{ borderColor: "#E2E8F0" }}>
          <span style={{ color: "#64748B" }}>
            <strong style={{ color: "#1F2937" }}>First Published:</strong> April 13, 2026
          </span>
          <span style={{ color: "#64748B" }}>
            <strong style={{ color: "#1F2937" }}>Last Updated:</strong> July 4, 2026
          </span>
          <span style={{ color: "#64748B" }}>
            <strong style={{ color: "#1F2937" }}>Reviewed by:</strong> Ask4Loan Editorial Team
          </span>
          <span style={{ color: "#64748B" }}>
            <strong style={{ color: "#1F2937" }}>Next Review:</strong> January 2027
          </span>
        </div>

        <div className="rounded-xl border-l-4 p-4 mt-4" style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
            Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.
          </p>
        </div>

        {primarySource && (
          <p className="text-xs mt-3" style={{ color: "#94A3B8" }}>
            Primary source:{" "}
            <a
              href={primarySource.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline hover:text-emerald-600"
            >
              {primarySource.name}
            </a>
          </p>
        )}

        {relatedGuideSlug && (
          <div className="rounded-xl border p-4 mt-4" style={{ borderColor: "#E2E8F0" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              For a deeper look at provincial lending rules, read our full{" "}
              <Link href={`/resources/guides/${relatedGuideSlug}`} className="font-medium hover:underline" style={{ color: "#10B981" }}>
                {province.name} Lending Regulations Guide
              </Link>
              .
            </p>
          </div>
        )}

        {/* Cities served (not linked — see province-level content above) */}
        <div className="mt-16 text-center">
          <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
            Communities We Serve in {province.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {province.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs"
                style={{ borderColor: "#E2E8F0", color: "#64748B" }}
              >
                <CheckCircle2 className="w-3 h-3" style={{ color: "#10B981" }} />
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Other Provinces */}
        <div className="text-center mt-16">
          <h2 className="text-lg font-bold mb-4" style={{ color: "#1F2937" }}>
            Other Provinces &amp; Territories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherProvinces.map((p) => (
              <Link
                key={p.slug}
                href={`/loans/by-location/${p.slug}`}
                className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-emerald-300"
                style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
              >
                {p.name}
              </Link>
            ))}
          </div>
          <Link href="/loans/by-location" className="text-sm font-medium mt-3 inline-block" style={{ color: "#10B981" }}>
            View all locations →
          </Link>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default ProvinceLocationClient;
