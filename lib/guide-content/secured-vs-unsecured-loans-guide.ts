import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Compare secured vs unsecured loans. Learn which loan type is right for you based on collateral, rates, and risk factors.",
  blocks: [
    { type: "heading", level: 2, text: "Secured Loan" },
    { type: "heading", level: 3, text: "Advantages" },
    {
      type: "list",
      items: [
        "Lower interest rates",
        "Higher borrowing limits",
        "Easier approval with bad credit",
        "Longer repayment terms available",
        "Can help build credit",
      ],
    },
    { type: "heading", level: 3, text: "Disadvantages" },
    {
      type: "list",
      negative: true,
      items: [
        "Requires collateral (car, home, savings)",
        "Risk of losing asset if you default",
        "Longer approval process",
        "Asset valuation required",
      ],
    },
    {
      type: "paragraph",
      text: "Best For: Large purchases, bad credit borrowers, and those seeking the lowest rates.",
    },

    { type: "heading", level: 2, text: "Unsecured Loan" },
    { type: "heading", level: 3, text: "Advantages" },
    {
      type: "list",
      items: [
        "No collateral required",
        "Faster approval process",
        "No risk of losing assets",
        "Simpler application",
        "Good for smaller amounts",
      ],
    },
    { type: "heading", level: 3, text: "Disadvantages" },
    {
      type: "list",
      negative: true,
      items: [
        "Higher interest rates",
        "Lower borrowing limits",
        "Stricter credit requirements",
        "Shorter terms typically",
      ],
    },
    {
      type: "paragraph",
      text: "Best For: Those with good credit, smaller loan amounts, and quick funding needs.",
    },

    { type: "heading", level: 2, text: "Side-by-Side Comparison" },
    {
      type: "table",
      headers: ["Feature", "Secured Loan", "Unsecured Loan"],
      rows: [
        ["Collateral Required", "Yes", "No"],
        ["Interest Rates", "Lower (3-15%)", "Higher (6-35%)"],
        ["Credit Requirements", "More flexible", "Stricter"],
        ["Approval Speed", "Slower", "Faster"],
        ["Loan Amounts", "Higher ($5K-$100K+)", "Lower ($1K-$50K)"],
        ["Risk to Borrower", "Asset at risk", "No asset risk"],
        ["Best for Bad Credit", "Yes", "More difficult"],
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What can be used as collateral for a secured loan?",
          answer:
            "Common forms of collateral include a vehicle, a home or other real estate, or savings accounts and other financial assets.",
        },
        {
          question: "What happens if I default on a secured loan?",
          answer:
            "If you default on a secured loan, the lender has the right to seize the asset you pledged as collateral to recover the outstanding balance.",
        },
        {
          question: "Are personal loans typically secured or unsecured?",
          answer:
            "Most personal loans in Canada are unsecured, though some lenders offer secured personal loan options backed by a vehicle or savings account, often at lower rates.",
        },
        {
          question: "Which loan type is better for debt consolidation?",
          answer:
            "Most borrowers use an unsecured loan for debt consolidation since no asset is put at risk. A secured loan can be worth considering if you need a larger amount or a lower rate and are comfortable pledging collateral.",
        },
      ],
    },
  ],
};

export default content;
