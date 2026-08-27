import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export const metadata = buildMetadata({
  title: "Moler Niš",
  description:
    "Moler u Nišu – molerski radovi, gletovanje, krečenje, dekorativne tehnike i adaptacija stanova. Pozovite za besplatnu procenu.",
  image: "/logo.jpg",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Stats />
      <Testimonials />
      <FAQ />
    </main>
  );
}
