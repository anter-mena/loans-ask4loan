import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn what Debt-to-Income Ratio (DTI) is, how to calculate it, and why it's crucial for loan approval in Canada. Improve your financial health.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. What is Debt-to-Income Ratio (DTI)?" },
    {
      type: "paragraph",
      text: "The Debt-to-Income Ratio (DTI) is a personal finance measure that compares how much you owe each month to how much you earn. Expressed as a percentage, it helps lenders understand your debt-servicing capacity. A lower DTI generally indicates less risk to lenders, making you a more attractive candidate for loan approval.",
    },
    {
      type: "callout",
      text: "Pro Tip: Think of your DTI as a financial health check-up; a high ratio could signal potential financial strain.",
    },

    { type: "heading", level: 3, text: "2. Why DTI Matters to Canadian Lenders" },
    {
      type: "paragraph",
      text: "Canadian lenders, from banks to credit unions, use your DTI as a primary factor in evaluating your creditworthiness. A manageable DTI demonstrates that you have enough disposable income to comfortably cover new loan payments, while a high DTI might suggest you're already overextended, potentially leading to loan denial or less favourable terms.",
    },
    {
      type: "callout",
      text: "Pro Tip: Understanding your DTI before applying can help you anticipate a lender's decision and potentially improve your application.",
    },

    { type: "heading", level: 3, text: "3. Calculating Your DTI: Step-by-Step" },
    {
      type: "paragraph",
      text: "To calculate your DTI, first add up all your total monthly debt payments. This typically includes rent or mortgage payments, car loans, student loan payments, minimum credit card payments, and any other regular debt obligations. Next, divide this total by your gross monthly income (income before taxes and deductions). Multiply the result by 100 to get a percentage.",
    },
    {
      type: "callout",
      text: "Pro Tip: Be thorough when listing your debts; even small recurring payments contribute to your total.",
    },

    { type: "heading", level: 3, text: "4. Example Calculation for a Canadian Borrower" },
    {
      type: "paragraph",
      text: "Let's say your gross monthly income is $5,000 CAD. Your monthly debts include: Mortgage - $1,500, Car Loan - $400, Student Loan - $250, Credit Card Minimums - $150. Your total monthly debt payments would be $1,500 + $400 + $250 + $150 = $2,300 CAD. Your DTI would be ($2,300 / $5,000) * 100 = 46%.",
    },
    {
      type: "callout",
      text: "Pro Tip: Use a calculator to ensure accuracy, and double-check your figures before making financial decisions.",
    },

    { type: "heading", level: 3, text: "5. Understanding 'Good' vs. 'High' DTI in Canada" },
    {
      type: "paragraph",
      text: "While there's no single 'perfect' DTI, most Canadian lenders prefer a ratio of 36% or lower for conventional loans, excluding mortgage payments. For mortgages, lenders often look at two ratios: Gross Debt Service (GDS) and Total Debt Service (TDS). GDS usually shouldn't exceed 32% of gross income, and TDS, which includes all other debt, typically shouldn't exceed 40-44%. A DTI above 43% is generally considered high and could limit your loan approval options.",
    },
    {
      type: "callout",
      text: "Pro Tip: Aim for a DTI below 36% for personal loans and keep an eye on GDS/TDS for mortgage applications to maximize your chances of approval.",
    },

    { type: "heading", level: 3, text: "6. How to Improve Your Debt-to-Income Ratio" },
    {
      type: "paragraph",
      text: "To lower your DTI, you can either decrease your monthly debt payments or increase your gross monthly income. Strategies include paying down existing debts, consolidating high-interest debt into a single, lower-payment loan, avoiding new debt, and exploring opportunities to earn more money. This demonstrates to lenders you have a stronger capacity for loan repayment.",
    },
    {
      type: "callout",
      text: "Pro Tip: Focus on paying off debts with the highest interest rates first to reduce total monthly payments faster.",
    },

    { type: "heading", level: 3, text: "7. DTI and Your Credit Score: A Combined View" },
    {
      type: "paragraph",
      text: "While DTI isn't directly part of your credit score (maintained by agencies like Equifax Canada and TransUnion Canada), it's a vital indicator of your financial health. A high DTI can indirectly impact your credit score if it leads to missed payments or defaulting on loans. Lenders consider both your DTI and credit score in conjunction to form a comprehensive view of your financial reliability.",
    },
    {
      type: "callout",
      text: "Pro Tip: Monitor both your credit score and DTI regularly to ensure a healthy financial profile for future loan applications.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Always use your gross monthly income (before taxes) for DTI calculations.",
        "Small recurring payments add up; include all debt obligations in your calculations.",
        "Consider consolidating high-interest debt to reduce your overall monthly payments.",
        "A DTI below 36% is often seen as favourable by Canadian lenders.",
        "Regularly review your DTI, especially before applying for significant loan products.",
        "Remember that DTI is one of several factors lenders consider, alongside your credit history and income stability.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is considered a good debt-to-income ratio in Canada?",
          answer:
            "Most Canadian lenders prefer a DTI of 36% or lower for personal loans, excluding mortgage payments. For mortgages, lenders typically look at Gross Debt Service (GDS, ideally 32% or below) and Total Debt Service (TDS, generally 40-44% or below). A DTI above 43% is considered high and can limit your loan options.",
        },
        {
          question: "How do I calculate my DTI?",
          answer:
            "Add up all your total monthly debt payments (rent or mortgage, car loan, student loan, credit card minimums, and other recurring debts), divide that total by your gross monthly income, and multiply by 100. For example, $2,300 in monthly debt divided by $5,000 gross income works out to a 46% DTI.",
        },
        {
          question: "Does my DTI affect my credit score?",
          answer:
            "Not directly—DTI isn't calculated by credit bureaus like Equifax Canada or TransUnion Canada. But a high DTI can indirectly hurt your score if it leads to missed payments or default. Lenders review both your DTI and credit score together to assess your overall financial reliability.",
        },
        {
          question: "How can I lower my DTI?",
          answer:
            "Pay down existing debts (starting with the highest interest rates), consolidate high-interest debt into a single lower-payment loan, avoid taking on new debt, and look for ways to increase your gross monthly income.",
        },
        {
          question: "What debts count toward my DTI?",
          answer:
            "Include your rent or mortgage payment, car loan, student loan payments, minimum credit card payments, and any other regular debt obligations. Be thorough—even small recurring payments add to your total.",
        },
      ],
    },
  ],
};

export default content;
