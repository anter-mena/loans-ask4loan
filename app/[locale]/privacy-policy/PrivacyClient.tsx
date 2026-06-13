'use client';

import { Shield, ChevronRight, Lock, Eye, Bell, Mail, Phone, Database, Clock, FileText } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const PrivacyClient = () => {
  const t = useTranslations('privacy');

  const protectionFeatures = [
    { label: t('protectionFeatures.encryption'), icon: Lock },
    { label: t('protectionFeatures.ccpa'), icon: Shield },
    { label: t('protectionFeatures.noSelling'), icon: Eye }
  ];

  // Map section data from translation objects
  const sections = [
    {
      number: t('sections.section1.number'),
      icon: Lock,
      title: t('sections.section1.title'),
      content: t.raw('sections.section1.content')
    },
    {
      number: t('sections.section2.number'),
      icon: Eye,
      title: t('sections.section2.title'),
      content: t.raw('sections.section2.content'),
      list: t.raw('sections.section2.list')
    },
    {
      number: t('sections.section3.number'),
      icon: Database,
      title: t('sections.section3.title'),
      content: t.raw('sections.section3.content'),
      list: t.raw('sections.section3.list'),
      footer: t('sections.section3.footer')
    },
    {
      number: t('sections.section4.number'),
      icon: FileText,
      title: t('sections.section4.title'),
      content: t.raw('sections.section4.content')
    },
    {
      number: t('sections.section5.number'),
      icon: Phone,
      title: t('sections.section5.title'),
      content: t.raw('sections.section5.content'),
      list: t.raw('sections.section5.list'),
      footer: t('sections.section5.footer')
    },
    {
      number: t('sections.section6.number'),
      icon: Mail,
      title: t('sections.section6.title'),
      content: t.raw('sections.section6.content'),
      list: t.raw('sections.section6.list'),
      footer: t('sections.section6.footer')
    },
    {
      number: t('sections.section7.number'),
      icon: Clock,
      title: t('sections.section7.title'),
      content: t.raw('sections.section7.content')
    },
    {
      number: t('sections.section8.number'),
      icon: Database,
      title: t('sections.section8.title'),
      content: t.raw('sections.section8.content')
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Oval Gradient Background */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 40%, transparent 70%)`,
          zIndex: 5
        }}
      />

      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="py-4" style={{ backgroundColor: 'transparent' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm justify-center">
              <Link 
                href="/" 
                className="transition-colors"
                style={{ color: '#64748B' }}
              >
                {t('breadcrumb.home')}
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: '#64748B' }} />
              <span style={{ color: '#1F2937' }}>{t('breadcrumb.privacy')}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 pb-16 sm:pb-24" style={{ backgroundColor: 'transparent' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
            >
              <Shield className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#10B981' }} />
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#1F2937' }}
            >
              {t('hero.title')}
            </h1>
            
            <p 
              className="text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed mb-8"
              style={{ color: '#64748B' }}
            >
              {t('hero.description')}
            </p>

            <p 
              className="text-sm max-w-2xl mx-auto px-4 sm:px-0"
              style={{ color: '#64748B' }}
            >
              {t('hero.acceptance')}
            </p>
          </div>
        </section>

        {/* Protection Features */}
        <section className="py-12 sm:py-16 -mt-8 sm:-mt-12" style={{ backgroundColor: 'rgba(248, 250, 252, 0.8)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {protectionFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: '#10B981' }} />
                  </div>
                  <div className="text-sm font-semibold" style={{ color: '#1F2937' }}>
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Sections */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="rounded-2xl p-6 sm:p-8 border"
                  style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderColor: '#E2E8F0' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                    >
                      <section.icon className="w-6 h-6" style={{ color: '#10B981' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span 
                          className="text-lg font-bold"
                          style={{ color: '#10B981' }}
                        >
                          {section.number}.
                        </span>
                        <h3 
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: '#1F2937' }}
                        >
                          {section.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-4">
                        {Array.isArray(section.content) && section.content.map((paragraph: string, pIndex: number) => (
                          <p 
                            key={pIndex}
                            className="leading-relaxed"
                            style={{ color: '#64748B' }}
                          >
                            {paragraph}
                          </p>
                        ))}
                        
                        {Array.isArray(section.list) && (
                          <ul className="space-y-2 ml-4">
                            {section.list.map((item: string, lIndex: number) => (
                              <li 
                                key={lIndex}
                                className="flex items-start gap-2"
                              >
                                <span style={{ color: '#10B981' }}>•</span>
                                <span style={{ color: '#64748B' }}>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {section.footer && (
                          <p 
                            className="leading-relaxed mt-4 pt-4 border-t"
                            style={{ color: '#64748B', borderColor: '#E2E8F0' }}
                          >
                            {section.footer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Privacy Rights */}
        <section className="py-16 sm:py-20" style={{ backgroundColor: 'rgba(248, 250, 252, 0.8)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="rounded-2xl p-6 sm:p-8 border"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <Shield className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <h2 
                    className="text-xl sm:text-2xl font-bold mb-4"
                    style={{ color: '#1F2937' }}
                  >
                    {t('rights.title')}
                  </h2>
                  <p 
                    className="leading-relaxed mb-4"
                    style={{ color: '#64748B' }}
                  >
                    {t('rights.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="rounded-2xl p-6 sm:p-8 border text-center"
              style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
              >
                <Mail className="w-8 h-8" style={{ color: '#10B981' }} />
              </div>
              
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: '#1F2937' }}
              >
                {t('contact.title')}
              </h3>
              
              <p 
                className="mb-4"
                style={{ color: '#64748B' }}
              >
                {t('contact.description')}
              </p>
              
              <a 
                href={`mailto:${t('contact.email')}`}
                className="inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-[#059669]"
                style={{ color: '#10B981' }}
              >
                {t('contact.email')}
              </a>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm" style={{ color: '#64748B' }}>
              {t('lastUpdated')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyClient;
