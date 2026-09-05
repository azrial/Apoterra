import { IconArrowRight } from "../icons";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Layered background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-kapur via-kapur to-tanah/[0.06]" />
      <div className="absolute top-0 right-0 -z-10 h-[700px] w-[700px] translate-x-1/3 -translate-y-1/4 rounded-full bg-tanah/[0.05] blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-batu/[0.04] blur-[80px]" />
      <div className="grain absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-x-16 gap-y-16 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          {/* Left: headline */}
          <div>
            <Reveal delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="text-xs font-medium tracking-wide text-text-secondary">
                  Fondasi digital untuk apotek modern
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-arang">
                <span className="block">Berpijak kokoh.</span>
                <span className="block bg-gradient-to-r from-tanah via-batu to-arat-warm bg-clip-text text-transparent">
                  Bertumbuh tenang.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl md:leading-relaxed">
                Data akurat, operasional terkendali, visibilitas penuh dari mana
                pun. Apoterra menopang apotek Anda — dari satu toko menjadi
                jaringan yang kokoh.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#mulai"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-arang px-8 py-4 text-[15px] font-semibold text-kapur shadow-[0_2px_12px_rgba(37,35,30,0.18)] transition-all hover:bg-arat-warm hover:shadow-[0_4px_20px_rgba(37,35,30,0.22)] focus:outline-none focus:ring-2 focus:ring-focus-ring"
                >
                  Coba Gratis
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#fitur"
                  className="inline-flex items-center justify-center rounded-xl border border-border-strong bg-surface/60 px-8 py-4 text-[15px] font-semibold text-arang backdrop-blur-sm transition-all hover:border-tanah/30 hover:bg-surface hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-focus-ring"
                >
                  Pelajari Fitur
                </a>
              </div>

              <p className="mt-6 text-xs tracking-wide text-text-tertiary">
                Tanpa kartu kredit &middot; Setup dibimbing &middot; Batal kapan saja
              </p>
            </Reveal>
          </div>

          {/* Right: refined dashboard mockup */}
          <Reveal delay={400} className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto aspect-[4/3.5] max-w-lg">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-tanah/[0.08] to-batu/[0.04] blur-2xl" />

              {/* Main card */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface to-kapur shadow-[0_8px_40px_rgba(37,35,30,0.08),0_1px_3px_rgba(37,35,30,0.06)]">
                {/* Title bar */}
                <div className="flex items-center gap-3 border-b border-border px-6 py-4">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-arang/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-arang/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-arang/10" />
                  </div>
                  <div className="ml-2 h-2 w-28 rounded-full bg-arang/[0.06]" />
                  <div className="ml-auto flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success/60" />
                    <div className="h-2 w-12 rounded-full bg-arang/[0.06]" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 p-5">
                  {[
                    { labelW: "w-12", valueW: "w-16", accent: "bg-tanah/15" },
                    { labelW: "w-10", valueW: "w-14", accent: "bg-success/12" },
                    { labelW: "w-14", valueW: "w-20", accent: "bg-warning/12" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl bg-kapur/80 p-4">
                      <div className={`mb-2.5 h-1.5 ${stat.labelW} rounded-full bg-arang/[0.07]`} />
                      <div className={`h-5 ${stat.valueW} rounded-md ${stat.accent}`} />
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="px-5 pb-4">
                  <div className="flex items-end gap-1 rounded-xl bg-kapur/80 p-4">
                    {[30, 48, 38, 62, 45, 78, 55, 70, 42, 85, 60, 75].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-tanah/30 to-tanah/10 transition-all"
                          style={{ height: `${h}px` }}
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* List rows */}
                <div className="space-y-2 px-5 pb-5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg px-2 py-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-success/40" />
                      <div className="h-1.5 w-28 rounded-full bg-arang/[0.06]" />
                      <div className="ml-auto h-1.5 w-12 rounded-full bg-arang/[0.04]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -right-3 bottom-10 rounded-xl border border-border bg-surface/95 px-4 py-3 shadow-[0_4px_20px_rgba(37,35,30,0.08)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-arang">3 obat mendekati ED</div>
                    <div className="text-[10px] text-text-tertiary">Perlu ditindaklanjuti</div>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -left-2 top-16 rounded-lg border border-border bg-surface/95 px-3 py-2 shadow-[0_4px_16px_rgba(37,35,30,0.06)] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success" />
                  <span className="text-[11px] font-medium text-arang">Stok tersinkronisasi</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
