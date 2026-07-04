import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Self-employed Canadians face unique challenges when borrowing. Learn what lenders look for and how to present your income effectively.",
  blocks: [
    { type: "heading", level: 2, text: "Can Self-Employed People Get Personal Loans?" },
    {
      type: "paragraph",
      text: "Self-employed individuals — including freelancers, contractors, gig workers, and small business owners — can qualify for personal loans. The main difference is how you document your income, since you do not have traditional pay stubs from an employer.",
    },
    {
      type: "paragraph",
      text: "In Canada, self-employment has grown significantly, with over 2.7 million Canadians classified as self-employed. Lenders have adapted by developing products and processes that accommodate non-traditional income documentation, including accepting Notice of Assessment (NOA) from the CRA and business bank statements.",
    },
    {
      type: "paragraph",
      text: "The key challenge for self-employed borrowers is proving income consistency. Lenders want to see that your income is stable enough to support loan repayments, even if it varies month to month.",
    },

    { type: "heading", level: 2, text: "Documents You Will Need" },
    {
      type: "paragraph",
      text: "Having the right documentation ready before you apply dramatically improves your chances of approval and speeds up the process.",
    },
    {
      type: "list",
      items: [
        "Notice of Assessment (NOA) from CRA for the past 1-2 years",
        "Personal and/or business tax returns (T1 General)",
        "Business bank statements from the past 3-6 months",
        "Invoices or contracts showing ongoing client relationships",
        "GST/HST registration number (if applicable)",
        "Government-issued photo ID",
        "Proof of address (utility bill, bank statement)",
      ],
    },

    { type: "heading", level: 2, text: "How Lenders Evaluate Self-Employed Income" },
    {
      type: "paragraph",
      text: "Lenders typically calculate your qualifying income by averaging your net self-employment earnings over the past one to two years. They use net income (after business expenses), not gross revenue, which can sometimes surprise borrowers.",
    },
    {
      type: "paragraph",
      text: "Canadian lenders often use your CRA Notice of Assessment as the primary income verification document. Line 15000 (total income) on your T1 tax return is the key figure most lenders reference. If your income has been growing, some lenders will weight recent years more heavily.",
    },
    {
      type: "paragraph",
      text: "If your income varies seasonally, be prepared to explain the pattern. Lenders are generally comfortable with seasonal variation as long as the overall annual income is sufficient and the pattern is consistent year over year.",
    },
    {
      type: "callout",
      text: "Pro Tip: If your most recent year's income is significantly higher than the previous year, provide both years' NOAs plus recent bank statements to show the upward trend.",
    },

    { type: "heading", level: 2, text: "Interest Rates for Self-Employed Borrowers" },
    {
      type: "paragraph",
      text: "Self-employment does not automatically result in higher interest rates. Your rate is determined by the same factors as any borrower: credit score, income level, debt-to-income ratio, and the lender's pricing model.",
    },
    {
      type: "paragraph",
      text: "However, self-employed borrowers with shorter business histories or inconsistent income may be quoted rates at the higher end of the range. Building a longer track record of stable self-employment income improves your terms over time.",
    },
    {
      type: "paragraph",
      text: "Rates for self-employed Canadians typically range from 8% to 35% APR depending on credit profile. Those with 2+ years of consistent self-employment income and good credit can access rates comparable to traditionally employed borrowers.",
    },

    { type: "heading", level: 2, text: "Tips to Improve Your Application" },
    {
      type: "list",
      items: [
        "File and pay taxes on time — tax delinquency is a red flag for lenders",
        "Maintain separate business and personal bank accounts",
        "Keep consistent records of income and expenses",
        "Build your credit score with on-time payments on existing obligations",
        "Apply when your income documentation is strongest (after filing recent taxes)",
        "Consider a co-signer if you are newly self-employed with limited history",
        "Start with a smaller loan amount to build a relationship with the lender",
      ],
    },

    { type: "heading", level: 2, text: "Alternatives for Self-Employed Borrowers" },
    {
      type: "paragraph",
      text: "If a personal loan is not the right fit, self-employed individuals have several other borrowing options.",
    },
    {
      type: "list",
      items: [
        "Business line of credit from your bank",
        "Canada Small Business Financing Program loans",
        "BDC (Business Development Bank of Canada) micro-loans",
        "Credit union personal loans (often more flexible for self-employed)",
        "Home equity line of credit (HELOC) if you own property",
        "Invoice factoring for outstanding client invoices",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How long do I need to be self-employed to qualify?",
          answer:
            "There's no universal minimum, but lenders want to see consistent income, typically documented through 1-2 years of Notice of Assessment (NOA) filings. Borrowers with 2+ years of stable self-employment income and good credit can access rates comparable to traditionally employed applicants. If you're newly self-employed, a co-signer or a smaller loan amount can strengthen your application.",
        },
        {
          question: "Do self-employed borrowers pay higher rates?",
          answer:
            "Not automatically. Your rate is based on the same factors as any borrower — credit score, income level, and debt-to-income ratio. That said, self-employed borrowers with shorter business histories or inconsistent income may be quoted rates toward the higher end of the 8% to 35% APR range typical for this group.",
        },
        {
          question: "Can I use business income to qualify?",
          answer:
            "Yes. Lenders typically average your net self-employment earnings (after business expenses, not gross revenue) over the past one to two years, using your CRA Notice of Assessment — specifically line 15000 (total income) — as the primary verification document.",
        },
        {
          question: "What if I just started my business?",
          answer:
            "It's still possible to qualify, but expect more scrutiny. Strengthen your application with business bank statements, invoices or contracts showing ongoing client relationships, and consider adding a co-signer or starting with a smaller loan amount to build a track record with the lender.",
        },
      ],
    },
  ],
};

export default content;
