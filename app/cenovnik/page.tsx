import { buildMetadata } from "@/lib/metadata";
import { CONTACT_PHONE, CONTACT_PHONE_HREF, PRICING } from "@/lib/constants";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Cenovnik",
  description:
    "Cenovnik molerskih usluga u Nišu – gletovanje, krečenje, dekorativne tehnike i adaptacija stana.",
  image: "/logo.jpg",
  url: "/cenovnik",
});

export default function CenovnikPage() {
  return (
    <main>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Cenovnik
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            Orijentacione cene molerskih usluga u Nišu i okolini. Konačna
            cena zavisi od stanja podloge, visine plafona i pristupačnosti
            prostora, i dogovara se nakon besplatne procene na licu mesta.
          </p>

          <div className="mt-12 space-y-16">
            {PRICING.map((category) => (
              <div key={category.number}>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-extrabold text-orange/40">
                    {category.number}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {category.title}
                  </h2>
                </div>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-ink/10">
                  <table className="w-full min-w-[420px] border-collapse text-left">
                    <thead>
                      <tr className="bg-cream">
                        <th className="px-5 py-3 text-sm font-semibold text-ink/70">
                          Usluga
                        </th>
                        <th className="px-5 py-3 text-sm font-semibold text-ink/70">
                          Cena
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {category.items.map((item) => (
                        <tr key={item.service}>
                          <td className="px-5 py-3 text-sm text-ink/80">
                            {item.service}
                          </td>
                          <td className="px-5 py-3 text-sm font-semibold text-ink whitespace-nowrap">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <a
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
                >
                  Pozovi {CONTACT_PHONE}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-ink/10 bg-cream p-6 text-center sm:p-8">
            <p className="text-ink/70">
              Niste sigurni koja usluga vam je potrebna? Zatražite besplatnu
              procenu i dobijte tačnu cenu za vaš prostor.
            </p>
            <Link
              href="/kontakt"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
            >
              Zatraži besplatnu procenu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
