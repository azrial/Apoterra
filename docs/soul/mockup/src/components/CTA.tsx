import { IconArrowRight } from "../icons";

export function CTA() {
  return (
    <section id="mulai" className="relative overflow-hidden py-24 md:py-32">
      {/* Dark full-width band */}
      <div className="absolute inset-0 -z-10 bg-arang" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -top-32 right-[-8%] h-[400px] w-[400px] bg-tanah/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-kapur md:text-4xl">
          Siap membangun fondasi yang kokoh?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-on-dark">
          Apotek yang baik tidak dibangun di atas pasir. Mulai dengan Apoterra —
          tempat apotek Anda berpijak kuat dan bertumbuh tenang.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-kapur px-8 py-4 text-base font-semibold text-arang transition-colors hover:bg-kapur/90 focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Coba Gratis Sekarang
            <IconArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-kapur/20 px-8 py-4 text-base font-semibold text-kapur transition-colors hover:border-kapur/40 hover:bg-kapur/5 focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Jadwalkan Demo
          </a>
        </div>
        <p className="mt-8 text-sm text-text-on-dark">
          Tanpa kartu kredit. Setup dibimbing. Batal kapan saja.
        </p>
      </div>
    </section>
  );
}
