import LoansByAmountClient from './LoansByAmountClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loans by Amount | Ask4Loan Canada",
  description: "Find out exactly what it costs to borrow the amount you need in Canada, from $300 to $5,000.",
  alternates: {
    canonical: '/loans/by-amount',
  },
};

export default function LoansByAmountPage() {
  return <LoansByAmountClient />;
}
