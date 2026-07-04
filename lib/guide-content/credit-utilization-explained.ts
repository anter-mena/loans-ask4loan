import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn what credit utilization is, how it's calculated, and why keeping it low is one of the fastest ways to improve your credit score and loan approval odds in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. What Is Credit Utilization?" },
    {
      type: "paragraph",
      text: "Credit utilization is the percentage of your available revolving credit — mainly credit cards and lines of credit — that you're currently using. If you have a credit card with a $5,000 limit and carry a $1,500 balance, your utilization on that card is 30%.",
    },
    {
      type: "callout",
      text: "Pro Tip: Utilization is calculated both per card and across all your revolving accounts combined, so one maxed-out card can hurt you even if others are near zero.",
    },

    { type: "heading", level: 3, text: "2. Why It Matters to Lenders" },
    {
      type: "paragraph",
      text: "Credit utilization is one of the biggest factors in your credit score, second only to payment history. High utilization signals to lenders that you may be relying heavily on credit, which increases perceived risk. This applies to both your credit score and how personal loan lenders assess your application.",
    },

    { type: "heading", level: 3, text: "3. What Counts as a Good Ratio" },
    {
      type: "paragraph",
      text: "Most Canadian credit scoring models reward keeping utilization below 30% of your total available credit. Borrowers aiming for the best rates typically keep it under 10%. A ratio near or above 90% is treated as a red flag and can significantly lower your score.",
    },
    {
      type: "callout",
      text: "Pro Tip: Utilization is recalculated every time your statement balance is reported, so paying down a card even a few days before the statement date can measurably improve your score.",
    },

    { type: "heading", level: 3, text: "4. How It Affects Personal Loan Applications" },
    {
      type: "paragraph",
      text: "When you apply for a personal loan, lenders look at your credit report and your existing revolving debt load. High utilization can lower your credit score enough to push you into a higher rate tier, or in some cases affect approval altogether — even if your income comfortably supports the new payment.",
    },

    { type: "heading", level: 3, text: "5. Practical Ways to Lower Your Utilization" },
    {
      type: "paragraph",
      text: "Pay down revolving balances before your statement date, ask your card issuer for a credit limit increase (without adding new spending), spread balances across multiple cards instead of maxing one out, and avoid closing old cards, since closing a card reduces your total available credit and can raise your overall ratio.",
    },
    {
      type: "callout",
      text: "Pro Tip: Making two smaller payments a month instead of one large payment at the due date can keep your reported balance consistently lower.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Check both your per-card and overall utilization — both matter",
        "Aim for under 30%, and under 10% if you're optimizing for the best rates",
        "Pay down balances before your statement closing date, not just the due date",
        "Don't close old, unused cards — it can raise your overall ratio",
        "Ask for a credit limit increase if your income and payment history support it",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is a good credit utilization ratio?",
          answer:
            "Most Canadian credit scoring models reward keeping utilization below 30% of your total available credit. If you're aiming for the best rates, try to keep it under 10%. A ratio near or above 90% is treated as a red flag and can significantly lower your score.",
        },
        {
          question: "How is credit utilization calculated?",
          answer:
            "It's calculated as your balance divided by your credit limit, both per card and across all your revolving accounts combined. That means one maxed-out card can hurt your score even if your other cards carry little to no balance.",
        },
        {
          question: "Does paying my card off by the due date lower my utilization?",
          answer:
            "Not necessarily. Utilization is recalculated whenever your statement balance is reported to the credit bureau—not on the due date. Paying down your balance a few days before your statement date can measurably improve what gets reported.",
        },
        {
          question: "Should I close old credit cards to improve my score?",
          answer:
            "No. Closing a card reduces your total available credit, which raises your overall utilization ratio even if your spending stays the same. It's generally better to keep old, unused cards open.",
        },
        {
          question: "How does credit utilization affect my personal loan application?",
          answer:
            "Lenders review your existing revolving debt load alongside your credit report. High utilization can lower your credit score enough to push you into a higher rate tier, or in some cases affect approval, even if your income comfortably supports the new payment.",
        },
      ],
    },
  ],
};

export default content;
