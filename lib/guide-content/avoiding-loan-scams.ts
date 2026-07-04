import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "How to spot predatory lenders and loan scams targeting Canadian borrowers, and what to do if you think you've encountered one.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Watch for Guaranteed Approval Claims" },
    {
      type: "paragraph",
      text: "No legitimate lender can guarantee approval before reviewing your credit and income. \"Guaranteed approval, any credit\" advertising is one of the most common scam signals, since real lenders always assess risk before offering terms.",
    },
    {
      type: "callout",
      text: "Pro Tip: Legitimate lenders can pre-qualify you with a soft credit check, but final approval always depends on verification.",
    },

    { type: "heading", level: 3, text: "2. Never Pay an Upfront Fee to Receive a Loan" },
    {
      type: "paragraph",
      text: "A request for an \"insurance fee,\" \"processing fee,\" or \"collateral fee\" paid by e-transfer, gift card, or cryptocurrency before you receive your loan is one of the clearest signs of a scam. Legitimate Canadian lenders deduct any fees from the loan proceeds — they never ask you to send money first.",
    },
    {
      type: "callout",
      text: "Pro Tip: If a lender asks you to pay by gift card or crypto, stop immediately — no legitimate lender uses these payment methods.",
    },

    { type: "heading", level: 3, text: "3. Verify the Lender Is Licensed" },
    {
      type: "paragraph",
      text: "All lenders operating in Canada must be licensed in the provinces where they do business. Check your provincial consumer protection office (such as Consumer Protection Ontario, Consumer Protection BC, or the Office de la protection du consommateur in Quebec) to confirm a lender is registered before applying.",
    },

    { type: "heading", level: 3, text: "4. Read the Loan Agreement Before Signing" },
    {
      type: "paragraph",
      text: "Any lender that pressures you to sign immediately, discourages you from reading the terms, or won't provide a written agreement showing the APR, total cost of borrowing, and repayment schedule is not operating legitimately. Canadian law requires full disclosure of these terms before you sign.",
    },

    { type: "heading", level: 3, text: "5. Protect Your Personal Information" },
    {
      type: "paragraph",
      text: "Be cautious with lenders who ask for your online banking login credentials, a blank void cheque with no context, or your SIN before explaining why it's needed. Legitimate lenders can verify income and set up payments without requiring your actual banking password.",
    },

    { type: "heading", level: 3, text: "6. What to Do If You've Been Targeted" },
    {
      type: "paragraph",
      text: "If you've been approached by a suspected scam, do not send any money or personal documents. Report it to the Canadian Anti-Fraud Centre, your provincial consumer protection office, and your bank if you've already shared account information. If you've lost money, file a police report as well.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "No legitimate lender guarantees approval before checking your credit",
        "Never pay an upfront fee to receive a loan, by any payment method",
        "Confirm the lender is licensed in your province before applying",
        "Get all terms in writing, including APR and total cost, before signing",
        "Report suspected scams to the Canadian Anti-Fraud Centre",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is it a red flag if a lender guarantees approval?",
          answer:
            "Yes. No legitimate lender can guarantee approval before reviewing your credit and income. \"Guaranteed approval, any credit\" advertising is one of the most common scam signals, since real lenders always assess risk before offering terms.",
        },
        {
          question: "Should I ever pay a fee to receive a loan?",
          answer:
            "No. A request for an \"insurance fee,\" \"processing fee,\" or \"collateral fee\" paid by e-transfer, gift card, or cryptocurrency before you receive your loan is one of the clearest signs of a scam. Legitimate Canadian lenders deduct any fees from the loan proceeds—they never ask you to send money first.",
        },
        {
          question: "How can I verify a lender is legitimate in Canada?",
          answer:
            "Check your provincial consumer protection office—such as Consumer Protection Ontario, Consumer Protection BC, or the Office de la protection du consommateur in Quebec—to confirm the lender is licensed to operate in your province before applying.",
        },
        {
          question: "What information should I never give a lender?",
          answer:
            "Be cautious about sharing your online banking login credentials, a blank void cheque with no context, or your SIN before the lender explains why it's needed. Legitimate lenders can verify income and set up payments without your actual banking password.",
        },
        {
          question: "What should I do if I think I've been scammed?",
          answer:
            "Don't send any more money or personal documents. Report it to the Canadian Anti-Fraud Centre, your provincial consumer protection office, and your bank if you've already shared account information. If you've lost money, file a police report as well.",
        },
      ],
    },
  ],
};

export default content;
