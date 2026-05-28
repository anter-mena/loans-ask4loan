'use client';

import { useEffect } from "react";
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Home, Search, HelpCircle } from "lucide-react";

const NotFound = () => {
  const t = useTranslations('notFound');
  const pathname = usePathname();
  
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div 
      className="flex flex-col relative overflow-hidden" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Oval Gradient Background */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
          zIndex: 1
        }}
      />
      
      <div className="relative z-10">
        <div className="flex-1 flex items-center justify-center py-12 sm:py-20 px-4">
          <div className="max-w-2xl w-full text-center">
            
            {/* 404 Icon */}
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
            >
              <Search className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: '#10B981' }} />
            </div>
            
            {/* Error Number */}
            <h1 
              className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4"
              style={{ color: '#10B981' }}
            >
              404
            </h1>
            
            {/* Error Message */}
            <h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#1F2937' }}
            >
              {t('title')}
            </h2>
            
            <p 
              className="text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed px-4 sm:px-0"
              style={{ color: '#64748B' }}
            >
              {t('description')}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#10B981',
                  color: '#FFFFFF',
                  textDecoration: 'none'
                }}
              >
                <Home className="w-5 h-5 mr-2" />
                {t('backToHome')}
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#1F2937',
                  borderColor: '#E2E8F0',
                  textDecoration: 'none'
                }}
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                {t('contactSupport')}
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t px-4 sm:px-0" style={{ borderColor: '#E2E8F0' }}>
              <p className="text-sm mb-4" style={{ color: '#64748B' }}>
                {t('quickLinks.title')}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                <Link 
                  href="/" 
                  className="text-sm underline underline-offset-4 transition-colors hover:no-underline"
                  style={{ color: '#10B981' }}
                >
                  {t('quickLinks.applyLoan')}
                </Link>
                <Link 
                  href="/about" 
                  className="text-sm underline underline-offset-4 transition-colors hover:no-underline"
                  style={{ color: '#10B981' }}
                >
                  {t('quickLinks.about')}
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm underline underline-offset-4 transition-colors hover:no-underline"
                  style={{ color: '#10B981' }}
                >
                  {t('quickLinks.contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
