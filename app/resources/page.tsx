import ResourcesClient from './ResourcesClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resources | Ask4Loan Canada",
  description: "Tools, guides, comparisons and answers to help you make an informed borrowing decision.",
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
