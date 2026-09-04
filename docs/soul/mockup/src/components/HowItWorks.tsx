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
    <section id="cara-kerja" className="bg-kapur py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-14 max-w-lg font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Mulai dalam empat langkah
        </h2>

        {/* Two-column layout: steps left, large pull quote right */}
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_0.8fr]">
          {/* Left: numbered list with inline numbers */}
          <div className="space-y-0">
            {STEPS.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 border-l border-border py-6 pl-6 first:pt-0 last:pb-0"
              >
                <span className="shrink-0 -ml-[33px] w-6 pt-0.5 text-right font-sans text-xs font-medium text-batu">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-arang">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: contextual anchor — a single statement that reinforces the value */}
          <div className="flex items-center lg:sticky lg:top-32 lg:h-fit">
            <blockquote className="border-l-2 border-tanah pl-6">
              <p className="font-serif text-xl leading-snug text-arang md:text-2xl">
                Dari satu toko menjadi jaringan yang kokoh — tanpa ganti sistem,
                tanpa kehilangan kendali.
              </p>
              <footer className="mt-4 text-sm text-text-secondary">
                Pertumbuhan organik, sesuai visi Apoterra.
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
