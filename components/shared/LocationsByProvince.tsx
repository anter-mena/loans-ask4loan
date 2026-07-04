'use client';

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { provinceLocations, LOCATION_PREVIEW_COUNT } from "@/lib/locations";

const LocationsByProvince = ({ heading }: { heading: string }) => {
  return (
    <div className="mt-16">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-2" style={{ color: "#1F2937" }}>
        {heading}
      </h2>
      <p className="text-sm text-center mb-8 max-w-xl mx-auto" style={{ color: "#64748B" }}>
        Find lenders in your province or city. We connect you with lenders across Canada.
      </p>

      <div className="space-y-3">
        {provinceLocations.map((province) => {
          const preview = province.cities.slice(0, LOCATION_PREVIEW_COUNT);
          return (
            <div key={province.name} className="rounded-2xl border p-5" style={{ borderColor: "#E2E8F0" }}>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4" style={{ color: "#10B981" }} />
                <h3 className="font-bold text-sm" style={{ color: "#1F2937" }}>
                  {province.name}
                </h3>
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  ({province.cities.length} {province.cities.length === 1 ? "city" : "cities"})
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {preview.map((city) => (
                  <Link
                    key={city}
                    href="/loans/by-location"
                    className="rounded-full border px-3 py-1 text-xs transition-colors hover:border-emerald-300"
                    style={{ borderColor: "#E2E8F0", color: "#64748B" }}
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-6">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/loans/by-location">View All Locations</Link>
        </Button>
      </div>
    </div>
  );
};

export default LocationsByProvince;
