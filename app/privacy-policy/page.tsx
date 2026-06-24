import PrivacyClient from './PrivacyClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Your Privacy Matters | Ask4Loan Canada",
  description: "We recognize the importance of protecting your personal data and appreciate the trust you place in us. This policy explains our approach to collecting, using, and protecting the information you provide when using our services.",
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
