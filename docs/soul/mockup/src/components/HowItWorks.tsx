const STEPS = [
  {
    step: "01",
    title: "Daftar & Setup",
    description:
      "Buat akun, masukkan data apotek dan cabang Anda. Tim kami membantu proses onboarding.",
  },
  {
    step: "02",
    title: "Input Data Awal",
    description:
      "Masukkan stok obat, harga, dan tanggal kedaluwarsa. Sistem siap digunakan sehari-hari.",
  },
  {
    step: "03",
    title: "Jalankan Operasional",
    description:
      "Staf mulai mencatat transaksi, stok masuk/keluar, dan absensi. Semua terdata otomatis.",
  },
  {
    step: "04",
    title: "Pantau & Bertumbuh",
    description:
      "Pemilik memantau laporan dari mana pun. Tambah cabang baru tanpa ganti sistem.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-tanah uppercase">
            Cara Kerja
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
            Mulai dalam empat langkah
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Dari pendaftaran hingga operasional penuh — proses yang sederhana
            dan dibimbing.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div key={item.step} className="relative">
              {/* Connector line (hidden on last item and mobile) */}
              <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-border lg:block last:lg:hidden" />

              <div className="flex flex-col items-center text-center">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-tanah/30 font-serif text-lg font-bold text-tanah">
                  {item.step}
                </span>
                <h3 className="mb-2 text-base font-semibold text-arang">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
