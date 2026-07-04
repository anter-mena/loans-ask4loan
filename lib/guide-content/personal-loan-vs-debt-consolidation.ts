import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Clarifying the relationship between personal loans and debt consolidation — and helping you choose the right debt management strategy.",
  blocks: [
    { type: "heading", level: 2, text: "Clarifying the Terms" },
    {
      type: "paragraph",
      text: "Personal loans and debt consolidation are related but distinct concepts. A personal loan is a financial product — a lump sum you borrow and repay in installments. Debt consolidation is a strategy — combining multiple debts into a single payment.",
    },
    {
      type: "paragraph",
      text: "A personal loan is one of several tools you can use for debt consolidation. But debt consolidation can also be achieved through balance transfer credit cards, home equity loans, debt management plans, and other methods.",
    },
    {
      type: "paragraph",
      text: "The question is not really \"personal loan or debt consolidation\" but rather \"is a personal loan the best tool for my debt consolidation strategy?\"",
    },

    { type: "heading", level: 2, text: "Debt Consolidation Methods Compared" },
    {
      type: "table",
      headers: ["Method", "Typical Rate", "Best For", "Risk Level"],
      rows: [
        ["Personal loan", "6% – 35% APR", "Multiple debts, good credit", "Low"],
        ["Balance transfer card", "0% intro, then 19.99%+", "Smaller amounts, quick payoff", "Moderate"],
        ["Home equity loan/HELOC", "5% – 8%", "Homeowners, large amounts", "High (home is collateral)"],
        ["Debt management plan", "Negotiated lower rates", "High debt, struggling borrowers", "Low"],
        ["Consumer proposal", "N/A (fixed payments)", "Cannot manage debts otherwise", "Moderate (credit impact)"],
      ],
    },

    { type: "heading", level: 2, text: "When a Personal Loan Is the Best Consolidation Tool" },
    {
      type: "paragraph",
      text: "A personal loan is often the best choice for debt consolidation in these situations.",
    },
    {
      type: "list",
      items: [
        "You have multiple debts with interest rates higher than the personal loan rate",
        "You want a fixed payment schedule with a definite payoff date",
        "You do not own a home (so home equity options are unavailable)",
        "Your total debt is manageable and you need structure, not crisis intervention",
        "You want to improve your credit score through consistent installment payments",
      ],
    },

    { type: "heading", level: 2, text: "When Other Methods May Be Better" },
    {
      type: "paragraph",
      text: "A personal loan is not always the best consolidation approach.",
    },
    {
      type: "list",
      items: [
        "Small balance you can pay off in 12-21 months — a 0% balance transfer card may be cheaper",
        "Homeowner with significant debt — a home equity loan may offer lower rates (but carries risk)",
        "Overwhelmed by debt — a debt management plan or credit counseling may provide relief",
        "Cannot manage debts at all — a consumer proposal through a Licensed Insolvency Trustee may be appropriate",
        "Credit is too low to qualify for a reasonable personal loan rate",
      ],
    },

    { type: "heading", level: 2, text: "Making Debt Consolidation Work" },
    {
      type: "paragraph",
      text: "Regardless of the method you choose, successful debt consolidation requires discipline and a plan.",
    },
    {
      type: "list",
      items: [
        "Stop accumulating new debt — cut up cards or freeze them if necessary",
        "Build an emergency fund to avoid future debt for unexpected expenses",
        "Set up autopay on your consolidation loan or plan to ensure on-time payments",
        "Track your progress monthly to stay motivated",
        "Create and stick to a realistic budget that prevents overspending",
        "Consider free credit counseling from a non-profit agency like Credit Counselling Canada",
      ],
    },

    { type: "heading", level: 2, text: "Common Consolidation Mistakes" },
    {
      type: "paragraph",
      text: "Avoid these pitfalls to ensure your consolidation strategy succeeds.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Consolidating debt and then running up credit cards again",
        "Choosing a consolidation loan with a higher rate than your existing average",
        "Extending the term too long, which can increase total interest even at a lower rate",
        "Ignoring origination fees that reduce the effective savings",
        "Not having a budget plan to prevent future debt accumulation",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is a personal loan the same as a debt consolidation loan?",
          answer:
            "Not quite. A personal loan is a financial product — a lump sum repaid in installments. Debt consolidation is a strategy of combining multiple debts into one payment, and a personal loan is just one of several tools (alongside balance transfer cards, home equity loans, and debt management plans) that can achieve it.",
        },
        {
          question: "Will debt consolidation hurt my credit?",
          answer:
            "A new loan application typically involves a hard inquiry, which can cause a small, temporary dip in your score. Over time, consolidating and making consistent on-time installment payments tends to help your credit, especially compared to carrying multiple high-utilization balances.",
        },
        {
          question: "How do I know if consolidation will save me money?",
          answer:
            "Compare the interest rate on the new loan against the combined rates of your existing debts. If the personal loan's APR is lower than what you're currently paying and you don't stretch the term out so long that total interest grows, consolidation should save you money.",
        },
        {
          question: "Should I use a consumer proposal instead?",
          answer:
            "A consumer proposal through a Licensed Insolvency Trustee is generally reserved for situations where you cannot manage your debts through consolidation alone. If a personal loan or other consolidation method can realistically get your debt under control, that's typically the less disruptive option.",
        },
        {
          question: "Can I consolidate debt with bad credit?",
          answer:
            "It's harder to get a favorable rate with low credit, and if your credit is too weak to qualify for a reasonable personal loan rate, a debt management plan or free credit counseling — such as through Credit Counselling Canada — may be a more practical route than a high-rate consolidation loan.",
        },
      ],
    },
  ],
};

export default content;
