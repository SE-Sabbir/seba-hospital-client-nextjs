import {
  Stethoscope, Heart, Brain, Bone, Baby, User, Siren, FlaskConical, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Medicine", text: "Routine check-ups and everyday care for adults." },
  { icon: Heart, title: "Cardiology", text: "Heart health screening, diagnosis and treatment." },
  { icon: Brain, title: "Neurology", text: "Care for the brain, spine and nervous system." },
  { icon: Bone, title: "Orthopedics", text: "Bone, joint and muscle care, from sports injuries to surgery." },
  { icon: Baby, title: "Pediatrics", text: "Gentle, specialized care for infants and children." },
  { icon: User, title: "Women's Health", text: "Maternity, gynecology and preventive care." },
  { icon: Siren, title: "Emergency Care", text: "Round-the-clock rapid response for urgent needs." },
  { icon: FlaskConical, title: "Laboratory Tests", text: "Accurate diagnostics with fast, reliable results." },
];

export default function ServicesGrid() {
  return (
    <section id="departments" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Comprehensive Healthcare Services for You
          </h2>
          <p className="mt-4 text-lg">Everything your family needs, under one roof.</p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <a
                href="#appointment"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-sky-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
