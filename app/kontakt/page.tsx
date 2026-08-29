import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Contact } from "@/components/sections/Contact";

export const metadata = buildMetadata({
  title: "Kontakt – Moler Niš",
  description:
    "Kontaktirajte Colorium – moler u Nišu. Pozovite 064 186 1730 za besplatnu procenu ili pošaljite poruku preko kontakt forme.",
  url: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <Contact as="h1" />
    </main>
  );
}
