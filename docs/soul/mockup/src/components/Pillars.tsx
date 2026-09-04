import { IconDatabase, IconChart, IconShield } from "../icons";
import type { SVGProps, ComponentType } from "react";

interface PillarItem {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  gradient: string;
  glowGradient: string;
}

const PILLARS: PillarItem[] = [
  {
    title: "Pijakan Kokoh",
    description:
      "Data stok, harga, dan kedaluwarsa yang akurat sebagai fondasi operasional harian. Sistem yang andal, bukan sekadar alat pencatatan.",
    icon: IconDatabase,
    gradient: "from-arat-warm to-batu-shade",
    glowGradient: "group-hover:from-arat-warm/[0.10] group-hover:to-batu/[0.05]",
  },
  {
    title: "Kendali Penuh",
    description:
      "Visibilitas menyeluruh atas seluruh operasional apotek — kapan pun, dari mana pun. Pemilik tetap memegang kendali atas data dan bisnisnya.",
    icon: IconChart,
    gradient: "from-batu to-tanah-shade",
    glowGradient: "group-hover:from-batu/[0.10] group-hover:to-tanah/[0.05]",
  },
  {
    title: "Ketenangan Nyata",
    description:
      "Transparansi dan peringatan dini yang mengurangi kekhawatiran. Segalanya terlacak, teraudit, dan pada tempatnya.",
    icon: IconShield,
    gradient: "from-tanah to-tanah-shade",
    glowGradient: "group-hover:from-tanah/[0.10] group-hover:to-batu/[0.05]",
  },
];

export function Pillars() {
  return (
    <section id="keunggulan" className="relative bg-kapur py-20 md:py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-16 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Tiga pilar yang menopang
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-kapur p-8 transition-all hover:border-tanah/30 hover:shadow-lg hover:shadow-arang/5"
            >
              {/* Colored accent glow behind icon */}
              <div
                className={`absolute -top-8 -left-8 h-32 w-32 rounded-full from-transparent to-transparent transition-all duration-500 ${pillar.glowGradient}`}
              />

              {/* Icon with gradient background */}
              <div
                className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} text-kapur shadow-md`}
              >
                <pillar.icon className="h-7 w-7" />
              </div>

              <h3 className="font-serif text-xl font-bold text-arang">
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
