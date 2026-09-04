import { IconDatabase, IconChart, IconShield, IconClock, IconStore, IconAlert } from "../icons";
import type { SVGProps, ComponentType } from "react";

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
    <section id="fitur" className="rx-grid py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Left-aligned header */}
        <h2 className="mb-14 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Semua yang apotek Anda butuhkan
        </h2>

        {/* List layout with dividers — not cards */}
        <div className="divide-y divide-border border-t border-b border-border">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex gap-5 py-7 transition-colors hover:bg-surface/60 md:gap-8 md:py-8"
            >
              <div className="shrink-0 pt-0.5 text-batu transition-colors group-hover:text-tanah">
                <feature.icon className="h-5 w-5" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-base font-semibold text-arang">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
