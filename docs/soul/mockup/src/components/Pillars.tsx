import { IconDatabase, IconChart, IconShield } from "../icons";
import type { SVGProps, ComponentType } from "react";
import { Reveal } from "./Reveal";

interface PillarItem {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  gradientFrom: string;
  gradientTo: string;
}

const PILLARS: PillarItem[] = [
  {
    title: "Pijakan Kokoh",
    description:
      "Data stok, harga, dan kedaluwarsa yang akurat sebagai fondasi operasional harian. Sistem yang andal, bukan sekadar alat pencatatan.",
    icon: IconDatabase,
    gradientFrom: "from-arat-warm",
    gradientTo: "to-batu-shade",
  },
  {
    title: "Kendali Penuh",
    description:
      "Visibilitas menyeluruh atas seluruh operasional apotek — kapan pun, dari mana pun. Pemilik tetap memegang kendali atas data dan bisnisnya.",
    icon: IconChart,
    gradientFrom: "from-batu",
    gradientTo: "to-tanah-shade",
  },
  {
    title: "Ketenangan Nyata",
    description:
      "Transparansi dan peringatan dini yang mengurangi kekhawatiran. Segalanya terlacak, teraudit, dan pada tempatnya.",
    icon: IconShield,
    gradientFrom: "from-tanah",
    gradientTo: "to-tanah-shade",
  },
];

export function Pillars() {
  return (
    <section id="keunggulan" className="relative bg-kapur py-28 lg:py-36">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-tanah">
              Keunggulan
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-[2.75rem] md:leading-[1.05]">
              Tiga pilar yang menopang
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Setiap keputusan produk berakar pada tiga nilai ini — tidak berubah, tidak ditawar.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-9 transition-all duration-300 hover:border-tanah/20 hover:shadow-[0_8px_32px_rgba(37,35,30,0.06)]">
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div
                  className={`mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradientFrom} ${pillar.gradientTo} text-kapur shadow-md shadow-arang/10`}
                >
                  <pillar.icon className="h-7 w-7" />
                </div>

                <h3 className="font-serif text-xl font-bold text-arang">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
