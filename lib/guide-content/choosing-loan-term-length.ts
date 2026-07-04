import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn how to select the optimal loan for your situation. Balance monthly payments, total interest costs, and your financial goals.",
  blocks: [
    {
      type: "paragraph",
      text: "Choosing the right loan term length is one of the most important decisions you'll make when borrowing. A shorter term means higher monthly payments but less interest overall, while a longer term offers lower payments but costs more in the long run. This guide will help you find the perfect balance for your financial situation.",
    },

    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "Step 1: Calculate Your Monthly Budget" },
    {
      type: "paragraph",
      text: "Before choosing a loan term, determine exactly how much you can comfortably afford each month. Review your income, existing expenses, and savings goals. A good rule is that total debt payments shouldn't exceed 36% of your gross monthly income.",
    },
    {
      type: "callout",
      text: "Pro Tip: Use our loan calculator to see how different terms affect your monthly payment.",
    },

    { type: "heading", level: 3, text: "Step 2: Understand the Trade-offs" },
    {
      type: "paragraph",
      text: "Shorter terms (12-36 months) have higher monthly payments but lower total interest. Longer terms (48-84 months) have lower monthly payments but significantly higher total interest. For example, a $10,000 loan at 10% costs $1,074 in interest over 2 years but $2,748 over 5 years.",
    },
    {
      type: "callout",
      text: "Pro Tip: Calculate the total cost of the loan, not just the monthly payment.",
    },

    { type: "heading", level: 3, text: "Step 3: Consider Your Financial Goals" },
    {
      type: "paragraph",
      text: "If you want to be debt-free quickly and save money on interest, choose the shortest term you can afford. If you need cash flow flexibility for other goals (emergency fund, investments), a longer term might make sense even though it costs more.",
    },
    {
      type: "callout",
      text: "Pro Tip: Some people choose longer terms for lower required payments, then pay extra when possible.",
    },

    { type: "heading", level: 3, text: "Step 4: Evaluate Prepayment Options" },
    {
      type: "paragraph",
      text: "Check if your lender allows early payoff without penalties. If so, you can choose a longer term for payment flexibility, then pay it off faster when you have extra money. This gives you the best of both worlds.",
    },
    {
      type: "callout",
      text: "Pro Tip: Always ask about prepayment penalties before signing your loan agreement.",
    },

    { type: "heading", level: 3, text: "Step 5: Factor in Interest Rate Differences" },
    {
      type: "paragraph",
      text: "Shorter-term loans often have lower interest rates because they're less risky for lenders. Compare the APR offered for different terms—the rate difference can significantly impact your total cost.",
    },
    {
      type: "callout",
      text: "Pro Tip: A 3-year loan at 8% APR may cost less than a 5-year loan at 10% APR, even with higher monthly payments.",
    },

    { type: "heading", level: 3, text: "Step 6: Match the Term to the Purpose" },
    {
      type: "paragraph",
      text: "Consider what you're borrowing for. Debt consolidation often works best with 3-5 year terms. Car repairs might suit 1-2 years. Home improvements could justify 5-7 years. Match the loan term to how long you'll benefit from what you're financing.",
    },
    {
      type: "callout",
      text: "Pro Tip: Avoid financing something for longer than its useful life (e.g., a 7-year loan for a 5-year-old car).",
    },

    { type: "heading", level: 3, text: "Step 7: Plan for Life Changes" },
    {
      type: "paragraph",
      text: "Think about potential income changes, career moves, or major expenses in the coming years. If uncertainty exists, a longer term with lower payments provides more flexibility. You can always pay extra when times are good.",
    },
    {
      type: "callout",
      text: "Pro Tip: Build in a cushion—choose a payment you can handle even if income drops by 10-20%.",
    },

    { type: "heading", level: 3, text: "Step 8: Make Your Decision" },
    {
      type: "paragraph",
      text: "Choose the shortest term where the monthly payment is comfortable AND leaves room for savings and unexpected expenses. If you're stretched too thin with a short term, go longer—financial stress isn't worth the interest savings.",
    },
    {
      type: "callout",
      text: "Pro Tip: Run the numbers: if a 3-year term saves you $1,500 in interest but leaves you with $50/month for emergencies, the longer term may be wiser.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "The \"right\" term depends on your situation—there's no universal answer",
        "Use loan calculators to compare total costs across different terms",
        "Factor in your emergency fund—don't drain it to afford higher payments",
        "Consider auto-pay discounts, which often reduce your rate by 0.25%",
        "Review your budget honestly before committing to any payment amount",
        "If choosing between similar options, shorter is usually better for total cost",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What loan term should I choose?",
          answer:
            "There's no universal answer — it depends on your budget and goals. As a starting point, total debt payments shouldn't exceed 36% of your gross monthly income. Choose the shortest term you can comfortably afford; if that leaves too little room for savings or emergencies, a longer term may be the wiser choice.",
        },
        {
          question: "Does a shorter loan term really save me money?",
          answer:
            "Yes. Shorter terms (12-36 months) mean higher monthly payments but much less total interest, while longer terms (48-84 months) lower your payment but cost more overall. For example, a $10,000 loan at 10% costs about $1,074 in interest over 2 years versus $2,748 over 5 years.",
        },
        {
          question: "Can I choose a longer term and just pay it off early?",
          answer:
            "Often, yes — if your lender allows prepayment without penalty. This lets you take a longer term for payment flexibility now, then pay extra whenever you have room in your budget, effectively getting a shorter payoff without the higher required payment. Always confirm there's no prepayment penalty before signing.",
        },
        {
          question: "Do shorter terms come with lower interest rates too?",
          answer:
            "Often, yes. Shorter-term loans are typically less risky for lenders, so they may come with a lower APR. It's worth comparing the rate offered at different terms, since a shorter term at a lower rate can cost meaningfully less than a longer term at a higher one, even before accounting for the extra interest from a longer payoff period.",
        },
        {
          question: "How should the loan term match what I'm borrowing for?",
          answer:
            "Match the term to how long you'll benefit from the expense. Debt consolidation often works best with 3-5 year terms, car repairs typically suit 1-2 years, and home improvements can justify 5-7 years. Avoid financing something for longer than its useful life.",
        },
      ],
    },
  ],
};

export default content;
