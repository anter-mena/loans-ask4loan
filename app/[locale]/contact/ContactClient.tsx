'use client';

import { Mail, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const ContactClient = () => {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Oval Gradient Background - Above Everything */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 40%, transparent 70%)`,
          zIndex: 5
        }}
      />

      <div className="relative z-10">
        {/* Breadcrumb - Transparent background to show gradient */}
        <div className="py-4" style={{ backgroundColor: 'transparent' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm justify-center">
              <Link 
                href="/" 
                className="transition-colors hover:text-emerald-500"
                style={{ color: '#64748B' }}
              >
                {t('breadcrumb.home')}
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: '#64748B' }} />
              <span style={{ color: '#1F2937' }}>{t('breadcrumb.contact')}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - Transparent background to show gradient */}
        <section className="py-12 sm:py-12 pb-12 sm:pb-12" style={{ backgroundColor: 'transparent' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
            >
              <Mail className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#10B981' }} />
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#1F2937' }}
            >
              {t('hero.title')}
            </h1>
            
            <p 
              className="text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed"
              style={{ color: '#64748B' }}
            >
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 sm:py-16 -mt-8 sm:-mt-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="rounded-2xl p-6 sm:p-8 shadow-lg border"
              style={{ 
                backgroundColor: '#FFFFFF', 
                borderColor: '#E2E8F0'
              }}
            >
              <h2 
                className="text-xl sm:text-2xl font-bold mb-6"
                style={{ color: '#1F2937' }}
              >
                {t('form.title')}
              </h2>
              
              <form className="space-y-5">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {t('form.name.label')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('form.name.placeholder')}
                    className="w-full h-12 px-4 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      borderColor: '#E2E8F0',
                      color: '#1F2937'
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {t('form.email.label')}
                  </label>
                  <input
                    type="email"
                    placeholder={t('form.email.placeholder')}
                    className="w-full h-12 px-4 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      borderColor: '#E2E8F0',
                      color: '#1F2937'
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {t('form.subject.label')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('form.subject.placeholder')}
                    className="w-full h-12 px-4 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      borderColor: '#E2E8F0',
                      color: '#1F2937'
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {t('form.message.label')}
                  </label>
                  <textarea
                    placeholder={t('form.message.placeholder')}
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border transition-colors focus:outline-none focus:ring-2 resize-none focus:ring-emerald-500/10 focus:border-emerald-500"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      borderColor: '#E2E8F0',
                      color: '#1F2937'
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-medium rounded-md transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white hover:scale-105 active:scale-95"
                  style={{ 
                    backgroundColor: '#10B981',
                    color: '#FFFFFF'
                  }}
                >
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        button:hover {
          background-color: #059669 !important;
        }
      `}</style>
    </div>
  );
};

export default ContactClient;
