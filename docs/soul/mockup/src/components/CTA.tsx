import { IconArrowRight } from "../icons";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="mulai" className="relative overflow-hidden bg-arang py-28 lg:py-36">
      {/* Layered dark background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-arang via-arang to-arat-warm/80" />
      <div className="grain absolute inset-0 -z-10" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tanah/[0.06] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-kapur md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                Siap membangun fondasi yang kokoh?
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-on-dark">
                Apotek yang baik tidak dibangun di atas pasir. Mulai dengan
                Apoterra — tempat apotek Anda berpijak kuat dan bertumbuh tenang.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col gap-4 lg:items-start">
              <a
                href="#"
                className="group inline-flex w-fit items-center gap-2.5 rounded-xl bg-kapur px-9 py-4 text-[15px] font-semibold text-arang shadow-[0_2px_16px_rgba(242,238,231,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_6px_28px_rgba(242,238,231,0.18)] focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Coba Gratis Sekarang
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex w-fit items-center rounded-xl border border-kapur/15 px-9 py-4 text-[15px] font-semibold text-kapur transition-all duration-200 hover:border-kapur/30 hover:bg-kapur/[0.06] focus:outline-none focus:ring-2 focus:ring-focus-ring"
              >
                Jadwalkan Demo
              </a>
              <p className="mt-3 text-xs tracking-wide text-text-on-dark-muted">
                Tanpa kartu kredit &middot; Setup dibimbing &middot; Batal kapan saja
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
