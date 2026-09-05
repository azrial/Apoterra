import { IconDatabase, IconChart, IconShield, IconClock, IconStore, IconAlert } from "../icons";
import type { SVGProps, ComponentType } from "react";
import { Reveal } from "./Reveal";

interface FeatureItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: IconDatabase,
    title: "Pencatatan Stok Akurat",
    description:
      "Stok, harga, dan kedaluwarsa terdata benar. Tidak ada lagi catatan manual yang rawan hilang atau salah.",
  },
  {
    icon: IconChart,
    title: "Laporan & Pemantauan",
    description:
      "Pantau ringkasan harian, laporan penjualan, dan status stok dari mana pun, kapan pun.",
  },
  {
    icon: IconAlert,
    title: "Peringatan Kedaluwarsa",
    description:
      "Deteksi obat mendekati kedaluwarsa lebih dini. Kurangi pembuangan dan kerugian.",
  },
  {
    icon: IconShield,
    title: "Jejak Audit Lengkap",
    description:
      "Setiap transaksi tercatat — siapa, kapan, berapa. Selisih kas dan stok bisa dilacak asal-usulnya.",
  },
  {
    icon: IconStore,
    title: "Multi-Cabang Terpadu",
    description:
      "Kelola satu toko atau jaringan cabang dari satu akun. Bertumbuh tanpa ganti sistem.",
  },
  {
    icon: IconClock,
    title: "Absensi & Manajemen SDM",
    description:
      "Check-in/out, jadwal shift, dan pencatatan izin dalam satu platform. Tanpa rekap manual.",
  },
];

export function Features() {
  return (
    <section id="fitur" className="relative bg-surface py-28 lg:py-36">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-tanah">
              Fitur
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-[2.75rem] md:leading-[1.05]">
              Semua yang apotek Anda butuhkan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Satu platform untuk operasional harian, pemantauan jarak jauh, dan pertumbuhan jaringan.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-kapur p-7 transition-all duration-300 hover:border-tanah/25 hover:shadow-[0_4px_24px_rgba(37,35,30,0.05)]">
                {/* Subtle corner glow on hover */}
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-tanah/0 transition-all duration-500 group-hover:bg-tanah/[0.05]" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-arang/[0.04] text-batu transition-colors duration-300 group-hover:bg-tanah/10 group-hover:text-tanah-shade">
                    <feature.icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[15px] font-semibold text-arang">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
