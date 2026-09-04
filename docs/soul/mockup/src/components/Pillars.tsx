import { IconDatabase, IconChart, IconShield } from "../icons";
import type { SVGProps, ComponentType } from "react";

interface PillarItem {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
  accentGlow: string;
}

const PILLARS: PillarItem[] = [
  {
    title: "Pijakan Kokoh",
    description:
      "Data stok, harga, dan kedaluwarsa yang akurat sebagai fondasi operasional harian. Sistem yang andal, bukan sekadar alat pencatatan.",
    icon: IconDatabase,
    accent: "bg-arat-warm",
    accentGlow: "group-hover:bg-arat-warm/[0.08]",
  },
  {
    title: "Kendali Penuh",
    description:
      "Visibilitas menyeluruh atas seluruh operasional apotek — kapan pun, dari mana pun. Pemilik tetap memegang kendali atas data dan bisnisnya.",
    icon: IconChart,
    accent: "bg-batu",
    accentGlow: "group-hover:bg-batu/[0.08]",
  },
  {
    title: "Ketenangan Nyata",
    description:
      "Transparansi dan peringatan dini yang mengurangi kekhawatiran. Segalanya terlacak, teraudit, dan pada tempatnya.",
    icon: IconShield,
    accent: "bg-tanah",
    accentGlow: "group-hover:bg-tanah/[0.08]",
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-tanah/30 hover:shadow-lg hover:shadow-arang/5"
            >
              {/* Colored accent glow behind icon */}
              <div
                className={`absolute -top-8 -left-8 h-32 w-32 rounded-full ${pillar.accent}/0 transition-all duration-500 ${pillar.accentGlow}`}
              />

              {/* Icon with colored background */}
              <div
                className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${pillar.accent} text-kapur shadow-md`}
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
