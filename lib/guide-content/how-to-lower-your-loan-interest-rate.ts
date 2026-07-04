import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Practical strategies to reduce your personal loan interest rate in Canada. Learn negotiation tactics, refinancing options, and credit improvement tips.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Understand How Interest Rates Are Set" },
    {
      type: "paragraph",
      text: "Canadian personal loan rates typically range from 6.99% to 34.99% APR. Your rate depends on your credit score, income, debt-to-income ratio, loan amount, and loan term. The Bank of Canada's overnight rate influences baseline lending rates. Understanding these factors helps you identify which levers you can pull to get a better rate.",
    },
    {
      type: "callout",
      text: "Pro Tip: The Criminal Rate of Interest in Canada is 35% APR. Any rate above this is illegal. If you're being charged more, report it to your provincial consumer protection agency.",
    },

    { type: "heading", level: 3, text: "2. Improve Your Credit Score First" },
    {
      type: "paragraph",
      text: "Your credit score is the single biggest factor in determining your interest rate. In Canada, a score above 700 typically qualifies for the best rates, while scores below 600 result in significantly higher rates. To improve quickly: pay all bills on time, reduce credit card balances below 30% of limits, dispute any errors on your credit report, and avoid opening new accounts unnecessarily.",
    },
    {
      type: "callout",
      text: "Pro Tip: Paying down a credit card from 80% utilization to 30% can improve your score by 50–100 points within 1–2 billing cycles.",
    },

    { type: "heading", level: 3, text: "3. Shop Around and Compare Offers" },
    {
      type: "paragraph",
      text: "Don't accept the first rate you're offered. Compare rates from at least 3–5 lenders including your bank, credit unions, and online lenders. Many platforms offer rate quotes with soft credit checks that don't affect your score. In Canada, credit scoring models treat multiple loan inquiries within a 14-day window as a single inquiry, so shop within this timeframe.",
    },
    {
      type: "callout",
      text: "Pro Tip: Online lenders often have lower overhead than banks and can offer more competitive rates. Always compare the total cost of borrowing, not just the interest rate.",
    },

    { type: "heading", level: 3, text: "4. Negotiate with Your Current Lender" },
    {
      type: "paragraph",
      text: "If you have an existing loan, contact your lender and ask for a rate reduction. Mention competitive offers you've received, highlight your good payment history, and point out your improved credit score since origination. Many lenders have retention departments authorized to offer better terms rather than lose a customer. The FCAC confirms that negotiating loan terms is your right as a borrower.",
    },
    {
      type: "callout",
      text: "Pro Tip: Call your lender on a weekday morning when wait times are shorter. Have your account number, current rate, and competitor offers ready.",
    },

    { type: "heading", level: 3, text: "5. Consider Refinancing" },
    {
      type: "paragraph",
      text: "If your credit has improved since you took out your original loan, refinancing can lock in a lower rate. Calculate the total savings versus any fees (origination fees, prepayment penalties on the old loan). In Canada, many personal loans allow prepayment without penalty — check your loan agreement. Refinancing makes sense when you can reduce your rate by at least 2–3 percentage points.",
    },
    {
      type: "callout",
      text: "Pro Tip: Before refinancing, check your current loan agreement for prepayment penalties. Many Canadian online lenders offer penalty-free prepayment.",
    },

    { type: "heading", level: 3, text: "6. Use a Co-Signer or Collateral" },
    {
      type: "paragraph",
      text: "Adding a co-signer with strong credit can reduce your rate by 3–10 percentage points. Alternatively, offering collateral (a vehicle, GIC, or other asset) makes the loan 'secured,' which typically carries lower rates than unsecured loans. Understand the risks: if you default, the co-signer is liable and the collateral can be seized.",
    },
    {
      type: "callout",
      text: "Pro Tip: A secured loan backed by a GIC can offer rates 5–15% lower than an unsecured loan with the same credit profile.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Pay down credit card balances before applying — lower utilization means better rates",
        "Time your application for when your credit score is highest",
        "Always compare total cost of borrowing, not just the monthly payment",
        "Set up automatic payments — some lenders offer 0.25%–0.50% rate discounts for autopay",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum interest rate a lender can legally charge in Canada?",
          answer:
            "The Criminal Rate of Interest in Canada is 35% APR — any rate above this is illegal. If you're ever quoted more, you can report it to your provincial consumer protection agency.",
        },
        {
          question: "Will shopping around for rates hurt my credit score?",
          answer:
            "Not if you compare offers using platforms or lenders that perform soft credit checks, which don't affect your score. If you do apply directly with multiple lenders, Canadian credit scoring models treat multiple loan inquiries within a 14-day window as a single inquiry, so shopping within that window limits the impact.",
        },
        {
          question: "How much can a co-signer lower my rate?",
          answer:
            "Adding a co-signer with strong credit can reduce your rate by roughly 3-10 percentage points. Offering collateral, such as a GIC, can lower it even further — sometimes 5-15% below an unsecured rate for the same credit profile — since the loan becomes secured.",
        },
        {
          question: "When does it make sense to refinance my loan?",
          answer:
            "Refinancing generally makes sense if your credit has improved since you took out your original loan and you can reduce your rate by at least 2-3 percentage points. Check your current agreement for prepayment penalties first, since many Canadian online lenders allow penalty-free prepayment.",
        },
        {
          question: "Can I negotiate my rate with my current lender?",
          answer:
            "Yes — negotiating your loan terms is your right as a borrower. Contact your lender, mention any competitive offers you've received, and highlight your payment history and improved credit score since origination. Many lenders have retention teams authorized to offer better terms.",
        },
      ],
    },
  ],
};

export default content;
