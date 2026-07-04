import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Learn to read your Canadian credit report from Equifax and TransUnion. Understand key sections and what to look for.",
  blocks: [
    {
      type: "paragraph",
      text: "Your credit report is a detailed history of your borrowing and repayment activities, playing a crucial role in your financial life. Understanding how to read it empowers you to identify errors, monitor your financial health, and make informed decisions about your credit. This guide will walk you through the key sections of a typical Canadian credit report.",
    },

    { type: "heading", level: 2, text: "Step-by-Step Guide" },

    { type: "heading", level: 3, text: "1. Obtain Your Credit Report" },
    {
      type: "paragraph",
      text: "The first step is to obtain your credit report. In Canada, you have the right to a free credit report (without your credit score) once a year from each of the two major credit bureaus: Equifax and TransUnion. You can request these online, by mail, or by phone. Some services might charge for instant access or for your credit score.",
    },
    {
      type: "callout",
      text: "Pro Tip: Always request both your Equifax and TransUnion credit reports, as they may contain different information, especially if some lenders only report to one bureau.",
    },

    { type: "heading", level: 3, text: "2. Verify Personal Information" },
    {
      type: "paragraph",
      text: "Once you have your report, the first section to review is your personal identification information. This includes your name, current and previous addresses, date of birth, and Social Insurance Number (SIN). Ensure all details are accurate and up-to-date, as errors here could indicate identity theft or affect how lenders evaluate your report.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you find any discrepancies in your personal information, contact the credit bureau immediately to have it corrected. This helps protect against identity fraud.",
    },

    { type: "heading", level: 3, text: "3. Review Credit Accounts and Trade Lines" },
    {
      type: "paragraph",
      text: "This is often the largest and most critical section. It lists all your credit accounts, such as credit cards, lines of credit, mortgages, and loans. For each account, you'll see the lender's name, account number (often partially masked for security), type of account, original loan amount or credit limit, current balance, and repayment history (payment status). Pay close attention to any accounts you don't recognize or any outstanding balances that seem incorrect.",
    },
    {
      type: "callout",
      text: "Pro Tip: Scrutinize the payment history for each account. Even one late payment can negatively impact your credit score and remain on your report for several years.",
    },

    { type: "heading", level: 3, text: "4. Check Public Records and Collections" },
    {
      type: "paragraph",
      text: "This section details any public records that have a bearing on your financial status, such as bankruptcies, consumer proposals, or judgments. It also lists any accounts that have been sent to a collection agency. These types of entries can significantly impact your creditworthiness and generally remain on your report for a longer period than late payments.",
    },
    {
      type: "callout",
      text: "Pro Tip: Public records and collection items can severely damage your credit. If you see any errors here, dispute them promptly with the credit bureau.",
    },

    { type: "heading", level: 3, text: "5. Examine Inquiries and Soft vs. Hard Pulls" },
    {
      type: "paragraph",
      text: "Your report will show a list of inquiries, which are records of who has accessed your credit report. There are two types: 'hard inquiries' (from lenders when you apply for new credit) and 'soft inquiries' (from yourself, pre-approved offers, or existing lenders monitoring your account). Hard inquiries can temporarily lower your credit score, especially if there are many in a short period. Review this section to ensure only legitimate inquiries are present.",
    },
    {
      type: "callout",
      text: "Pro Tip: Too many hard inquiries can signal to lenders that you are a high-risk borrower. Avoid applying for multiple lines of credit within a short timeframe unless absolutely necessary.",
    },

    { type: "heading", level: 3, text: "6. Understand the Remarks and Explanations" },
    {
      type: "paragraph",
      text: "Some credit reports may include a section for remarks or consumer statements. This allows you to add a brief explanation to any item on your report that you believe needs clarification (e.g., a late payment due to a dispute with the lender). You may also find general explanations from the credit bureau about how to understand certain terms or codes used in the report.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you've disputed an item and the resolution is pending, or if there's a legitimate reason for a negative entry, adding a consumer statement can provide context for future lenders.",
    },

    { type: "heading", level: 3, text: "7. Dispute Errors and Maintain Accuracy" },
    {
      type: "paragraph",
      text: "If you find any inaccuracies, errors, or accounts you do not recognize on your credit report, it is crucial to dispute them immediately. Both Equifax and TransUnion have formal processes for disputing inaccuracies. Gather any supporting documentation you have before submitting your dispute. Correcting errors is vital for maintaining an accurate credit history and a healthy credit score.",
    },
    {
      type: "callout",
      text: "Pro Tip: Keep detailed records of all communication regarding your dispute, including dates, names of representatives, and copies of any documents you send or receive.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Regularly checking your credit report (at least once a year) is a key step in fraud prevention.",
        "Pay attention to 'R-codes' or similar indicators next to accounts; these tell lenders your repayment pattern (e.g., R1 for paid on time, R9 for bad debt).",
        "Don't confuse your credit report with your credit score; the report is the detailed data, while the score is a numerical summary derived from it.",
        "If you've closed an account, ensure it's reported as 'closed by consumer' rather than 'closed by lender' on your credit report.",
        "Be wary of companies that promise to 'fix' your credit for a fee without explaining the legitimate process of disputing errors.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How often can I get a free credit report in Canada?",
          answer:
            "You're entitled to a free credit report (without your credit score) once a year from each of the two major bureaus, Equifax and TransUnion. You can request these online, by mail, or by phone. Some services may charge for instant access or for your numerical score.",
        },
        {
          question: "What's the difference between a soft and a hard inquiry?",
          answer:
            "A hard inquiry occurs when a lender checks your report because you've applied for new credit, and it can temporarily lower your score. A soft inquiry happens when you check your own report, or when a lender monitors an existing account or issues a pre-approved offer—these don't affect your score.",
        },
        {
          question: "How do I dispute an error on my credit report?",
          answer:
            "Both Equifax and TransUnion have formal dispute processes. Gather any supporting documentation, submit your dispute directly with the bureau, and keep detailed records of all communication, including dates and names of representatives, until the item is corrected.",
        },
        {
          question: "What are R-codes on my credit report?",
          answer:
            "R-codes (or similar indicators) appear next to each credit account and summarize your repayment pattern—for example, R1 typically means paid on time, while R9 indicates bad debt. Lenders use these codes to quickly assess your payment history on each account.",
        },
        {
          question: "Does checking my own credit report lower my score?",
          answer:
            "No. Checking your own credit report or score is a soft inquiry, which has no impact on your credit score. Only a hard inquiry, triggered when a lender reviews your file after you formally apply for credit, can cause a small, temporary dip.",
        },
      ],
    },
  ],
};

export default content;
