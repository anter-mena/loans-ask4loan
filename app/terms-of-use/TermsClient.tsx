'use client';

import { Gavel, ChevronRight, Scale, AlertCircle, FileText, CheckCircle2, ShieldAlert, Mail } from "lucide-react";
import Link from "next/link";

const TermsClient = () => {
  const sections = [
    {
      number: "1",
      icon: Scale,
      title: "Jurisdiction Notice",
      content: [
        "All financial transactions conducted through this platform are considered to take place at our principal place of business, regardless of the user's geographic location."
      ]
    },
    {
      number: "2",
      icon: AlertCircle,
      title: "Important Information",
      content: [
        "Our microloans are designed to meet immediate short-term financial needs. Customers must fully repay their existing loan before being eligible for additional financing."
      ]
    },
    {
      number: "3",
      icon: FileText,
      title: "Definitions",
      content: [
        "In these Terms of Use (\"Terms\"), references to \"Customer,\" \"you,\" or \"your\" identify the individual applying for our services. References to \"Company,\" \"we,\" or \"our\" refer to Ask4Loan."
      ]
    },
    {
      number: "4",
      icon: CheckCircle2,
      title: "Your Agreement to These Terms",
      content: [
        "By authorizing automatic withdrawals from your designated bank account for loan repayment, you acknowledge acceptance of these Terms. These Terms have been made accessible to you through multiple channels—including our physical location, our website at ask4loan.com, and through direct communication with our representatives—before you finalize your transaction."
      ]
    },
    {
      number: "5",
      icon: Gavel,
      title: "Electronic Transaction Authorization",
      content: [
        "You consent to our use of electronic methods to collect amounts due under your loan agreement. This includes our right to resubmit collection attempts if initial efforts fail, whether for partial amounts or the full balance due, plus any applicable returned payment fees that we are legally authorized to charge."
      ]
    },
    {
      number: "6",
      icon: ShieldAlert,
      title: "Individual Dispute Resolution",
      content: [
        "To the maximum extent permitted by applicable law, you agree to resolve any dispute with us on an individual basis and waive participation in class action litigation or consolidated proceedings involving multiple claimants. If you join such proceedings, you consent to injunctive measures for your withdrawal. This provision does not limit your right to pursue individual legal remedies available to you."
      ]
    },
    {
      number: "7",
      icon: FileText,
      title: "Electronic Records",
      content: [
        "You acknowledge that digital communications, online forms, scanned documents, and facsimile transmissions carry the same legal weight as original paper documents. Your acceptance may be demonstrated through various methods, including verbal confirmation (in person or by phone), electronic signature, typed name, or other indicated acceptance methods, all creating binding obligations under these Terms."
      ]
    },
    {
      number: "8",
      icon: CheckCircle2,
      title: "Application Verification and Certification",
      content: [
        "By submitting your application electronically or by phone, you certify under penalty of perjury that all information provided is accurate and complete. You confirm that you are not currently subject to bankruptcy proceedings nor planning to declare bankruptcy.",
        "You authorize us to verify your application details through consumer reporting agencies and other appropriate verification methods. We retain the sole discretion to refuse applications based on our risk assessment following due diligence.",
        "You understand that processing requires verification of your employment status, banking information, and other relevant details. You accept sole responsibility for protecting any personal identification numbers or account identifiers issued to you."
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
              <span style={{ color: '#1F2937' }}>Terms of Use</span>
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
              <Gavel className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#10B981' }} />
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#1F2937' }}
            >
              Legal Document
            </h1>

            <p
              className="text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed mb-4"
              style={{ color: '#64748B' }}
            >
              Terms of Use
            </p>

            <p
              className="text-sm max-w-2xl mx-auto px-4 sm:px-0"
              style={{ color: '#64748B' }}
            >
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms of Use Sections */}
        <section className="py-12 sm:py-16">
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
                            className="leading-relaxed text-sm sm:text-base"
                            style={{ color: '#64748B' }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
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
                  <Gavel className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-bold mb-4"
                    style={{ color: '#1F2937' }}
                  >
                    Important Notice
                  </h2>
                  <p
                    className="leading-relaxed mb-4 text-sm sm:text-base"
                    style={{ color: '#64748B' }}
                  >
                    By using Ask4Loan&apos;s services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use. These terms constitute a legally binding agreement between you and Ask4Loan. If you do not agree to these terms, please do not use our services.
                  </p>
                  <p
                    className="text-sm italic"
                    style={{ color: '#64748B' }}
                  >
                    By continuing to use Ask4Loan&apos;s services, you confirm your acceptance of these Terms of Use and any future amendments. We recommend reviewing these terms periodically for any updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
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
                Questions About Our Terms?
              </h3>

              <p
                className="mb-4 text-sm sm:text-base"
                style={{ color: '#64748B' }}
              >
                Our legal team is here to help clarify any questions you may have.
              </p>

              <a
                href="mailto:legal@ask4loan.com"
                className="inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-[#059669]"
                style={{ color: '#10B981' }}
              >
                legal@ask4loan.com
              </a>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm" style={{ color: '#64748B' }}>
              Last Updated: January 16, 2026
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsClient;
