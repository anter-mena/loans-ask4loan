import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Payday loans cost Canadians hundreds of millions annually in excessive fees. Here are smarter, cheaper alternatives that can meet your urgent cash needs.",
  blocks: [
    { type: "heading", level: 2, text: "Why You Should Avoid Payday Loans" },
    {
      type: "paragraph",
      text: "Payday loans rank among the most costly borrowing options available. While promising quick funds, their high costs create debt cycles many struggle to escape.",
    },
    {
      type: "paragraph",
      text: "In Canada, payday loans typically charge $15 per $100 borrowed for two weeks, equating to roughly 390% annual percentage rate. The average Canadian payday borrower takes out 8+ loans yearly.",
    },
    {
      type: "paragraph",
      text: "Multiple alternatives exist providing faster cash access at substantially lower costs. Understanding your options helps you sidestep the payday trap.",
    },

    { type: "heading", level: 2, text: "Alternative 1: Personal Installment Loans" },
    {
      type: "paragraph",
      text: "Personal installment loans directly replace payday loans. They provide lump sums repaid through fixed monthly installments over several months rather than demanding full repayment in two weeks.",
    },
    {
      type: "paragraph",
      text: "Even borrowers with poor credit find personal loan rates (up to 35% APR) dramatically lower than payday rates (390%+). On a $500 loan, a 30% APR personal loan over 6 months costs about $50 in interest versus $75+ biweekly with payday loans.",
    },
    {
      type: "paragraph",
      text: "Comparison platforms let borrowers see offers from multiple lenders through a single soft-check application, simplifying finding optimal options.",
    },

    { type: "heading", level: 2, text: "Alternative 2: Credit Union Loans" },
    {
      type: "paragraph",
      text: "Canadian credit unions frequently offer small personal loans with better terms than payday loans. As member-owned entities, they prioritize community service over fee maximization. Many feature short-term loan products specifically designed as payday alternatives.",
    },
    {
      type: "paragraph",
      text: "Credit union access typically requires membership. Joining usually needs living, working, or worshipping in the served community, plus a modest deposit (often $5–$25).",
    },

    { type: "heading", level: 2, text: "Alternative 3: Cash Advance Apps and Employer Advances" },
    {
      type: "paragraph",
      text: "Several fintech apps now provide small cash advances in Canada. Apps like Koho and Wealthsimple Cash bridge short-term gaps. Employer payroll advance programs—accessing earned wages before payday—are also expanding in Canada.",
    },
    {
      type: "paragraph",
      text: "These options aren't perfect—some employ tipping models functioning as interest, and subscription fees accumulate. However, they cost vastly less than payday loans for short-term cash bridging.",
    },

    { type: "heading", level: 2, text: "More Alternatives to Explore" },
    {
      type: "paragraph",
      text: "Beyond personal loans, credit unions, and apps, several other options help when needing cash quickly:",
    },
    {
      type: "list",
      items: [
        "Negotiate payment plans directly with creditors",
        "Sell unused items through Kijiji, Facebook Marketplace, or Poshmark",
        "Borrow from trusted friends or family (document it)",
        "Contact 211 for local emergency assistance programs",
        "Provincial emergency social assistance (available within days in many provinces)",
        "Food banks to free up grocery money for other bills",
        "Non-profit micro-loans through organizations like Momentum or SEED Winnipeg",
        "Credit card cash advance (higher rate but far cheaper than payday loans)",
      ],
    },

    { type: "heading", level: 2, text: "Cost Comparison: Payday vs. Alternatives" },
    {
      type: "paragraph",
      text: "Choosing alternatives over payday loans produces substantial savings. Here's what $500 costs through different borrowing methods:",
    },
    {
      type: "table",
      headers: ["Borrowing Method", "Cost on $500", "Repayment Period"],
      rows: [
        ["Payday loan", "$75+ every 2 weeks", "2 weeks (often rolled over)"],
        ["Personal loan (fair credit)", "$50–$100 total interest", "6–12 months"],
        ["Credit union loan", "$20–$50 total interest", "3–12 months"],
        ["Cash advance app", "$0–$15 (tip/subscription)", "Until next payday"],
        ["Employer payroll advance", "$0", "Deducted from next paycheck"],
        ["Credit card cash advance", "$15–$25 + interest", "Revolving"],
      ],
    },

    { type: "heading", level: 2, text: "Breaking the Payday Loan Cycle" },
    {
      type: "paragraph",
      text: "If currently trapped in a payday loan cycle, concrete steps exist to break free:",
    },
    {
      type: "list",
      items: [
        "Stop taking new payday loans immediately—switch to any alternative above",
        "Contact a non-profit credit counsellor (free through Credit Counselling Canada)",
        "Create a basic budget identifying essential versus non-essential expenses",
        "Consider debt consolidation loans to pay off existing payday loan balances",
        "Know your rights—some provinces limit rollover fees",
        "Build a small emergency fund ($500 target) to prevent future payday borrowing",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the cheapest alternative to a payday loan?",
          answer:
            "Employer payroll advances are typically the cheapest option, often costing $0 since they simply advance wages you've already earned. Credit union loans ($20-$50 total interest) and cash advance apps ($0-$15 in tips or subscription fees) are also far cheaper than a payday loan's $75+ every two weeks.",
        },
        {
          question: "Can I get a payday loan alternative with bad credit?",
          answer:
            "Yes. Even borrowers with poor credit can qualify for personal installment loans at rates up to 35% APR — dramatically lower than payday loan rates of 390%+. Credit unions also offer accessible short-term loan products designed specifically as payday alternatives.",
        },
        {
          question: "Are payday loans illegal in Canada?",
          answer:
            "No, payday loans are legal but heavily regulated. They typically charge around $15 per $100 borrowed over two weeks (roughly 390% APR), and some provinces limit rollover fees to reduce the risk of a debt cycle.",
        },
        {
          question: "How do I switch from payday loans to a personal loan?",
          answer:
            "Stop taking new payday loans and apply for a personal installment loan instead — comparison platforms let you see offers from multiple lenders through a single soft-check application. If you're carrying existing payday balances, a debt consolidation loan can pay them off and replace them with one lower-cost monthly payment.",
        },
      ],
    },
  ],
};

export default content;
