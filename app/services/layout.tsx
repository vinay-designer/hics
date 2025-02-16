// app/services/layout.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | HICS',
  description: 'Explore our comprehensive range of IT services including SAP, Microsoft, Cybersecurity, and more.',
  openGraph: {
    title: 'Services | HICS',
    description: 'Explore our comprehensive range of IT services including SAP, Microsoft, Cybersecurity, and more.',
    type: 'website',
    url: 'https://hics.com/services',
    siteName: 'HICS',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      {children}
    </main>
  );
}