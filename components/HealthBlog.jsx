import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/data";

export default function HealthBlog() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 data-reveal="zoom" className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Latest News &amp; Health Tips
        </h2>

        <ul data-reveal-stagger="up" className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.title}>
              <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden bg-sky-50">
                  <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-dark">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <time className="text-sm">{p.date}</time>
                  <h3 className="mt-2 text-lg font-bold leading-snug">
                    <a href="#" className="transition-colors hover:text-brand">
                      {p.title}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </a>
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
