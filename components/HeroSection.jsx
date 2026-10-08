import Image from "next/image";
import { Play, Activity, Stethoscope, Users, CalendarCheck } from "lucide-react";
import { images } from "@/lib/data";

const stats = [
  { icon: CalendarCheck, value: "10+", label: "Years Experience" },
  { icon: Stethoscope, value: "50+", label: "Expert Doctors" },
  { icon: Users, value: "100k+", label: "Happy Patients" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-ice-blue to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-brand-dark">
            <Activity className="h-4 w-4" aria-hidden="true" />
            Your Health. Our Priority.
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Better Care for a <span className="text-brand">Healthier Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Seba Hospital brings together experienced specialists, modern technology and a
            caring team, so you and your family get the right treatment at every stage of life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Book Appointment
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-brand"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white transition group-hover:scale-110">
                <Play className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
              </span>
              Watch Video
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sky-100 text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <dd className="font-display text-2xl font-extrabold text-ink">{value}</dd>
                  <dt className="text-sm">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl blur-md bg-sky-100"></div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-sky-50 shadow-soft">
            <Image
              src={images.hero}
              alt="A team of doctors at Seba Hospital"
              fill
              sizes="(min-width: 1280px) 650px, (min-width: 1024px) 55vw, 90vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -left-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-teal text-white">
              <Stethoscope className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">24/7 Emergency</p>
              <p className="text-xs">Always here for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
