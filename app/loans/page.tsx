import LoansClient from './LoansClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Loan Options | Ask4Loan Canada",
  description: "Browse personal loans by amount, purpose, credit score, type, and location across Canada.",
  alternates: {
    canonical: '/loans',
  },
};

export default function LoansPage() {
  return <LoansClient />;
}
