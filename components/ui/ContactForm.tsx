"use client";

import { useState, type FormEvent } from "react";
import { molerContactFormSchema } from "@/lib/validations";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = molerContactFormSchema.safeParse(values);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message ?? "Proverite unete podatke.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message ?? "Poruka nije poslata. Pokušajte ponovo.");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Poruka nije poslata. Proverite internet konekciju.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/10 p-6 text-teal-dark">
        <p className="font-display text-lg font-semibold">Poruka je poslata!</p>
        <p className="mt-1 text-sm">Javićemo vam se u najkraćem roku.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Ime i prezime
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-ink placeholder:text-ink/35 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
            placeholder="Vaše ime"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-ink placeholder:text-ink/35 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
            placeholder="06X XXX XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email <span className="text-ink/40">(opciono)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-ink placeholder:text-ink/35 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
          placeholder="vas@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-ink placeholder:text-ink/35 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
          placeholder="Opišite ukratko posao koji vas zanima..."
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Šaljem..." : "Pošalji poruku"}
      </button>
    </form>
  );
}
