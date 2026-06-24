import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Ask4Loan | Ask4Loan Canada",
  description: "Helping Canadian find the right personal loan since 2020. We're committed to transparency, speed, and connecting you with trusted lenders.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
