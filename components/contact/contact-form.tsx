"use client";

/* Contact form.

   Structure, field set and submission logic are UNIFIED across the network:
   same fields, same lib/contact.ts helper, same states. Only the STYLES block
   below and the button markup are site-specific â€” this site keeps its own
   look on purpose, so the sites don't share a visual fingerprint.

   Site-specific email config lives in app/api/contact/route.ts.            */

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect } from "@/components/ui/native-select";
import { submitContactForm, type ContactStatus } from "@/lib/contact";

const TOPICS = [
  "General enquiry",
  "Help with my application",
  "Rates & fees",
  "Repayment & support",
  "Partnerships",
  "Something else",
];

/* â”€â”€ Site styling â€” the only part that differs between sites â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const STYLES = {
  card: "rounded-2xl p-6 sm:p-8 shadow-lg border border-[#E2E8F0] bg-white flex flex-col gap-5",
  panel:
    "rounded-2xl p-6 sm:p-8 shadow-lg border border-[#E2E8F0] bg-white flex flex-col items-center justify-center text-center min-h-[360px]",
  label: "block text-sm font-medium text-[#1F2937]",
  field:
    "w-full h-12 px-4 rounded-md border-[#E2E8F0] bg-white text-[#1F2937] focus-visible:ring-2 focus-visible:ring-emerald-500/10 focus-visible:border-emerald-500",
  button:
    "w-full px-6 py-3 text-base font-medium rounded-md bg-[#10B981] text-white transition-all duration-300 ease-out hover:bg-[#059669] hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 inline-flex items-center justify-center gap-2",
};
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    const result = await submitContactForm(e.currentTarget);

    if (!result.ok) {
      setError(result.error);
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className={STYLES.panel}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-emerald-50">
          <CheckCircle2 size={22} className="text-[#10B981]" strokeWidth={1.75} />
        </div>
        <h2 className="text-xl font-bold mb-2 text-[#1F2937]">Message sent</h2>
        <p className="text-sm max-w-[320px] leading-relaxed text-[#64748B]">
          Thanks for reaching out â€” we&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubject("");
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-[#10B981] underline underline-offset-4 hover:opacity-80"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className={STYLES.card}>
      <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937]">Send us a message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="firstName" className={STYLES.label}>
            First name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="Your first name"
            required
            disabled={submitting}
            className={STYLES.field}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className={STYLES.label}>
            Last name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Your last name"
            required
            disabled={submitting}
            className={STYLES.field}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={STYLES.label}>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          required
          disabled={submitting}
          className={STYLES.field}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className={STYLES.label}>
          Subject
        </Label>
        <NativeSelect
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            disabled={submitting}
            className={STYLES.field}
          >
            <option value="" disabled>
              How can we help?
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </NativeSelect>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={STYLES.label}>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us more about your inquiry..."
          required
          disabled={submitting}
          className={`${STYLES.field} h-auto py-3 resize-none`}
        />
      </div>

      {/* Honeypot â€” hidden from people, frequently auto-filled by bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute w-px h-px -left-[9999px] opacity-0 pointer-events-none"
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 leading-relaxed">
          {error}
        </p>
      )}

      <button type="submit" disabled={submitting} className={STYLES.button}>
        {submitting && <Loader2 size={16} className="animate-spin" />}
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
