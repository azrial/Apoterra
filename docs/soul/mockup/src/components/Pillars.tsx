const PILLARS = [
  {
    title: "Pijakan Kokoh",
    description:
      "Data stok, harga, dan kedaluwarsa yang akurat sebagai fondasi operasional harian. Sistem yang andal, bukan sekadar alat pencatatan.",
  },
  {
    title: "Kendali Penuh",
    description:
      "Visibilitas menyeluruh atas seluruh operasional apotek — kapan pun, dari mana pun. Pemilik tetap memegang kendali atas data dan bisnisnya.",
  },
  {
    title: "Ketenangan Nyata",
    description:
      "Transparansi dan peringatan dini yang mengurangi kekhawatiran. Segalanya terlacak, teraudit, dan pada tempatnya.",
  },
];

export function Pillars() {
  return (
    <section id="keunggulan" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-14 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Tiga pilar yang menopang
        </h2>

        {/* Three columns with generous whitespace, no cards */}
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3 md:gap-y-0">
          {PILLARS.map((pillar) => (
            <div key={pillar.title}>
              {/* Horizontal rule as section marker within the column */}
              <div className="mb-5 h-px w-8 bg-tanah" />
              <h3 className="font-serif text-xl font-bold text-arang">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
