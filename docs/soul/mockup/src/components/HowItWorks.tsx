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
    <section id="cara-kerja" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
            Mulai dalam empat langkah
          </h2>
          <p className="mt-3 text-text-secondary">
            Dari pendaftaran hingga operasional penuh — proses yang sederhana
            dan dibimbing.
          </p>
        </div>

        {/* Vertical timeline on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Continuous line (desktop) */}
          <div className="absolute top-[19px] left-0 right-0 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((item, index) => (
              <div key={item.title} className="relative flex gap-4 lg:flex-col lg:gap-5">
                {/* Dot on the line */}
                <div className="relative z-10 flex shrink-0 items-center justify-center lg:items-start">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-kapur bg-arang font-sans text-xs font-bold text-kapur shadow-sm">
                    {index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-arang">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
