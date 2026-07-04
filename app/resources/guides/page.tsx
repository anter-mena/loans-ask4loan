import GuidesClient from './GuidesClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Canadian Loan Guides | Ask4Loan Canada",
  description: "Comprehensive guides to help you navigate the personal loan process in Canada — loan types, credit, provincial regulations, and more.",
  alternates: {
    canonical: '/resources/guides',
  },
};

export default function GuidesPage() {
  return <GuidesClient />;
}
