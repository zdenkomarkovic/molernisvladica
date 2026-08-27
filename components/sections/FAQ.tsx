"use client";

import { useState } from "react";
import { CONTACT_LOCATION, CONTACT_PHONE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

const FAQ_ITEMS = [
  {
    question: "Ko izvodi radove?",
    answer:
      "Radove lično izvodi Vladica, moler sa više od dve decenije iskustva, uz proverenu ekipu za veće poslove.",
  },
  {
    question: "Kako se formira cena?",
    answer:
      "Nakon besplatnog obilaska prostora procenjuje se stanje zidova i obim posla, pa se cena dogovara unapred – bez naknadnih iznenađenja.",
  },
  {
    question: "Da li je procena na licu mesta besplatna?",
    answer:
      "Da. Izlazak na teren i procena posla su potpuno besplatni, bez ikakve obaveze da se posao poveri.",
  },
  {
    question: "U kojim mestima radite?",
    answer: `Radimo u ${CONTACT_LOCATION}. Za lokacije van grada, dogovor je moguć u zavisnosti od obima posla.`,
  },
  {
    question: "Koliko traje izvođenje radova?",
    answer:
      "Zavisi od obima posla – manji stan se obično završi za nekoliko dana, dok kompletna adaptacija traje duže. Tačan rok se dogovara pre početka.",
  },
  {
    question: "Da li pokrivate nameštaj i podove tokom radova?",
    answer:
      "Da, nameštaj i podovi se pokrivaju pre početka radova, a prostor se ostavlja čist po završetku posla.",
  },
  {
    question: "Koje dekorativne tehnike radite?",
    answer:
      "Sahara, Velvet, Marmorino i Venecijanska tehnika – svaka sa svojim karakterističnim izgledom i završnim efektom.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Česta pitanja
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Odgovori na pitanja koja nam klijenti najčešće postavljaju. Za sve
            ostalo, pozovite {CONTACT_PHONE}.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-cream">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink">
                    {item.question}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`shrink-0 text-orange-dark transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-ink/65">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
