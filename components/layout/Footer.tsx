'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    "loanTypes": {
      title: "Loan Types",
      links: [
        { name: "Personal Loans", to: "/loans/personal" },
        { name: "Bad Credit Loans", to: "/loans/bad-credit" },
        { name: "Emergency Loans", to: "/loans/emergency" },
        { name: "Debt Consolidation", to: "/loans/debt-consolidation" },
      ]
    },
    "resources": {
      title: "Resources",
      links: [
        { name: "Loan Calculator", to: "/resources/calculator" },
        { name: "Credit Score Guide", to: "/resources/credit-guide" },
        { name: "How Loans Work", to: "/resources/how-loans-work" },
        { name: "FAQ", to: "/resources/faq" },
      ]
    },
    "company": {
      title: "Company",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Contact", to: "/contact" },
        { name: "Financial Guides", to: "/resources/guides" },
      ]
    },
    "legal": {
      title: "Legal",
      links: [
        { name: "Privacy Policy", to: "/privacy-policy" },
        { name: "Terms of Service", to: "/terms-of-use" },
      ]
    }
  };

  return (
    <footer style={{ backgroundColor: '#1F2937', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Image src="/logo2.svg" alt="ask4loan Logo" width={180} height={48} className="h-12 w-auto" style={{ width: 'auto' }} />
            </div>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: '#9CA3AF' }}
            >
              Connecting Canadian with the best personal loan offers from top lenders since 2020.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                aria-label="Facebook (opens in a new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                aria-label="Twitter (opens in a new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                aria-label="LinkedIn (opens in a new tab)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                aria-label="Instagram (opens in a new tab)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="text-center md:text-left">
              <h4
                className="font-semibold mb-4 text-sm"
                style={{ color: '#FFFFFF' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.to}
                      className="footer-link text-sm transition-colors duration-200"
                      style={{
                        color: '#9CA3AF',
                        textDecoration: 'none'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm"
              style={{ color: '#9CA3AF' }}
            >
              © 2024 Ask4Loan. All rights reserved.
            </p>
            <p
              className="text-xs max-w-lg text-center md:text-right leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Ask4Loan connects borrowers with lenders. Loan terms are determined by lenders.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #FFFFFF !important;
        }
        .social-icon:hover {
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
