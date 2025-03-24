// app/services/[category]/[service]/page.tsx
import { Metadata } from 'next';
import { getServiceData, getAllServicePaths } from '../../../../data/service';
import ServiceTemplate from '../../service-template';
import { notFound } from 'next/navigation';


// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { category: string; service: string } }): Promise<Metadata> {
  const serviceData = getServiceData(params.category, params.service);
  
  if (!serviceData) {
    return {
      title: 'Service Not Found | HICS',
    };
  }

  return {
    title: `${serviceData.title} | HICS`,
    description: serviceData.description,
    openGraph: {
      title: `${serviceData.title} | HICS`,
      description: serviceData.description,
      type: 'website',
      url: `https://hics.com/services/${params.category}/${params.service}`,
      siteName: 'HICS',
    },
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  return getAllServicePaths();
}

export default function ServicePage({ params }: { params: { category: string; service: string } }) {
  const serviceData = getServiceData(params.category, params.service);

  if (!serviceData) {
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
            "@type": "Service",
            "name": serviceData.title,
            "description": serviceData.description,
            "provider": {
              "@type": "Organization",
              "name": "HICS",
              "url": "https://hics.com.sg"
            },
            "serviceType": params.category,
            "areaServed": "Singapore",
          })
        }}
      />
      
      <ServiceTemplate content={serviceData} category={params.category} />
    </>
  );
}