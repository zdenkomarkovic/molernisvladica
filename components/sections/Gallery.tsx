"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "/m1.png", alt: "Colorium – fotografija završenog rada 1" },
  { src: "/m2.png", alt: "Colorium – fotografija završenog rada 2" },
  { src: "/m3.png", alt: "Colorium – fotografija završenog rada 3" },
  { src: "/m4.png", alt: "Colorium – fotografija završenog rada 4" },
  { src: "/m5.png", alt: "Colorium – fotografija završenog rada 5" },
  { src: "/m6.png", alt: "Colorium – fotografija završenog rada 6" },
  { src: "/m7.png", alt: "Colorium – fotografija završenog rada 7" },
  { src: "/m8.png", alt: "Colorium – fotografija završenog rada 8" },
  { src: "/m10.png", alt: "Colorium – fotografija završenog rada 10" },
  { src: "/m11.png", alt: "Colorium – fotografija završenog rada 11" },
  { src: "/m12.png", alt: "Colorium – fotografija završenog rada 12" },
  { src: "/m13.png", alt: "Colorium – fotografija završenog rada 13" },
  { src: "/m14.png", alt: "Colorium – fotografija završenog rada 14" },
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
  { src: "/108223.jpg", alt: "Colorium – fotografija završenog rada" },
  { src: "/2148384472.jpg", alt: "Colorium – fotografija završenog rada" },
  { src: "/9512.jpg", alt: "Colorium – fotografija završenog rada" },
] as const;

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length,
      ),
    [],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const activePhoto = activeIndex === null ? null : PHOTOS[activeIndex];

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
          {PHOTOS.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-ink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              aria-label={`Uvećaj: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Zatvori"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4"
            aria-label="Prethodna slika"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4"
            aria-label="Sledeća slika"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
