import { IconArrowRight } from "../icons";

export function CTA() {
  return (
    <section id="mulai" className="relative flex min-h-screen items-center overflow-hidden bg-arang">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-arang via-arang to-arat-warm" />
      <div className="grain absolute inset-0 -z-10" />
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tanah/[0.08] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-kapur md:text-5xl lg:text-6xl">
              Siap membangun fondasi yang kokoh?
            </h2>
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-text-on-dark">
              Apotek yang baik tidak dibangun di atas pasir. Mulai dengan
              Apoterra — tempat apotek Anda berpijak kuat dan bertumbuh tenang.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-start">
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-kapur to-kapur/90 px-10 py-5 text-lg font-semibold text-arang shadow-lg shadow-kapur/10 transition-all hover:shadow-xl hover:shadow-kapur/15 focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Coba Gratis Sekarang
              <IconArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex w-fit items-center rounded-lg border border-kapur/20 px-10 py-5 text-lg font-semibold text-kapur transition-all hover:border-kapur/40 hover:bg-kapur/5 focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Jadwalkan Demo
            </a>
            <p className="mt-4 text-sm text-text-on-dark">
              Tanpa kartu kredit. Setup dibimbing. Batal kapan saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
