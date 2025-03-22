import Footer from '@/components/page-components/footer';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'HICS - Leading Healthcare Solutions Provider',
    template: '%s | HICS'
  },
  description: 'HICS delivers innovative healthcare solutions, digital transformation, and IT services. Expert in SAP, AWS, Microsoft, and cybersecurity solutions.',
  keywords: ['healthcare solutions', 'digital transformation', 'IT services', 'SAP implementation', 'cybersecurity', 'cloud solutions', 'healthcare IT'],
  authors: [{ name: 'HICS Team' }],
  creator: 'HICS',
  publisher: 'HICS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/page-components/hics-favicon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
    yandex: 'yandex-verification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hics.com.sg/',
    siteName: 'HICS',
    title: 'HICS - Leading Healthcare Solutions Provider',
    description: 'HICS delivers innovative healthcare solutions, digital transformation, and IT services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HICS - Healthcare Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HICS - Leading Healthcare Solutions Provider',
    description: 'Innovative healthcare solutions and digital transformation services',
    images: ['/twitter-image.jpg'],
    creator: '@HICS',
    site: '@HICS',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://www.hics.com.sg" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}