import Link from "next/link";

const POINTS = [
  {
    title: "20+ godina iskustva",
    description:
      "Dve decenije rada na pripremi površina, gletovanju i završnoj obradi zidova u Nišu i okolini.",
  },
  {
    title: "Besplatna procena na licu mesta",
    description:
      "Obilazak prostora je besplatan – nakon pregleda dogovaramo obim radova i cenu, bez iznenađenja u toku izvođenja.",
  },
  {
    title: "Dekorativne tehnike",
    description:
      "Sahara, Velvet, Marmorino i Venecijanska tehnika za zidove sa posebnim izgledom i karakterom.",
  },
  {
    title: "Pedantna završna obrada",
    description:
      "Pažnja na detalje u svakoj fazi – od pripreme podloge do poslednjeg premaza.",
  },
];

export function About() {
  return (
    <section id="o-nama" className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              O nama
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              Iza Colorium-a stoji Vladica, moler iz Niša sa više od dve
              decenije iskustva u pripremi zidova, gletovanju i krečenju.
              Svaki posao počinje obilaskom prostora na licu mesta – tako se
              unapred procenjuje stanje zidova, dogovara obim radova i cena,
              bez iznenađenja tokom izvođenja.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/75">
              Pored klasičnih molerskih radova, radimo i dekorativne tehnike
              (Sahara, Velvet, Marmorino, Venecijanska) za zidove sa posebnim
              karakterom, kao i kompletnu adaptaciju stanova.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
            >
              Zatraži besplatnu procenu
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {POINTS.map((point) => (
              <div key={point.title}>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white">
                  <svg
                    width="18"
                    height="18"
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
                </div>
                <h3 className="font-display text-base font-semibold">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
