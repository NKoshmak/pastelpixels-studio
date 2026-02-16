/** @format */

"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import TemplatesGrid from "@/components/TemplatesGrid";
import ServicesBlock from "@/components/ServiceBlock";
import ServicesCTA from "@/components/ServicesCTA";

export default function HomePage() {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current.querySelectorAll("span"),
      { y: 60, opacity: 0 },
      {
        y: -40,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container">
          <h1
            ref={titleRef}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
              fontWeight: 400,
              maxWidth: "900px",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              Premium templates and custom websites for creatives.
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              Made in HTML and Webflow.
            </span>
          </h1>
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="container">
          <TemplatesGrid />
        </div>
      </section>

      <section style={{ paddingTop: "6rem" }}>
       <ServicesCTA />
      </section>

      {/* SERVICES */}
      <section style={{ paddingTop: "6rem" }}>
        <ServicesBlock />
      </section>

      
    </main>
  );
}
