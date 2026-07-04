import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Both provide access to funds, but they work very differently. Understand the key differences to choose the right option for your needs.",
  blocks: [
    { type: "heading", level: 2, text: "Key Differences at a Glance" },
    {
      type: "paragraph",
      text: "A personal loan provides a fixed lump sum that you repay in equal monthly installments over a set term. A line of credit gives you access to a revolving pool of funds that you can draw from as needed, repaying and reborrowing within your credit limit.",
    },
    {
      type: "paragraph",
      text: "Think of a personal loan like buying a car—you get the full amount upfront and pay it off. A line of credit is more like a credit card—you have a limit and only pay interest on what you actually use.",
    },

    {
      type: "table",
      headers: ["Feature", "Personal Loan", "Line of Credit"],
      rows: [
        ["How funds are received", "Lump sum upfront", "Draw as needed up to limit"],
        ["Interest rate", "Fixed", "Usually variable"],
        ["Payment structure", "Fixed monthly payments", "Interest on balance drawn + minimum payment"],
        ["Repayment term", "Set end date (12-60 months)", "Revolving (no set end date)"],
        ["Discipline required", "Built into structure", "Requires self-discipline"],
        ["Best for", "One-time, defined expenses", "Ongoing or unpredictable needs"],
        ["Availability", "Banks, credit unions, online lenders", "Primarily major banks and credit unions"],
      ],
    },

    { type: "heading", level: 2, text: "How Personal Loans Work" },
    {
      type: "paragraph",
      text: "When you take out a personal loan, you receive the full amount at once. Your repayment schedule is fixed from day one—you know exactly how much you will pay each month and when the loan will be fully repaid.",
    },
    {
      type: "paragraph",
      text: "The fixed structure makes personal loans ideal for budgeting. There are no surprises, no variable rates, and a guaranteed debt-free date. However, you cannot reborrow once you have started repaying—if you need more money, you must apply for a new loan.",
    },
    {
      type: "paragraph",
      text: "In Canada, personal loans through our network range from $300 to $5,000, though banks and credit unions may offer larger amounts. Rates are fixed, typically between 6% and 35% APR. They are available from major banks, credit unions, and online lenders.",
    },

    { type: "heading", level: 2, text: "How Lines of Credit Work" },
    {
      type: "paragraph",
      text: "A line of credit (LOC) provides you with a maximum borrowing limit that you can draw from as needed. You only pay interest on the amount you have actually drawn, not the total limit. As you repay, the available credit replenishes for future use.",
    },
    {
      type: "paragraph",
      text: "In Canada, unsecured personal lines of credit typically have variable interest rates tied to the prime rate, often prime + 2% to prime + 7%. As of 2026, this translates to roughly 7% to 12% for borrowers with good credit. HELOCs (home equity lines of credit) offer lower rates but require property ownership.",
    },
    {
      type: "paragraph",
      text: "The flexibility of a LOC comes with a risk: because there is no forced repayment schedule, it is easy to remain in debt indefinitely by making only minimum payments. Disciplined borrowers thrive with this product; undisciplined borrowers may prefer the structure of a personal loan.",
    },

    { type: "heading", level: 2, text: "When to Choose a Personal Loan" },
    {
      type: "paragraph",
      text: "A personal loan is the better choice in several common scenarios.",
    },
    {
      type: "list",
      items: [
        "You need a specific, known amount for a one-time expense",
        "You want predictable, fixed monthly payments",
        "You prefer a guaranteed debt-free date",
        "You are consolidating existing debts into one payment",
        "You want protection from rising interest rates (fixed vs. variable)",
        "You need the discipline of a structured repayment plan",
      ],
    },

    { type: "heading", level: 2, text: "When to Choose a Line of Credit" },
    {
      type: "paragraph",
      text: "A line of credit is better suited for certain financial needs.",
    },
    {
      type: "list",
      items: [
        "You need ongoing access to funds over time (e.g., home renovation in stages)",
        "You are uncertain of the total amount you will need",
        "You want to borrow and repay flexibly without reapplying",
        "You have strong financial discipline to manage revolving credit",
        "You want to minimize interest by borrowing only when needed",
        "You have a strong credit profile (LOCs typically require higher scores)",
      ],
    },

    { type: "heading", level: 2, text: "Cost Comparison Example" },
    {
      type: "paragraph",
      text: "Let us compare the cost of borrowing $3,000 through each option.",
    },
    {
      type: "table",
      headers: ["Scenario", "Personal Loan (18% fixed APR)", "Line of Credit (12% variable APR)"],
      rows: [
        ["Amount needed", "$3,000 one-time", "$3,000 (drawn over 3 months)"],
        ["Monthly payment", "$166 fixed / 24 months", "~$100 minimum / flexible"],
        ["Total interest paid (2 years)", "~$580", "~$360 (if paid in 2 years)"],
        ["Debt-free date", "Guaranteed in 24 months", "Depends on payments made"],
        ["Risk of remaining in debt", "None—automatic payoff", "Yes—easy to keep balance"],
      ],
    },
    { type: "heading", level: 3, text: "Key Insight" },
    {
      type: "paragraph",
      text: "The LOC costs less in total interest, but only if you make consistent, substantial payments. If you pay only the minimum, the LOC debt could persist for years and ultimately cost more than the personal loan.",
    },

    { type: "heading", level: 2, text: "Eligibility: Which Is Easier to Get?" },
    {
      type: "paragraph",
      text: "Personal loans are generally more accessible than lines of credit, especially for borrowers with fair or poor credit.",
    },
    {
      type: "paragraph",
      text: "In Canada, unsecured lines of credit typically require a credit score of 650+ and a relationship with the lending institution. Personal loans, especially from online lenders, may accept scores as low as 500. For borrowers with imperfect credit, a personal loan is often the more realistic option.",
    },

    {
      type: "faq",
      items: [
        {
          question: "Which has a lower interest rate—a personal loan or line of credit?",
          answer:
            "Unsecured lines of credit are usually variable and tied to the prime rate, often working out to roughly 7% to 12% for borrowers with good credit. Personal loans have fixed rates typically between 6% and 35% APR. A LOC can cost less in total interest, but only if you make consistent, substantial payments—minimum payments can leave you in debt longer than a fixed-term loan would.",
        },
        {
          question: "Can I use both at the same time?",
          answer:
            "Yes, there's nothing preventing you from holding a personal loan and a line of credit simultaneously. Keep in mind that both balances and payments count toward your debt-to-income ratio, which lenders will factor in if you apply for additional credit later.",
        },
        {
          question: "Which is better for debt consolidation?",
          answer:
            "A personal loan is generally better suited for consolidating existing debts into one payment because its fixed schedule guarantees a debt-free date. A line of credit offers flexibility, but without disciplined payments the revolving balance can persist indefinitely and end up costing more.",
        },
        {
          question: "Is a HELOC different from a personal line of credit?",
          answer:
            "Yes. A HELOC (home equity line of credit) is secured against your property and typically offers lower rates but requires homeownership. An unsecured personal line of credit doesn't require collateral but carries higher rates, generally in the prime + 2% to prime + 7% range.",
        },
        {
          question: "What credit score do I need for each option?",
          answer:
            "Unsecured personal lines of credit typically require a credit score of 650 or higher. Personal loans are more accessible—especially through online lenders, which may accept scores as low as 500, though rates will be higher for lower scores.",
        },
        {
          question: "How much can I borrow with a personal loan?",
          answer:
            "Through our network, personal loans range from $300 to $5,000, though banks and credit unions may offer larger amounts. A line of credit's limit is set individually by the lender based on your income and credit profile.",
        },
      ],
    },
  ],
};

export default content;
