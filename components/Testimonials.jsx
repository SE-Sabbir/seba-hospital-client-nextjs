import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { images } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-ice-blue py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div data-reveal="left">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Trusted by Thousands of Happy Patients
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed">
            Our patients are the reason we keep improving. Here is what some of them say about their
            experience at Seba Hospital.
          </p>
        </div>

        <figure data-reveal="right" className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 sm:p-10">
          <Quote className="absolute right-8 top-8 h-12 w-12 text-sky-100" aria-hidden="true" />
          <div className="flex gap-1 text-amber-400" role="img" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-5 text-lg leading-relaxed text-ink">
            The doctors explained everything clearly and the nurses were kind throughout my stay.
            Booking was simple and I never felt rushed. I would recommend Antixor to my family
            without hesitation.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image src={images.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-accent" />
            <div>
              <p className="font-bold text-ink">Sabbir Hossain</p>
              <p className="text-sm">Patient</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
