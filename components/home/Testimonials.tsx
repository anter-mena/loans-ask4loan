'use client';

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "As a first-time borrower in Canada, I was nervous about the process. Ask4Loan made it incredibly simple. Got approved quickly and the funds were in my account the next business day!",
      amount: "$3,000",
      purpose: "Debt Consolidation",
      name: "Sarah Thompson",
      location: "Toronto, ON",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote: "After my bank declined my application, Ask4Loan connected me with a lender who was willing to work with my situation. The whole process was transparent and professional.",
      amount: "$2,500",
      purpose: "Emergency Expenses",
      name: "Jean-Pierre Dubois",
      location: "Montreal, QC",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote: "Being able to compare multiple loan offers in one place saved me so much time. The rates were competitive and the application process was straightforward. Highly recommend!",
      amount: "$4,500",
      purpose: "Home Renovation",
      name: "Michelle Chen",
      location: "Vancouver, BC",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="font-semibold text-sm uppercase tracking-wider bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            >
              Testimonials
            </Badge>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 px-4 sm:px-0"
            style={{ color: "#1F2937" }}
          >
            Customer Reviews: What Canadians Say About Ask4Loan
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ color: "#64748B" }}
          >
            Join thousands of satisfied borrowers who found better loan options with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative rounded-2xl p-6 sm:p-8 border shadow-sm transition-all duration-300 flex flex-col h-full cursor-default"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
            >
              {/* Top Row: Rating Stars and Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{
                        color: "#F59E0B",
                        fill: "#F59E0B",
                      }}
                    />
                  ))}
                </div>
                <Quote
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  style={{ color: "rgba(16, 185, 129, 0.2)" }}
                />
              </div>

              {/* Quote */}
              <div className="mb-6 grow">
                <p
                  className="leading-relaxed text-sm sm:text-base italic"
                  style={{ color: "#1F2937" }}
                >
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              {/* Loan Details as Badges */}
              <div
                className="flex flex-wrap gap-2 mb-6 pb-6 border-b"
                style={{ borderColor: "#E2E8F0" }}
              >
                <Badge
                  variant="secondary"
                  className="bg-emerald-50 text-emerald-700 border-emerald-200 font-bold"
                >
                  {testimonial.amount}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-slate-600 border-slate-300"
                >
                  {testimonial.purpose}
                </Badge>
              </div>

              {/* Author - At Bottom */}
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
                <div className="flex-1">
                  <p
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: "#1F2937" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-xs sm:text-sm"
                    style={{ color: "#64748B" }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base mb-4" style={{ color: "#64748B" }}>
            Ready to join thousands of happy customers?
          </p>
          <a
            href="https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=ask4loan"
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'loan_application_click', {
                  event_category: 'engagement',
                  event_label: 'Testimonials CTA Button',
                  event_source: 'testimonials_section'
                });
              }
            }}
            className="inline-block"
          >
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 ring-2 ring-emerald-200 ring-offset-2 ring-offset-white active:scale-95"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              Get Your Loan Today
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          border-color: rgba(16, 185, 129, 0.2) !important;
        }
        button:hover {
          background-color: #059669 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
