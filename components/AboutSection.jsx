import Image from "next/image";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { images } from "@/lib/data";

const points = [
  "Advanced medical technology",
  "Experienced, caring team",
  "Clean and safe environment",
  "Affordable pricing",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-ice-blue py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-slate-200 shadow-soft">
            <Image
              src={images.ot}
              alt="Antixor Hospital building exterior"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-brand px-5 py-4 text-white shadow-soft sm:right-8">
            <ShieldCheck className="h-8 w-8" aria-hidden="true" />
            <div>
              <p className="font-display text-xl font-extrabold leading-none">Certified</p>
              <p className="text-sm text-sky-100">Quality care standards</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Modern Facilities. Expert Doctors. Trusted Care.
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            For over a decade, Seba Hospital has combined clinical excellence with a warm,
            patient-first approach, so every visit feels safe and well looked after.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-medium text-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-teal text-white">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
