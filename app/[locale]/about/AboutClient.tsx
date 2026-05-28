'use client';

import { ChevronRight, FileText, Shield, Users, Award, CheckCircle, Star, Search, Clock } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const AboutClient = () => {
  const t = useTranslations('about');

  const stats = [
    { value: "50,000+", label: t('stats.americansHelped') },
    { value: "40+", label: t('stats.lenderPartners') },
    { value: "5+", label: t('stats.yearsInBusiness') },
    { value: "A+", label: t('stats.bbbRating') },
  ];

  const credentials = [
    t('team.credentials.cfp'),
    t('team.credentials.professionals'),
    t('team.credentials.compliance'),
    t('team.credentials.executives'),
  ];

  const vettingProcess = [
    {
      icon: FileText,
      title: t('vetting.items.licensing.title'),
      description: t('vetting.items.licensing.description')
    },
    {
      icon: Shield,
      title: t('vetting.items.compliance.title'),
      description: t('vetting.items.compliance.description')
    },
    {
      icon: Star,
      title: t('vetting.items.complaints.title'),
      description: t('vetting.items.complaints.description')
    },
    {
      icon: Search,
      title: t('vetting.items.monitoring.title'),
      description: t('vetting.items.monitoring.description')
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: t('values.items.transparency.title'),
      description: t('values.items.transparency.description')
    },
    {
      icon: Users,
      title: t('values.items.customer.title'),
      description: t('values.items.customer.description')
    },
    {
      icon: Clock,
      title: t('values.items.speed.title'),
      description: t('values.items.speed.description')
    },
    {
      icon: Award,
      title: t('values.items.quality.title'),
      description: t('values.items.quality.description')
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
              <span style={{ color: '#1F2937' }}>{t('breadcrumb.about')}</span>
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
              <FileText className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#10B981' }} />
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

        {/* Stats Section */}
        <section className="py-12 sm:py-16 -mt-8 sm:-mt-12" style={{ backgroundColor: 'rgba(248, 250, 252, 0.8)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: '#10B981' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm" style={{ color: '#64748B' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
              style={{ color: '#1F2937' }}
            >
              {t('story.title')}
            </h2>

            <div className="space-y-4 sm:space-y-6 leading-relaxed" style={{ color: '#64748B' }}>
              <p>
                {t('story.paragraph1')}
              </p>
              <p>
                {t('story.paragraph2')} <strong style={{ color: '#1F2937' }}>{t('story.paragraph2Bold')}</strong>.
              </p>
              <p>
                {t('story.paragraph3')}
              </p>
              <p>
                {t('story.paragraph4')}
              </p>
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="py-16 sm:py-20" style={{ backgroundColor: 'rgba(248, 250, 252, 0.8)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#1F2937' }}
            >
              {t('team.title')}
            </h2>

            <p className="mb-6 sm:mb-8" style={{ color: '#64748B' }}>
              {t('team.subtitle')}
            </p>

            <div
              className="team-card rounded-2xl p-6 sm:p-8 border transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="team-icon-bg w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <Users className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {t('team.teamName')}
                  </h3>
                  <p style={{ color: '#64748B' }}>
                    {t('team.teamDescription')}
                  </p>
                </div>
              </div>

              <h4 className="font-semibold mb-4" style={{ color: '#1F2937' }}>
                {t('team.credentialsTitle')}
              </h4>

              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                    <span className="text-sm sm:text-base" style={{ color: '#64748B' }}>
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: '#E2E8F0' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#1F2937' }}>
                  {t('team.independenceTitle')}
                </h4>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  {t('team.independenceText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Vet Our Lender Partners - Card Layout */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center"
              style={{ color: '#1F2937' }}
            >
              {t('vetting.title')}
            </h2>

            <p className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              {t('vetting.subtitle')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {vettingProcess.map((item, index) => (
                <div
                  key={index}
                  className="vetting-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="vetting-icon-bg w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: '#10B981' }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Core Values - Card Layout */}
        <section className="py-16 sm:py-20" style={{ backgroundColor: 'rgba(248, 250, 252, 0.8)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center"
              style={{ color: '#1F2937' }}
            >
              {t('values.title')}
            </h2>

            <p className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              {t('values.subtitle')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="values-card rounded-2xl p-6 text-center border transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}
                >
                  <div
                    className="values-icon-bg w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  >
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#10B981' }} />
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold mb-3"
                    style={{ color: '#1F2937' }}
                  >
                    {value.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authoritative Sources */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="sources-card rounded-2xl p-6 sm:p-8 border transition-all duration-300"
              style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="sources-icon-bg w-8 h-8 rounded flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <FileText className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ color: '#1F2937' }}
                >
                  {t('sources.title')}
                </h2>
              </div>

              <p className="mb-6" style={{ color: '#64748B' }}>
                {t('sources.subtitle')}
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.consumerfinance.gov/complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link flex items-center justify-between py-2 transition-colors p-2 rounded-lg"
                  style={{
                    textDecoration: 'none',
                    color: '#64748B',
                    backgroundColor: 'white',
                  }}
                >
                  <span className="font-medium">{t('sources.cfpb')}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://www.ftc.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link flex items-center justify-between py-2 transition-colors p-2 rounded-lg"
                  style={{
                    textDecoration: 'none',
                    color: '#64748B',
                    backgroundColor: 'white',
                  }}
                >
                  <span className="font-medium">{t('sources.ftc')}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .team-card:hover .team-icon-bg {
          background-color: rgba(16, 185, 129, 0.15) !important;
        }
        .vetting-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .vetting-card:hover .vetting-icon-bg {
          background-color: rgba(16, 185, 129, 0.2) !important;
        }
        .values-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .values-card:hover .values-icon-bg {
          background-color: rgba(16, 185, 129, 0.2) !important;
        }
        .sources-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .sources-card:hover .sources-icon-bg {
          background-color: rgba(16, 185, 129, 0.15) !important;
        }
        .source-link:hover {
          color: #10B981 !important;
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
};

export default AboutClient;
