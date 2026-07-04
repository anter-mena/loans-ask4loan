import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Understand exactly what Canadian lenders look for so you can prepare a strong application and maximize your approval chances.",
  blocks: [
    { type: "heading", level: 2, text: "What Do You Need for a Personal Loan?" },
    {
      type: "paragraph",
      text: "Personal loan requirements vary by lender, but most evaluate the same core criteria: identity verification, income, credit history, and existing debt obligations. Understanding these requirements helps you prepare and increases your chances of approval.",
    },
    {
      type: "paragraph",
      text: "Canadian lenders must comply with federal and provincial consumer lending regulations, which include verifying borrower identity and assessing ability to repay. These regulations protect you from irresponsible lending while setting clear standards for eligibility.",
    },

    { type: "heading", level: 2, text: "Identity and Residency Requirements" },
    {
      type: "paragraph",
      text: "Lenders must verify your identity as part of anti-money laundering and fraud prevention obligations.",
    },
    {
      type: "list",
      items: [
        "Must be at least 18 or 19 years old (depending on province)",
        "Canadian citizen or permanent resident",
        "Valid government-issued photo ID (driver's licence, passport, or provincial ID)",
        "Proof of current address (utility bill, bank statement, or lease)",
        "Valid Social Insurance Number (SIN) for credit check purposes",
      ],
    },

    { type: "heading", level: 2, text: "Income Requirements" },
    {
      type: "paragraph",
      text: "Income verification is one of the most critical requirements. Lenders need to confirm you earn enough to make loan payments without financial hardship.",
    },
    {
      type: "paragraph",
      text: "Most Canadian lenders require a minimum monthly income between $800 and $1,500. Accepted income types include employment wages, self-employment income (with CRA NOA), government benefits (EI, CPP, OAS), disability income, pension payments, and in some cases child or spousal support.",
    },
    {
      type: "list",
      items: [
        "Recent pay stubs (typically last 2-4 pay periods)",
        "CRA Notice of Assessment for self-employed applicants",
        "Bank statements showing regular income deposits (last 2-3 months)",
        "Benefit award letters for government income",
        "Employment verification letter (some lenders require this)",
      ],
    },

    { type: "heading", level: 2, text: "Credit Score Requirements" },
    {
      type: "paragraph",
      text: "Your credit score is a major factor in both approval decisions and the interest rate you receive. However, there is no single universal minimum score.",
    },
    {
      type: "paragraph",
      text: "In Canada, credit scores range from 300 to 900 (Equifax and TransUnion). Most major banks require scores of 650+ for personal loans. Online lenders and alternative finance companies often accept scores as low as 500-550, with some evaluating applications with no minimum score at all.",
    },
    {
      type: "table",
      headers: ["Lender Type", "Typical Minimum Score", "Rate Range"],
      rows: [
        ["Major bank", "650-680", "6%–15% APR"],
        ["Credit union", "580-640", "8%–18% APR"],
        ["Online lender", "550-600", "12%–30% APR"],
        ["Alternative/subprime lender", "500-550", "25%–35% APR"],
      ],
    },

    { type: "heading", level: 2, text: "Debt-to-Income Ratio" },
    {
      type: "paragraph",
      text: "Your debt-to-income (DTI) ratio measures how much of your monthly income goes toward debt payments. It is calculated by dividing your total monthly debt payments by your gross monthly income.",
    },
    {
      type: "paragraph",
      text: "Most lenders prefer a DTI of 40% or less, including the new loan payment. For example, if you earn $3,000 per month and have $800 in existing debt payments, your DTI is approximately 27%. A new loan payment of $150 would bring it to 32%—still within most lenders' acceptable range.",
    },
    {
      type: "paragraph",
      text: "If your DTI is too high, you can improve it by paying down existing debts, increasing your income, or applying for a smaller loan amount.",
    },

    { type: "heading", level: 2, text: "Bank Account Requirements" },
    {
      type: "paragraph",
      text: "Almost all lenders require an active bank account for two purposes: depositing the loan funds and setting up automatic repayments.",
    },
    {
      type: "paragraph",
      text: "The account should be in your name and have been open for at least one to three months. Some lenders review your bank account activity to assess financial behavior—regular deposits, no frequent overdrafts, and responsible spending patterns all strengthen your application.",
    },

    { type: "heading", level: 2, text: "Complete Application Checklist" },
    {
      type: "paragraph",
      text: "Having everything ready before you apply speeds up the process and prevents delays due to missing information.",
    },
    {
      type: "list",
      items: [
        "Government-issued photo ID",
        "Social Insurance Number (SIN)",
        "Proof of current address (utility bill, bank statement, or lease)",
        "Recent pay stubs or income documentation",
        "Bank statements from the past 2-3 months",
        "List of current debts and monthly payments",
        "Contact information for your employer (some lenders verify employment)",
        "CRA Notice of Assessment (if self-employed)",
      ],
    },
    {
      type: "callout",
      text: "Preparation Tip: Scan or photograph all documents before starting the application. Having them ready to upload can reduce processing time from days to hours.",
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the most important requirement for a personal loan?",
          answer:
            "Income verification is one of the most critical requirements — lenders need to confirm you earn enough to make loan payments without financial hardship. Most Canadian lenders require a minimum monthly income between $800 and $1,500.",
        },
        {
          question: "Can I get a personal loan without a credit check?",
          answer:
            "There's no single universal minimum score, and some online and alternative lenders evaluate applications with no minimum score at all. Even so, most lenders still perform some form of credit inquiry to determine your rate, so a full check-free loan is uncommon.",
        },
        {
          question: "Do I need a SIN to apply?",
          answer:
            "Yes. A valid Social Insurance Number is required for credit check purposes as part of identity verification.",
        },
        {
          question: "How long does the approval process take?",
          answer:
            "It varies by lender, but having your documents ready — ID, income proof, and bank statements — can reduce processing time from days to hours. Many online applications receive a decision within minutes to a few business days.",
        },
        {
          question: "Can I apply if I recently changed jobs?",
          answer:
            "Yes, but be ready to provide extra documentation. Some lenders require an employment verification letter, and having recent pay stubs or bank statements showing regular deposits helps demonstrate income stability even with a short work history at your current job.",
        },
      ],
    },
  ],
};

export default content;
