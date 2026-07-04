import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Smart strategies for managing loans during Canadian tax season. Learn about CRA payment plans, using refunds strategically, and avoiding tax debt traps.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Is Your Loan Interest Tax-Deductible?" },
    {
      type: "paragraph",
      text: "In Canada, personal loan interest is generally NOT tax-deductible unless the borrowed funds are used for investment or business purposes. If you used a personal loan to invest in income-producing assets, the interest may be deductible under CRA rules. Consult a tax professional for your specific situation.",
    },
    {
      type: "callout",
      text: "Pro Tip: Keep detailed records of how loan proceeds were used. The CRA may request proof that funds were used for deductible purposes.",
    },

    { type: "heading", level: 3, text: "2. Use Your Tax Refund Strategically" },
    {
      type: "paragraph",
      text: "The average Canadian tax refund is approximately $2,000. Apply it directly to your highest-interest debt for maximum impact. Even a partial lump-sum payment reduces total interest significantly.",
    },
    {
      type: "callout",
      text: "Pro Tip: Making a $2,000 lump payment on a $5,000 loan at 25% APR saves over $500 in interest.",
    },

    { type: "heading", level: 3, text: "3. Handle a Tax Bill You Can't Afford" },
    {
      type: "paragraph",
      text: "If you owe the CRA, options include: CRA payment arrangements (interest at prescribed rate), a personal loan (may be cheaper than CRA interest), or using your RRSP refund to offset the bill. The CRA charges compound daily interest on unpaid balances.",
    },
    {
      type: "callout",
      text: "Pro Tip: The CRA's prescribed interest rate for overdue taxes changes quarterly. Compare it to personal loan rates before deciding.",
    },

    { type: "heading", level: 3, text: "4. RRSP Contribution Strategy" },
    {
      type: "paragraph",
      text: "Contributing to your RRSP reduces taxable income and may result in a refund. The deadline is 60 days after year-end. If you don't have cash, some use a short-term loan to make the contribution, then repay with the refund.",
    },
    {
      type: "callout",
      text: "Pro Tip: This RRSP loan strategy only works if you repay quickly. The tax savings must exceed the loan interest cost.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Personal loan interest is only deductible if used for investment/business",
        "Apply tax refunds to highest-interest debt first",
        "Compare CRA interest rates to personal loan rates before borrowing",
        "Keep records of how all borrowed funds are used",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is interest on my personal loan tax-deductible?",
          answer:
            "Generally, no. Personal loan interest is not tax-deductible in Canada unless the borrowed funds were used for investment or business purposes. If you used the loan to invest in income-producing assets, the interest may be deductible under CRA rules — consult a tax professional and keep detailed records of how the funds were used.",
        },
        {
          question: "What should I do with my tax refund if I have loan debt?",
          answer:
            "Apply it directly to your highest-interest debt. The average Canadian tax refund is around $2,000, and even a partial lump-sum payment toward your loan principal can significantly reduce the total interest you pay.",
        },
        {
          question: "What if I can't afford my CRA tax bill?",
          answer:
            "Options include setting up a CRA payment arrangement (interest charged at the CRA's prescribed rate), taking out a personal loan if its rate is cheaper than the CRA's, or using an RRSP refund to offset the bill. Compare the CRA's prescribed rate, which changes quarterly, to personal loan rates before deciding.",
        },
        {
          question: "Should I take out a loan to make an RRSP contribution?",
          answer:
            "This strategy only makes sense if you can repay the loan quickly and the resulting tax savings exceed the loan's interest cost. The RRSP contribution deadline is 60 days after year-end, and some people use a short-term loan to make the contribution, then repay it with the tax refund it generates.",
        },
      ],
    },
  ],
};

export default content;
