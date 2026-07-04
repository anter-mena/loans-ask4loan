import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Whether you're consolidating debt, covering an emergency, or financing a major purchase, this comprehensive guide covers everything you need to know about personal loans in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "What Is a Personal Loan?" },
    {
      type: "paragraph",
      text: "A personal loan functions as an installment loan providing a lump sum repaid over a fixed period, typically 12 to 60 months, with regular monthly payments. Unlike credit cards, personal loans have set repayment schedules and fixed interest rates.",
    },
    {
      type: "paragraph",
      text: "In Canada, personal loans range from $300 to $5,000 or more, depending on the lender and your qualifications. They can be used for virtually any purpose, making them one of the most flexible financing options available.",
    },
    {
      type: "callout",
      text: "Key Takeaway: Personal loans offer predictable monthly payments and can be used for almost any purpose — from debt consolidation to emergency expenses.",
    },

    { type: "heading", level: 2, text: "Types of Personal Loans" },
    { type: "heading", level: 3, text: "Unsecured Personal Loans" },
    {
      type: "paragraph",
      text: "No collateral required. Approval based on creditworthiness and income. Best for borrowers with good credit who don't want to risk assets.",
    },
    { type: "heading", level: 3, text: "Secured Personal Loans" },
    {
      type: "paragraph",
      text: "Backed by collateral like a vehicle or savings account. Best for borrowers with lower credit scores seeking better rates.",
    },
    { type: "heading", level: 3, text: "Debt Consolidation Loans" },
    {
      type: "paragraph",
      text: "Combine multiple debts into one monthly payment. Best for people with multiple high-interest debts.",
    },
    { type: "heading", level: 3, text: "Emergency Loans" },
    {
      type: "paragraph",
      text: "Quick funding for unexpected expenses. Best for urgent financial needs with fast approval needed.",
    },
    { type: "heading", level: 3, text: "Payday Alternative Loans (PALs)" },
    {
      type: "paragraph",
      text: "Small loans offered by credit unions as alternatives to payday loans. Best for credit union members needing small amounts.",
    },

    { type: "heading", level: 2, text: "How to Qualify for a Personal Loan" },
    {
      type: "paragraph",
      text: "Lenders evaluate several factors when reviewing your personal loan application. Meeting these requirements improves your chances of approval and helps you secure better rates:",
    },
    { type: "heading", level: 3, text: "Credit Score" },
    { type: "paragraph", text: "Most lenders prefer scores of 580+, though some accept lower." },
    { type: "heading", level: 3, text: "Steady Income" },
    { type: "paragraph", text: "Proof of regular income from employment, benefits, or other sources." },
    { type: "heading", level: 3, text: "Debt-to-Income Ratio" },
    { type: "paragraph", text: "Total monthly debt payments should be below 40-50% of income." },
    { type: "heading", level: 3, text: "Employment History" },
    { type: "paragraph", text: "Stable employment for at least 3-6 months preferred." },
    { type: "heading", level: 3, text: "Bank Account" },
    { type: "paragraph", text: "Active checking account for deposits and payments." },

    { type: "heading", level: 2, text: "The Application Process: Step by Step" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check Your Credit — Review your credit report for errors and know your score before applying.",
        "Compare Lenders — Shop around with multiple lenders to find the best rates and terms.",
        "Gather Documents — Prepare ID, proof of income, bank statements, and proof of address.",
        "Submit Application — Complete the online application with accurate information.",
        "Review Offers — Compare loan offers, APR, fees, and repayment terms carefully.",
        "Accept & Receive Funds — Sign the agreement and receive funds, often within 1-2 business days.",
      ],
    },

    { type: "heading", level: 2, text: "Understanding Interest Rates and APR" },
    {
      type: "paragraph",
      text: "Interest rates on personal loans vary widely based on your credit profile, the lender, and market conditions. As of 2026, personal loan APRs typically range from 6% to 35% under Canada's Criminal Rate of Interest cap.",
    },
    {
      type: "table",
      headers: ["Credit Score Range", "Typical APR Range", "Monthly Payment (on $3,000)"],
      rows: [
        ["Excellent (720+)", "6% - 12%", "$86 - $95"],
        ["Good (670-719)", "12% - 18%", "$95 - $105"],
        ["Fair (580-669)", "18% - 26%", "$105 - $120"],
        ["Poor (Below 580)", "26% - 35%", "$120 - $140"],
      ],
    },
    {
      type: "callout",
      text: "Estimates based on a 36-month loan term. Actual rates depend on the lender and individual circumstances.",
    },

    { type: "heading", level: 2, text: "Credit Score Requirements" },
    {
      type: "paragraph",
      text: "Your credit score is one of the most important factors in personal loan approval. Here's what you need to know:",
    },
    {
      type: "list",
      items: [
        "720+: Excellent rates and high approval odds",
        "670-719: Good options available with competitive rates",
        "580-669: Options available, but expect higher rates",
        "Below 580: Limited options; consider secured loans or credit-builder loans",
      ],
    },
    { type: "heading", level: 3, text: "Don't Know Your Credit Score?" },
    {
      type: "paragraph",
      text: "In Canada, you can check your credit score for free through Equifax or TransUnion, or use services like Borrowell or Credit Karma.",
    },

    { type: "heading", level: 2, text: "Pros and Cons of Personal Loans" },
    { type: "heading", level: 3, text: "Advantages" },
    {
      type: "list",
      items: [
        "Fixed monthly payments make budgeting easier",
        "Lower interest rates than credit cards (typically)",
        "Can be used for almost any purpose",
        "May help build credit with on-time payments",
        "Quick funding — often same or next day",
        "No collateral required for unsecured loans",
      ],
    },
    { type: "heading", level: 3, text: "Disadvantages" },
    {
      type: "list",
      negative: true,
      items: [
        "Interest rates can be high for poor credit",
        "Origination fees may apply",
        "Taking on new debt adds to financial obligations",
        "Missing payments hurts credit score",
        "Some lenders have prepayment penalties",
        "Smaller loan amounts than secured options",
      ],
    },

    { type: "heading", level: 2, text: "Alternatives to Personal Loans" },
    {
      type: "paragraph",
      text: "Before committing to a personal loan, consider whether these alternatives might better suit your needs:",
    },
    {
      type: "list",
      items: [
        "Credit Card with 0% APR Intro: Good for expenses you can pay off within the promotional period (12-21 months).",
        "Home Equity Loan/HELOC: Lower rates if you own your home, but your property is at risk.",
        "Credit Union Loans: Often offer lower rates and more flexible terms for members.",
        "Borrow from Family/Friends: No interest, but can strain relationships if not handled carefully.",
        "Payment Plans: Many service providers offer interest-free payment plans for medical bills or large purchases.",
      ],
    },

    { type: "heading", level: 2, text: "10 Tips for Getting Approved" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit report for errors and dispute any inaccuracies",
        "Pay down existing debt to improve your debt-to-income ratio",
        "Avoid applying for other credit right before your loan application",
        "Consider a co-signer if your credit is weak",
        "Compare offers from multiple lenders to find the best rate",
        "Start with pre-qualification to avoid hard credit inquiries",
        "Have all required documents ready before applying",
        "Be honest and accurate on your application — discrepancies can cause denial",
        "Consider secured loans if unsecured options aren't available",
        "Only borrow what you need and can afford to repay",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What credit score do I need for a personal loan in Canada?",
          answer:
            "While requirements vary by lender, most prefer a credit score of 580 or higher. However, some lenders work with borrowers who have scores as low as 500-550, though you may face higher interest rates. Our network includes lenders for all credit types.",
        },
        {
          question: "How quickly can I get approved?",
          answer:
            "Many online lenders offer instant pre-qualification and can approve your application within minutes. Funding typically occurs within 1-2 business days after approval, though some lenders offer same-day funding.",
        },
        {
          question: "How much can I borrow with a personal loan?",
          answer:
            "Through our network, you can borrow from $300 to $5,000. Loan amounts depend on factors like your income, credit score, and the lender's requirements.",
        },
        {
          question: "What can I use a personal loan for?",
          answer:
            "Personal loans can be used for almost any purpose including debt consolidation, medical bills, home repairs, car repairs, moving expenses, emergency costs, and major purchases.",
        },
        {
          question: "Will applying hurt my credit score?",
          answer:
            "Initial pre-qualification typically uses a soft credit check, which doesn't affect your score. A hard inquiry only occurs when you formally apply and accept a loan offer, which may cause a small, temporary dip in your score.",
        },
        {
          question: "What's the difference between APR and interest rate?",
          answer:
            "The interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus any fees, giving you a more complete picture of the total cost. Always compare APRs when shopping for loans.",
        },
      ],
    },
  ],
};

export default content;
