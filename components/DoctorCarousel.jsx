"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { doctors } from "@/lib/data";

export default function DoctorCarousel() {
  const track = useRef(null);
  const cycleWidth = useRef(0);
  const scrollEndTimer = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;

    const width = cycleWidth.current;
    const distance = el.clientWidth * 0.8;

    if (width && dir < 0 && el.scrollLeft <= width + 2) {
      el.scrollLeft += width;
    } else if (width && dir > 0 && el.scrollLeft + distance >= width * 2) {
      el.scrollLeft -= width;
    }

    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measureCycle = () => {
      const card = el.children[doctors.length];
      if (!card) return;

      const gap = Number.parseFloat(window.getComputedStyle(el).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      cycleWidth.current = step * doctors.length;

      if (el.scrollLeft < cycleWidth.current - 2) {
        el.scrollLeft += cycleWidth.current;
      }
    };

    measureCycle();
    window.addEventListener("resize", measureCycle);

    return () => {
      window.removeEventListener("resize", measureCycle);
    };
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el || isHovered || isFocused) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      if (document.hidden || !cycleWidth.current) return;

      const card = el.children[doctors.length];
      if (!card) return;

      const gap = Number.parseFloat(window.getComputedStyle(el).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      el.scrollBy({ left: step, behavior: "smooth" });
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isFocused, isHovered]);

  const handleScroll = (event) => {
    const el = event.currentTarget;
    window.clearTimeout(scrollEndTimer.current);
    scrollEndTimer.current = window.setTimeout(() => {
      const width = cycleWidth.current;
      if (!width) return;

      if (el.scrollLeft < width - 2) {
        el.scrollLeft += width;
      } else if (el.scrollLeft >= width * 2 - 2) {
        el.scrollLeft -= width;
      }
    }, 120);
  };

  const carouselCopies = [
    { suffix: "before", isClone: true },
    { suffix: "main", isClone: false },
    { suffix: "after", isClone: true },
  ];

  return (
    <section
      id="doctors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
      className="bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div data-reveal="left" className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Our Expert Doctors</h2>
            <p className="mt-4 text-lg">Specialists who listen first and treat with care.</p>
          </div>
          <div data-reveal="right" className="flex gap-2">
            {[
              { dir: -1, Icon: ChevronLeft, label: "Previous doctors" },
              { dir: 1, Icon: ChevronRight, label: "Next doctors" },
            ].map(({ dir, Icon, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => scroll(dir)}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-ink transition hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={track}
          onScroll={handleScroll}
          data-reveal-stagger="up"
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          aria-label="Doctors"
        >
          {carouselCopies.flatMap(({ suffix, isClone }) =>
            doctors.map((d) => (
              <li
                key={`${suffix}-${d.name}`}
                aria-hidden={isClone}
                className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-18px)]"
              >
                <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sky-50">
                    <Image
                      src={d.photo}
                      alt={`Portrait of ${d.name}`}
                      fill
                      sizes="(min-width: 1024px) 280px, 80vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{d.name}</h3>
                    <span className="mt-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-brand-dark">
                      {d.specialty}
                    </span>
                  </div>
                </article>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
