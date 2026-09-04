import { IconArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-tanah/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Tagline badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
            Fondasi Digital Apotek Anda
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight font-bold tracking-tight text-arang md:text-5xl lg:text-6xl">
          Berpijak kokoh.{" "}
          <span className="text-tanah">Bertumbuh tenang.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
          Apoterra adalah fondasi digital yang menumbuhkan apotek Anda secara
          organik — data akurat, operasional terkendali, dan visibilitas penuh
          dari mana pun.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#mulai"
            className="inline-flex items-center gap-2 rounded-lg bg-arat-warm px-7 py-3.5 text-base font-semibold text-kapur transition-colors hover:bg-arat-warm-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Coba Gratis
            <IconArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#fitur"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-transparent px-7 py-3.5 text-base font-semibold text-arang transition-colors hover:bg-border focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Pelajari Fitur
          </a>
        </div>

        {/* Social proof hint */}
        <p className="mt-12 text-sm text-text-secondary">
          Dipercaya oleh apotek yang ingin bertumbuh dengan fondasi yang benar.
        </p>
      </div>
    </section>
  );
}
