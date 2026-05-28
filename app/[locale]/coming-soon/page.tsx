'use client';

import { useState, useEffect } from "react";
import { ArrowRight, Mail, Bell, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const ComingSoonPage = () => {
  const t = useTranslations('comingSoon');
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 14,
    hours: 8,
    minutes: 32,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Oval Gradient Background */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 400px at center top, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)`,
          zIndex: 1
        }}
      />

      <div className="relative z-10">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-6 sm:mb-8 border"
                style={{ 
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderColor: 'rgba(16, 185, 129, 0.2)'
                }}
              >
                <Zap className="w-4 h-4" style={{ color: '#10B981' }} />
                <span className="font-medium" style={{ color: '#10B981' }}>
                  {t('badge')}
                </span>
              </div>

              {/* Headline */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                style={{ color: '#1F2937' }}
              >
                {t('headline.part1')}
                <br />
                <span style={{ color: '#10B981' }}>{t('headline.part2')}</span>
              </h1>

              <p 
                className="text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
                style={{ color: '#64748B' }}
              >
                {t('description')}
              </p>

              {/* Countdown */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12">
                {[
                  { value: countdown.days, label: t('countdown.days') },
                  { value: countdown.hours, label: t('countdown.hours') },
                  { value: countdown.minutes, label: t('countdown.minutes') },
                  { value: countdown.seconds, label: t('countdown.seconds') },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="border rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm min-w-[60px] sm:min-w-[70px] md:min-w-[90px]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        borderColor: '#E2E8F0'
                      }}
                    >
                      <span 
                        className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono"
                        style={{ color: '#1F2937' }}
                      >
                        {formatNumber(item.value)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm mt-2" style={{ color: '#64748B' }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Email Signup */}
              <div className="max-w-md mx-auto px-4 sm:px-0">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail 
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" 
                        style={{ color: '#64748B' }}
                      />
                      <input
                        type="email"
                        placeholder={t('email.placeholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-12 pl-12 pr-4 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500"
                        style={{ 
                          backgroundColor: '#FFFFFF',
                          borderColor: '#E2E8F0',
                          color: '#1F2937'
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-12 px-6 rounded-xl font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                      style={{ 
                        backgroundColor: '#10B981',
                        color: '#FFFFFF'
                      }}
                    >
                      <Bell className="w-4 h-4" />
                      {t('email.button')}
                    </button>
                  </form>
                ) : (
                  <div 
                    className="border rounded-xl p-6 text-center"
                    style={{ 
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      borderColor: 'rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                    >
                      <Bell className="w-6 h-6" style={{ color: '#10B981' }} />
                    </div>
                    <p className="font-semibold mb-1" style={{ color: '#1F2937' }}>
                      {t('email.successTitle')}
                    </p>
                    <p className="text-sm" style={{ color: '#64748B' }}>
                      {t('email.successMessage')} <span style={{ color: '#10B981' }}>{email}</span> {t('email.successMessageEnd')}
                    </p>
                  </div>
                )}
                <p className="text-xs mt-4" style={{ color: '#64748B' }}>
                  {t('email.disclaimer')}
                </p>
              </div>

              {/* Back to Home */}
              <div className="mt-8 sm:mt-12">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-[#059669]"
                  style={{ 
                    color: '#10B981',
                    textDecoration: 'none'
                  }}
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  {t('backToHome')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        button:hover {
          background-color: #059669 !important;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
