import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "We compared the major personal loan lenders in Canada — Spring Financial, Loans Canada, Fairstone, Mogo and more — on APR, funding speed, credit requirements and provincial availability. See who fits your situation in under 2 minutes.",
  blocks: [
    { type: "heading", level: 2, text: "Top Personal Loan Lenders in Canada at a Glance (2026)" },
    {
      type: "paragraph",
      text: "Below is a side-by-side look at the personal loan lenders we work with most often in Canada. All operate nationwide (except where noted), comply with the federal 35% APR cap, and offer e-Transfer funding once approved. Rates shown are starting APRs — your actual offer depends on credit, income and province.",
    },
    {
      type: "table",
      headers: ["Lender", "Starting APR", "Loan Range", "Min. Credit", "Funding"],
      rows: [
        ["Spring Financial", "9.99%", "$500 – $35,000", "No minimum", "Same-day e-Transfer"],
        ["Loans Canada (network of 60+)", "9.90%", "$300 – $50,000", "300+", "1–2 business days"],
        ["Fairstone", "19.99%", "$500 – $50,000", "560+", "1–2 business days"],
        ["Mogo", "9.90%", "$500 – $35,000", "500+", "Next business day"],
        ["easyfinancial", "29.99%", "$500 – $20,000", "No minimum", "Same-day"],
        ["LoanConnect (broker)", "8.99%", "$500 – $50,000", "300+", "24–48 hours"],
      ],
    },
    { type: "heading", level: 3, text: "Our Methodology" },
    {
      type: "paragraph",
      text: "We rank lenders on five weighted factors: APR (30%), funding speed (20%), credit flexibility (20%), transparency of fees (15%), and customer-service reputation (15%). We do not accept payment for placement — order reflects fit for the borrower, not the affiliate payout.",
    },

    { type: "heading", level: 2, text: "What Makes a Personal Loan \"the Best\"?" },
    {
      type: "paragraph",
      text: "The best personal loans combine competitive interest rates, transparent fee structures, flexible repayment terms, and a smooth application process. In Canada, personal loans typically range from $300 to $5,000, with APRs between 6% and 35% depending on your credit profile.",
    },
    {
      type: "paragraph",
      text: "When evaluating personal loan options, it is important to look beyond the advertised rate. Consider the total cost of borrowing, including origination fees, late payment penalties, and prepayment charges. A slightly higher rate with no fees can sometimes cost less overall than a lower rate with hidden costs.",
    },
    {
      type: "paragraph",
      text: "Responsible lenders are transparent about all costs before you commit. In Canada, the Financial Consumer Agency of Canada (FCAC) requires lenders to clearly disclose the APR and all associated fees so borrowers can make informed comparisons.",
    },
    {
      type: "list",
      items: [
        "Low APR relative to your credit profile",
        "No or minimal origination fees",
        "Flexible repayment terms (12 to 60 months)",
        "Fast approval and funding (often same day)",
        "Soft credit check for pre-qualification",
        "Licensed and regulated in your province",
      ],
    },
    {
      type: "callout",
      text: "Pro Tip: Always compare at least 3-5 loan offers before committing. Pre-qualification with a soft credit check lets you see real rates without affecting your Equifax or TransUnion score.",
    },

    { type: "heading", level: 2, text: "How Personal Loans Work" },
    {
      type: "paragraph",
      text: "A personal loan is an installment loan where you receive a lump sum and repay it in fixed monthly payments over a set period. Unlike credit cards, personal loans have a defined end date, making them easier to budget for and plan around.",
    },
    {
      type: "paragraph",
      text: "Most personal loans in Canada are unsecured, meaning no collateral is required. Lenders evaluate your creditworthiness based on your income, credit history, debt-to-income ratio, and employment stability. Some lenders also offer secured personal loans backed by assets like a vehicle or savings account, which may offer lower rates.",
    },
    {
      type: "paragraph",
      text: "The application process is straightforward: submit basic information, get pre-qualified through a soft credit check, compare offers, choose the best one, and receive funds—often within one to two business days. The entire process can typically be completed online without visiting a branch.",
    },

    { type: "heading", level: 2, text: "Typical Interest Rates" },
    {
      type: "paragraph",
      text: "Personal loan interest rates vary widely based on credit score, income, and the lender. In Canada, rates typically range from about 6% APR for excellent credit to 35% APR for borrowers with lower credit scores.",
    },
    {
      type: "paragraph",
      text: "Canadian provinces regulate maximum lending rates. Under the Criminal Code, the maximum allowable rate is 35% APR for most consumer loans. Some provinces have additional restrictions on payday lending that further protect borrowers.",
    },
    {
      type: "paragraph",
      text: "The rate you receive depends heavily on your credit profile. Improving your credit score before applying—even by 20 to 30 points—can significantly reduce the interest you pay over the life of the loan.",
    },
    {
      type: "table",
      headers: ["Credit Score", "Typical APR", "Monthly Payment ($3K/36mo)"],
      rows: [
        ["Excellent (720+)", "6%–12%", "$91–$100"],
        ["Good (670–719)", "12%–18%", "$100–$108"],
        ["Fair (580–669)", "18%–26%", "$108–$121"],
        ["Poor (below 580)", "26%–35%", "$121–$136"],
      ],
    },

    { type: "heading", level: 2, text: "Eligibility Requirements" },
    {
      type: "paragraph",
      text: "Eligibility for a personal loan depends on several factors. While each lender sets its own criteria, most share common requirements that borrowers need to meet.",
    },
    {
      type: "paragraph",
      text: "In Canada, you must be at least 18 or 19 years old depending on your province, be a Canadian citizen or permanent resident, have an active bank account, and demonstrate a source of regular income. Some lenders accept employment income, self-employment income, government benefits such as EI or CPP, and even rental income.",
    },
    {
      type: "paragraph",
      text: "While a higher credit score improves your chances of approval and secures better rates, many lenders in our network specialize in working with borrowers across the credit spectrum, including those with fair or poor credit.",
    },
    {
      type: "list",
      items: [
        "Minimum age: 18-19 (varies by province)",
        "Canadian citizen or permanent resident",
        "Active checking or savings account",
        "Verifiable income source",
        "Debt-to-income ratio below 40-50%",
        "Valid government-issued ID",
      ],
    },

    { type: "heading", level: 2, text: "Approval Factors Lenders Consider" },
    {
      type: "paragraph",
      text: "Lenders use a combination of factors when deciding whether to approve your application and what rate to offer. Understanding these factors can help you prepare and improve your chances.",
    },
    {
      type: "paragraph",
      text: "Credit score is one of the most important factors, but it is not the only one. Lenders also look at your payment history, the types of credit you have used, your total outstanding debt, and how long you have had credit accounts open.",
    },
    {
      type: "paragraph",
      text: "Income stability matters as much as income amount. Lenders want to see consistent earnings over time. If you have recently changed jobs, having documentation of your employment history and current salary can help reassure the lender.",
    },
    {
      type: "paragraph",
      text: "Your debt-to-income ratio—the percentage of your monthly income that goes toward existing debt payments—is another critical factor. Most lenders prefer a DTI of 40% or less, though some will approve borrowers with higher ratios if other factors are strong.",
    },

    { type: "heading", level: 2, text: "Top Personal Loan Options in Canada" },
    {
      type: "paragraph",
      text: "Canada's personal loan market includes major banks like RBC, TD, and BMO, credit unions, online lenders, and alternative lending platforms. Each type of lender offers different advantages depending on your profile and needs.",
    },
    {
      type: "paragraph",
      text: "Online lending platforms often provide the fastest approval times and are more flexible with credit requirements. Credit unions may offer lower rates to their members, and major banks typically reserve their best rates for existing customers with strong credit.",
    },
    {
      type: "paragraph",
      text: "Comparison platforms like 365 Loans allow you to see pre-qualified offers from multiple lenders in one place, saving time and ensuring you do not settle for the first offer you receive.",
    },
    {
      type: "callout",
      text: "Key Insight: Using a comparison platform gives you access to offers from multiple lenders with a single application, maximizing your chances of finding the most competitive rate.",
    },

    { type: "heading", level: 2, text: "Approval Speed and Funding Time" },
    {
      type: "paragraph",
      text: "One of the advantages of modern personal loans is the speed of the process. Many online lenders can provide a decision within minutes and deposit funds within one to two business days. Some even offer same-day funding.",
    },
    {
      type: "paragraph",
      text: "In Canada, Interac e-Transfer has made same-day funding increasingly common among online lenders. Traditional banks may take two to five business days for direct deposit. The speed depends on the lender, your bank, and whether additional verification is required.",
    },
    {
      type: "paragraph",
      text: "To speed up the process, have your documents ready before applying: government-issued ID, recent pay stubs or proof of income, bank statements from the past two to three months, and proof of address.",
    },

    { type: "heading", level: 2, text: "Risks and Responsible Borrowing" },
    {
      type: "paragraph",
      text: "While personal loans can be a valuable financial tool, borrowing responsibly is essential. Taking on more debt than you can comfortably repay can lead to financial stress, missed payments, and damage to your credit score.",
    },
    {
      type: "paragraph",
      text: "Before applying, create a realistic budget that includes the monthly loan payment. Ensure you can comfortably afford it alongside your existing financial obligations, including rent, utilities, groceries, and other debt payments.",
    },
    {
      type: "paragraph",
      text: "Be cautious of lenders that guarantee approval regardless of your financial situation or that pressure you to borrow more than you need. Reputable lenders will assess your ability to repay and will not encourage overborrowing.",
    },
    {
      type: "list",
      items: [
        "Never borrow more than you can realistically repay",
        "Read the full loan agreement before signing",
        "Watch for hidden fees such as origination charges or prepayment penalties",
        "Missed payments negatively impact your credit score",
        "Avoid using personal loans to fund lifestyle spending or non-essential purchases",
      ],
    },

    { type: "heading", level: 2, text: "Alternatives to Personal Loans" },
    {
      type: "paragraph",
      text: "Personal loans are not always the best option for every situation. Depending on your needs, there may be more suitable alternatives worth considering.",
    },
    {
      type: "paragraph",
      text: "In Canada, alternatives include credit union loans, lines of credit, credit card balance transfers, borrowing from your RRSP under the Home Buyers' Plan, or exploring government assistance programs. Community organizations and non-profit credit counselling services can also provide guidance.",
    },
    {
      type: "paragraph",
      text: "If your primary goal is debt consolidation, a balance transfer credit card with a 0% introductory APR could save you more in interest—provided you can pay off the balance before the promotional period ends.",
    },
    {
      type: "list",
      items: [
        "Line of credit (LOC) from your bank or credit union",
        "0% introductory APR balance transfer credit cards",
        "Credit union personal loans (often lower rates for members)",
        "Payment plans offered directly by medical providers or service companies",
        "Government programs (e.g., Canada Emergency Business Account loans)",
        "Non-profit credit counselling services",
      ],
    },

    { type: "heading", level: 2, text: "How to Compare and Choose the Right Loan" },
    {
      type: "paragraph",
      text: "Choosing the right personal loan requires comparing multiple offers side by side. Focus on the total cost of borrowing rather than just the monthly payment or the interest rate alone.",
    },
    {
      type: "paragraph",
      text: "Start by getting pre-qualified with several lenders. This typically involves a soft credit check that will not affect your score. Compare the APR (which includes fees), the repayment term, the total amount you will pay over the life of the loan, and any penalties for early repayment.",
    },
    {
      type: "paragraph",
      text: "Consider the lender's reputation and customer service quality. Read reviews, check their complaints record with the Better Business Bureau Canada, and verify they are properly licensed in your province.",
    },
    {
      type: "paragraph",
      text: "Finally, trust your instincts. If a deal seems too good to be true or if a lender is pressuring you to act quickly, take a step back and do more research before committing.",
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the best personal loan in Canada right now?",
          answer:
            "There's no single \"best\" loan — it depends on your credit profile and needs. We rank lenders like Spring Financial, Loans Canada, Fairstone, Mogo, easyfinancial, and LoanConnect on APR (30%), funding speed (20%), credit flexibility (20%), fee transparency (15%), and reputation (15%) to help you compare options for your situation.",
        },
        {
          question: "How fast can I get approved for a personal loan?",
          answer:
            "Many online lenders can provide a decision within minutes and deposit funds within one to two business days. Some lenders, aided by Interac e-Transfer, even offer same-day funding.",
        },
        {
          question: "What credit score do I need for a personal loan in Canada?",
          answer:
            "It varies by lender. Several lenders we compare, including Spring Financial and easyfinancial, have no minimum credit score, while others like Fairstone and Mogo look for scores around 500-560+. Your score mainly affects the rate you're offered rather than eligibility alone.",
        },
        {
          question: "Will applying hurt my credit score?",
          answer:
            "Pre-qualification uses a soft credit check, which does not affect your Equifax or TransUnion score. This lets you see real rate estimates from multiple lenders before committing to a formal application.",
        },
        {
          question: "How much can I borrow with a personal loan?",
          answer:
            "In Canada, personal loans typically range from $300 to $5,000, though some lenders in our comparison offer higher amounts depending on your credit and income.",
        },
        {
          question: "Are personal loans regulated in Canada?",
          answer:
            "Yes. Under the Criminal Code, the maximum allowable rate is 35% APR, and the Financial Consumer Agency of Canada requires lenders to clearly disclose the APR and all fees. Lenders must also be licensed in the provinces where they operate.",
        },
      ],
    },
  ],
};

export default content;
