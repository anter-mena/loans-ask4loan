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

const homeFaqItems = [
  {
    question: "How quickly can I get my loan?",
    answer: "Once approved, funds can be deposited into your bank account as soon as the next business day. Many of our partner lenders offer same-day funding for applications submitted early in the morning.",
  },
  {
    question: "Will checking my rate affect my credit score?",
    answer: "No! We use a soft credit pull to check your rate, which does not impact your credit score. Only when you accept a loan offer and proceed with a specific lender will a hard inquiry be made.",
  },
  {
    question: "What credit score do I need to qualify?",
    answer: "We work with a wide network of lenders who accept all credit types. Whether you have excellent credit, fair credit, or are still building your credit history, we have options for you.",
  },
  {
    question: "How much can I borrow?",
    answer: "Our partner lenders offer personal loans ranging from $200 to $5,000. The amount you qualify for depends on your income, credit profile, and other factors.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees! All terms, including interest rates and fees, are disclosed upfront before you accept any loan offer. We believe in complete transparency.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use bank-level 256-bit SSL encryption to protect your data. Your information is never sold to third parties and is only shared with lenders you choose to work with.",
  },
  {
    question: "Do I need to be a Canadian citizen to apply?",
    answer: "You must be either a Canadian citizen or a permanent resident with a valid Social Security Number. You must also be at least 18 years old.",
  },
  {
    question: "Which provinces do you serve?",
    answer: "We connect borrowers with lenders in most Canadian provinces. Loan availability and terms may vary by province due to local regulations.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
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
