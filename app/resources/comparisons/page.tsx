import ComparisonsClient from './ComparisonsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loan Comparisons | Ask4Loan Canada",
  description: "Side-by-side comparisons to help you choose the right borrowing option, from personal loans vs. credit cards to fixed vs. variable rates.",
  alternates: {
    canonical: '/resources/comparisons',
  },
};

export default function ComparisonsPage() {
  return <ComparisonsClient />;
}
