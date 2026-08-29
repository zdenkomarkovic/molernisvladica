import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return buildMetadata({ title: "Usluga nije pronađena", noIndex: true });
  }

  return buildMetadata({
    title: service.title,
    description: service.description,
    image: service.image,
    url: `/usluge/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Usluge", path: "/#usluge" },
          { name: service.title, path: `/usluge/${service.slug}` },
        ])}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/#usluge"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-orange"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Sve usluge
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                {service.longDescription}
              </p>

              <ul className="mt-8 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange-dark">
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
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-ink/80">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
                >
                  Zatraži besplatnu procenu
                </Link>
                <Link
                  href="/cenovnik"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-base font-semibold text-ink transition hover:border-ink/30"
                >
                  Pogledaj cenovnik
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {service.subServices && service.subServices.length > 0 && (
        <section className="border-t border-ink/10 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-ink">
              Kako radimo
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6">
              {service.subServices.map((sub, index) => (
                <div
                  key={sub.title}
                  className="grid overflow-hidden rounded-2xl border border-ink/10 bg-cream lg:grid-cols-2"
                >
                  <div
                    className={`relative aspect-[16/9] lg:aspect-auto ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {sub.image ? (
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        sizes="(min-width: 1024px) 480px, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <ImagePlaceholder label={sub.title} />
                    )}
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {sub.intro}
                    </p>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-orange-dark">
                      Princip rada
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {sub.process}
                    </p>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-orange-dark">
                      Šta utiče na cenu
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {sub.priceFactors.map((factor) => (
                        <li
                          key={factor}
                          className="flex items-start gap-2 text-sm leading-relaxed text-ink/70"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-dark" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faq && service.faq.length > 0 && (
        <section className="border-t border-ink/10 bg-cream py-16">
          <JsonLd data={faqSchema(service.faq)} />
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-ink">
              Česta pitanja
            </h2>
            <dl className="mt-8 space-y-6">
              {service.faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-display text-base font-semibold text-ink">
                    {item.question}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="border-t border-ink/10 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-ink">
            Ostale usluge
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/usluge/${other.slug}`}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-cream p-5 transition hover:border-orange/40 hover:shadow-md"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {other.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {other.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark">
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
    </main>
  );
}
