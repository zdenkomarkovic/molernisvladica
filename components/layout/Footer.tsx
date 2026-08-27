import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SERVICES,
  SITE_NAME,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";

const NAV_LINKS = [
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt={`${SITE_NAME} logo`}
                width={120}
                height={120}
                className="rounded-full"
              />
              <span className="font-display text-lg font-bold text-cream">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Molerski radovi, gletovanje, krečenje, dekorativne tehnike i adaptacija stanova u{" "}
              {CONTACT_LOCATION}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-orange"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href={SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-orange"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-cream">Usluge</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/usluge/${service.slug}`}
                    className="text-sm text-cream/60 transition hover:text-orange"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-cream">Navigacija</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-cream">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
              <li>
                <a href={`tel:${CONTACT_PHONE_HREF}`} className="transition hover:text-orange">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-orange">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{CONTACT_LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-cream/10">
          <iframe
            src="https://www.google.com/maps?q=Ni%C5%A1,Srbija&output=embed"
            title="Lokacija – Niš i okolina"
            width="100%"
            height="280"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-cream/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} {SITE_NAME} · {CONTACT_LOCATION}
          </p>
          <p className="text-xs">
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-cream/30 underline-offset-2 hover:text-cream"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
