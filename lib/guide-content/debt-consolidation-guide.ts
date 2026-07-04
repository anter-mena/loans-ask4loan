import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Consolidate debt in Canada with a personal loan. Learn how debt consolidation loans work, interest rates, and how to qualify for the best options.",
  blocks: [
    { type: "heading", level: 2, text: "What Are Debt Consolidation Loans and How Do They Work in Canada?" },
    {
      type: "paragraph",
      text: "Feeling stretched thin by multiple debts? A debt consolidation loan in Canada could be your financial lifesaver. Simply put, it's a single, larger loan you take out to pay off several smaller debts, like credit card balances, lines of credit, or other high-interest consumer loans. Instead of multiple payments, you make one payment monthly to a single lender.",
    },
    {
      type: "paragraph",
      text: "These are typically unsecured personal loans in Canada requiring no collateral. The new loan often comes with a lower interest rate than your existing debts, and a fixed repayment schedule. For example, consolidating three credit cards ($3,000, $5,000, and $2,000) at 19.99% into a $10,000 loan at 9.99% could substantially reduce interest costs.",
    },
    {
      type: "paragraph",
      text: "Many Canadian banks, credit unions, and online lenders offer these products, and they're regulated under federal and provincial consumer protection laws.",
    },

    { type: "heading", level: 2, text: "Who Benefits Most from Debt Consolidation Loans?" },
    {
      type: "paragraph",
      text: "Ideal candidates for a debt consolidation loan include:",
    },
    {
      type: "list",
      items: [
        "Those with multiple high-interest debts (18-25% on credit cards)",
        "Individuals with decent credit scores (generally 660+)",
        "Those disciplined with finances",
        "People seeking simplicity and predictability",
      ],
    },
    {
      type: "callout",
      text: "If you're struggling to make minimum payments on everything and your debt-to-income ratio is very high, a debt consolidation loan might not be sufficient.",
    },

    { type: "heading", level: 2, text: "Typical Interest Rates and Terms for Debt Consolidation Loans in Canada" },
    {
      type: "paragraph",
      text: "Interest rates vary by credit tier:",
    },
    {
      type: "table",
      headers: ["Credit Tier", "Score Range", "Rate Range", "Typical Lenders"],
      rows: [
        ["Excellent Credit", "760+", "6.99% to 9.99%", "Major banks (RBC, TD, Scotiabank)"],
        ["Good Credit", "660-759", "10% to 15%", "Banks and credit unions"],
        ["Fair Credit", "560-659", "15% to 25%", "Alternative/online lenders"],
        ["Poor Credit", "Below 560", "25% to 35%", "Subprime lenders"],
      ],
    },
    {
      type: "paragraph",
      text: "Loan terms generally range from 1 to 5 years, with some lenders offering up to 7 years. A longer term means lower monthly payments but more interest paid over time.",
    },

    { type: "heading", level: 2, text: "How to Apply for a Debt Consolidation Loan in Canada" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check credit score via Equifax or TransUnion Canada",
        "Calculate total debt across all sources",
        "Compare lenders (banks, credit unions, online platforms)",
        "Gather documentation (pay stubs, identification, proof of address, debt lists)",
        "Submit applications online, by phone, or in person",
        "Review loan agreements carefully for terms and fees",
        "Use funds immediately to pay off existing debts",
      ],
    },

    { type: "heading", level: 2, text: "Pros and Cons of Debt Consolidation Loans" },
    { type: "heading", level: 3, text: "Pros" },
    {
      type: "list",
      items: [
        "Simplified finances with one payment",
        "Lower interest rates",
        "Fixed repayment schedules",
        "Potential credit score improvement",
      ],
    },
    { type: "heading", level: 3, text: "Cons" },
    {
      type: "list",
      negative: true,
      items: [
        "Temptation to accumulate new debt",
        "Possible fees and prepayment penalties",
        "Not suitable for high-debt situations",
        "Longer terms increase total interest paid",
      ],
    },

    { type: "heading", level: 2, text: "Alternatives to Debt Consolidation Loans in Canada" },
    {
      type: "list",
      items: [
        "Balance transfer credit cards (0% introductory rates)",
        "Home Equity Lines of Credit (HELOCs)",
        "Credit counseling and Debt Management Plans",
        "Consumer proposals",
        "Bankruptcy",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Success After Consolidating Your Debt" },
    {
      type: "list",
      items: [
        "Creating budgets to track income and expenses",
        "Avoiding new debt accumulation",
        "Building emergency funds ($500-$1,000)",
        "Setting up automatic payments",
        "Monitoring credit score improvements",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is debt consolidation and how does it work?",
          answer:
            "Debt consolidation combines several smaller debts — like credit card balances or lines of credit — into one larger loan. Instead of juggling multiple payments, you make a single monthly payment to one lender, often at a lower interest rate and on a fixed repayment schedule.",
        },
        {
          question: "When does debt consolidation make sense?",
          answer:
            "It works best if you have multiple high-interest debts (18-25% on credit cards), a decent credit score (generally 660+), and the financial discipline to avoid running up new balances. If you're struggling to make minimum payments and your debt-to-income ratio is very high, consolidation alone may not be sufficient.",
        },
        {
          question: "What interest rate can I get on a debt consolidation loan?",
          answer:
            "Rates depend on your credit tier: roughly 6.99%-9.99% for excellent credit (760+), 10%-15% for good credit (660-759), 15%-25% for fair credit (560-659), and 25%-35% for poor credit (below 560).",
        },
        {
          question: "Will debt consolidation hurt my credit score?",
          answer:
            "Applying involves a credit check, which can cause a small, temporary dip. Over time, though, consolidation can improve your score by simplifying repayment into fixed, on-time payments and lowering your credit utilization once revolving balances are paid off.",
        },
        {
          question: "What's the difference between debt consolidation and debt settlement?",
          answer:
            "Debt consolidation replaces your existing debts with one new loan that you repay in full over a fixed term — your obligations stay the same, just simplified. Debt settlement involves negotiating with creditors to pay less than what you owe, which typically causes more significant, longer-lasting damage to your credit than consolidation.",
        },
      ],
    },
  ],
};

export default content;
