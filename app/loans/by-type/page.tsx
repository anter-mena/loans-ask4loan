import LoansByTypeClient from './LoansByTypeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Types of Personal Loans in Canada | Ask4Loan",
  description: "Find the right type of personal loan for your needs. From emergency funds to debt consolidation — compare options from $300 to $5,000 CAD.",
  alternates: {
    canonical: '/loans/by-type',
  },
};

export default function LoansByTypePage() {
  return <LoansByTypeClient />;
}
