"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Phone } from "lucide-react";
import { departments, doctors } from "@/lib/data";

const slots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function AppointmentForm() {
  const [department, setDepartment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const available = department ? doctors.filter((d) => d.department === department) : doctors;
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send FormData to your API route or booking backend.
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="bg-ice-blue py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div data-reveal="left">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Easy &amp; Quick Appointment Booking
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed">
            Pick a department, choose your doctor and select a time that suits you. We will confirm
            your visit by phone or email.
          </p>
          <a
            href="#appointment-form"
            className="mt-8 inline-block rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Book Now
          </a>
          <p className="mt-8 flex items-center gap-3 font-medium text-ink">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand shadow-sm">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            Need help? Call +880 1311-961850
          </p>
        </div>

        <div data-reveal="right" id="appointment-form" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          {submitted ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-accent-teal" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">Request received</h3>
              <p className="mt-2">We will contact you shortly to confirm your appointment.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 font-semibold text-brand hover:underline"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="department" className="mb-2 block text-sm font-semibold text-ink">Department</label>
                <select id="department" name="department" required value={department}
                  onChange={(e) => setDepartment(e.target.value)} className={field}>
                  <option value="" disabled>Select Department</option>
                  {departments.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="doctor" className="mb-2 block text-sm font-semibold text-ink">Doctor</label>
                <select id="doctor" name="doctor" required defaultValue="" key={department} className={field}>
                  <option value="" disabled>Select Doctor</option>
                  {available.map((d) => <option key={d.name}>{d.name}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-semibold text-ink">Date</label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <input id="date" name="date" type="date" min={today} required className={`${field} appearance-none pr-12`} />
                </div>
              </div>

              <div>
                <label htmlFor="time" className="mb-2 block text-sm font-semibold text-ink">Time</label>
                <div className="relative">
                  <Clock className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <select id="time" name="time" required defaultValue="" className={`${field} appearance-none pr-12`}>
                    <option value="" disabled>Select Time</option>
                    {slots.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit"
                className="sm:col-span-2 w-full rounded-xl bg-brand py-3.5 font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-offset-4">
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
