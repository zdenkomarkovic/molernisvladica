import { ContactForm } from "@/components/ui/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";

export function Contact({ as = "h2" }: { as?: "h1" | "h2" } = {}) {
  const Heading = as;

  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Heading className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Kontakt – moler Niš
          </Heading>
          <p className="mt-4 text-lg text-ink/70">
            Pozovite za besplatnu procenu ili pošaljite poruku – javljamo se
            u najkraćem roku. Radimo u Nišu i okolini.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <ul className="space-y-5">
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="flex items-start gap-3 text-ink hover:text-orange"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange-dark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm text-ink/50">Telefon</span>
                    <span className="font-medium">{CONTACT_PHONE}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 text-ink hover:text-orange"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange-dark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm text-ink/50">Email</span>
                    <span className="font-medium">{CONTACT_EMAIL}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-ink/50">Lokacija</span>
                  <span className="font-medium">{CONTACT_LOCATION}</span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={SOCIAL_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-orange hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href={SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-orange hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
