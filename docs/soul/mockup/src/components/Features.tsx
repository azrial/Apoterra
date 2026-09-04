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
    <section id="fitur" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header — left aligned, no eyebrow */}
        <div className="mb-14 max-w-xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
            Semua yang apotek Anda butuhkan
          </h2>
          <p className="mt-3 text-text-secondary">
            Dari pencatatan stok hingga pemantauan jarak jauh — fondasi
            operasional yang lengkap dan akurat.
          </p>
        </div>

        {/* Bento grid: first item spans 2 cols for visual hierarchy */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`stagger-in group relative overflow-hidden rounded-2xl border border-border bg-kapur p-7 transition-colors hover:border-tanah/30 ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Subtle accent line at top */}
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-tanah/0 via-tanah/40 to-tanah/0 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="flex items-start gap-5">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-arang/[0.04] text-batu transition-colors group-hover:bg-tanah/10 group-hover:text-tanah">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-arang">
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
