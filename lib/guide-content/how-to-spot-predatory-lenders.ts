import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn to identify predatory lending practices in Canada. Protect yourself from loan scams, hidden fees, and illegal interest rates with this guide.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Know the Legal Interest Rate Limits" },
    {
      type: "paragraph",
      text: "In Canada, the Criminal Code caps the criminal rate of interest at 35% APR (effective January 2025, reduced from 48%). Any lender charging above this rate is breaking the law. For payday loans, provincial regulations set additional limits — for example, Ontario caps payday loan costs at $15 per $100 borrowed. Understanding these limits is your first line of defence.",
    },
    {
      type: "callout",
      text: "Pro Tip: If a lender won't clearly state the total APR including all fees, that's a major red flag.",
    },

    { type: "heading", level: 3, text: "2. Watch for Common Red Flags" },
    {
      type: "paragraph",
      text: "Predatory lenders often: guarantee approval regardless of credit, pressure you to sign immediately, charge upfront fees before disbursing the loan, require access to your bank account or blank cheques, advertise with unsolicited calls or texts, and have no physical address or unclear contact information. Legitimate lenders in Canada are licensed and transparent about their terms.",
    },
    {
      type: "callout",
      text: "Pro Tip: No legitimate lender in Canada will ever ask you to pay an upfront fee before receiving your loan.",
    },

    { type: "heading", level: 3, text: "3. Verify the Lender Is Licensed" },
    {
      type: "paragraph",
      text: "All lenders in Canada must be licensed in the provinces where they operate. Check with your provincial consumer protection office: Consumer Protection Ontario, Consumer Protection BC, the Alberta Consumer Protection Act, or the Office de la protection du consommateur in Quebec. The Financial Consumer Agency of Canada (FCAC) also maintains resources to verify lender legitimacy.",
    },
    {
      type: "callout",
      text: "Pro Tip: Search for the lender on your provincial regulator's website. If they're not listed, don't borrow from them.",
    },

    { type: "heading", level: 3, text: "4. Read the Fine Print Carefully" },
    {
      type: "paragraph",
      text: "Before signing any loan agreement, look for: the total cost of borrowing (including all fees), prepayment penalties, automatic renewal clauses, variable rate provisions, insurance add-ons, and collection procedures. Under Canadian law, lenders must provide a written loan agreement that clearly states all terms. If anything is unclear, ask questions or walk away.",
    },
    {
      type: "callout",
      text: "Pro Tip: Pay special attention to 'loan insurance' or 'protection plan' add-ons. These are often expensive and may not provide meaningful coverage.",
    },

    { type: "heading", level: 3, text: "5. Understand Rollover and Renewal Traps" },
    {
      type: "paragraph",
      text: "Some predatory lenders encourage 'rolling over' your loan — extending the term and adding new fees. In many provinces, payday loan rollovers are illegal. For personal loans, watch for automatic renewal clauses that extend your loan at potentially higher rates. Always read how your loan ends and what happens if you can't pay on time.",
    },
    {
      type: "callout",
      text: "Pro Tip: If a lender encourages you to take out a new loan to pay off an existing one with them, that's a classic debt trap.",
    },

    { type: "heading", level: 3, text: "6. Know Where to Report Predatory Practices" },
    {
      type: "paragraph",
      text: "If you believe you've been targeted by a predatory lender, report them to: your provincial consumer protection agency, the Financial Consumer Agency of Canada (FCAC), the Canadian Anti-Fraud Centre (1-888-495-8501), and local police if criminal activity is suspected. You may also contact a non-profit credit counselling agency for help managing existing predatory debt.",
    },
    {
      type: "callout",
      text: "Pro Tip: The Canadian Anti-Fraud Centre tracks and helps investigate lending scams.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Always compare at least 3 lender offers before committing",
        "If it sounds too good to be true, it probably is",
        "Legitimate lenders never guarantee approval without reviewing your application",
        "Keep copies of all loan documents and correspondence",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate a lender can legally charge in Canada?",
          answer:
            "Under the Criminal Code, no lender in Canada can charge more than 35% APR (effective January 2025, down from 48%). This cap includes all fees and charges expressed as an annual rate. Any lender charging above this rate is breaking the law.",
        },
        {
          question: "What are the biggest red flags of a predatory lender?",
          answer:
            "Watch for lenders who guarantee approval regardless of credit, pressure you to sign immediately, charge upfront fees before disbursing the loan, ask for access to your bank account or blank cheques, or have no physical address or unclear contact information. Legitimate lenders are licensed and transparent about their terms.",
        },
        {
          question: "Is it legal for a lender to ask for an upfront fee?",
          answer:
            "No. No legitimate lender in Canada will ever ask you to pay a fee before you receive your loan. Requests for upfront payment are one of the clearest signs of a scam.",
        },
        {
          question: "How can I check if a lender is licensed?",
          answer:
            "All lenders must be licensed in the provinces where they operate. You can verify a lender through your provincial consumer protection office (such as Consumer Protection Ontario, Consumer Protection BC, or the Office de la protection du consommateur in Quebec) or through the Financial Consumer Agency of Canada (FCAC). If a lender isn't listed, don't borrow from them.",
        },
        {
          question: "Where do I report a predatory lender?",
          answer:
            "Report suspected predatory lending to your provincial consumer protection agency, the Financial Consumer Agency of Canada (FCAC), or the Canadian Anti-Fraud Centre at 1-888-495-8501. If criminal activity is suspected, you can also contact local police.",
        },
      ],
    },
  ],
};

export default content;
