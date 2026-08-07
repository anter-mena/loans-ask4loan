import { Metadata } from 'next';
import { Suspense } from 'react';
import { ApplyForm } from '@/components/application-form/application-form';

export const metadata: Metadata = {
  title: 'Apply for a Personal Loan Online | Ask4Loan Canada',
  description:
    'Start your loan application with Ask4Loan. Compare offers from vetted Canadian lenders and get matched with your best rate in minutes.',
  alternates: {
    canonical: '/application-form',
  },
  keywords: [
    'apply for a loan online canada',
    'ask4loan application',
    'instant loan application canada',
  ],
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Apply', item: '/application-form' },
  ],
};

export default function ApplyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Header */}
      <section className="relative pt-16 pb-14 lg:pt-24 lg:pb-16 overflow-hidden bg-white">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-[640px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-[hsl(215,28%,12%)]/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[hsl(215,14%,46%)]">
              Apply Now
            </span>
          </div>

          <h1 className="text-3xl lg:text-[2.75rem] font-bold text-[hsl(215,28%,12%)] leading-[1.1] tracking-tight mb-4">
            Let&apos;s Find Your
            <br />
            Best Loan Rate.
          </h1>

          <p className="text-[0.925rem] text-[hsl(215,14%,46%)] max-w-[440px] leading-relaxed">
            Fill out the quick form below and we&apos;ll match you with vetted Canadian lenders in as
            little as 2 minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[hsl(210,25%,97%)] pt-14 pb-24 lg:pt-16 lg:pb-32">
        <div className="max-w-[560px] mx-auto px-4 lg:px-8">
          <Suspense fallback={<div className="min-h-[450px]" />}>
            <ApplyForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
