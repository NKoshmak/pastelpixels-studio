/** @format */
"use client";
import { templates } from "@/data/templates";
import Image from "next/image";
import styles from "./template-page.module.css";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TemplatePage({ params }) {
  const template = templates.find((t) => t.slug === params.slug);
  const framesRef = useRef([]);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      // Show everything immediately on mobile
      framesRef.current.forEach((frame, i) => {
        if (frame) frame.style.opacity = 1;
        if (imagesRef.current[i]) imagesRef.current[i].style.opacity = 1;
      });
      return;
    }

    const ctx = gsap.context(() => {
      framesRef.current.forEach((frame, i) => {
        const image = imagesRef.current[i];
        if (!frame || !image) return;

        gsap.fromTo(
          frame,
          { scale: 0.96, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: frame,
              start: "top 85%",
            },
          },
        );

        gsap.fromTo(
          image,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: frame,
              start: "top 85%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  if (!template) {
    return <p>Template not found</p>;
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{template.title}</h1>

      <section className={styles.layout}>
        {/* LEFT */}
        <div className={styles.left}>
          {template.gallery.map((img, i) => (
            <div
              key={i}
              className={styles.previewFrame}
              ref={(el) => (framesRef.current[i] = el)}
            >
              <div
                className={styles.previewImage}
                ref={(el) => (imagesRef.current[i] = el)}
              >
                <Image src={img} alt="" fill />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <aside className={styles.info}>
          <div className={styles.price}>
            {template.price} <span>| {template.platform}</span>
          </div>

          <div className={styles.actions}>
            <a className={styles.buy} href={template.buyUrl}>
              Buy Template
            </a>
            <a
              className={styles.preview}
              href={template.previewUrl}
              target="_blank"
            >
              Preview Template ↗
            </a>
          </div>

          {template.description.map((text, i) => (
            <p key={i} className={styles.description}>
              {text}
            </p>
          ))}
        </aside>
      </section>
    </main>
  );
}
