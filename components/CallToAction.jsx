import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/data";

export default function CallToAction() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-dark">
        <Image src={images.stethoscope} alt="" fill sizes="1280px" className="object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" aria-hidden="true" />
        <div className="relative flex flex-col items-start gap-8 px-8 py-14 sm:px-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold leading-tight !text-white sm:text-4xl">
              Your Health Journey Starts Here
            </h2>
            <p className="mt-3 text-lg text-sky-100">
              Book a visit today and meet the team that will look after you.
            </p>
          </div>
          <a
            href="#appointment"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-dark transition hover:-translate-y-0.5 hover:bg-sky-50"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
