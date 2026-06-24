import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Ask4Loan Canada",
  description: "Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
