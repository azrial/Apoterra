import { IconArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Organic background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -top-20 right-[-10%] h-[500px] w-[500px] bg-tanah/8 blur-3xl" />
        <div className="blob absolute bottom-0 left-[-5%] h-[400px] w-[400px] bg-batu/6 blur-3xl" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl leading-[1.1] font-bold tracking-tight text-arang md:text-5xl lg:text-[3.5rem]">
              Berpijak kokoh.
              <br />
              Bertumbuh tenang.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Fondasi digital untuk apotek yang ingin bertumbuh dengan data
              akurat, operasional terkendali, dan visibilitas penuh dari mana pun.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mulai"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-arat-warm px-7 py-3.5 text-base font-semibold text-kapur transition-colors hover:bg-arat-warm-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Coba Gratis
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center rounded-lg border border-border-strong px-7 py-3.5 text-base font-semibold text-arang transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Pelajari Fitur
              </a>
            </div>
          </div>

          {/* Right: visual composition — abstract pharmacy shelf / dashboard hint */}
          <div className="relative hidden lg:block" aria-hidden="true">
            {/* Layered cards suggesting a dashboard */}
            <div className="relative mx-auto max-w-md">
              {/* Back card */}
              <div className="absolute top-4 -left-4 h-full w-full rounded-2xl border border-border bg-surface opacity-60" />
              {/* Main card */}
              <div className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm">
                {/* Mock header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-arang" />
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-24 rounded bg-arang/20" />
                      <div className="h-2 w-16 rounded bg-arang/10" />
                    </div>
                  </div>
                  <div className="h-2 w-12 rounded-full bg-success/30" />
                </div>
                {/* Mock stat row */}
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-xl bg-kapur p-4">
                      <div className="mb-2 h-2 w-8 rounded bg-tanah/30" />
                      <div className="h-5 w-14 rounded bg-arang/15" />
                    </div>
                  ))}
                </div>
                {/* Mock chart area */}
                <div className="flex items-end gap-2 rounded-xl bg-kapur p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-tanah/25"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
