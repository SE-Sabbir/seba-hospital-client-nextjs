"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealOffsets = {
  up: { y: 32 },
  down: { y: -20 },
  left: { x: -40 },
  right: { x: 40 },
  zoom: { scale: 0.94 },
};

export default function PageAnimations() {
  useEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray("[data-reveal]").forEach((element) => {
          const direction = element.dataset.reveal;
          const offset = revealOffsets[direction] ?? revealOffsets.up;
          const isHeader = element.closest("header");

          gsap.fromTo(
            element,
            { autoAlpha: 0, ...offset },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: direction === "zoom" ? 0.8 : 0.7,
              ease: direction === "zoom" ? "back.out(1.3)" : "power3.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: isHeader
                ? undefined
                : {
                    trigger: element,
                    start: element.dataset.revealStart || "top 88%",
                    once: true,
                  },
            },
          );
        });

        gsap.utils.toArray("[data-reveal-stagger]").forEach((element) => {
          const direction = element.dataset.revealStagger;
          const offset = revealOffsets[direction] ?? revealOffsets.up;
          const children = Array.from(element.children);

          if (!children.length) return;

          gsap.fromTo(
            children,
            { autoAlpha: 0, ...offset },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
      });
    }, document.body);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return null;
}
