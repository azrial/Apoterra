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
    <section id="cara-kerja" className="relative bg-surface py-20 md:py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-16 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Mulai dalam empat langkah
        </h2>

        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_0.7fr]">
          {/* Left: step cards with connected timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute top-2 bottom-2 left-[23px] w-px bg-border md:hidden" />

            <div className="space-y-8 md:space-y-0 md:divide-y md:divide-border">
              {STEPS.map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex gap-6 md:py-8 first:md:pt-0 last:md:pb-0"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-kapur bg-arang font-sans text-sm font-bold text-kapur shadow-sm">
                    {index + 1}
                  </div>

                  <div className="pt-2 md:pt-3">
                    <h3 className="text-base font-semibold text-arang md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky pull quote for rhythm break */}
          <div className="hidden lg:flex lg:items-center">
            <div className="sticky top-32 rounded-2xl border border-border bg-kapur p-8">
              <blockquote>
                <p className="font-serif text-xl leading-snug text-arang md:text-2xl">
                  Dari satu toko menjadi jaringan yang kokoh — tanpa ganti
                  sistem, tanpa kehilangan kendali.
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-tanah" />
                  <span className="text-sm font-medium text-tanah">
                    Pertumbuhan organik
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
