import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Dulu saya harus datang ke toko tiap hari untuk cek stok dan kas. Sekarang cukup buka HP — semuanya transparan, selisih langsung ketahuan.",
    name: "Ibu Ratna",
    role: "Pemilik Apotek Sehat Mandiri",
    detail: "3 cabang, Surabaya",
  },
  {
    quote:
      "Staf kami tidak perlu pelatihan lama. Hari pertama langsung bisa pakai. Pencatatan yang tadinya buku tulis, sekarang semua digital dan rapi.",
    name: "Bapak Hendra",
    role: "Pemilik Jaringan Apotek Mitra",
    detail: "5 cabang, Bandung",
  },
  {
    quote:
      "Peringatan kedaluwarsa menyelamatkan kami dari kerugian jutaan rupiah. Obat yang hampir ED langsung terdeteksi sebelum jadi masalah.",
    name: "Ibu Sari",
    role: "Apoteker Pengelola",
    detail: "Apotek Bunda Farma, Semarang",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-kapur py-28 lg:py-36">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <Reveal>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-tanah">
              Testimoni
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-[2.75rem] md:leading-[1.05]">
              Dipercaya apotek yang bertumbuh
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Bukan sekadar janji — ini pengalaman nyata dari pemilik apotek yang sudah merasakan dampaknya.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-tanah/20 hover:shadow-[0_4px_24px_rgba(37,35,30,0.05)]">
                {/* Quote mark */}
                <span className="absolute top-6 right-6 font-serif text-5xl leading-none text-tanah/10 select-none">
                  &ldquo;
                </span>

                <blockquote className="relative">
                  <p className="text-[15px] leading-relaxed text-arang">
                    {item.quote}
                  </p>
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  {/* Avatar placeholder — initials circle */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-tanah/15 to-batu/10 font-serif text-sm font-bold text-tanah-shade">
                    {item.name.charAt(4)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-arang">
                      {item.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {item.role}
                    </div>
                    <div className="text-[11px] text-text-tertiary">
                      {item.detail}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
