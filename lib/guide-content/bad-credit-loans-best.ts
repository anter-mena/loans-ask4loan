import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Having a low credit score does not mean you cannot access financing. Compare Canadian lenders who specialize in working with borrowers who have imperfect credit.",
  blocks: [
    { type: "heading", level: 2, text: "Can You Get a Loan With Bad Credit?" },
    {
      type: "paragraph",
      text: "Yes, borrowing is possible despite low credit scores. A credit score below 580 is generally considered poor, but credit scores are only one factor lenders evaluate. Income, employment history, debt-to-income ratio, and banking history also matter significantly.",
    },
    {
      type: "paragraph",
      text: "Canada has alternative lenders and online platforms that have expanded credit access. These operate under provincial consumer lending laws and the federal 35% APR cap.",
    },

    { type: "heading", level: 2, text: "How Bad Credit Loans Work" },
    {
      type: "paragraph",
      text: "Bad credit loans function like standard personal loans: you borrow a fixed amount and repay it in monthly installments over a set term. Lenders accept applicants typically scoring between 500 and 579. Many offer soft credit checks during pre-qualification without affecting your score.",
    },

    { type: "heading", level: 2, text: "Interest Rates for Bad Credit Borrowers" },
    {
      type: "table",
      headers: ["Credit Tier", "Typical APR Range", "Example: Total Cost on $2,000 / 24 months"],
      rows: [
        ["Fair (580-669)", "18%–26%", "$2,380–$2,560"],
        ["Poor (500-579)", "26%–32%", "$2,560–$2,700"],
        ["Very Poor (below 500)", "32%–35%", "$2,700–$2,760"],
      ],
    },
    {
      type: "paragraph",
      text: "In Canada, the maximum legal interest rate is 35% APR under the Criminal Code.",
    },

    { type: "heading", level: 2, text: "Eligibility Requirements" },
    {
      type: "list",
      items: [
        "Canadian citizen or permanent resident, age 18-19+",
        "Active bank account with regular deposits",
        "Minimum monthly income ($1,000-$1,500/month typically)",
        "Not currently in bankruptcy",
        "Valid government-issued identification",
        "Verifiable phone and email",
      ],
    },

    { type: "heading", level: 2, text: "What Lenders Look At Beyond Credit Score" },
    {
      type: "paragraph",
      text: "Income consistency is often the most important factor for bad credit lenders. Employment type, housing situation, and payment history also matter.",
    },

    { type: "heading", level: 2, text: "Best Bad Credit Lenders in Canada" },
    {
      type: "paragraph",
      text: "Using a loan comparison platform like 365 Loans lets you submit one application and receive multiple offers from lenders that accept your credit profile.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Never pay upfront fees",
        "Avoid guaranteed-approval lenders",
        "Verify provincial licensing",
        "Be cautious of unsolicited offers",
      ],
    },

    { type: "heading", level: 2, text: "How Quickly Can You Get Funded?" },
    {
      type: "paragraph",
      text: "Online applications can be completed in minutes, and approval decisions are often available the same day. Interac e-Transfer typically provides same-day or next-day funding.",
    },

    { type: "heading", level: 2, text: "Risks and How to Protect Yourself" },
    {
      type: "paragraph",
      text: "A bad credit loan can actually help improve your credit over time if you make all payments on time and in full.",
    },

    { type: "heading", level: 2, text: "How to Improve Your Credit Score" },
    {
      type: "list",
      items: [
        "Request your free credit reports and check for errors",
        "Dispute any inaccuracies you find",
        "Keep credit utilization below 30%",
        "Make timely payments on all accounts",
        "Avoid applying for multiple new credit accounts at once",
      ],
    },

    { type: "heading", level: 2, text: "Alternatives to Bad Credit Loans" },
    {
      type: "list",
      items: [
        "Credit union loans",
        "Secured loans",
        "Family borrowing",
        "Non-profit credit counselling",
        "Provincial emergency assistance programs",
        "Direct creditor negotiation",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What credit score is considered bad in Canada?",
          answer:
            "A score below 580 is generally considered poor. Within that range, lenders typically distinguish between fair (580-669), poor (500-579), and very poor (below 500) credit, each with progressively higher interest rates.",
        },
        {
          question: "Can I get approved with a score under 500?",
          answer:
            "Yes, some alternative lenders work with borrowers in the very poor (below 500) range, though you'll face the highest rates, typically 32% to 35% APR — the maximum allowed under Canada's Criminal Code.",
        },
        {
          question: "How much can I borrow with bad credit?",
          answer:
            "Bad credit loan amounts are generally on the smaller side, often in the $300 to $5,000 range, with the exact amount depending on your income and the lender's requirements.",
        },
        {
          question: "Will a bad credit loan help improve my score?",
          answer:
            "It can. A bad credit loan can help improve your credit over time if you make all payments on time and in full, since on-time payment history is a major factor in your credit score.",
        },
        {
          question: "Are bad credit loans legal in Canada?",
          answer:
            "Yes. Legitimate bad credit lenders operate under provincial consumer lending laws and the federal 35% APR cap under the Criminal Code. Always verify a lender is licensed in your province and never pay upfront fees.",
        },
      ],
    },
  ],
};

export default content;
