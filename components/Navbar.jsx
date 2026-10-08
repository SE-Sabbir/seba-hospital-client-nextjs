"use client";

import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Departments", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header data-reveal="down" className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl text-white ">
            <img src="/sletterlogo.png" alt="Seba Hospital Logo" className="h-8 w-8" />
          </span>
          <span className="font-display text-lg font-extrabold text-ink">
            Seba <span className="text-brand">Hospital</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-body transition-colors hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#appointment"
            className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark sm:inline-block"
          >
            Book Appointment
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink transition hover:bg-ice-blue lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white px-4 pb-5 lg:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-ink transition hover:bg-ice-blue hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand py-3 text-center font-semibold text-white"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
