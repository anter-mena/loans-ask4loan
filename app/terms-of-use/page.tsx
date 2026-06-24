import TermsClient from './TermsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legal Document | Ask4Loan Canada",
  description: "Please read these terms carefully before using our services.",
  alternates: {
    canonical: '/terms-of-use',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
