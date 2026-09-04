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
    <section id="fitur" className="relative bg-surface py-20 md:py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-16 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Semua yang apotek Anda butuhkan
        </h2>

        {/* Uniform 3-column grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-kapur p-7 transition-all hover:border-tanah/30 hover:shadow-md hover:shadow-tanah/5"
            >
              {/* Accent glow on hover */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-tanah/0 transition-all duration-500 group-hover:bg-tanah/[0.06]" />

              <div className="flex items-start gap-5">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-arang/[0.04] text-batu transition-colors group-hover:bg-tanah/10 group-hover:text-tanah">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-arang md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
