import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Stranica nije pronađena",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-extrabold text-orange">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">
        Stranica nije pronađena
      </h1>
      <p className="mt-2 text-ink/60">
        Stranica koju tražite ne postoji ili je premeštena.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark"
      >
        Vrati se na početnu
      </Link>
    </main>
  );
}
