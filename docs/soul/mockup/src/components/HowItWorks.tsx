import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Daftar & Setup",
    description:
      "Buat akun, masukkan data apotek dan cabang Anda. Tim kami membantu proses onboarding.",
  },
  {
    title: "Input Data Awal",
    description:
      "Masukkan stok obat, harga, dan tanggal kedaluwarsa. Sistem siap digunakan sehari-hari.",
  },
  {
    title: "Jalankan Operasional",
    description:
      "Staf mulai mencatat transaksi, stok masuk/keluar, dan absensi. Semua terdata otomatis.",
  },
  {
    title: "Pantau & Bertumbuh",
    description:
      "Pemilik memantau laporan dari mana pun. Tambah cabang baru tanpa ganti sistem.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="relative bg-surface py-28 lg:py-36">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-tanah">
              Cara Kerja
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-[2.75rem] md:leading-[1.05]">
              Mulai dalam empat langkah
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[1fr_0.65fr]">
          {/* Left: timeline steps */}
          <div className="space-y-0">
            {STEPS.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} variant="fade-left">
                <div className="group flex gap-6 border-l border-border py-8 pl-9 first:pt-0 last:pb-0">
                  {/* Number circle — overlaps the border line */}
                  <span className="-ml-[49px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-surface bg-arang font-sans text-sm font-bold text-kapur shadow-sm transition-colors duration-300 group-hover:bg-arat-warm">
                    {index + 1}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-lg font-semibold text-arang">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: pull quote */}
          <div className="hidden lg:flex lg:items-center">
            <Reveal variant="fade-right" delay={300}>
              <div className="sticky top-1/2 -translate-y-1/2 rounded-2xl border border-border bg-gradient-to-br from-kapur to-surface p-10">
                <div className="mb-6 h-px w-12 bg-tanah/40" />
                <blockquote>
                  <p className="font-serif text-2xl leading-snug text-arang">
                    Dari satu toko menjadi jaringan yang kokoh — tanpa ganti
                    sistem, tanpa kehilangan kendali.
                  </p>
                  <footer className="mt-6">
                    <span className="text-sm font-medium tracking-wide text-tanah">
                      Pertumbuhan organik
                    </span>
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
