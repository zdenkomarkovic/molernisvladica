import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const PHOTOS = [
  {
    src: "/616163554_122096093697219630_52082252945897767_n.jpg",
    alt: "Dekorativna tehnika na zidu ugostiteljskog objekta",
  },
  {
    src: "/616385393_122096098965219630_7897491740410218622_n.jpg",
    alt: "Dekorativni premaz zida u glatkoj beton teksturi",
  },
  {
    src: "/616760407_122096099175219630_5800983690351344552_n.jpg",
    alt: "Gletovan i okrečen hodnik stambene zgrade",
  },
  {
    src: "/616009149_122096088633219630_7960043988757228000_n.jpg",
    alt: "Ulazna vrata pre i posle farbanja",
  },
  {
    src: "/615435057_122094589719219630_1282113199527645426_n.jpg",
    alt: "Dekorativni spušteni plafon sa indirektnim osvetljenjem",
  },
] as const;

const PLACEHOLDER_COUNT = 3;

export function Gallery() {
  return (
    <section id="galerija" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Galerija radova
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Nekoliko primera završenih poslova. Galerija se stalno dopunjuje
            novim fotografijama.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-ink/5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}

          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <ImagePlaceholder />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
