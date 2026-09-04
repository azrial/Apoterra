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
    <section id="cara-kerja" className="relative flex min-h-screen items-center bg-surface">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="mb-16 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-5xl">
          Mulai dalam empat langkah
        </h2>

        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[1fr_0.7fr]">
          {/* Left: steps */}
          <div className="space-y-0">
            {STEPS.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-6 border-l border-border py-8 pl-8 first:pt-0 last:pb-0"
              >
                <span className="-ml-[41px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-surface bg-arang font-sans text-sm font-bold text-kapur shadow-sm">
                  {index + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-arang">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky pull quote */}
          <div className="hidden lg:flex lg:items-center">
            <div className="sticky top-1/2 -translate-y-1/2 rounded-2xl border border-border bg-gradient-to-br from-kapur to-surface p-10">
              <blockquote>
                <p className="font-serif text-2xl leading-snug text-arang">
                  Dari satu toko menjadi jaringan yang kokoh — tanpa ganti
                  sistem, tanpa kehilangan kendali.
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-px w-10 bg-tanah" />
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
