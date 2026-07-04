import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Understand Quebec lending regulations under the Consumer Protection Act, the effective payday loan ban, and strong borrower protections in Quebec.",
  blocks: [
    { type: "heading", level: 2, text: "Quebec's Payday Loan Ban" },
    {
      type: "paragraph",
      text: "Quebec effectively bans payday lending by capping all consumer credit at 35% APR through the Consumer Protection Act (CPA). Since payday loans typically charge much higher rates, they cannot legally operate in Quebec. This makes Quebec unique among Canadian provinces and provides significantly stronger borrower protection.",
    },
    {
      type: "callout",
      text: "Pro Tip: If you encounter a payday lender operating in Quebec, they are likely operating illegally. Report them to the OPC.",
    },

    { type: "heading", level: 2, text: "Consumer Protection Act (CPA) Provisions" },
    {
      type: "paragraph",
      text: "Quebec's CPA is among the strongest in North America. Key provisions include: maximum credit rate of 35% APR, mandatory French-language contracts, strict advertising rules for lending products, prohibition on certain penalty clauses, and strong protections against unfair contract terms. The Office de la protection du consommateur (OPC) enforces these rules.",
    },
    {
      type: "callout",
      text: "Pro Tip: All lending contracts in Quebec must be available in French. If a lender only provides English-language agreements, this may be a compliance issue.",
    },

    { type: "heading", level: 2, text: "Unique Credit Protections" },
    {
      type: "paragraph",
      text: "Quebec offers protections not found in other provinces: lenders cannot charge penalties for early repayment of personal loans under $7,000, consumers can cancel certain credit contracts within 10 days, and the CPA limits the total cost of credit including all fees and charges.",
    },
    {
      type: "callout",
      text: "Pro Tip: The 10-day cancellation right applies to many consumer credit contracts in Quebec. Always check if this right applies to your loan.",
    },

    { type: "heading", level: 2, text: "Debt Collection in Quebec" },
    {
      type: "paragraph",
      text: "Quebec's debt collection rules are enforced by the OPC. Collectors cannot use harassment, threats, or intimidation. They must respect reasonable contact hours and cannot misrepresent the legal consequences of non-payment. Quebec's Civil Code also provides debtor protections not found in common-law provinces.",
    },
    {
      type: "callout",
      text: "Pro Tip: Quebec uses a civil law system unlike the rest of Canada. This provides different (often stronger) consumer protections.",
    },

    { type: "heading", level: 2, text: "Quebec Resources" },
    {
      type: "paragraph",
      text: "The Office de la protection du consommateur (OPC) at opc.gouv.qc.ca handles lending complaints. Option consommateurs and Union des consommateurs are non-profit advocacy groups. Justice Québec provides legal information.",
    },
    {
      type: "callout",
      text: "Pro Tip: The OPC website (opc.gouv.qc.ca) has comprehensive tools including a credit cost calculator in French and English.",
    },

    { type: "heading", level: 2, text: "Additional Tips for Success" },
    {
      type: "list",
      items: [
        "Quebec effectively bans payday loans through its 35% APR cap",
        "Lending contracts must be available in French in Quebec",
        "You may have a 10-day cancellation right on consumer credit contracts",
        "The OPC provides free assistance for consumer lending complaints",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Are payday loans legal in Quebec?",
          answer:
            "Effectively, no. Quebec's Consumer Protection Act (CPA) caps all consumer credit at 35% APR, and since payday loans typically charge far higher rates, they cannot legally operate in the province. Any payday lender operating in Quebec is likely doing so illegally.",
        },
        {
          question: "What is the maximum interest rate a lender can charge in Quebec?",
          answer:
            "The CPA sets a maximum credit rate of 35% APR, which applies to all consumer credit in Quebec. This makes Quebec's cap among the strongest consumer protections in North America.",
        },
        {
          question: "Do lending contracts have to be in French in Quebec?",
          answer:
            "Yes. Quebec's CPA requires mandatory French-language contracts for lending agreements. If a lender only provides English-language agreements, this may be a compliance issue.",
        },
        {
          question: "Can I cancel a loan after signing in Quebec?",
          answer:
            "Many consumer credit contracts in Quebec come with a 10-day cancellation right. Always check whether this right applies to your specific loan agreement.",
        },
        {
          question: "Where can I report a lending issue in Quebec?",
          answer:
            "The Office de la protection du consommateur (OPC) at opc.gouv.qc.ca handles lending complaints and offers a credit cost calculator in French and English. Option consommateurs and Union des consommateurs are non-profit advocacy groups that can also help.",
        },
      ],
    },
  ],
};

export default content;
