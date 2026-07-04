'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  /** "card" (default): boxed items with border/shadow, used on the homepage teaser.
   *  "flat": borderless list with hairline dividers, used on the dedicated FAQ page. */
  variant?: "card" | "flat";
};

const FaqAccordion = ({ items, variant = "card" }: FaqAccordionProps) => {
  if (variant === "flat") {
    return (
      <Accordion type="single" collapsible>
        {items.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            style={{ borderColor: "#E2E8F0" }}
          >
            <AccordionTrigger
              className="py-4 text-sm sm:text-base font-medium hover:no-underline"
              style={{ color: "#1F2937" }}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              className="text-sm leading-relaxed"
              style={{ color: "#64748B" }}
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <Accordion type="single" collapsible className="gap-3">
      {items.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="rounded-xl border px-4 sm:px-6 last:border-b-0"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
        >
          <AccordionTrigger
            className="py-4 sm:py-5 text-sm sm:text-base font-semibold hover:no-underline"
            style={{ color: "#1F2937" }}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className="text-sm leading-relaxed"
            style={{ color: "#64748B" }}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
