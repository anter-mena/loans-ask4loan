'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { 
  Menu, X, ChevronDown, ChevronRight, DollarSign, Target, 
  CreditCard, FileText, MapPin, List, Calculator, Scale, 
  BookOpen, HelpCircle, Grid3x3 
} from "lucide-react";

const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordions(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const loansDropdownItems = [
    { icon: DollarSign, title: t('loansDropdown.byAmount.title'), description: t('loansDropdown.byAmount.description'), to: "/loans/by-amount" },
    { icon: Target, title: t('loansDropdown.byPurpose.title'), description: t('loansDropdown.byPurpose.description'), to: "/loans/by-purpose" },
    { icon: CreditCard, title: t('loansDropdown.byCreditScore.title'), description: t('loansDropdown.byCreditScore.description'), to: "/loans/by-credit-score" },
    { icon: FileText, title: t('loansDropdown.byType.title'), description: t('loansDropdown.byType.description'), to: "/loans/by-type" },
    { icon: MapPin, title: t('loansDropdown.byLocation.title'), description: t('loansDropdown.byLocation.description'), to: "/loans/by-location" },
    { icon: List, title: t('loansDropdown.allOptions.title'), description: t('loansDropdown.allOptions.description'), to: "/loans" }
  ];

  const resourcesDropdownItems = [
    { icon: Calculator, title: t('resourcesDropdown.tools.title'), description: t('resourcesDropdown.tools.description'), to: "/resources/tools" },
    { icon: Scale, title: t('resourcesDropdown.comparisons.title'), description: t('resourcesDropdown.comparisons.description'), to: "/resources/comparisons" },
    { icon: BookOpen, title: t('resourcesDropdown.guides.title'), description: t('resourcesDropdown.guides.description'), to: "/resources/guides" },
    { icon: HelpCircle, title: t('resourcesDropdown.faq.title'), description: t('resourcesDropdown.faq.description'), to: "/resources/faq" },
    { icon: Grid3x3, title: t('resourcesDropdown.allResources.title'), description: t('resourcesDropdown.allResources.description'), to: "/resources" }
  ];

  return (
    <header
      className="sticky top-0 w-full backdrop-blur border-b"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#E2E8F0',
        zIndex: 9999
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo.svg" alt="ask4loan Logo" width={150} height={32} className="h-8 w-auto" style={{ width: 'auto' }} priority />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">

              {/* Loans Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('loans')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors py-2 focus:outline-none"
                  style={{ color: activeDropdown === 'loans' ? '#1F2937' : '#64748B' }}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'loans'}
                >
                  {t('nav.loans')} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'loans' ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-80 rounded-lg shadow-xl border transition-all duration-300 ease-out ${activeDropdown === 'loans'
                    ? 'opacity-100 transform translate-y-0 pointer-events-auto'
                    : 'opacity-0 transform -translate-y-4 pointer-events-none'
                    }`}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E2E8F0',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className="p-4">
                    {loansDropdownItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          href={item.to as string}
                          className="dropdown-link flex items-start gap-3 p-3 rounded-md transition-all duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div
                            className="dropdown-icon-bg w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                          >
                            <IconComponent className="w-4 h-4" style={{ color: '#10B981' }} />
                          </div>
                          <div>
                            <div className="font-medium text-sm" style={{ color: '#1F2937' }}>
                              {item.title}
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: '#64748B' }}>
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('resources')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors py-2 focus:outline-none"
                  style={{ color: activeDropdown === 'resources' ? '#1F2937' : '#64748B' }}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'resources'}
                >
                  {t('nav.resources')} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-80 rounded-lg shadow-xl border transition-all duration-300 ease-out ${activeDropdown === 'resources'
                    ? 'opacity-100 transform translate-y-0 pointer-events-auto'
                    : 'opacity-0 transform -translate-y-4 pointer-events-none'
                    }`}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E2E8F0',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className="p-4">
                    {resourcesDropdownItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          href={item.to as string}
                          className="dropdown-link flex items-start gap-3 p-3 rounded-md transition-all duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div
                            className="dropdown-icon-bg w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                          >
                            <IconComponent className="w-4 h-4" style={{ color: '#10B981' }} />
                          </div>
                          <div>
                            <div className="font-medium text-sm" style={{ color: '#1F2937' }}>
                              {item.title}
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: '#64748B' }}>
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* About Us Link */}
              <Link
                href="/about"
                className="text-sm font-medium transition-colors py-2 hover:text-[#1F2937]"
                style={{ color: '#64748B' }}
              >
                {t('nav.aboutUs')}
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors py-2 hover:text-[#1F2937]"
                style={{ color: '#64748B' }}
              >
                {t('nav.contact')}
              </Link>

            </div>
          </nav>

          {/* Right Side - Language Toggle & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-all font-medium hover:border-[#10B981] hover:text-[#10B981]"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                color: '#64748B'
              }}
              aria-label={locale === 'en' ? 'Passer en français' : 'Switch to English'}
            >
              <span className="text-sm">{locale === 'fr' ? 'FR' : 'EN'}</span>
            </button>

            {/* Desktop Apply Button */}
            <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'loan_application_click', {
                    event_category: 'engagement',
                    event_label: 'Header Apply Button Desktop',
                    event_source: 'header_navigation'
                  });
                }
              }}
              className="primary-cta hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-1 ring-1 ring-emerald-200 ring-offset-1 ring-offset-white hover:scale-105 active:scale-95"
              style={{
                backgroundColor: '#10B981',
                color: '#FFFFFF'
              }}
            >
              {t('nav.applyNow')}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              style={{ color: '#64748B' }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 border-b transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'max-h-[80vh] opacity-100 translate-y-0'
          : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none overflow-hidden'
          }`}
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E2E8F0',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <nav className="p-4 overflow-y-auto">
          <div className="space-y-1">

            {/* Mobile Loans Accordion */}
            <div className="py-2">
              <button
                onClick={() => toggleMobileAccordion('loans')}
                className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-md transition-colors"
                style={{ color: '#1F2937' }}
              >
                <span>{t('nav.loans')}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.loans ? 'transform rotate-90' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordions.loans ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="pl-4 mt-2 space-y-1">
                  {loansDropdownItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        href={item.to as string}
                        className="mobile-dropdown-link flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200"
                        style={{
                          color: '#64748B',
                          textDecoration: 'none'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div
                          className="mobile-icon-bg w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                          style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                        >
                          <IconComponent className="w-4 h-4" style={{ color: '#10B981' }} />
                        </div>
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Resources Accordion */}
            <div className="py-2 border-t" style={{ borderColor: '#F1F5F9' }}>
              <button
                onClick={() => toggleMobileAccordion('resources')}
                className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-md transition-colors"
                style={{ color: '#1F2937' }}
              >
                <span>{t('nav.resources')}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.resources ? 'transform rotate-90' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordions.resources ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="pl-4 mt-2 space-y-1">
                  {resourcesDropdownItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        href={item.to as string}
                        className="mobile-dropdown-link flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200"
                        style={{
                          color: '#64748B',
                          textDecoration: 'none'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div
                          className="mobile-icon-bg w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                          style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                        >
                          <IconComponent className="w-4 h-4" style={{ color: '#10B981' }} />
                        </div>
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile About Us */}
            <div className="py-2 border-t" style={{ borderColor: '#F1F5F9' }}>
              <Link
                href="/about"
                className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-md transition-colors hover:bg-[#F8FAFC]"
                style={{ color: '#1F2937', textDecoration: 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.aboutUs')}
              </Link>
            </div>

            {/* Mobile Contact */}
            <div className="py-2 border-t" style={{ borderColor: '#F1F5F9' }}>
              <Link
                href="/contact"
                className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-md transition-colors hover:bg-[#F8FAFC]"
                style={{ color: '#1F2937', textDecoration: 'none' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Mobile Apply Button */}
            <div className="pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
              <a
              href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'loan_application_click', {
                      event_category: 'engagement',
                      event_label: 'Header Apply Button Mobile',
                      event_source: 'mobile_menu'
                    });
                  }
                  setIsMenuOpen(false);
                }}
                className="primary-cta block w-full px-6 py-3 text-sm font-medium rounded-md transition-all text-center focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-1 ring-1 ring-emerald-200 ring-offset-1 ring-offset-white hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#10B981',
                  color: '#FFFFFF',
                  textDecoration: 'none'
                }}
              >
                {t('nav.applyNow')}
              </a>
            </div>

          </div>
        </nav>
      </div>

      <style jsx>{`
        .dropdown-link:hover {
          background-color: rgba(248, 250, 252, 0.8);
        }

        .dropdown-link:hover .dropdown-icon-bg {
          background-color: rgba(16, 185, 129, 0.2) !important;
        }

        .mobile-dropdown-link:active .mobile-icon-bg {
          background-color: rgba(16, 185, 129, 0.2) !important;
        }

        .primary-cta:hover {
          background-color: #059669 !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
