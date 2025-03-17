"use client";

import ClientSection from "@/components/page-components/client";
import HeroWithFeatures from "@/components/page-components/hero-with-features";
import KeyFocusSection from "@/components/page-components/key-focus-section";


export default function Home() {



  return (
    <main className="min-h-screen text-white">

      <HeroWithFeatures />
      <ClientSection />

      <KeyFocusSection />

    </main>
  );
}