import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Start the new year right with a complete financial reset plan for Canadians. Set budgets, tackle debt, and improve your credit score in 2026.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Review Your Debt Situation" },
    {
      type: "paragraph",
      text: "List all debts: credit cards, loans, lines of credit. Note balances, interest rates, and minimum payments. Calculate your total debt-to-income ratio. If it's above 40%, prioritize paying down high-interest debt first.",
    },
    {
      type: "callout",
      text: "Pro Tip: Use the CRA's My Account to review your tax situation alongside your debt review.",
    },

    { type: "heading", level: 3, text: "2. Set a Realistic Budget" },
    {
      type: "paragraph",
      text: "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings/debt. Track spending for January to establish a baseline. Free tools like Mint or YNAB can automate tracking.",
    },
    {
      type: "callout",
      text: "Pro Tip: Canadians can use the FCAC's free budget planner at canada.ca/financial-tools.",
    },

    { type: "heading", level: 3, text: "3. Build an Emergency Fund" },
    {
      type: "paragraph",
      text: "Aim for 3–6 months of expenses. Start with $1,000 as a first milestone. Set up automatic transfers to a high-interest savings account on payday.",
    },
    {
      type: "callout",
      text: "Pro Tip: EQ Bank and Tangerine typically offer the highest savings rates in Canada.",
    },

    { type: "heading", level: 3, text: "4. Check Your Credit Report" },
    {
      type: "paragraph",
      text: "Request free reports from Equifax and TransUnion. Dispute any errors. Your credit score is the foundation of better borrowing terms throughout the year.",
    },
    {
      type: "callout",
      text: "Pro Tip: Borrowell (Equifax) and Credit Karma Canada (TransUnion) provide free ongoing credit monitoring.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Automate savings transfers so they happen before you can spend",
        "Review and cancel unused subscriptions",
        "Set specific financial goals with deadlines",
        "Schedule a mid-year financial check-in for July",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Where do I start with a financial reset?",
          answer:
            "Start by listing all your debts — credit cards, loans, lines of credit — with their balances, interest rates, and minimum payments, then calculate your debt-to-income ratio. If it's above 40%, prioritize paying down your highest-interest debt first.",
        },
        {
          question: "What budgeting rule should I follow?",
          answer:
            "The 50/30/20 rule is a solid starting point: 50% of after-tax income for needs, 30% for wants, and 20% for savings and debt repayment. Track your spending for a month to establish a baseline before adjusting.",
        },
        {
          question: "How much should I have in an emergency fund?",
          answer:
            "Aim for 3–6 months of expenses over time, but start with a first milestone of $1,000. Setting up automatic transfers to a high-interest savings account on payday makes this easier to build consistently.",
        },
        {
          question: "How can I check my credit score for free in Canada?",
          answer:
            "You can request free credit reports directly from Equifax and TransUnion, and use free ongoing monitoring services like Borrowell (Equifax) or Credit Karma Canada (TransUnion). Dispute any errors you find — your credit score is the foundation for better borrowing terms.",
        },
        {
          question: "What's a good debt-to-income ratio?",
          answer:
            "Generally, your total monthly debt payments should stay below 40% of your gross income. If your debt-to-income ratio is above that, focus your reset on paying down high-interest balances before taking on any new credit.",
        },
      ],
    },
  ],
};

export default content;
