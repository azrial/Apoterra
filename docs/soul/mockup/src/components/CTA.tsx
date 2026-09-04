import { IconArrowRight } from "../icons";

export function CTA() {
  return (
    <section id="mulai" className="bg-kapur py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-arang md:text-4xl">
          Siap membangun fondasi yang kokoh?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
          Apotek yang baik tidak dibangun di atas pasir. Mulai dengan Apoterra —
          tempat apotek Anda berpijak kuat dan bertumbuh tenang.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-arat-warm px-8 py-4 text-base font-semibold text-kapur transition-colors hover:bg-arat-warm-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Coba Gratis Sekarang
            <IconArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-border-strong px-8 py-4 text-base font-semibold text-arang transition-colors hover:bg-border focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Jadwalkan Demo
          </a>
        </div>
        <p className="mt-6 text-sm text-text-secondary">
          Tanpa kartu kredit. Setup dibimbing. Batal kapan saja.
        </p>
      </div>
    </section>
  );
}
