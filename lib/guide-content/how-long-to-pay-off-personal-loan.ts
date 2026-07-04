import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Understand what determines your payoff timeline and learn strategies to become debt-free faster.",
  blocks: [
    { type: "heading", level: 2, text: "Standard Payoff Timelines" },
    {
      type: "paragraph",
      text: "Most personal loans in Canada are structured with repayment terms of 12 to 60 months. Your exact payoff date is established when you accept the loan based on your selected term length.",
    },
    {
      type: "paragraph",
      text: "If you make every scheduled payment on time and in full, you will pay off the loan by the end of your agreed term. However, you can accelerate payoff through extra payments, and potentially extend it if you defer payments or enter hardship programs.",
    },
    {
      type: "paragraph",
      text: "The most common payoff timelines are 2 years (24 months), 3 years (36 months), and 5 years (60 months). Your ideal timeline depends on the loan amount, your budget, and how much total interest you are willing to pay.",
    },

    { type: "heading", level: 2, text: "Factors That Affect Your Payoff Timeline" },
    {
      type: "paragraph",
      text: "Several factors determine how quickly you can pay off a personal loan:",
    },
    {
      type: "list",
      items: [
        "Loan amount: Larger loans take longer to pay off at the same payment level",
        "Interest rate: Higher rates mean more of each payment goes to interest, slowing principal reduction",
        "Monthly payment: Higher payments speed up payoff; minimum payments extend the timeline",
        "Extra payments: Additional payments applied to principal can significantly shorten the term",
        "Payment frequency: Biweekly payments result in one extra monthly payment per year",
      ],
    },

    { type: "heading", level: 2, text: "Strategies to Pay Off Your Loan Faster" },
    {
      type: "paragraph",
      text: "If you want to become debt-free ahead of schedule, these strategies can help:",
    },
    {
      type: "list",
      items: [
        "Make biweekly half-payments instead of monthly payments to squeeze in an extra full payment each year",
        "Round up your payments — if your payment is $323, pay $350 or $400",
        "Apply windfalls (tax refunds, bonuses, gifts) directly to your loan principal",
        "Refinance to a lower rate and maintain the same payment amount to accelerate principal paydown",
        "Set a specific payoff date goal and calculate the extra monthly amount needed to reach it",
      ],
    },
    { type: "heading", level: 3, text: "Payoff Accelerator" },
    {
      type: "paragraph",
      text: "On a CAD $10,000 loan at 10% APR with a 36-month term, paying an extra CAD $100 per month could cut your payoff time from 36 months to about 24 months and save you approximately CAD $550 in interest.",
    },

    { type: "heading", level: 2, text: "Should You Pay Off Your Loan Early or Invest?" },
    {
      type: "paragraph",
      text: "A common question is whether to use extra money to pay off a loan early or invest it. The answer depends on the interest rate of your loan versus the expected return on investments.",
    },
    {
      type: "paragraph",
      text: "As a general rule, if your loan's interest rate is higher than the after-tax return you expect from investments, paying off the loan is the better financial move. If your loan rate is low and your investments can earn more, investing may be more advantageous.",
    },
    {
      type: "paragraph",
      text: "However, financial decisions are not purely mathematical. The psychological benefit of being debt-free and the guaranteed return from paying off a loan (equal to the interest rate) should also be factored into your decision.",
    },

    { type: "heading", level: 2, text: "What Happens When You Pay Off Your Loan" },
    {
      type: "paragraph",
      text: "When you make your final payment, the loan account is closed and the lender reports it to the credit bureaus as paid in full. This is generally positive for your credit profile.",
    },
    {
      type: "paragraph",
      text: "In Canada, the paid-in-full account remains on your credit report with Equifax and TransUnion for up to 6 years, contributing positively to your credit history length and payment track record.",
    },
    {
      type: "paragraph",
      text: "After payoff, request a payoff confirmation letter from your lender for your records. This document confirms the loan has been fully satisfied.",
    },

    {
      type: "faq",
      items: [
        {
          question: "Can I pay off a personal loan early?",
          answer:
            "In most cases, yes. You can accelerate payoff by making extra payments toward principal, applying windfalls like tax refunds or bonuses, or refinancing to a lower rate while keeping the same payment amount. Check your loan agreement for any prepayment terms first.",
        },
        {
          question: "How much can I save by paying off my loan early?",
          answer:
            "It depends on your loan size, rate, and how much extra you pay. For example, on a CAD $10,000 loan at 10% APR with a 36-month term, adding an extra $100 per month could cut your payoff time to about 24 months and save roughly $550 in interest.",
        },
        {
          question: "Does paying off a loan early hurt my credit?",
          answer:
            "No — when you make your final payment, the lender reports the account to Equifax and TransUnion as paid in full, which is generally positive for your credit profile. The paid account stays on your report for up to 6 years, contributing positively to your credit history.",
        },
        {
          question: "What is the fastest way to pay off a personal loan?",
          answer:
            "Combine strategies: make biweekly half-payments to sneak in an extra full payment each year, round up your monthly payment, apply any windfalls directly to principal, and consider refinancing to a lower rate while keeping your payment the same to accelerate principal paydown.",
        },
      ],
    },
  ],
};

export default content;
