import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Complete guide to Alberta lending regulations, payday loan caps under the Fair Trading Act, and consumer protections. Know your borrowing rights in AB.",
  blocks: [
    {
      type: "paragraph",
      text: "Alberta regulates consumer lending to ensure fair treatment. Understanding these rules protects you when borrowing in the province.",
    },

    { type: "heading", level: 2, text: "Payday Lending in Alberta" },
    {
      type: "paragraph",
      text: "Alberta's Payday Loans Regulation caps costs at $15 per $100 borrowed. All payday lenders must be licensed by Service Alberta. The maximum payday loan is 50% of your net pay. Rollovers are prohibited — a lender cannot issue a new payday loan to pay off an existing one. Alberta also requires a 2-business-day cooling-off period.",
    },
    {
      type: "callout",
      text: "Pro Tip: Alberta was one of the first provinces to regulate payday lending. If a lender isn't licensed, do not borrow from them.",
    },

    { type: "heading", level: 2, text: "Criminal Rate and APR Caps" },
    {
      type: "paragraph",
      text: "The federal 35% APR criminal rate cap applies in Alberta. This includes all fees, charges, and interest expressed as an annual rate. Alberta's Consumer Protection Act further prohibits unfair practices including hidden fees and misleading cost disclosures in lending agreements.",
    },
    {
      type: "callout",
      text: "Pro Tip: Ask for the total cost of borrowing in writing before signing any loan agreement. Compare the APR across multiple lenders.",
    },

    { type: "heading", level: 2, text: "Consumer Protection Act Provisions" },
    {
      type: "paragraph",
      text: "Alberta's Consumer Protection Act provides broad protections: lenders must provide clear cost disclosures, unfair contract terms can be challenged, misleading advertising is prohibited, and consumers have remedies for non-compliant lending. The Fair Trading Act also governs business practices.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you believe a lender has violated the Consumer Protection Act, file a complaint with Service Alberta.",
    },

    { type: "heading", level: 2, text: "Debt Collection in Alberta" },
    {
      type: "paragraph",
      text: "Alberta's Collection and Debt Repayment Practices Regulation limits collector behaviour. Collectors cannot contact you between 10 PM and 7 AM, cannot threaten legal action they don't intend to take, must identify themselves clearly, and cannot contact you more than 3 times per week. All collectors must be licensed.",
    },
    {
      type: "callout",
      text: "Pro Tip: Alberta has a limitation period for debt collection. After 2 years of no payment or acknowledgement, most debts become statute-barred.",
    },

    { type: "heading", level: 2, text: "Alberta Resources" },
    {
      type: "paragraph",
      text: "Service Alberta handles consumer complaints (1-877-427-4088). Money Mentors (formerly Credit Counselling Services of Alberta) offers free financial counselling. Legal Aid Alberta provides assistance for qualifying residents.",
    },
    {
      type: "callout",
      text: "Pro Tip: Money Mentors is Alberta's only non-profit credit counselling organization and offers free, confidential financial guidance.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Payday loans cannot exceed 50% of net pay",
        "2 business days available to cancel payday loans",
        "Service Alberta maintains a registry of licensed lenders",
        "Money Mentors provides free non-profit credit counselling",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum cost of a payday loan in Alberta?",
          answer:
            "Alberta's Payday Loans Regulation caps costs at $15 per $100 borrowed, and a payday loan cannot exceed 50% of your net pay. All payday lenders must be licensed by Service Alberta.",
        },
        {
          question: "Can I cancel a payday loan after signing in Alberta?",
          answer:
            "Yes. Alberta requires a 2-business-day cooling-off period, during which you can cancel a payday loan. Lenders are also prohibited from issuing a new payday loan to pay off an existing one (rollovers).",
        },
        {
          question: "Is there a cap on interest rates for personal loans in Alberta?",
          answer:
            "Yes. The federal 35% APR criminal rate cap applies in Alberta, covering all fees, charges, and interest expressed as an annual rate. Alberta's Consumer Protection Act also prohibits hidden fees and misleading cost disclosures.",
        },
        {
          question: "What are debt collectors allowed to do in Alberta?",
          answer:
            "Under Alberta's Collection and Debt Repayment Practices Regulation, collectors cannot contact you between 10 PM and 7 AM, cannot threaten legal action they don't intend to take, must identify themselves, and cannot contact you more than 3 times per week. All collectors must be licensed.",
        },
        {
          question: "Where can I get free help with debt in Alberta?",
          answer:
            "Money Mentors is Alberta's only non-profit credit counselling organization and offers free, confidential financial guidance. You can also contact Service Alberta (1-877-427-4088) or Legal Aid Alberta for qualifying residents.",
        },
      ],
    },
  ],
};

export default content;
