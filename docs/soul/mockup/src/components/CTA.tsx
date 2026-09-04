import { IconArrowRight } from "../icons";

export function CTA() {
  return (
    <section id="mulai" className="bg-arang py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Left: statement */}
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-kapur md:text-4xl">
              Siap membangun fondasi yang kokoh?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-text-on-dark">
              Apotek yang baik tidak dibangun di atas pasir. Mulai dengan
              Apoterra — tempat apotek Anda berpijak kuat dan bertumbuh tenang.
            </p>
          </div>

          {/* Right: actions — left-aligned, not centered */}
          <div className="flex flex-col gap-4 lg:items-start">
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-kapur px-6 py-3 text-sm font-medium text-arang transition-colors hover:bg-kapur/90 focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Coba Gratis Sekarang
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              className="inline-flex w-fit items-center rounded-md border border-kapur/20 px-6 py-3 text-sm font-medium text-kapur transition-colors hover:border-kapur/40 hover:bg-kapur/5 focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Jadwalkan Demo
            </a>
            <p className="mt-2 text-xs text-text-on-dark">
              Tanpa kartu kredit. Setup dibimbing. Batal kapan saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
