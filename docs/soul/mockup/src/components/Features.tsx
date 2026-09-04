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
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-tanah uppercase">
            Fitur Inti
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
            Semua yang apotek Anda butuhkan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Dari pencatatan stok hingga pemantauan jarak jauh — Apoterra
            menyediakan fondasi operasional yang lengkap dan akurat.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-kapur p-6 transition-all hover:border-tanah/40 hover:shadow-sm"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-tanah/10 text-tanah transition-colors group-hover:bg-tanah/15">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-arang">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
