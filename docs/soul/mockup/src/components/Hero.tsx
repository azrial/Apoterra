import { IconArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-kapur via-kapur to-tanah/10" />
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-tanah/[0.07] blur-3xl" />
      <div className="grain absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* Left: dramatic headline */}
          <div>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.9] font-bold tracking-tight text-arang">
              Berpijak
              <br />
              kokoh.
              <span className="block bg-gradient-to-r from-tanah to-batu bg-clip-text text-transparent">
                Bertumbuh tenang.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl">
              Fondasi digital untuk apotek yang ingin bertumbuh — data akurat,
              operasional terkendali, visibilitas penuh dari mana pun.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#mulai"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-arang to-arat-warm px-8 py-4 text-base font-semibold text-kapur shadow-lg shadow-arang/20 transition-all hover:shadow-xl hover:shadow-arang/25 focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Coba Gratis
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface/50 px-8 py-4 text-base font-semibold text-arang backdrop-blur-sm transition-all hover:bg-surface focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Pelajari Fitur
              </a>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tanah/10 to-batu/5" />

              <div className="absolute inset-4 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface to-kapur shadow-2xl shadow-arang/10">
                <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                  <div className="h-3 w-3 rounded-full bg-success" />
                  <div className="h-2.5 w-20 rounded-full bg-arang/10" />
                  <div className="ml-auto h-2.5 w-12 rounded-full bg-arang/8" />
                </div>
                <div className="grid grid-cols-3 gap-3 p-5">
                  {[
                    { label: "w-10", value: "w-16", color: "bg-tanah/20" },
                    { label: "w-8", value: "w-14", color: "bg-success/15" },
                    { label: "w-12", value: "w-20", color: "bg-warning/15" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl bg-kapur p-4">
                      <div className={`mb-2 h-2 ${stat.label} rounded bg-arang/10`} />
                      <div className={`h-5 ${stat.value} rounded ${stat.color}`} />
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5">
                  <div className="flex items-end gap-1.5 rounded-xl bg-kapur p-4">
                    {[35, 55, 40, 70, 50, 85, 60, 75, 45, 90, 65, 80].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-tanah/40 to-tanah/15"
                          style={{ height: `${h}px` }}
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="space-y-2.5 px-5 pb-5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-success/40" />
                      <div className="h-2 w-24 rounded bg-arang/8" />
                      <div className="ml-auto h-2 w-10 rounded bg-arang/6" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-2 bottom-12 rounded-xl border border-border bg-gradient-to-br from-surface to-kapur px-4 py-3 shadow-lg shadow-arang/8">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning/15 text-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-arang">3 obat mendekati ED</div>
                    <div className="text-[10px] text-text-secondary">Perlu ditindaklanjuti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
