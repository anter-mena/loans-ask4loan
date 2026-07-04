import FAQClient from './FAQClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ | Ask4Loan Canada",
  description: "Answers to common questions about applying for a personal loan with Ask4Loan.",
  alternates: {
    canonical: '/resources/faq',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
