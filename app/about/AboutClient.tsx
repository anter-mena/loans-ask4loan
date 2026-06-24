'use client';

import { ChevronRight, FileText, Shield, Users, Award, CheckCircle, Star, Search, Clock } from "lucide-react";
import Link from "next/link";

const AboutClient = () => {
  const stats = [
    { value: "50,000+", label: "Canadian Helped" },
    { value: "40+", label: "Vetted Lender Partners" },
    { value: "5+", label: "Years in Business" },
    { value: "A+", label: "BBB Rating" },
  ];

  const credentials = [
    "Certified Financial Planners (CFP)",
    "Consumer lending professionals with 10+ years experience",
    "Compliance specialists familiar with CFPB regulations",
    "Former banking and fintech executives",
  ];

  const vettingProcess = [
    {
      icon: FileText,
      title: "State Licensing Verification",
      description: "Every lender must hold valid licenses in each state they operate. We verify through the appropriate regulatory."
    },
    {
      icon: Shield,
      title: "Federal Compliance Check",
      description: "All partners must comply with U.S. CCPA, and other federal lending regulations."
    },
    {
      icon: Star,
      title: "Consumer Complaint Review",
      description: "We review all CFPB complaints, BBB ratings, and state bar complaints for any consumer grievances."
    },
    {
      icon: Search,
      title: "Ongoing Monitoring",
      description: "Quarterly reviews ensure continued compliance with lending rules and industry regulations."
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Transparency First",
      description: "We believe in clear communication. No hidden fees. No surprises. Just straightforward lending matching."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Time means everything to our clients. We work to connect you with lending that fit your unique situation."
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Time matters when you need funds. Our streamlined processes get you matched with lenders immediately. No delays."
    },
    {
      icon: Award,
      title: "Quality Partners",
      description: "We partner with reputable US lenders who provide true anti-predatory lending regulations."
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
                Home
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: '#64748B' }} />
              <span style={{ color: '#1F2937' }}>About Us</span>
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
              About Ask4Loan
            </h1>

            <p
              className="text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed"
              style={{ color: '#64748B' }}
            >
              Helping Canadian find the right personal loan since 2020. We&apos;re committed to transparency, speed, and connecting you with trusted lenders.
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
              Our Story: 5+ Years Helping Canadian
            </h2>

            <div className="space-y-4 sm:space-y-6 leading-relaxed" style={{ color: '#64748B' }}>
              <p>
                Ask4Loan was founded in 2020 with a simple goal: to help everyday Canadian access the funds they need without the hassle and confusion that often comes with traditional lending.
              </p>
              <p>
                Over the past 5+ years, we&apos;ve grown from a small startup to a trusted loan comparison platform, helping over 50,000 Canadian find personal loans that fit their needs. Our success is built on one principle: <strong style={{ color: '#1F2937' }}>putting consumers first</strong>.
              </p>
              <p>
                We understand that life doesn&apos;t always go as planned. Whether it&apos;s an unexpected medical bill, a car repair, or simply making ends meet, sometimes you need a little extra help. That&apos;s where we come in.
              </p>
              <p>
                Our platform connects you with a network of 40+ vetted lenders who specialize in personal loans ranging from $300 to $5,000. Unlike some comparison sites, we don&apos;t just list any lender – every partner goes through our rigorous vetting process.
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
              Our Expert Team
            </h2>

            <p className="mb-6 sm:mb-8" style={{ color: '#64748B' }}>
              Our content and recommendations are backed by financial professionals with decades of combined experience.
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
                    Ask4Loan Editorial Team
                  </h3>
                  <p style={{ color: '#64748B' }}>
                    Our editorial team reviews all content for accuracy, regulatory compliance, and consumer relevance.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold mb-4" style={{ color: '#1F2937' }}>
                Team Credentials Include:
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
                  Editorial Independence:
                </h4>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  Our content is created through independent vetting of our lender partners. We maintain strict separation between our business operations and content operations to ensure transparency.
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
              How We Vet Our Lender Partners
            </h2>

            <p className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Not every lender makes it into our network. Here&apos;s our rigorous 4-step vetting process.
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
              Our Core Values
            </h2>

            <p className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              What sets us apart from other loan comparison sites.
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
                  Authoritative Sources
                </h2>
              </div>

              <p className="mb-6" style={{ color: '#64748B' }}>
                Our content is informed by official US financial regulatory bodies:
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
                  <span className="font-medium">Consumer Financial Protection Bureau (CFPB)</span>
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
                  <span className="font-medium">Federal Trade Commission (FTC)</span>
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
