"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./components/flashanimasion";
import Navbar from "./components/layout/Nav";
import Hero from "./components/pages/Hero";
import Services from "./components/pages/Services";
import Mission from "./components/pages/Mission";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
