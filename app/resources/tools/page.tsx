import ToolsClient from './ToolsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loan Calculator | Ask4Loan Canada",
  description: "Estimate your monthly payment, total interest, and total cost for a personal loan from $200 to $5,000.",
  alternates: {
    canonical: '/resources/tools',
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
