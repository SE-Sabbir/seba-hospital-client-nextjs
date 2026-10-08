import { HeartPulse, Scissors, Microscope, Pill } from "lucide-react";

const items = [
  { icon: HeartPulse, title: "ICU & Critical Care", text: "Continuous monitoring by specialist intensive care teams." },
  { icon: Scissors, title: "Modern Operation Theaters", text: "Sterile, fully equipped theaters for complex procedures." },
  { icon: Microscope, title: "Diagnostic Lab", text: "Advanced imaging and pathology with quick turnaround." },
  { icon: Pill, title: "Pharmacy", text: "In-house pharmacy open around the clock." },
];

export default function Facilities() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 data-reveal="zoom" className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          World-Class Facilities
        </h2>
        <ul data-reveal-stagger="up" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group rounded-2xl bg-ice-blue p-7 transition duration-300 hover:-translate-y-1 hover:bg-brand">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-white text-brand">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold transition-colors group-hover:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed transition-colors group-hover:text-sky-100">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
