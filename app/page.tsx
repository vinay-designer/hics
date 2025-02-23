"use client";

import HeroWithFeatures from "@/components/page-components/hero-with-features";
import TransformSection from "@/components/page-components/transform-section";
import ServicesSection from "@/components/page-components/services-section";
import TrustedClientsSection from "@/components/page-components/partners-section";
import ContactSection from "@/components/page-components/contacts-us-section";
import PortfolioSection from "@/components/page-components/portfolio-section";
import ProcessSection from "@/components/page-components/process-section";
import KeyFocusSection from "@/components/page-components/key-focus-section";
import HealthcareSection from "@/components/page-components/healthcare-section";

export default function Home() {



  return (
    <main className="min-h-screen text-white">

      <HeroWithFeatures />

      <KeyFocusSection />

      <HealthcareSection />

      <ServicesSection />

      <TransformSection />

      <PortfolioSection />
      
      <ProcessSection />

      <TrustedClientsSection />
{/* 


      <ContactSection /> */}
    </main>
  );
}