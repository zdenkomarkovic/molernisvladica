import { buildMetadata } from "@/lib/metadata";
import { Contact } from "@/components/sections/Contact";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte Colorium – moler u Nišu. Pozovite za besplatnu procenu ili pošaljite poruku preko kontakt forme.",
  image: "/logo.jpg",
  url: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
