"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCTA() {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const spans = titleRef.current.querySelectorAll("span");

    gsap.fromTo(
      spans,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",   // коли секція входить у viewport
        },
      }
    );
  }, []);

  return (
    <section style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
      <div className="container">
        <h1
          ref={titleRef}
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
            fontWeight: 400,
            maxWidth: "700px",
          }}
        >
          <span style={{ display: "block", overflow: "hidden" }}>
            Need a custom version or unique site?
          </span>
        </h1>

        <Link href="/#services" className="ctaInlineLink">
          Explore services →
        </Link>
      </div>
    </section>
  );
}
