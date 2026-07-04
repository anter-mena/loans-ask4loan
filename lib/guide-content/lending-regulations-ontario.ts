import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Complete guide to Ontario lending regulations, payday loan laws under the Payday Loans Act, interest rate caps, and borrower protections in Ontario.",
  blocks: [
    { type: "heading", level: 2, text: "Payday Loan Regulations in Ontario" },
    {
      type: "paragraph",
      text: "Ontario regulates payday loans under the Payday Loans Act, 2008. The maximum cost of borrowing is $15 per $100 borrowed. Payday lenders must obtain licensing through the Ontario Ministry of Public and Business Service Delivery. Rollovers and back-to-back payday loans are prohibited.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you're paying more than $15 per $100 for a payday loan in Ontario, the lender is breaking the law.",
    },

    { type: "heading", level: 2, text: "Criminal Rate of Interest" },
    {
      type: "paragraph",
      text: "Under Canada's Criminal Code, no lender can charge more than 35% APR (effective January 2025). This applies across all loan categories in Ontario and nationally. This cap includes all fees and charges expressed as an annual percentage rate.",
    },
    {
      type: "callout",
      text: "Pro Tip: Always ask for the total cost of borrowing expressed as an APR.",
    },

    { type: "heading", level: 2, text: "Consumer Protection Act Rights" },
    {
      type: "paragraph",
      text: "Ontario's Consumer Protection Act, 2002 provides additional protections: lenders must provide clear written agreements, you have a 2-day cooling-off period for payday loans, unfair contract terms can be voided, and deceptive advertising is prohibited.",
    },
    {
      type: "callout",
      text: "Pro Tip: The 2-day cooling-off period means you can cancel a payday loan within 2 business days without penalty.",
    },

    { type: "heading", level: 2, text: "Collection Agency Rules" },
    {
      type: "paragraph",
      text: "Ontario's Collection and Debt Settlement Services Act regulates how debt collectors can contact you. Collectors cannot: call before 7 AM or after 9 PM, contact your employer (except to confirm employment), use threatening language, or call more than 3 times in a 7-day period.",
    },
    {
      type: "callout",
      text: "Pro Tip: Keep a log of all collection calls including dates, times, and what was said.",
    },

    { type: "heading", level: 2, text: "Where to Get Help in Ontario" },
    {
      type: "paragraph",
      text: "Resources include the Ontario Ministry of Public and Business Service Delivery, Credit Counselling Society, Legal Aid Ontario, and the Financial Consumer Agency of Canada for federally regulated lenders.",
    },
    {
      type: "callout",
      text: "Pro Tip: Non-profit credit counselling through agencies like the Credit Counselling Society is always free.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Verify payday lender licensing through the Ontario Ministry",
        "Take advantage of the 2-day cooling-off period for payday loans",
        "Report illegal practices to Consumer Protection Ontario",
        "Access free credit counselling via non-profit agencies",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum cost of a payday loan in Ontario?",
          answer:
            "Under the Payday Loans Act, 2008, Ontario payday lenders cannot charge more than $15 per $100 borrowed. If a lender charges more than that, they're breaking the law.",
        },
        {
          question: "Can I cancel a payday loan after signing?",
          answer:
            "Yes. Ontario's Consumer Protection Act, 2002 gives you a 2-day cooling-off period, meaning you can cancel a payday loan within 2 business days without penalty.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in Ontario?",
          answer:
            "Yes. Under Canada's Criminal Code, no lender can charge more than 35% APR (effective January 2025), including all fees and charges. This national cap applies to personal loans and other credit products in Ontario.",
        },
        {
          question: "What are debt collectors allowed to do in Ontario?",
          answer:
            "Under the Collection and Debt Settlement Services Act, collectors cannot call before 7 AM or after 9 PM, cannot contact your employer except to confirm employment, cannot use threatening language, and cannot call you more than 3 times in a 7-day period.",
        },
        {
          question: "Where can I get free help if I'm struggling with debt in Ontario?",
          answer:
            "Non-profit credit counselling through agencies like the Credit Counselling Society is always free. You can also reach out to the Ontario Ministry of Public and Business Service Delivery, Legal Aid Ontario, or the Financial Consumer Agency of Canada for federally regulated lenders.",
        },
      ],
    },
  ],
};

export default content;
