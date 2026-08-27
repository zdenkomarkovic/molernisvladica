const TESTIMONIALS = [
  {
    name: "Ana",
    location: "Niš",
    text: "Vladica i ekipa su sve odradili tačno kako smo se dogovorili – uredno, u roku i bez ijednog iznenađenja. Stan izgleda kao nov.",
  },
  {
    name: "Marko",
    location: "Niš",
    text: "Gletovanje i krečenje stana urađeni su pedantno, bez ijedne mrlje na podu ili nameštaju. Ozbiljan pristup poslu, preporučujem.",
  },
  {
    name: "Jovana",
    location: "Niš",
    text: "Dekorativna tehnika na zidu u dnevnoj sobi izgleda bolje nego što sam zamišljala. Vladica je predložio rešenje koje savršeno uklapa prostor.",
  },
  {
    name: "Nikola",
    location: "Niš i okolina",
    text: "Radili smo kompletnu adaptaciju stana. Sve faze su dogovorene unapred, cena je ostala ista kao na početku, a rok je ispoštovan.",
  },
];

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8l-6.1 3.2 1.5-6.8-5.2-4.7 6.9-.7z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="utisci" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Šta kažu klijenti
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Utisci ljudi za koje je Vladica radio u Nišu i okolini.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <div className="flex gap-1 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mt-4 text-ink/75 leading-relaxed">
                “{testimonial.text}”
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">
                {testimonial.name}
                <span className="font-normal text-ink/50">
                  {" "}
                  · {testimonial.location}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
