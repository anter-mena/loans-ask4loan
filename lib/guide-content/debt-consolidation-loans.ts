import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Combine multiple debts into one manageable monthly payment. Learn how debt consolidation loans work and whether this strategy is right for you.",
  blocks: [
    { type: "heading", level: 2, text: "What Is a Debt Consolidation Loan?" },
    {
      type: "paragraph",
      text: "A debt consolidation loan is a personal loan used to pay off multiple existing debts—such as credit cards, store cards, medical bills, or other loans—and replace them with a single monthly payment at a potentially lower interest rate.",
    },
    {
      type: "paragraph",
      text: "The concept is straightforward: instead of managing five different payments at five different rates with five different due dates, you have one loan, one payment, and one interest rate. This simplification makes budgeting easier and can reduce the total interest you pay.",
    },
    {
      type: "paragraph",
      text: "In Canada, debt consolidation is one of the most popular reasons for taking out a personal loan. With average credit card rates hovering around 19.99% to 22.99%, a personal loan at 12% to 25% APR can represent meaningful savings.",
    },

    { type: "heading", level: 2, text: "How Debt Consolidation Works Step by Step" },
    {
      type: "paragraph",
      text: "The debt consolidation process is straightforward once you understand the steps involved.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "List all current debts including balances, interest rates, and monthly payments",
        "Calculate your total debt and average interest rate",
        "Apply for a personal loan for the total amount (or close to it)",
        "If approved, use the loan funds to pay off all existing debts immediately",
        "Make one monthly payment on the consolidation loan going forward",
        "Avoid accumulating new debt on the accounts you just paid off",
      ],
    },
    { type: "heading", level: 3, text: "Critical Step" },
    {
      type: "paragraph",
      text: "After paying off your credit cards with the consolidation loan, resist the urge to charge them up again. Many people end up worse off because they consolidate but then rebuild credit card balances.",
    },

    { type: "heading", level: 2, text: "When Debt Consolidation Makes Financial Sense" },
    {
      type: "paragraph",
      text: "Debt consolidation is not always the right strategy. It works best in specific circumstances.",
    },
    {
      type: "paragraph",
      text: "It makes sense when your consolidation loan rate is lower than the weighted average rate of your current debts. If you are paying 22% on credit cards and can get a personal loan at 15%, consolidation saves money.",
    },
    {
      type: "paragraph",
      text: "It also makes sense when you are struggling to keep track of multiple payments and due dates. Even if the rate savings are modest, having one payment simplifies your finances and reduces the risk of missed payments.",
    },
    {
      type: "paragraph",
      text: "It does NOT make sense if you will extend the repayment period so much that you pay more total interest, even at a lower rate. Or if you will continue using credit cards after consolidating, effectively doubling your debt.",
    },
    {
      type: "table",
      headers: ["Scenario", "Example", "Consolidation Recommended?"],
      rows: [
        ["High-rate credit card debt", "3 cards averaging 22% APR, consolidation loan at 15%", "Yes—saves on interest"],
        ["Mix of low and high rate debts", "Car loan at 5%, credit cards at 20%", "Consolidate only the high-rate debts"],
        ["Small total debt", "Less than $500 total across all debts", "Probably not worth the effort"],
        ["Spending habits unchanged", "History of running up balances after paying off", "No—address spending first"],
      ],
    },
    {
      type: "callout",
      text: "Ready to Compare Your Options? See personalized loan offers from 50+ Canadian lenders — no impact to your credit score.",
    },

    { type: "heading", level: 2, text: "Debt Consolidation Loan Rates" },
    {
      type: "paragraph",
      text: "Rates on debt consolidation loans follow the same pricing as standard personal loans—they are determined by your credit score, income, and overall financial profile.",
    },
    {
      type: "paragraph",
      text: "In Canada, consolidation loan rates range from 8% to 35% APR. For consolidation to be effective, your loan rate needs to be meaningfully lower than the rates on your current debts. A 5% or greater rate reduction typically makes consolidation worthwhile.",
    },

    { type: "heading", level: 2, text: "Risks and Common Mistakes" },
    {
      type: "paragraph",
      text: "While debt consolidation can be an effective strategy, there are risks to be aware of.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Running up credit card balances again after consolidating—the most common mistake",
        "Extending the repayment term so long that total interest exceeds what you would have paid",
        "Paying origination fees that offset the interest savings",
        "Using a consolidation loan to borrow more than you currently owe",
        "Ignoring the root cause of debt accumulation (overspending, insufficient income)",
      ],
    },

    { type: "heading", level: 2, text: "Alternatives to Debt Consolidation Loans" },
    {
      type: "paragraph",
      text: "A personal loan is not the only way to consolidate or manage multiple debts.",
    },
    {
      type: "list",
      items: [
        "Balance transfer credit card with 0% introductory APR",
        "Debt management plan through a non-profit credit counsellor",
        "Line of credit from your bank (may offer lower rates)",
        "Consumer proposal (formal debt settlement option in Canada)",
        "Negotiating directly with creditors for reduced interest rates",
        "Home equity line of credit (HELOC) if you own property",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Will a debt consolidation loan hurt my credit?",
          answer:
            "Formally applying involves a hard credit check, which can cause a small, temporary dip in your score. Over time, consolidation can actually help your credit by simplifying payments and reducing the risk of missing one — as long as you avoid running up new balances on the accounts you paid off.",
        },
        {
          question: "How much debt can I consolidate?",
          answer:
            "Typically, you apply for a personal loan covering the total amount of debt you want to pay off, or close to it. Consolidation loan rates in Canada generally range from 8% to 35% APR, so the amount you can consolidate depends on what you qualify for based on income and credit.",
        },
        {
          question: "Should I close credit cards after consolidating?",
          answer:
            "Not necessarily. The guide's critical step is to resist charging the cards back up, not to close them. Keeping paid-off cards open (and unused) can help preserve your credit utilization ratio and credit history length, while closing them isn't required for consolidation to work.",
        },
        {
          question: "Is a consumer proposal better than a consolidation loan?",
          answer:
            "They serve different purposes. A debt consolidation loan pays off your existing debts in full using new borrowed funds at a hopefully lower rate. A consumer proposal is a formal debt settlement process that reduces what you owe but has a more significant, longer-lasting impact on your credit. Consolidation is generally preferable if you can qualify for a lower rate.",
        },
      ],
    },
  ],
};

export default content;
