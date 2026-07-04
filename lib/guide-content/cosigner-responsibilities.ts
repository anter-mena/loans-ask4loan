import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What to know before cosigning a personal loan in Canada — the real risks, legal obligations, and alternatives worth considering first.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. What Cosigning Actually Means" },
    {
      type: "paragraph",
      text: "When you cosign a loan, you're not just vouching for the borrower — you're legally agreeing to repay the full loan yourself if they don't. The debt appears on your credit report as if it were your own, and it counts against your own debt-to-income ratio for any future borrowing.",
    },
    {
      type: "callout",
      text: "Pro Tip: A cosigner is not the same as a co-applicant — a cosigner typically has no right to the loan funds or the item purchased with them, only the obligation to repay.",
    },

    { type: "heading", level: 3, text: "2. Why Lenders Ask for a Cosigner" },
    {
      type: "paragraph",
      text: "Lenders request a cosigner when the primary applicant has limited credit history, a lower income, or a credit score below their approval threshold. Adding a cosigner with stronger credit reduces the lender's risk and can also secure a better interest rate for the primary borrower.",
    },

    { type: "heading", level: 3, text: "3. The Real Risks You're Taking On" },
    {
      type: "paragraph",
      text: "If the primary borrower misses a payment, it shows up on your credit report too, even if you were never told. If they default entirely, you become fully responsible for the remaining balance, and the lender can pursue collections against you directly, not just the borrower.",
    },
    {
      type: "callout",
      text: "Pro Tip: Ask the lender whether they'll notify you directly if a payment is missed — many won't automatically, so you could be blindsided months later.",
    },

    { type: "heading", level: 3, text: "4. How It Affects Your Own Borrowing Power" },
    {
      type: "paragraph",
      text: "The full loan balance and monthly payment count against your debt-to-income ratio, even though you're not the one using the funds. This can make it harder for you to qualify for your own mortgage, car loan, or line of credit while the cosigned loan is outstanding.",
    },

    { type: "heading", level: 3, text: "5. Can You Be Removed as a Cosigner?" },
    {
      type: "paragraph",
      text: "Some lenders offer a cosigner release once the primary borrower has made a set number of consecutive on-time payments and can qualify on their own credit. This isn't automatic or universal — ask the lender in writing before signing whether a release option exists and what it requires.",
    },

    { type: "heading", level: 3, text: "6. Alternatives Worth Considering First" },
    {
      type: "paragraph",
      text: "Before cosigning, consider whether a smaller loan amount, a secured loan backed by the borrower's own collateral, or simply helping them build credit with a secured credit card first might reduce the risk to both of you.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Only cosign an amount you could comfortably repay yourself if needed",
        "Get payment notifications set up so you're not blindsided by a missed payment",
        "Ask about a cosigner release option in writing before signing",
        "Keep a copy of the loan agreement for your own records",
        "Reassess your own borrowing plans while the cosigned loan is outstanding",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What am I responsible for if I cosign a loan?",
          answer:
            "You're legally agreeing to repay the full loan yourself if the primary borrower doesn't. The debt appears on your own credit report as if it were yours, and it counts against your own debt-to-income ratio for any future borrowing.",
        },
        {
          question: "Will cosigning affect my ability to get my own loan?",
          answer:
            "Yes. The full loan balance and monthly payment count against your debt-to-income ratio, even though you're not the one using the funds. This can make it harder to qualify for your own mortgage, car loan, or line of credit while the cosigned loan is outstanding.",
        },
        {
          question: "Can I be removed as a cosigner later?",
          answer:
            "Some lenders offer a cosigner release once the primary borrower has made a set number of consecutive on-time payments and can qualify on their own credit. This isn't automatic or offered by every lender—ask in writing before signing whether a release option exists and what it requires.",
        },
        {
          question: "What happens if the primary borrower misses a payment?",
          answer:
            "A missed payment shows up on your credit report too, even if you were never told. If the borrower defaults entirely, you become fully responsible for the remaining balance and the lender can pursue collections against you directly.",
        },
        {
          question: "Are there alternatives to cosigning?",
          answer:
            "Before cosigning, consider whether a smaller loan amount, a secured loan backed by the borrower's own collateral, or helping them build credit with a secured credit card first might reduce the risk to both of you.",
        },
      ],
    },
  ],
};

export default content;
