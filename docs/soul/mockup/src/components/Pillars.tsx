const PILLARS = [
  {
    title: "Pijakan Kokoh",
    description:
      "Data stok, harga, dan kedaluwarsa yang akurat sebagai fondasi operasional harian. Sistem yang andal, bukan sekadar alat pencatatan.",
    accent: "bg-arat-warm",
  },
  {
    title: "Kendali Penuh",
    description:
      "Visibilitas menyeluruh atas seluruh operasional apotek — kapan pun, dari mana pun. Pemilik tetap memegang kendali atas data dan bisnisnya.",
    accent: "bg-batu",
  },
  {
    title: "Ketenangan Nyata",
    description:
      "Transparansi dan peringatan dini yang mengurangi kekhawatiran. Segalanya terlacak, teraudit, dan pada tempatnya.",
    accent: "bg-tanah",
  },
];

export function Pillars() {
  return (
    <section id="keunggulan" className="bg-kapur py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Tiga pilar yang menopang
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-tanah/30 hover:shadow-lg hover:shadow-arang/5"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 h-1 w-full ${pillar.accent} opacity-60 transition-opacity group-hover:opacity-100`}
              />

              <h3 className="font-serif text-xl font-bold text-arang">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
