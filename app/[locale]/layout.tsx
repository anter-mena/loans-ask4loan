import type { Metadata, Viewport } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'sonner';
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CountdownBanner from '@/components/layout/CountdownBanner';
import CookieBanner from '@/components/layout/CookieBanner';
import ChatBot from '@/components/layout/ChatBot';
import LoanApprovalToasts from '@/components/layout/LoanApprovalToasts';
import ScrollToTop from '@/components/layout/ScrollToTop';

export const viewport: Viewport = {
  themeColor: "#588157",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ask4Loan - Quick & Easy Personal Loans Canada | Fast Approval & Competitive Rates",
  description: "Ask4Loan: Get instant personal loans in Canada with competitive rates and fast approval. Simple online application, secure process, and trusted lending solutions for all your financial needs.",
  keywords: ["ask4loan", "personal loans Canada", "quick loans", "fast approval", "competitive rates", "online loan application", "instant loans", "Canadian lending", "financial solutions", "secure loans"],
  authors: [{ name: "Ask4Loan" }],
  robots: "index, follow",
  metadataBase: new URL("https://ask4loan.ca"),
  openGraph: {
    type: "website",
    url: "https://ask4loan.ca/",
    title: "Ask4Loan - Quick & Easy Personal Loans Canada",
    description: "Get instant personal loans with competitive rates and fast approval. Simple online application, secure process, and trusted lending solutions.",
    images: [
      {
        url: "https://ask4loan.ca/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ask4Loan - Quick & Easy Personal Loans Canada",
      },
    ],
    locale: "en_CA",
    siteName: "Ask4Loan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask4Loan - Quick & Easy Personal Loans Canada",
    description: "Get instant personal loans with competitive rates and fast approval. Simple online application, secure process, and trusted lending solutions.",
    images: ["https://ask4loan.ca/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  other: {
    "revisit-after": "7 days",
    "contact": "info@ask4loan.ca",
    "phone": "+1-800-ASK-LOAN",
    "geo.region": "CA",
    "geo.placename": "Canada",
    "ICBM": "56.1304, -106.3468",
    "business:contact_data:country_name": "Canada",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  const financialServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Ask4Loan",
    "alternateName": "Ask 4 Loan",
    "url": "https://ask4loan.ca",
    "logo": "https://ask4loan.ca/favicon.svg",
    "image": "https://ask4loan.ca/og-image.jpg",
    "description": "Quick and easy personal loans in Canada with competitive rates, fast approval, and secure online application process.",
    "email": "info@ask4loan.ca",
    "telephone": "+1-800-ASK-LOAN",
    "areaServed": { "@type": "Country", "name": "Canada" },
    "serviceArea": { "@type": "Country", "name": "Canada" },
    "serviceType": [
      "Personal Loans", "Quick Loans", "Instant Loans",
      "Online Loans", "Emergency Loans", "Bad Credit Loans"
    ],
    "priceRange": "$$",
    "knowsAbout": [
      "Personal Finance", "Quick Financing", "Online Lending",
      "Credit Solutions", "Fast Loan Applications", "Emergency Funding"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Loan Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Loans",
            "description": "Quick personal loans for any purpose with competitive rates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Loans",
            "description": "Fast emergency funding when you need it most"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bad Credit Loans",
            "description": "Loans available even with poor credit history"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "25000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/ask4loan",
      "https://www.linkedin.com/company/ask4loan",
      "https://twitter.com/ask4loan"
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ask4Loan",
    "url": "https://ask4loan.ca",
    "logo": "https://ask4loan.ca/favicon.svg",
    "foundingDate": "2020",
    "slogan": "Quick & Easy Personal Loans",
    "description": "Leading Canadian online lending platform providing quick personal loans with competitive rates and fast approval.",
    "areaServed": { "@type": "Country", "name": "Canada" },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-ASK-LOAN",
        "contactType": "customer service",
        "areaServed": "CA",
        "availableLanguage": ["English", "French"]
      },
      {
        "@type": "ContactPoint",
        "email": "info@ask4loan.ca",
        "contactType": "customer service",
        "areaServed": "CA"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "Ask4Loan",
      "slogan": "Quick & Easy Personal Loans"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I get my loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once approved, funds can be deposited into your bank account as soon as the next business day. Many of our partner lenders offer same-day funding for applications submitted early in the morning."
        }
      },
      {
        "@type": "Question",
        "name": "Will checking my rate affect my credit score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! We use a soft credit pull to check your rate, which does not impact your credit score. Only when you accept a loan offer and proceed with a specific lender will a hard inquiry be made."
        }
      },
      {
        "@type": "Question",
        "name": "What credit score do I need to qualify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with a wide network of lenders who accept all credit types. Whether you have excellent credit, fair credit, or are still building your credit history, we have options for you."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I borrow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our partner lenders offer personal loans ranging from $200 to $5,000. The amount you qualify for depends on your income, credit profile, and other factors."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hidden fees! All terms, including interest rates and fees, are disclosed upfront before you accept any loan offer. We believe in complete transparency."
        }
      },
      {
        "@type": "Question",
        "name": "Is my personal information secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We use bank-level 256-bit SSL encryption to protect your data. Your information is never sold to third parties and is only shared with lenders you choose to work with."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be a Canadian citizen to apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must be either a Canadian citizen or a permanent resident with a valid Social Security Number. You must also be at least 18 years old."
        }
      },
      {
        "@type": "Question",
        "name": "Which provinces do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We connect borrowers with lenders in most Canadian provinces. Loan availability and terms may vary by province due to local regulations."
        }
      }
    ]
  };

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3FBX7QL507"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3FBX7QL507', {
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `}
        </Script>

        {/* Structured Data */}
        <Script id="financial-service-jsonld" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify(financialServiceJsonLd)}
        </Script>
        <Script id="organization-jsonld" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="faq-jsonld" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </Script>

        <NextIntlClientProvider messages={messages} locale={locale}>
          <Toaster position="bottom-left" expand={false} richColors />
          <ScrollToTop />
          <LoanApprovalToasts />
          <CountdownBanner />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <ChatBot />
          <CookieBanner />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
