import { IconArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Asymmetric split: large type left, supporting context right */}
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Left: headline as the dominant element */}
          <div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] font-bold tracking-tight text-arang">
              Berpijak kokoh.
              <br />
              Bertumbuh tenang.
            </h1>
          </div>

          {/* Right: description + CTA — vertically offset for tension */}
          <div className="lg:pt-16">
            <p className="max-w-md text-lg leading-relaxed text-text-secondary">
              Fondasi digital untuk apotek yang ingin bertumbuh — data akurat,
              operasional terkendali, visibilitas penuh dari mana pun.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mulai"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-arang px-6 py-3 text-sm font-medium text-kapur transition-colors hover:bg-arat-warm focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Coba Gratis
                <IconArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center rounded-md border border-border-strong px-6 py-3 text-sm font-medium text-arang transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Pelajari Fitur
              </a>
            </div>
          </div>
        </div>

        {/* Divider line that extends full width — structural, not decorative */}
        <div className="mt-16 h-px w-full bg-border md:mt-20" />
      </div>
    </section>
  );
}
