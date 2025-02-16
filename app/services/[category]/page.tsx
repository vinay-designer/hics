// app/services/[category]/page.tsx
import { notFound } from 'next/navigation';
import { servicesData, getAllCategoryPaths } from '../../../data/service';
import ServiceTemplate from '../service-template';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return getAllCategoryPaths();
}

// Generate metadata for category pages
export async function generateMetadata({ params }: CategoryPageProps) {
  const category = params.category;
  
  // Handle staff-augmentation special case
  if (category === 'staff-augmentation') {
    const serviceData = servicesData.staffing;
    return {
      title: `${serviceData.title} | HICS`,
      description: serviceData.description
    };
  }

  // Handle regular categories
  const categoryData = servicesData[category as keyof typeof servicesData];
  if (!categoryData) {
    return {
      title: 'Category Not Found | HICS'
    };
  }

  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Services | HICS`,
    description: `Our ${category} services and solutions`
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  // Handle staff-augmentation special case
  if (category === 'staff-augmentation') {
    const serviceData = servicesData.staffing;
    if (!serviceData) notFound();
    return <ServiceTemplate content={serviceData} category="staffing" />;
  }

  // Handle regular categories
  const categoryData = servicesData[category as keyof typeof servicesData];
  if (!categoryData) notFound();
  
  // If this is a category with sub-services, redirect to first service
  if (!('title' in categoryData)) {
    notFound();
  }

  return <ServiceTemplate content={categoryData} category={category} />;
}