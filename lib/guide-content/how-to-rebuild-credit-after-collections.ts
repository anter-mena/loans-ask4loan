import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn how to rebuild your credit score after collections accounts in Canada. Practical steps to dispute, negotiate, and recover your creditworthiness.",
  blocks: [
    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "Step 1: Understand How Collections Affect Your Credit" },
    {
      type: "paragraph",
      text: "In Canada, a collections account can lower your credit score by 100–200 points and remains on your report for 6 years from the date of last activity (varies by province). Both Equifax and TransUnion report collections, with impact diminishing over time. Recent collections hurt more than older ones.",
    },
    {
      type: "callout",
      text: "Pro Tip: The impact of a collections account on your score diminishes significantly after 2 years, even if it still appears on your report.",
    },

    { type: "heading", level: 3, text: "Step 2: Verify the Debt Is Legitimate" },
    {
      type: "paragraph",
      text: "Before paying, request written validation from the collection agency. Under Canadian consumer protection laws, they must provide proof the debt is yours and the amount is correct. Check both credit bureaus for errors — wrong amounts, unfamiliar accounts, or time-barred debts.",
    },
    {
      type: "callout",
      text: "Pro Tip: Each province has a limitation period for debt collection (typically 2–6 years). After this period, the creditor cannot sue to collect, though the debt may still appear on your credit report.",
    },

    { type: "heading", level: 3, text: "Step 3: Negotiate a Payment Plan or Settlement" },
    {
      type: "paragraph",
      text: "Collection agencies often accept less than full amount owed. Negotiate a 'pay for delete' arrangement where removal occurs upon payment. Get agreements in writing before paying. If unable to pay fully, propose a payment plan showing good faith.",
    },
    {
      type: "callout",
      text: "Pro Tip: Collection agencies typically buy debt for 10–20 cents on the dollar. They have significant room to negotiate. Start by offering 30–40% of the owed amount.",
    },

    { type: "heading", level: 3, text: "Step 4: Start Building Positive Credit History" },
    {
      type: "paragraph",
      text: "While addressing collections, build positive credit simultaneously. Obtain a secured credit card with small deposit ($300–$500), using it for recurring purchases paid monthly. Consider credit-builder loans from credit unions.",
    },
    {
      type: "callout",
      text: "Pro Tip: Aim to have at least 2–3 active credit accounts reporting positively. The mix of credit types (revolving and installment) also helps your score.",
    },

    { type: "heading", level: 3, text: "Step 5: Monitor Your Credit Reports Regularly" },
    {
      type: "paragraph",
      text: "Check reports monthly through free services like Borrowell or Credit Karma Canada. Verify paid collections update correctly and track score improvement. Set up alerts for new activity.",
    },
    {
      type: "callout",
      text: "Pro Tip: After paying a collection, it can take 30–60 days for credit bureaus to update. Follow up if the status hasn't changed after 60 days.",
    },

    { type: "heading", level: 3, text: "Step 6: Be Patient and Consistent" },
    {
      type: "paragraph",
      text: "Recovery is a long-term process. Most Canadians see significant improvement within 12–24 months of consistent positive behavior. Continue timely payments, keep utilization low, and limit new account applications.",
    },
    {
      type: "callout",
      text: "Pro Tip: After 2 years of clean credit history, many lenders will consider you for standard-rate products despite older collections on your report.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Never ignore collection notices — they worsen over time",
        "Always obtain settlement agreements in writing before paying",
        "Dispute inaccurate information immediately",
        "Consider speaking with non-profit credit counselors for free guidance",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much can a collections account lower my credit score?",
          answer:
            "In Canada, a collections account can lower your score by 100-200 points. The impact diminishes significantly after about 2 years, even while it still appears on your report.",
        },
        {
          question: "Should I pay off a collections account in full or negotiate?",
          answer:
            "Collection agencies often buy debt for 10-20 cents on the dollar, so there's usually room to negotiate. Consider proposing a 'pay for delete' arrangement, starting around 30-40% of the owed amount, and always get any agreement in writing before you pay.",
        },
        {
          question: "How long does a collections account stay on my credit report?",
          answer:
            "A collections account typically remains on your report for 6 years from the date of last activity, though this can vary by province. Both Equifax and TransUnion report collections.",
        },
        {
          question: "How long will it take to see my score improve after paying off a collection?",
          answer:
            "It can take 30-60 days for credit bureaus to update your report after payment. Most Canadians see significant overall score improvement within 12-24 months of consistent positive credit behaviour following the collection.",
        },
        {
          question: "What is a 'pay for delete' agreement?",
          answer:
            "It's a negotiated arrangement where the collection agency agrees to remove the account from your credit report once you pay an agreed amount. Get any such agreement in writing before making a payment, since verbal promises aren't enforceable.",
        },
      ],
    },
  ],
};

export default content;
