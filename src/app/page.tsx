"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import AboutUs from "./components/AboutUs";

export default function Home() {
  useEffect(() => {
    // Wait for page + Lenis to load, then scroll to hash section if exists
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          // delay slightly so DOM & Lenis are ready
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 400);
        }
      }
    };

    handleHashScroll();

    // optional: handle when user navigates to a hash manually
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <div>
      <Hero />
      <section id="solutions">
        <Solutions />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="process">
        <Process />
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}
