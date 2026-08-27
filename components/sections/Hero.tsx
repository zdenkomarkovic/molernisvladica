import Image from "next/image";
import {
  CONTACT_LOCATION,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal-dark">
            {CONTACT_LOCATION}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Moler Niš –{" "}
            <span className="text-orange">
              moleraj koji se primeti na prvi pogled
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink/70">
            Molerski radovi u Nišu – gletovanje, krečenje, dekorativne tehnike i
            adaptacija stanova, uredno i precizno, po dogovorenom roku. Radimo u
            gradu i okolini.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
            >
              Pozovi {CONTACT_PHONE}
            </a>
            <a
              href="#galerija"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-base font-semibold text-ink transition hover:border-ink/30"
            >
              Pogledaj radove
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-ink/60">
            <a
              href={SOCIAL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange"
            >
              @colorium_nis
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/m5.png"
              alt="Dekorativni plafon sa indirektnim osvetljenjem – izrada Colorium"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-ink px-6 py-4 text-white shadow-lg sm:block">
            <p className="font-display text-lg font-bold">Colorium</p>
            <p className="text-sm text-white/70">Moler Niš</p>
          </div>
        </div>
      </div>
    </section>
  );
}
