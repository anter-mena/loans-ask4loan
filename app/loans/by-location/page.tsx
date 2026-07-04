import LoansByLocationClient from './LoansByLocationClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Personal Loans Across Canada | Ask4Loan",
  description: "Find personal loans from $300 to $5,000 CAD in your province or city. Compare offers with trusted Canadian lenders — bad credit welcome.",
  alternates: {
    canonical: '/loans/by-location',
  },
};

export default function LoansByLocationPage() {
  return <LoansByLocationClient />;
}
