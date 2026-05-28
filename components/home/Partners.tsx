'use client';

import { useState } from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from 'next-intl';

const Partners = () => {
  const t = useTranslations('homepage.partners');
  const [isPaused, setIsPaused] = useState(false);

  // Real bank logos pointing to the public folder
  const partnerLogos = [
    { name: "BMO", src: "/partners/BMO.svg" },
    { name: "CIBC", src: "/partners/CIBC.svg" },
    { name: "National Bank", src: "/partners/National_Bank.svg" },
    { name: "RBC", src: "/partners/RBC.svg" },
    { name: "Scotiabank", src: "/partners/Scotiabank.svg" },
    { name: "TD Bank", src: "/partners/TD_BANK.svg" }
  ];

  return (
    <section className="text-center py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-4">
            <Badge 
              variant="secondary" 
              className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            >
              {t('badge')}
            </Badge>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <div className="marquee-container">
            <Marquee
              className={`[--duration:35s] marquee-fade ${isPaused ? 'paused' : ''}`}
              pauseOnHover={false}
            >
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="mx-4 flex items-center justify-center transition-all duration-300 min-w-40 shrink-0 cursor-pointer partner-logo-container"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <Image 
                    src={partner.src} 
                    alt={partner.name} 
                    width={160}
                    height={48}
                    className="partner-logo max-h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <style jsx>{`
        .paused {
          animation-play-state: paused !important;
        }
        .marquee-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Partners;
