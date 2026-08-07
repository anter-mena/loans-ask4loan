'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    LeadScout: any;
  }
}

// LeadScout renders its Material UI form inside a same-origin <iframe> (srcDoc),
// so page-level CSS can't reach it. We inject these overrides INTO the iframe
// document to recolor MUI's hardcoded indigo primary (#5048e5) to brand emerald.
const BRAND = '#10b981';
const BRAND_HOVER = '#059669';
const IFRAME_BRAND_CSS = `
.MuiButton-containedPrimary { background-color: ${BRAND} !important; }
.MuiButton-containedPrimary:hover { background-color: ${BRAND_HOVER} !important; }
.MuiButton-containedPrimary.Mui-focusVisible { box-shadow: 0 0 0 3px rgba(16,185,129,0.4) !important; }
.MuiButton-outlinedPrimary, .MuiButton-textPrimary { color: ${BRAND} !important; border-color: ${BRAND} !important; }
.MuiSlider-root { color: ${BRAND} !important; }
.MuiSlider-track { background-color: ${BRAND} !important; border-color: ${BRAND} !important; }
.MuiSlider-thumb { background-color: ${BRAND} !important; }
.MuiSlider-thumb:hover, .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb.Mui-active { box-shadow: 0 0 0 8px rgba(16,185,129,0.16) !important; }
.MuiSlider-valueLabel { background-color: ${BRAND} !important; }
.MuiRadio-colorPrimary.Mui-checked, .MuiCheckbox-colorPrimary.Mui-checked, .MuiSwitch-colorPrimary.Mui-checked { color: ${BRAND} !important; }
.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track { background-color: ${BRAND} !important; }
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: ${BRAND} !important; }
.MuiInputLabel-root.Mui-focused, .MuiFormLabel-root.Mui-focused { color: ${BRAND} !important; }
.MuiCircularProgress-colorPrimary, .MuiLinearProgress-colorPrimary { color: ${BRAND} !important; }
.MuiLinearProgress-bar, .MuiLinearProgress-barColorPrimary { background-color: ${BRAND} !important; }
.MuiStepIcon-root.Mui-active, .MuiStepIcon-root.Mui-completed { color: ${BRAND} !important; }
.MuiTypography-colorPrimary, .MuiLink-root { color: ${BRAND} !important; }
.MuiMenuItem-root.Mui-selected, .MuiMenuItem-root.Mui-selected:hover { background-color: rgba(16,185,129,0.12) !important; }
`;

export function ApplyForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const source = searchParams.get('source');
    const amount = searchParams.get('amount');
    const id = searchParams.get('id');
    const affiliate_sub1 = searchParams.get('affiliate_sub1');
    const affiliate_sub2 = searchParams.get('affiliate_sub2');
    const affiliate_sub5 = searchParams.get('affiliate_sub5');
    const firstname = searchParams.get('firstname');
    const email = searchParams.get('email');

    let conversion: { type?: string } = {};
    if (source === 'fb') conversion = { type: 'FACEBOOK' };
    else if (source === 'tiktok') conversion = { type: 'TIKTOK' };

    const formConfig = {
      affiliateCode: id || '4PrKYVa8',
      formId: '1',
      language: 'en',
      theme: 'light',
      overrides: {
        requestedAmount: {
          max: 3000,
          min: 300,
          step: 100,
        },
      },
      defaultValues: {
        requestedAmount: Number(amount) || 1200,
        firstName: firstname || '',
        email: email || '',
      },
      extra: {
        affiliate_sub1: affiliate_sub1 || 'ask4loan',
        affiliate_sub2: affiliate_sub2 || '',
        affiliate_sub5: affiliate_sub5 || null,
        aff_utm_source: source || '',
      },
      conversion,
    };

    window.LeadScout = window.LeadScout || {};
    window.LeadScout.onLoad = () => {
      setIsLoaded(true);
      if (formRef.current && window.LeadScout.init) {
        window.LeadScout.init(formRef.current, formConfig);
      }
    };

    if (window.LeadScout && window.LeadScout.init && !isLoaded) {
      window.LeadScout.onLoad();
    }
  }, [searchParams, isLoaded]);

  // Inject the brand-color overrides into the LeadScout iframe document.
  useEffect(() => {
    const STYLE_ID = 'ls-brand-override';
    const inject = () => {
      const iframe = (formRef.current?.querySelector('iframe') ||
        document.getElementById('LoanLibraryIframe')) as HTMLIFrameElement | null;
      const doc = iframe?.contentDocument;
      if (!doc) return false;
      try {
        if (!doc.getElementById(STYLE_ID)) {
          const style = doc.createElement('style');
          style.id = STYLE_ID;
          style.textContent = IFRAME_BRAND_CSS;
          (doc.head || doc.documentElement).appendChild(style);
        }
        return true;
      } catch {
        return false;
      }
    };

    let tries = 0;
    const interval = setInterval(() => {
      tries += 1;
      const iframe = (formRef.current?.querySelector('iframe') ||
        document.getElementById('LoanLibraryIframe')) as HTMLIFrameElement | null;
      if (iframe && iframe.dataset.lsBrandBound !== '1') {
        iframe.dataset.lsBrandBound = '1';
        iframe.addEventListener('load', inject);
      }
      if (inject() || tries > 80) clearInterval(interval);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script src="https://app.leadscout.ca/library/library.js" strategy="afterInteractive" />

      <div className="relative bg-white border border-[hsl(214,20%,90%)] rounded-2xl shadow-xl p-6 md:p-9 overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#10b981]" />

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[1.65rem] font-bold text-[hsl(215,28%,12%)] tracking-tight mb-2">
            Get Your Rate in <span className="text-[#10b981]">2 Minutes</span>
          </h2>
          <p className="text-sm text-[hsl(215,14%,46%)] max-w-md mx-auto">
            We compare offers from trusted Canadian lenders to find you the best rate. Checking your
            options does not affect your credit score.
          </p>
        </div>

        <div id="lead-scout-form" ref={formRef} className="min-h-[450px]">
          {!isLoaded && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-12 border-4 border-[hsl(214,20%,90%)] border-t-[#10b981] rounded-full animate-spin mb-4" />
              <p className="text-sm font-semibold text-[#10b981]">Loading your application...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
