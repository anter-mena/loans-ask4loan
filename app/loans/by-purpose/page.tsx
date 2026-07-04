import LoansByPurposeClient from './LoansByPurposeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loans by Purpose | Ask4Loan Canada",
  description: "Find a personal loan tailored to what you actually need it for, from debt consolidation to emergencies and more.",
  alternates: {
    canonical: '/loans/by-purpose',
  },
};

export default function LoansByPurposePage() {
  return <LoansByPurposeClient />;
}
