const STATS = [
  { value: "20+", label: "godina iskustva" },
  { value: "500+", label: "Završenih radova" },
  { value: "100%", label: "zadovoljnih klijenata" },
  { value: "Niš", label: "i okolina" },
];

export function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-10 divide-ink/10 sm:grid-cols-4 sm:divide-x">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-orange sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
