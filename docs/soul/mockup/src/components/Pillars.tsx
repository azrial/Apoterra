import { IconCheck } from "../icons";

interface PillarItem {
  title: string;
  description: string;
}

const PILLARS: PillarItem[] = [
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
    <section id="keunggulan" className="bg-kapur py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-tanah uppercase">
            Mengapa Apoterra
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
            Tiga pilar yang menopang apotek Anda
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <div key={pillar.title} className="relative rounded-xl border border-border bg-surface p-8">
              {/* Number accent */}
              <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-border-strong">
                {index + 1}
              </span>

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                <IconCheck className="h-5 w-5" />
              </div>

              <h3 className="mb-3 font-serif text-xl font-bold text-arang">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
