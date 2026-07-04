import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Compare personal loans for car repairs in Canada. Cover mechanic bills, transmission, engine and brake repairs with affordable monthly payments.",
  blocks: [
    { type: "heading", level: 2, text: "Is a Personal Loan Right for Your Car Repairs?" },
    {
      type: "paragraph",
      text: "Unexpected car repairs can strain any Canadian budget. Whether it is a transmission issue, brake replacement, or engine trouble, getting your vehicle back on the road is often urgent. A personal loan can help you cover repair costs without draining your savings.",
    },

    { type: "heading", level: 2, text: "Typical Car Repair Costs in Canada" },
    {
      type: "list",
      items: [
        "Brake Replacement: $300 to $800 per axle, depending on pads and rotors.",
        "Tire Replacement: $400 to $1,600 for a full set, depending on tire type and size.",
        "Alternator Replacement: $500 to $1,200 including labour.",
        "Transmission Repair: $2,000 to $6,000 for major transmission work.",
        "Engine Issues: $1,500 to $4,000+ for head gasket or engine repairs.",
        "Starter Replacement: $400 to $900 including parts and labour.",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Based on typical Canadian repair costs, a personal loan between $1,000 and $5,000 is most common. For major repairs like transmission or engine work, you may need up to $6,000.",
    },

    { type: "heading", level: 2, text: "Pros and Cons: Personal Loan vs. Other Options" },
    { type: "heading", level: 3, text: "Pros of Personal Loan" },
    {
      type: "list",
      items: [
        "Fixed Payments: Predictable monthly payments over a set period.",
        "No Collateral Required: Your vehicle is not at risk, unlike with a title loan.",
        "Quick Funding: Many Canadian lenders provide funds within 1-3 business days.",
      ],
    },
    { type: "heading", level: 3, text: "Cons of Personal Loan" },
    {
      type: "list",
      negative: true,
      items: [
        "Interest Costs: You will pay interest on the borrowed amount.",
        "Credit Impact: Late payments can hurt your credit score.",
      ],
    },
    { type: "heading", level: 3, text: "Alternative Options" },
    {
      type: "list",
      items: [
        "Credit Card: Quick access but often high interest rates.",
        "Savings: Best option if available, as it avoids interest.",
        "Mechanic Payment Plans: Some shops offer in-house financing.",
        "Line of Credit: May offer lower rates if you already have one set up.",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply in Canada" },
    {
      type: "list",
      ordered: true,
      items: [
        "Compare Lenders: Review rates from banks, credit unions, and online lenders.",
        "Gather Documents: Government ID, proof of income, bank statements.",
        "Submit Application: Apply online in minutes through most Canadian lenders.",
        "Receive Funds: Funds are typically deposited within 1-3 business days if approved.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much can I borrow for a car repair loan?",
          answer:
            "Based on typical Canadian repair costs, a personal loan between $1,000 and $5,000 is most common. For major repairs like transmission or engine work, you may need up to $6,000.",
        },
        {
          question: "Do I need to put up my car as collateral?",
          answer:
            "No. Unlike a title loan, a personal loan for car repairs is typically unsecured, so your vehicle isn't at risk if you fall behind on payments.",
        },
        {
          question: "How fast can I get the money for an urgent repair?",
          answer:
            "Many Canadian lenders provide funds within 1-3 business days of approval, which is usually fast enough to get essential repairs done and get back on the road.",
        },
        {
          question: "What documents do I need to apply?",
          answer:
            "You'll typically need government-issued ID, proof of income, and bank statements. Having these ready before you apply helps speed up approval.",
        },
        {
          question: "What are my alternatives to a personal loan for car repairs?",
          answer:
            "A credit card offers quick access but often at a higher interest rate. Using savings avoids interest entirely if you have the funds available. Some mechanics offer in-house payment plans, and an existing line of credit may offer a lower rate than a new loan.",
        },
      ],
    },
  ],
};

export default content;
