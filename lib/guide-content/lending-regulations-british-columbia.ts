import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Understand British Columbia lending regulations, BPCPA payday loan rules, and borrower protections. Know your rights when borrowing in BC, Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Payday Loan Rules in BC" },
    {
      type: "paragraph",
      text: "BC's Business Practices and Consumer Protection Act regulates payday lending. The maximum cost is $15 per $100 borrowed. Payday lenders must be licensed by Consumer Protection BC. The maximum loan amount is $1,500, and the maximum term is 62 days. Repeat loans (rollovers) are prohibited within the cooling-off period.",
    },
    {
      type: "callout",
      text: "Pro Tip: Consumer Protection BC maintains a public registry of licensed payday lenders at consumerprotectionbc.ca. Always verify before borrowing.",
    },

    { type: "heading", level: 2, text: "Interest Rate Protections" },
    {
      type: "paragraph",
      text: "The federal Criminal Code cap of 35% APR applies in BC. Additionally, BC's Business Practices and Consumer Protection Authority (BPCPA) monitors lending practices and can take enforcement action against lenders who engage in unfair or deceptive practices, including misleading interest rate advertising.",
    },
    {
      type: "callout",
      text: "Pro Tip: BC has been a leader in consumer lending protection. If you encounter unfair lending practices, file a complaint with Consumer Protection BC.",
    },

    { type: "heading", level: 2, text: "Cooling-Off Period and Cancellation Rights" },
    {
      type: "paragraph",
      text: "BC provides a 2-business-day cancellation period for payday loans. During this period, you can return the borrowed amount and cancel the loan without any fees. For other consumer contracts, the Business Practices and Consumer Protection Act provides various cancellation rights depending on the contract type.",
    },
    {
      type: "callout",
      text: "Pro Tip: The cooling-off period starts when you receive the loan funds, not when you sign the agreement.",
    },

    { type: "heading", level: 2, text: "Debt Collection Regulations" },
    {
      type: "paragraph",
      text: "BC's Debt Collection Industry Act restricts how collectors can contact you. Collectors must identify themselves and the creditor, cannot call at unreasonable hours, cannot use threatening or harassing language, and must stop contacting you at work if requested. All debt collectors must be licensed.",
    },
    {
      type: "callout",
      text: "Pro Tip: In BC, you can request in writing that a collector stop contacting you at work, and they must comply.",
    },

    { type: "heading", level: 2, text: "BC Consumer Resources" },
    {
      type: "paragraph",
      text: "Consumer Protection BC (consumerprotectionbc.ca) handles complaints about licensed lenders. The Credit Counselling Society (based in BC) offers free financial counselling. Access Pro Bono provides free legal advice for qualifying BC residents. The FCAC handles complaints about federally regulated financial institutions.",
    },
    {
      type: "callout",
      text: "Pro Tip: Consumer Protection BC responds to complaints within 10 business days and can investigate and take enforcement action against non-compliant lenders.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Verify payday lender licences through Consumer Protection BC",
        "You have 2 business days to cancel a payday loan in BC",
        "Consumer Protection BC can be reached at 1-888-564-9963",
        "Free credit counselling is available through the Credit Counselling Society",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum payday loan amount and term in BC?",
          answer:
            "Under the Business Practices and Consumer Protection Act, BC payday lenders can charge no more than $15 per $100 borrowed, with a maximum loan amount of $1,500 and a maximum term of 62 days.",
        },
        {
          question: "Can I cancel a payday loan after I receive the funds in BC?",
          answer:
            "Yes. BC provides a 2-business-day cancellation period that starts when you receive the loan funds. During this window, you can return the borrowed amount and cancel the loan without any fees.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in BC?",
          answer:
            "Yes. The federal Criminal Code cap of 35% APR applies in BC, and the Business Practices and Consumer Protection Authority (BPCPA) can take enforcement action against lenders using unfair or deceptive practices, including misleading rate advertising.",
        },
        {
          question: "How do I verify a lender is licensed in BC?",
          answer:
            "Consumer Protection BC maintains a public registry of licensed payday lenders at consumerprotectionbc.ca. Always check this registry before borrowing, and file a complaint there if you encounter unfair practices.",
        },
        {
          question: "Where can I get free help with debt in BC?",
          answer:
            "The Credit Counselling Society, based in BC, offers free financial counselling. Access Pro Bono provides free legal advice for qualifying residents, and Consumer Protection BC (1-888-564-9963) handles complaints about licensed lenders, typically responding within 10 business days.",
        },
      ],
    },
  ],
};

export default content;
