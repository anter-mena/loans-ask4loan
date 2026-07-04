import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Benchmark your loan offers against current Canadian averages broken down by credit score, lender type, and purpose.",
  blocks: [
    { type: "heading", level: 2, text: "National Average Rates in Canada" },
    {
      type: "paragraph",
      text: "As of 2026, the average personal loan interest rate in Canada sits between 9% and 12% APR for borrowers with good credit. This encompasses offerings from major banks, credit unions, and online lenders across provinces and territories.",
    },
    {
      type: "paragraph",
      text: "Averages represent only part of the picture, as individual rates depend on personal financial profiles, lender selection, and specific loan terms. Tracking rate trends over time helps borrowers determine optimal borrowing windows, particularly when consolidating higher-interest debt.",
    },

    { type: "heading", level: 2, text: "Average Rates by Credit Score" },
    {
      type: "paragraph",
      text: "Credit scores (ranging from 300–900 via Equifax and TransUnion) are the single most important factor determining the rate you receive.",
    },
    {
      type: "table",
      headers: ["Credit Tier", "Score Range", "Average APR"],
      rows: [
        ["Excellent", "760–900", "6.5% – 9.5%"],
        ["Good", "700–759", "9.5% – 15.0%"],
        ["Fair", "640–699", "15.0% – 24.0%"],
        ["Poor", "300–639", "24.0% – 35.0%"],
      ],
    },

    { type: "heading", level: 2, text: "Average Rates by Lender Type" },
    {
      type: "paragraph",
      text: "Major Canadian banks offer some of the lowest rates but often have the strictest approval criteria. Credit unions provide member-owned alternatives with potential flexibility, while online lenders serve broader credit profiles.",
    },
    {
      type: "table",
      headers: ["Lender Type", "Typical APR Range", "Best For"],
      rows: [
        ["Major banks", "6% – 14%", "Prime borrowers with existing accounts"],
        ["Credit unions", "7% – 16%", "Members with fair to good credit"],
        ["Online lenders", "8% – 35%", "All credit profiles, fast funding"],
      ],
    },

    { type: "heading", level: 2, text: "How Loan Purpose Affects Your Rate" },
    {
      type: "paragraph",
      text: "Debt consolidation loans may come with lower rates because lenders view borrowers who are actively managing their debt as responsible. Home improvements may similarly qualify for preferential pricing. Medical expenses, vacations, and weddings typically carry standard rates, with creditworthiness remaining the primary determinant.",
    },

    { type: "heading", level: 2, text: "How to Use Average Rates to Your Advantage" },
    {
      type: "paragraph",
      text: "Borrowers should compare offered rates against tier averages, prequalify with multiple lenders without credit impact, and inquire about rate-driving factors. If your offered rate is more than 3-5 percentage points above the average for your credit tier, consider improving your credit before borrowing.",
    },

    { type: "heading", level: 2, text: "Rate Trends in Canada" },
    {
      type: "paragraph",
      text: "Personal loan rates correlate with the Bank of Canada's policy rate. When the overnight rate rises, lenders typically increase borrowing costs. Competitive dynamics among lenders, particularly growth in online lending, have generally maintained competitive rates.",
    },

    { type: "heading", level: 2, text: "Tips for Getting Below-Average Rates" },
    {
      type: "list",
      items: [
        "Build credit to \"good\" tier status",
        "Compare 3–5 lender offers across institution types",
        "Inquire about autopay discounts",
        "Consider shorter terms",
        "Apply with co-signers",
        "Explore relationship discounts from primary banking institutions",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the average personal loan interest rate in Canada right now?",
          answer:
            "As of 2026, the average personal loan interest rate in Canada sits between 9% and 12% APR for borrowers with good credit, based on offerings from major banks, credit unions, and online lenders across the country.",
        },
        {
          question: "Why is my offered rate higher than the average?",
          answer:
            "Averages only tell part of the story — your actual rate depends on your credit tier, income, and the lender you choose. For example, borrowers in the Fair (640-699) tier typically see 15%-24% APR, and those in the Poor (below 640) tier see 24%-35%, both well above the overall average.",
        },
        {
          question: "Are online lender rates higher than bank rates?",
          answer:
            "Not necessarily at the low end. Major banks range from about 6%-14% APR, credit unions 7%-16%, and online lenders 8%-35%. Online lenders have a wider range because they serve a broader spectrum of credit profiles, not because they're inherently pricier for well-qualified borrowers.",
        },
        {
          question: "How often do average rates change?",
          answer:
            "Personal loan rates track the Bank of Canada's policy rate — when the overnight rate rises, lenders typically increase borrowing costs, and vice versa. Competitive dynamics among lenders, especially the growth of online lending, have generally helped keep rates competitive between adjustments.",
        },
        {
          question: "Should I wait for rates to drop before borrowing?",
          answer:
            "It depends on your timeline and credit profile. Your credit tier has a much bigger impact on your rate than short-term market movements, so if you have an immediate need, it's usually better to shop 3-5 lenders now and compare offers than to delay borrowing in hopes of a rate drop.",
        },
      ],
    },
  ],
};

export default content;
