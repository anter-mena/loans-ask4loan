import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Complete guide to Manitoba lending regulations, the Consumer Protection Office payday loan caps, and borrower protections when borrowing in MB.",
  blocks: [
    { type: "heading", level: 2, text: "Payday Lending Regulations" },
    {
      type: "paragraph",
      text: "Manitoba's Consumer Protection Act regulates payday lending with a maximum cost of $17 per $100 borrowed. All payday lenders must be licensed by the Consumer Protection Office. Manitoba limits payday loans to 30% of the borrower's net pay. A 48-hour cooling-off period applies, and repeat borrowing is restricted.",
    },
    {
      type: "callout",
      text: "Pro Tip: Manitoba's payday loan costs are slightly higher than Ontario and BC ($17 vs $15 per $100).",
    },

    { type: "heading", level: 2, text: "Criminal Rate and Consumer Credit" },
    {
      type: "paragraph",
      text: "The federal 35% APR criminal rate cap applies in Manitoba. Manitoba's consumer protection legislation requires clear disclosure of all lending costs, prohibits misleading advertising, and provides remedies for unfair lending practices.",
    },

    { type: "heading", level: 2, text: "Consumer Protection Office Role" },
    {
      type: "paragraph",
      text: "Manitoba's Consumer Protection Office (CPO) licenses and monitors payday lenders, investigates complaints, educates consumers, and can take enforcement action. They maintain a public registry of licensed payday lenders and publish educational resources on borrowing safely.",
    },

    { type: "heading", level: 2, text: "Debt Collection Rules" },
    {
      type: "paragraph",
      text: "Manitoba's Consumer Protection Act regulates debt collection. Collectors must be licensed, cannot call at unreasonable hours, cannot use threats or harassment, and must identify themselves. Manitoba's general limitation period for debt collection is 6 years.",
    },

    { type: "heading", level: 2, text: "Manitoba Resources" },
    {
      type: "paragraph",
      text: "The Consumer Protection Office (204-945-3800 or 1-800-782-0067) handles complaints. Community Financial Counselling Services (CFCS) of Manitoba provides free credit counselling. Legal Aid Manitoba assists qualifying residents with debt-related legal issues.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Payday loans in Manitoba are capped at $17 per $100 borrowed",
        "Payday loans cannot exceed 30% of your net pay",
        "A 48-hour cooling-off period applies to payday loans",
        "Free credit counselling is available through CFCS of Manitoba",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum cost of a payday loan in Manitoba?",
          answer:
            "Manitoba's Consumer Protection Act caps payday loan costs at $17 per $100 borrowed — slightly higher than Ontario and BC's $15 per $100. A payday loan also cannot exceed 30% of your net pay.",
        },
        {
          question: "Can I cancel a payday loan after signing in Manitoba?",
          answer:
            "Yes. Manitoba applies a 48-hour cooling-off period for payday loans, and repeat borrowing is restricted. All payday lenders must be licensed by the Consumer Protection Office.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in Manitoba?",
          answer:
            "Yes. The federal 35% APR criminal rate cap applies in Manitoba. Provincial consumer protection legislation also requires clear disclosure of all lending costs and prohibits misleading advertising.",
        },
        {
          question: "What are debt collectors allowed to do in Manitoba?",
          answer:
            "Collectors in Manitoba must be licensed, cannot call at unreasonable hours, cannot use threats or harassment, and must identify themselves. Manitoba's general limitation period for debt collection is 6 years.",
        },
        {
          question: "Where can I get free help with debt in Manitoba?",
          answer:
            "Community Financial Counselling Services (CFCS) of Manitoba provides free credit counselling. You can also contact the Consumer Protection Office (204-945-3800 or 1-800-782-0067) or Legal Aid Manitoba for qualifying residents.",
        },
      ],
    },
  ],
};

export default content;
