import { Metadata } from 'next';
import { getSolutionData, getAllSolutionPaths } from '../../../data/solutions';
import SolutionTemplate from '../solution-template';
import { notFound } from 'next/navigation';

// Generate metadata for each solution page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solutionData = getSolutionData(params.slug);
  
  if (!solutionData) {
    return {
      title: 'Solution Not Found | HICS',
    };
  }

  return {
    title: `${solutionData.title} | HICS`,
    description: solutionData.description,
    openGraph: {
      title: `${solutionData.title} | HICS`,
      description: solutionData.description,
      type: 'website',
      url: `https://hics.com/solutions/${params.slug}`,
      siteName: 'HICS',
    },
  };
}

// Generate static paths for all solutions
export async function generateStaticParams() {
  return getAllSolutionPaths();
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solutionData = getSolutionData(params.slug);

  if (!solutionData) {
    notFound();
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": solutionData.title,
            "description": solutionData.description,
            "brand": {
              "@type": "Organization",
              "name": "HICS",
              "url": "https://hics.com.sg"
            },
            "category": "Software Solution",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "url": `https://hics.com/solutions/${params.slug}`
            }
          })
        }}
      />
      
      <SolutionTemplate content={solutionData} />
    </>
  );
}