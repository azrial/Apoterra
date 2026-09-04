import { ApoterraLogo } from "../icons/ApoterraLogo";

const FOOTER_LINKS = {
  Produk: ["Fitur", "Harga", "Keamanan"],
  Perusahaan: ["Tentang Kami", "Karir", "Blog"],
  Dukungan: ["Pusat Bantuan", "Hubungi Kami", "Status Sistem"],
};

export function Footer() {
  return (
    <footer className="relative bg-arang py-24 text-kapur">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-arang via-arang to-arat-warm/50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <ApoterraLogo className="h-8 w-8" />
              <span className="font-serif text-xl font-bold tracking-tight">
                Apoterra
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-text-on-dark">
              Fondasi digital yang menumbuhkan apotek secara organik — berakar
              kokoh dan bertumbuh tenang.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-5 text-xs font-medium text-kapur/40">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-on-dark transition-colors hover:text-kapur"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-10 sm:flex-row">
          <p className="text-xs text-text-on-dark">
            &copy; {new Date().getFullYear()} Apoterra. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-on-dark transition-colors hover:text-kapur">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs text-text-on-dark transition-colors hover:text-kapur">
              Syarat Layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
