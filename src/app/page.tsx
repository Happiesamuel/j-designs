"use client";
import About from "@/components/sections/About";
import Loader from "@/components/ui/layout/Loader";
import Particle from "@/components/sections/Particle";
import Services from "@/components/sections/Services";
import React, { useEffect, useState } from "react";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  const [load, setLoad] = useState(true);
  useEffect(function () {
    setTimeout(function () {
      setLoad(false);
    }, 1500);
  }, []);
  if (load)
    return (
      <div className="h-screen fixed bg-black w-full flex items-center justify-center left-0">
        <Loader />
      </div>
    );
  return (
    <Particle>
      <div>
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Particle>
  );
}
