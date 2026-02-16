/** @format */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/service-block.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesBlock() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.header}`, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(`.${styles.card}`, {
        y: 50,
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className={styles.block}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Ways to work together</h2>
          <p className={styles.sub}>
            Choose the option that fits your project — product support or custom
            development.
          </p>
        </div>

        <div className={styles.grid}>
          {/* TEMPLATE SETUP */}
          <div className={styles.card}>
            <span className={styles.label}>For my templates</span>
            <h3 className={styles.cardTitle}>Template Setup</h3>

            <p className={styles.text}>
              You purchased one of my templates and want it ready to launch.
              I’ll replace the content, align basic branding, and prepare the
              site so you don’t have to touch the code.
            </p>

            <ul className={styles.list}>
              <li>Text & image replacement</li>
              <li>Links, buttons, logo</li>
              <li>Basic brand alignment</li>
              <li>Final responsive check</li>
            </ul>

            <div className={styles.footer}>
              <span className={styles.note}>3–5 business days</span>
              <a
                className={styles.cta}
                href="mailto:hellopastelpixelsstudio@gmail.com"
              >
                Request setup →
              </a>
            </div>
          </div>

          {/* FRONT-END DEV */}
          <div className={styles.card}>
            <span className={styles.label}>Your design</span>
            <h3 className={styles.cardTitle}>Custom Coded Website</h3>

            <p className={styles.text}>
              You already have a design (Figma or similar). I’ll turn it into
              clean, responsive, production-ready code with attention to detail.
            </p>

            <ul className={styles.list}>
              <li>Pixel-perfect layout</li>
              <li>HTML / CSS / JS / React / Next.js</li>
              <li>Responsive & cross-browser</li>
              <li>Clean, maintainable code</li>
            </ul>

            <div className={styles.footer}>
              <span className={styles.note}>Custom timeline</span>
              <a
                className={styles.cta}
                href="mailto:hellopastelpixelsstudio@gmail.com"
              >
                Request a quote →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
