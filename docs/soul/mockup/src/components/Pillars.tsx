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
        <div className="mb-14 max-w-xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
            Tiga pilar yang menopang
          </h2>
        </div>

        {/* Horizontal stacked cards with left accent bar */}
        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 pl-9 transition-colors hover:border-tanah/30"
            >
              {/* Left accent bar */}
              <div
                className={`absolute top-4 bottom-4 left-0 w-[3px] rounded-full ${pillar.accent} opacity-40 transition-opacity group-hover:opacity-80`}
              />

              <h3 className="font-serif text-lg font-bold text-arang">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
