import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What documents and information you need before applying for a personal loan in Canada, so you can apply once and get it right.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Know Your Credit Score Before You Apply" },
    {
      type: "paragraph",
      text: "Check your credit score through Equifax or TransUnion Canada, or a free service like Borrowell or Credit Karma, before you submit any application. Knowing your score helps you set realistic expectations for rates and avoid applying to lenders whose minimum requirements you don't meet.",
    },
    {
      type: "callout",
      text: "Pro Tip: Checking your own score is a soft inquiry and never affects your credit — only a lender's hard inquiry does.",
    },

    { type: "heading", level: 3, text: "2. Gather Proof of Identity" },
    {
      type: "paragraph",
      text: "Have a government-issued photo ID ready, such as a driver's licence, passport, or provincial ID card. Most online lenders accept a photo upload during the application, but some may request a secondary form of ID if your information can't be verified automatically.",
    },

    { type: "heading", level: 3, text: "3. Gather Proof of Income" },
    {
      type: "paragraph",
      text: "Lenders need to confirm you can afford the payment. Typical documents include recent pay stubs, a T4 or Notice of Assessment for the past year, or bank statements showing regular deposits if you're self-employed or receive benefit income. Having these ready in digital form speeds up approval significantly.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you're self-employed, 2-3 months of bank statements plus your most recent Notice of Assessment is usually the fastest path to approval.",
    },

    { type: "heading", level: 3, text: "4. Confirm Your Banking Information" },
    {
      type: "paragraph",
      text: "Most lenders disburse funds by direct deposit and collect payments the same way, so you'll need an active chequing account in your name. Have a void cheque or your bank's transit, institution, and account numbers on hand.",
    },

    { type: "heading", level: 3, text: "5. Calculate What You Actually Need" },
    {
      type: "paragraph",
      text: "Before applying, work out the exact amount you need rather than rounding up. Borrowing more than necessary increases your total interest cost and monthly payment for no real benefit. Use a loan calculator to test a few amounts and terms against your budget first.",
    },

    { type: "heading", level: 3, text: "6. Compare Lenders Before You Commit" },
    {
      type: "paragraph",
      text: "Rates, fees, and terms vary meaningfully between lenders. Where possible, use pre-qualification tools that only require a soft credit check, so you can compare real offers before a hard inquiry is run on your file.",
    },
    {
      type: "callout",
      text: "Pro Tip: Multiple personal loan pre-qualification checks within a short window are generally treated as rate shopping and have minimal impact on your score.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Check your credit score before applying so you know what to expect",
        "Have ID, proof of income, and banking details ready in digital form",
        "Borrow the exact amount you need, not a rounded-up figure",
        "Use pre-qualification (soft check) tools to compare offers first",
        "Read the full loan agreement before signing, including fees and prepayment terms",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What documents do I need before applying for a personal loan?",
          answer:
            "You'll typically need a government-issued photo ID, proof of income (recent pay stubs, a T4 or Notice of Assessment, or bank statements if you're self-employed), and your banking information, such as a void cheque or your transit, institution, and account numbers.",
        },
        {
          question: "Will checking my own credit score before applying hurt it?",
          answer:
            "No. Checking your own score through Equifax, TransUnion, or a service like Borrowell or Credit Karma is a soft inquiry, which never affects your credit. Only a lender's hard inquiry, triggered when you formally apply, can cause a small, temporary dip.",
        },
        {
          question: "How much should I apply for?",
          answer:
            "Calculate the exact amount you need rather than rounding up. Borrowing more than necessary increases both your total interest cost and your monthly payment without any real benefit—use a loan calculator to test a few amounts and terms against your budget first.",
        },
        {
          question: "Does comparing multiple lenders hurt my credit score?",
          answer:
            "Not if you use pre-qualification tools that rely on a soft credit check. Comparing several personal loan pre-qualifications within a short window is generally treated as rate shopping and has minimal impact on your score.",
        },
        {
          question: "What if I'm self-employed?",
          answer:
            "Have 2-3 months of bank statements ready along with your most recent Notice of Assessment—this combination is usually the fastest path to approval for self-employed applicants, since lenders can't rely on pay stubs to verify your income.",
        },
      ],
    },
  ],
};

export default content;
