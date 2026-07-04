import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A personal loan is not your only option. Explore all available alternatives to find the best borrowing solution for your situation.",
  blocks: [
    { type: "heading", level: 2, text: "Why Consider Alternatives?" },
    {
      type: "paragraph",
      text: "While personal loans are versatile and widely available, they are not always the best or cheapest option. Depending on your situation, an alternative borrowing method might offer lower rates, more flexibility, or better terms.",
    },
    {
      type: "paragraph",
      text: "Before settling on a personal loan, consider your specific needs: how much you need to borrow, how quickly you need funds, how long you need to repay, and whether you have assets that could secure a lower rate.",
    },

    { type: "heading", level: 2, text: "Credit Cards" },
    {
      type: "paragraph",
      text: "Credit cards are the most accessible alternative to personal loans. They are best for smaller amounts that you can pay off within one or two billing cycles to avoid interest charges.",
    },
    {
      type: "paragraph",
      text: "Canadian credit card rates typically range from 12.99% to 29.99% APR, making them more expensive than most personal loans for balances carried over time. However, 0% promotional rate balance transfer offers can be useful for short-term borrowing.",
    },
    {
      type: "paragraph",
      text: "Best Use: Use credit cards for small, short-term needs or when you can take advantage of a 0% intro APR offer. Avoid carrying large balances at standard rates.",
    },

    { type: "heading", level: 2, text: "Home Equity Line of Credit (HELOC)" },
    {
      type: "paragraph",
      text: "If you own a home, borrowing against your equity can offer some of the lowest interest rates available.",
    },
    {
      type: "paragraph",
      text: "Canadian HELOCs typically charge prime rate plus 0.5-2%, currently around 6-8%. You can borrow up to 65% of your home's appraised value (minus your mortgage balance). The major downside is that your home serves as collateral — if you cannot repay, you risk losing your property.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Your home is at risk if you cannot make payments",
        "Closing costs and fees can add to the overall cost",
        "Application process is longer than personal loans",
      ],
    },

    { type: "heading", level: 2, text: "Credit Union Loans" },
    {
      type: "paragraph",
      text: "Credit unions are member-owned financial cooperatives that often offer more favorable loan terms than banks or online lenders.",
    },
    {
      type: "paragraph",
      text: "Canadian credit unions may offer lower rates, more flexible qualification criteria, and personalized service. Many will work with members who have lower credit scores or non-traditional income sources.",
    },

    { type: "heading", level: 2, text: "Borrowing from RRSPs or TFSAs" },
    {
      type: "paragraph",
      text: "Canadians can withdraw from TFSAs (Tax-Free Savings Accounts) without tax consequences, providing an interest-free borrowing alternative. RRSP withdrawals are possible but trigger withholding tax and may affect government benefits. The Home Buyers' Plan and Lifelong Learning Plan offer specific tax-sheltered RRSP withdrawal options.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "RRSP withdrawals reduce your retirement savings and trigger withholding taxes",
        "Borrowing from retirement reduces your long-term investment growth",
        "Only use this option as a last resort for essential needs",
      ],
    },

    { type: "heading", level: 2, text: "Peer-to-Peer and Family Loans" },
    {
      type: "paragraph",
      text: "Borrowing from individuals — whether through a peer-to-peer lending platform or from family and friends — is another alternative.",
    },
    {
      type: "paragraph",
      text: "Peer-to-peer (P2P) platforms connect borrowers with individual investors. Rates can be competitive, though the platforms charge origination fees. Borrowing from family or friends can be interest-free or low-cost, but it carries relationship risks that should not be underestimated.",
    },
    {
      type: "paragraph",
      text: "If borrowing from someone you know, always create a written agreement that specifies the loan amount, repayment terms, interest (if any), and consequences of non-payment. This protects both parties.",
    },

    { type: "heading", level: 2, text: "Choosing the Best Alternative" },
    {
      type: "paragraph",
      text: "Weigh your borrowing needs against the rate, speed, flexibility, and risk of each option above to find the alternative — or combination of alternatives — that best fits your situation.",
    },
    {
      type: "table",
      headers: ["Need", "Best Option", "Why"],
      rows: [
        ["Small amount, quick repayment", "Credit card (0% APR)", "No interest if paid in full during promo period"],
        ["Large amount, homeowner", "HELOC", "Lowest rates available"],
        ["Moderate amount, any credit", "Personal loan", "Fixed payments, predictable cost"],
        ["Building credit", "Secured personal loan or credit card", "Establishes credit history"],
        ["Emergency, limited options", "Credit union or community loan", "Lower rates than payday loans"],
        ["Need funds immediately", "Credit card cash advance", "Instant access (but expensive)"],
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the cheapest way to borrow money?",
          answer:
            "For homeowners, a HELOC is usually cheapest, at roughly prime plus 0.5-2% (currently around 6-8%), since it's secured by your property. If you don't own a home, a 0% intro APR credit card paid off within the promotional period, or a credit union loan, can also be very low-cost options.",
        },
        {
          question: "What if I cannot qualify for any loans?",
          answer:
            "Consider a TFSA withdrawal, which is interest-free and has no tax consequences, or a credit union loan — credit unions are often more flexible with members who have lower credit scores or non-traditional income. Borrowing from family or friends with a written agreement is another option if you cannot qualify elsewhere.",
        },
        {
          question: "Is it better to borrow from family or get a personal loan?",
          answer:
            "Borrowing from family can be interest-free or low-cost, but it carries real relationship risk if repayment doesn't go smoothly. A personal loan offers a formal, predictable structure with fixed payments. If you do borrow from someone you know, always put the amount, terms, and consequences of non-payment in writing.",
        },
        {
          question: "Can I use multiple alternatives together?",
          answer:
            "Yes. Many borrowers combine options — for example, using a 0% credit card for part of an expense and a credit union loan for the rest. Weigh your need against the rate, speed, flexibility, and risk of each option to find the combination that fits your situation.",
        },
      ],
    },
  ],
};

export default content;
