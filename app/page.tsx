import HeroSection from "@/components/home/HeroSection";
import Partners from "@/components/home/Partners";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import LoanTypes from "@/components/home/LoanTypes";
import Testimonials from "@/components/home/Testimonials";
import Requirements from "@/components/home/Requirements";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <Partners />
      <HowItWorks />
      <Benefits />
      <LoanTypes />
      <Testimonials />
      <Requirements />
      <FAQ />
      <CTASection />
    </div>
  );
}
