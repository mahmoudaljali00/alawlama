"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FloatingBlobs from "@/components/floating-blobs";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-linear-to-b from-brand-dark via-brand-dark to-brand-dark">
      <div className="fixed inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-brand-gold/5 via-transparent to-transparent"></div>
      </div>

      <FloatingBlobs />

      <div className="relative z-10">
        <Header />
        {isLoaded && <Hero />}
        <Features />
        <Footer />
      </div>
    </main>
  );
}
