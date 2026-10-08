import { Heart, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const quick = ["Home", "Departments", "Doctors", "About", "Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-white">
              <img src="/sletterlogo.png" alt="Seba Hospital Logo" className="h-8 w-8" />
            </span>
            <span className="font-display text-lg font-extrabold text-white">Seba Hospital</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Compassionate, modern healthcare for every family in Dhaka and beyond.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-base font-bold !text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quick.map((q) => (
              <li key={q}>
                <a href={`#${q.toLowerCase()}`} className="transition-colors hover:text-accent">{q}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-base font-bold !text-white">Contact Info</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><a href="tel:+8801311961850" className="hover:text-white">+880 1311-961850</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><a href="mailto:care@sebahospital.com" className="hover:text-white">care@sebahospital.com</a></li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold !text-white">Newsletter</h3>
          <p className="mt-5 text-sm text-slate-400">Get health tips and hospital news in your inbox.</p>
          <form className="mt-4 flex gap-2" action="#">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input id="newsletter" type="email" required placeholder="Your email"
              className="min-w-0 flex-1 rounded-full border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none" />
            <button type="submit" aria-label="Subscribe"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-white transition hover:bg-accent-teal">
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Seba Hospital. All rights reserved.
      </div>
    </footer>
  );
}
