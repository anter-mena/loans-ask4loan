import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from 'sonner';
import Script from 'next/script';
import dynamic from 'next/dynamic';
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
import LoanApprovalToasts from '@/components/layout/LoanApprovalToasts';
import ScrollToTop from '@/components/layout/ScrollToTop';

// Pure client-side widget with no SSR-critical content — code-split so it
// doesn't add to the initial JS bundle every page has to load and hydrate.
const ChatBot = dynamic(() => import('@/components/layout/ChatBot'));

export const viewport: Viewport = {
  themeColor: "#588157",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ask4Loan - Personal Loans Canada | Fast Approval",
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
    locale: "en_CA",
    siteName: "Ask4Loan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask4Loan - Quick & Easy Personal Loans Canada",
    description: "Get instant personal loans with competitive rates and fast approval. Simple online application, secure process, and trusted lending solutions.",
  },
  manifest: "/manifest.webmanifest",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const financialServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Ask4Loan",
    "alternateName": "Ask 4 Loan",
    "url": "https://ask4loan.ca",
    "logo": "https://ask4loan.ca/logo.svg",
    "image": "https://ask4loan.ca/opengraph-image",
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
    "logo": "https://ask4loan.ca/logo.svg",
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
        "availableLanguage": ["English"]
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

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
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

        {/* Structured Data — inline so it's present in the initial crawler-visible HTML */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

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
      </body>
    </html>
  );
}
