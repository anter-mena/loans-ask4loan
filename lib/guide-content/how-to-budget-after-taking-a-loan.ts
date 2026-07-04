import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn how to budget and manage your finances after taking a personal loan in Canada. Practical repayment tips to stay on track and avoid default.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Calculate Your True Monthly Obligation" },
    {
      type: "paragraph",
      text: "Start by understanding exactly how much your loan costs per month, including any fees. Add this to your existing fixed expenses: rent/mortgage, utilities, insurance, phone, transportation, and groceries.",
    },
    {
      type: "paragraph",
      text: "Use the 50/30/20 budgeting framework as a starting point: 50% of after-tax income for needs, 30% for wants, and 20% for savings and debt repayment. Your loan payment falls in the 'needs' category.",
    },
    {
      type: "callout",
      text: "Pro Tip: Your total debt payments (including the new loan) should not exceed 40% of your gross monthly income.",
    },

    { type: "heading", level: 3, text: "2. Set Up Automatic Payments" },
    {
      type: "paragraph",
      text: "The most effective way to never miss a loan payment is to automate it. Set up automatic withdrawals timed with your payday. Most Canadian lenders offer automatic payment options at no extra cost. Schedule the payment for 1–2 days after your regular payday to ensure funds are available. Late payments incur fees and damage your credit score.",
    },
    {
      type: "callout",
      text: "Pro Tip: Some lenders offer a 0.25%–0.50% interest rate discount for setting up automatic payments.",
    },

    { type: "heading", level: 3, text: "3. Build a Lean Emergency Fund" },
    {
      type: "paragraph",
      text: "Even while repaying a loan, aim to set aside a small emergency fund. Start with $500–$1,000 to cover unexpected expenses without needing additional borrowing. Even $25–$50 per pay period adds up. An emergency fund prevents you from spiralling into more debt when surprises happen — car repairs, medical costs, or a temporary income disruption.",
    },
    {
      type: "callout",
      text: "Pro Tip: Keep your emergency fund in a separate high-interest savings account so you're not tempted to spend it on non-emergencies.",
    },

    { type: "heading", level: 3, text: "4. Cut Discretionary Spending Strategically" },
    {
      type: "paragraph",
      text: "Review your spending for the past 3 months and identify areas to reduce. Common Canadian expense-cutting opportunities include: switching to a cheaper cell phone plan (providers like Public Mobile, Lucky Mobile offer plans from $25/month), reducing streaming subscriptions, meal prepping instead of ordering delivery, and using cashback apps like Rakuten or Checkout 51 for groceries.",
    },
    {
      type: "callout",
      text: "Pro Tip: Track every purchase for one month using a free app like Mint or YNAB. Most Canadians discover $200–$400 in monthly spending they can reduce.",
    },

    { type: "heading", level: 3, text: "5. Explore Ways to Increase Income" },
    {
      type: "paragraph",
      text: "Temporarily boosting income can accelerate loan repayment. Consider: selling unused items on Facebook Marketplace or Kijiji, freelancing skills on platforms like Upwork, part-time gig work through apps like Uber, DoorDash, or Instacart, or asking your employer about overtime opportunities. Direct any extra income toward your loan principal for faster payoff.",
    },
    {
      type: "callout",
      text: "Pro Tip: Even an extra $200/month toward your loan principal can save hundreds in interest and shorten your repayment term by months.",
    },

    { type: "heading", level: 3, text: "6. Plan for Early Payoff" },
    {
      type: "paragraph",
      text: "Many Canadian personal loans allow penalty-free prepayment. If your budget allows, making extra payments — even small ones — reduces total interest significantly. Use a loan payoff calculator to see how extra payments impact your timeline. Prioritize paying off higher-interest debt first (debt avalanche method) for maximum savings.",
    },
    {
      type: "callout",
      text: "Pro Tip: Applying your tax refund, work bonus, or birthday money directly to your loan principal is one of the most effective acceleration strategies.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Review your budget monthly and adjust as needed",
        "Use the debt avalanche method — pay minimums on all debts and put extra toward the highest-rate one",
        "Avoid taking on new debt while repaying your loan",
        "Celebrate milestones — paying off 25%, 50%, 75% keeps you motivated",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much of my income should go toward loan payments?",
          answer:
            "As a general rule, your total debt payments — including your new loan — shouldn't exceed 40% of your gross monthly income. Using the 50/30/20 framework, your loan payment falls into the 'needs' category, which should make up about 50% of your after-tax income.",
        },
        {
          question: "What's the best way to avoid missing a loan payment?",
          answer:
            "Set up automatic withdrawals timed 1–2 days after your payday to make sure funds are available. Most Canadian lenders offer automatic payments at no extra cost, and some even offer a 0.25%–0.50% rate discount for enrolling.",
        },
        {
          question: "Should I build an emergency fund while repaying a loan?",
          answer:
            "Yes. Even a lean emergency fund of $500–$1,000, built up $25–$50 per pay period, can keep you from needing to borrow again when unexpected expenses like car repairs or medical costs come up.",
        },
        {
          question: "Can I pay off my personal loan early?",
          answer:
            "Many Canadian personal loans allow penalty-free prepayment. Making extra payments toward your principal — even small ones, or a lump sum like a tax refund or bonus — can meaningfully reduce your total interest and shorten your repayment term.",
        },
        {
          question: "What budgeting method works best after taking a loan?",
          answer:
            "The 50/30/20 rule (50% needs, 30% wants, 20% savings/debt repayment) is a solid starting point. Pair it with the debt avalanche method — paying minimums on all debts while putting any extra toward the highest-interest one — for the fastest, lowest-cost payoff.",
        },
      ],
    },
  ],
};

export default content;
