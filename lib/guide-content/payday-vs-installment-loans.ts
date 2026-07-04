import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Compare payday loans and installment loans side by side. Understand the costs, risks, repayment terms, and which option is safer.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Understand How Each Loan Works" },
    {
      type: "paragraph",
      text: "A payday loan is a short-term loan (typically $100-$1,500) that must be repaid in full on your next payday — usually within 2-4 weeks. An installment loan lets you borrow a larger amount ($300-$5,000+) and repay it in fixed monthly payments over 3-36 months. This fundamental difference in structure affects everything from costs to risks.",
    },
    {
      type: "callout",
      text: "Pro Tip: The key question to ask: \"Can I repay this entire amount in 2 weeks?\" If not, an installment loan is almost certainly the better choice.",
    },

    { type: "heading", level: 3, text: "2. Compare the True Costs" },
    {
      type: "paragraph",
      text: "Payday loans charge flat fees that look small — typically $15-$25 per $100 borrowed — but translate to 300-500% APR when annualized. Installment loans charge 10-36% APR, which is dramatically cheaper. For example, borrowing $1,000 for one month: a payday loan costs $150-$250 in fees, while an installment loan costs roughly $15-$30 in interest.",
    },
    {
      type: "callout",
      text: "Pro Tip: Always convert fees to APR for a fair comparison. A $20 fee on a $100 two-week loan equals 520% APR.",
    },

    { type: "heading", level: 3, text: "3. Evaluate the Debt Trap Risk" },
    {
      type: "paragraph",
      text: "Payday loans have a well-documented debt trap problem. Because the full amount plus fees is due on your next payday, many borrowers can't afford to repay and end up 'rolling over' the loan — taking out a new payday loan to pay off the old one. Studies show the average payday borrower takes out 8 loans per year. Installment loans spread payments over months, making them far more manageable.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you've already taken a payday loan and can't repay it, contact the lender immediately about an Extended Payment Plan (EPP) — many are required to offer one.",
    },

    { type: "heading", level: 3, text: "4. Check Credit Bureau Reporting" },
    {
      type: "paragraph",
      text: "Most payday lenders do not report your payments to credit bureaus, so on-time payments won't help build your credit score. Many installment loan lenders do report to bureaus, meaning consistent on-time payments can gradually improve your credit — giving you access to better rates in the future.",
    },
    {
      type: "callout",
      text: "Pro Tip: Before taking an installment loan, ask the lender if they report to Equifax, TransUnion, or Experian. Choose lenders that do to maximize credit-building benefits.",
    },

    { type: "heading", level: 3, text: "5. Consider Loan Amounts and Flexibility" },
    {
      type: "paragraph",
      text: "Payday loans are limited to small amounts ($100-$1,500 in most jurisdictions). Installment loans can go up to $5,000 or more. If you need more than $500, installment loans are typically your only option. Installment loans also offer more flexibility in terms — you can often choose 6, 12, 24, or 36-month repayment periods.",
    },
    {
      type: "callout",
      text: "Pro Tip: Choose the shortest repayment term where the monthly payment fits your budget. Shorter terms mean less total interest paid.",
    },

    { type: "heading", level: 3, text: "6. Make Your Decision" },
    {
      type: "paragraph",
      text: "In nearly all situations, installment loans are the safer and cheaper choice. The only scenario where a payday loan might make sense is if you need a very small amount (under $200) for a few days and are certain you can repay it in full on your next payday without financial strain. Even then, alternatives like credit card cash advances, overdraft protection, or borrowing from family are usually better options.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you're considering a payday loan, first check if your credit union offers a Payday Alternative Loan (PAL) — these are capped at 28% APR by federal regulation in the US.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Installment loans are almost always cheaper and safer than payday loans",
        "The 'convenience' of payday loans comes at an extremely high cost — 300-500% APR",
        "Building credit with installment loan payments opens doors to better rates in the future",
        "Many states and provinces are increasing regulation on payday lending to protect consumers",
        "If you're stuck in a payday loan cycle, contact a nonprofit credit counselor for free help",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the difference between a payday loan and an installment loan?",
          answer:
            "A payday loan is a short-term loan of $100-$1,500 due in full on your next payday, usually within 2-4 weeks. An installment loan lets you borrow $300-$5,000 or more and repay it in fixed monthly payments over 3-36 months, which makes it far easier to budget for.",
        },
        {
          question: "Why do payday loans have such high APRs?",
          answer:
            "Payday loans charge flat fees — typically $15-$25 per $100 borrowed — that look small but translate to 300-500% APR once annualized. Installment loans, by comparison, charge roughly 10-36% APR, making them dramatically cheaper for the same amount borrowed.",
        },
        {
          question: "Can installment loans help build my credit?",
          answer:
            "Many installment loan lenders report your payments to credit bureaus like Equifax and TransUnion, so consistent on-time payments can gradually improve your score. Most payday lenders don't report at all, so paying one off on time typically won't help your credit.",
        },
        {
          question: "Is it ever okay to take a payday loan?",
          answer:
            "It's rarely the best option. The only scenario where it might make sense is borrowing a very small amount (under $200) for a few days when you're certain you can repay it in full on your next payday. Even then, alternatives like a credit union loan or borrowing from family are usually cheaper.",
        },
        {
          question: "What should I do if I'm stuck in a payday loan cycle?",
          answer:
            "Contact your lender about an Extended Payment Plan (EPP) if you can't repay on time — many are required to offer one. You can also reach out to a nonprofit credit counselor for free help, and consider switching to an installment loan to consolidate and pay down the debt on a manageable schedule.",
        },
      ],
    },
  ],
};

export default content;
