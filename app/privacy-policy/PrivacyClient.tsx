'use client';

import { Shield, ChevronRight, Lock, Eye, Mail, Phone, Database, Clock, FileText } from "lucide-react";
import Link from "next/link";

const PrivacyClient = () => {
  const protectionFeatures = [
    { label: "256-bit Encryption", icon: Lock },
    { label: "CCPA Compliant", icon: Shield },
    { label: "No Data Selling", icon: Eye }
  ];

  const sections = [
    {
      number: "1",
      icon: Lock,
      title: "Data Protection Measures",
      content: [
        "Our commitment to data security includes implementing advanced encryption protocols that meet financial industry standards. We use SSL technology to protect the transmission of sensitive information, including financial and personal details.",
        "We regularly review and enhance our security infrastructure to maintain the highest level of data protection for our users."
      ]
    },
    {
      number: "2",
      icon: Eye,
      title: "Restricted Internal Information Access",
      content: [
        "Only designated personnel with appropriate authorization can access customer information. Each team member with data access privileges must complete thorough background screening before receiving clearance.",
        "This controlled access framework ensures that information is handled exclusively for legitimate business purposes, including:"
      ],
      list: [
        "Processing applications",
        "Service improvement",
        "Credit assessment",
        "Customer support"
      ]
    },
    {
      number: "3",
      icon: Database,
      title: "Third-Party Information Disclosure",
      content: [
        "To process your application, maintain your account, and provide our services effectively, we may disclose your information to select external partners. These may include:"
      ],
      list: [
        "Lending institutions",
        "Credit reporting agencies",
        "Collection agencies",
        "Marketing service providers",
        "Other business partners relevant to our operations"
      ],
      footer: "All external parties are contractually required to maintain data confidentiality and may only use your information for authorized purposes related to your application or associated services."
    },
    {
      number: "4",
      icon: FileText,
      title: "Multi-Lender Application Network",
      content: [
        "Applications submitted through our partner network are distributed to various lending institutions and brokerage services to maximize your approval probability. Information processed through this network may be stored in jurisdictions outside your state.",
        "Network participants and their affiliates may contact you via email, phone, or text messaging (carrier rates apply). You retain the right to stop these communications by responding HELP for support or STOP to cease messages."
      ]
    },
    {
      number: "5",
      icon: Phone,
      title: "Phone and Text Message Authorization",
      content: [
        "Submitting your phone number grants us permission to contact you via voice calls and text messages. Communications may encompass:"
      ],
      list: [
        "Transaction confirmations",
        "Special offers",
        "Account notifications",
        "Feedback requests",
        "Other information relevant to your application or account status"
      ],
      footer: "You may withdraw this consent at any time by following the opt-out instructions included in text messages or by contacting us directly using the details provided below."
    },
    {
      number: "6",
      icon: Mail,
      title: "Email Communication Authorization",
      content: [
        "Providing your email address constitutes consent to receive electronic correspondence from us. Email communications may include:"
      ],
      list: [
        "Transaction-related messages",
        "Promotional content",
        "Account information",
        "Survey invitations",
        "Other material relevant to your relationship with our company"
      ],
      footer: "You retain the right to revoke email consent whenever you wish. Unsubscribe options are available via links in our emails, or you can contact us directly using the information below."
    },
    {
      number: "7",
      icon: Clock,
      title: "Information Retention Period",
      content: [
        "Personal data will be maintained for the duration necessary to achieve the objectives described in this policy and to comply with legal and regulatory requirements.",
        "If you wish to request deletion of your information, please contact us using our contact details below."
      ]
    },
    {
      number: "8",
      icon: Database,
      title: "Website Analytics and Cookies",
      content: [
        "We may deploy cookies and similar technologies to enhance your website experience and analyze usage patterns.",
        "Additional details are available in our separate cookie policy."
      ]
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
              <span style={{ color: '#1F2937' }}>Privacy Policy</span>
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
              Your Privacy Matters
            </h1>

            <p
              className="text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed mb-8"
              style={{ color: '#64748B' }}
            >
              We recognize the importance of protecting your personal data and appreciate the trust you place in us. This policy explains our approach to collecting, using, and protecting the information you provide when using our services.
            </p>

            <p
              className="text-sm max-w-2xl mx-auto px-4 sm:px-0"
              style={{ color: '#64748B' }}
            >
              Your use of our platform constitutes acceptance of the privacy practices described below.
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
                        {section.content.map((paragraph: string, pIndex: number) => (
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
                    Your Privacy Rights
                  </h2>
                  <p
                    className="leading-relaxed mb-4"
                    style={{ color: '#64748B' }}
                  >
                    You retain the right to review, correct, or request deletion of personal information we hold about you. To exercise these rights or if you have questions regarding your data, please contact us using the information provided below.
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
                Contact Us
              </h3>

              <p
                className="mb-4"
                style={{ color: '#64748B' }}
              >
                For questions, concerns, or requests regarding your privacy or this policy, please contact us at:
              </p>

              <a
                href="mailto:privacy@ask4loan.com"
                className="inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-[#059669]"
                style={{ color: '#10B981' }}
              >
                privacy@ask4loan.com
              </a>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm" style={{ color: '#64748B' }}>
              Last Updated: February 2026
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyClient;
