import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn exactly how your monthly loan payment is determined and how to use calculator tools to plan your borrowing strategy.",
  blocks: [
    { type: "heading", level: 2, text: "Understanding Your Loan Payment" },
    {
      type: "paragraph",
      text: "Your monthly loan payment is the fixed amount you pay to your lender each month until the loan is fully repaid. It combines principal repayment and interest charges distributed evenly across the loan's duration.",
    },
    {
      type: "paragraph",
      text: "Three key determinants exist: the borrowed amount, the interest rate, and the loan term. Adjusting any single factor alters the monthly payment. Canadian personal loans typically feature consistent monthly payments throughout the entire repayment period, enabling straightforward budgeting with predictable obligations.",
    },

    { type: "heading", level: 2, text: "The Monthly Payment Formula" },
    {
      type: "paragraph",
      text: "The calculation follows this standard approach: M = P × [r(1+r)^n] / [(1+r)^n – 1].",
    },
    {
      type: "paragraph",
      text: "Variables represent: M as monthly payment, P as principal, r as monthly interest rate (annual divided by 12), and n as total payment count. A concrete illustration shows borrowing CAD $5,000 at 12% APR over 24 months produces approximately CAD $235 monthly payments with roughly CAD $640 in total interest.",
    },

    { type: "heading", level: 2, text: "How Each Variable Impacts Your Payment" },
    {
      type: "paragraph",
      text: "Understanding variable relationships helps optimize borrowing approaches.",
    },
    { type: "heading", level: 3, text: "Loan Amount" },
    {
      type: "paragraph",
      text: "Borrowing more increases your monthly payment proportionally. Doubling borrowed funds roughly doubles the payment.",
    },
    { type: "heading", level: 3, text: "Interest Rate" },
    {
      type: "paragraph",
      text: "Increased rates raise payments, though the effect proves less pronounced than loan amount changes. A 5% rate increase on CAD $10,000 adds approximately $20-30 monthly depending on term length.",
    },
    { type: "heading", level: 3, text: "Loan Term" },
    {
      type: "paragraph",
      text: "Extended terms reduce monthly payments but increase total interest. Shortened terms raise monthly payments while reducing overall costs.",
    },
    {
      type: "table",
      headers: ["Variable Changed", "Effect on Monthly Payment", "Effect on Total Cost"],
      rows: [
        ["Higher loan amount", "Payment increases", "Total cost increases"],
        ["Higher interest rate", "Payment increases", "Total cost increases"],
        ["Longer loan term", "Payment decreases", "Total cost increases"],
        ["Shorter loan term", "Payment increases", "Total cost decreases"],
      ],
    },

    { type: "heading", level: 2, text: "Using the Calculator for Affordability Checks" },
    {
      type: "paragraph",
      text: "Before applying, payment calculators confirm whether monthly payments fit within your budget. Canadian lenders typically target a total debt service ratio below 40%, meaning all your debt payments combined should be less than 40% of your gross monthly income.",
    },
    {
      type: "paragraph",
      text: "If calculated payments seem excessive, consider reducing the borrowed amount, slightly extending the term, or improving your credit profile to qualify for lower rates before submitting applications.",
    },
    {
      type: "callout",
      text: "Affordability Rule: Keep your total monthly debt payments (including the new loan) below 40% of your gross monthly income. This leaves room for savings and unexpected expenses.",
    },

    { type: "heading", level: 2, text: "Common Calculator Mistakes to Avoid" },
    {
      type: "paragraph",
      text: "Borrowers frequently make errors producing inaccurate projections:",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Applying advertised rates instead of personal offered rates",
        "Overlooking origination fees reducing loan proceeds",
        "Comparing only monthly payments without considering total expenditure",
        "Failing to test multiple scenario options",
        "Assuming calculations include insurance or optional add-ons",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Smart Payment Planning" },
    {
      type: "paragraph",
      text: "Maximize calculator effectiveness through these practical approaches:",
    },
    {
      type: "list",
      items: [
        "Perform calculations before contacting lenders",
        "Test minimum 3 different term lengths",
        "Factor all monthly expenses into affordability assessment",
        "Use calculator findings as negotiation leverage",
        "Recalculate if financial circumstances change before applying",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I calculate my monthly loan payment?",
          answer:
            "Use the formula M = P × [r(1+r)^n] / [(1+r)^n – 1], where M is the monthly payment, P is the principal, r is your monthly interest rate (annual rate divided by 12), and n is the total number of payments. For example, a CAD $5,000 loan at 12% APR over 24 months works out to roughly $235 per month.",
        },
        {
          question: "What happens if I pay more than my monthly payment?",
          answer:
            "Extra payments generally reduce your outstanding principal faster, which shortens your payoff timeline and lowers total interest paid. Confirm with your lender that there's no prepayment penalty before making extra payments.",
        },
        {
          question: "Is my monthly payment the only cost of a loan?",
          answer:
            "Not necessarily. A common calculator mistake is overlooking origination fees, which reduce your actual loan proceeds, or assuming the calculation includes insurance or other optional add-ons. Always check the full cost breakdown, not just the monthly payment figure.",
        },
        {
          question: "Can my monthly payment change on a fixed-rate loan?",
          answer:
            "No. Canadian personal loans typically feature consistent monthly payments for the entire term. Your payment only changes if you refinance, make a lump-sum extra payment that alters your schedule, or arrange a modification with your lender.",
        },
        {
          question: "What DTI ratio should I aim for when calculating loan payments in Canada?",
          answer:
            "Canadian lenders typically target a total debt service ratio below 40% — meaning all your monthly debt payments combined, including the new loan, should stay under 40% of your gross monthly income.",
        },
      ],
    },
  ],
};

export default content;
