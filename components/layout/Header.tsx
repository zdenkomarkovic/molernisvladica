"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_PHONE, CONTACT_PHONE_HREF, SERVICES, SITE_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt={`${SITE_NAME} logo`}
            width={90}
            height={90}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative py-3">
            <Link
              href="/#usluge"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink/80 transition hover:text-orange"
            >
              Usluge
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-xl border border-ink/10 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/usluge/${service.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-ink/80 transition hover:bg-cream hover:text-orange"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${CONTACT_PHONE_HREF}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-dark"
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {CONTACT_PHONE}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label="Otvori meni"
          aria-expanded={open}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="/#usluge"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5 hover:text-orange"
            >
              Usluge
            </Link>
            <div className="flex flex-col gap-1 pb-1 pl-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/usluge/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-ink/60 hover:bg-ink/5 hover:text-orange"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5 hover:text-orange"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white"
            >
              Pozovi {CONTACT_PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
