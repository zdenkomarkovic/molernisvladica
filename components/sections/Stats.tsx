const STATS = [
  { value: "20+", label: "godina iskustva" },
  { value: "500+", label: "Završenih radova" },
  { value: "100%", label: "zadovoljnih klijenata" },
  { value: "Niš", label: "i okolina" },
];

// Self-host video (Facebook Reel se ne može emb-ovati). Fajl: public/stats-video.mp4
const STATS_VIDEO = {
  src: "/stats-video.mp4",
  poster: "/stats-poster.jpg",
};

export function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div className="order-2 w-full max-w-[300px] justify-self-center lg:order-1">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-sm"
              style={{ aspectRatio: "9 / 16" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={STATS_VIDEO.src}
                poster={STATS_VIDEO.poster}
                controls
                playsInline
                preload="metadata"
              >
                Vaš pregledač ne podržava reprodukciju videa.
              </video>
            </div>
          </div>

          <div className="order-1 grid grid-cols-2 gap-y-10 divide-ink/10 sm:divide-x lg:order-2">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-2 text-center">
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
      </div>
    </section>
  );
}
