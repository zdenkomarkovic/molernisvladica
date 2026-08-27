import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  "molerski-radovi": (
    <>
      <rect x="3" y="4" width="13" height="6" rx="1.5" />
      <path d="M9.5 10v4.5" />
      <path d="M9.5 14.5h5" />
      <path d="M14.5 14.5v3.5" />
      <circle cx="9.5" cy="17" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  "dekorativne-tehnike": (
    <>
      <path d="M12 2a10 10 0 1 0 0 20c1.4 0 2-.9 2-1.8 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1 .9-1.9 2-1.9H17a3 3 0 0 0 3-3c0-5.2-3.9-9.5-8-9.5z" />
      <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  "adaptacija-stanova": (
    <>
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 9.5V19a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
      <circle cx="12.3" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Services() {
  return (
    <section id="usluge" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Usluge
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Sve što je potrebno da vaš prostor izgleda kao nov – od pripreme
            zidova do finalnih dekorativnih detalja.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/usluge/${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-cream p-6 transition hover:border-orange/40 hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange-dark transition group-hover:bg-orange group-hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[service.slug]}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {service.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-orange-dark">
                Saznaj više
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
