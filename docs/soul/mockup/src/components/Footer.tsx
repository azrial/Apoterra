import { ApoterraLogo } from "../icons/ApoterraLogo";

const FOOTER_LINKS = {
  Produk: ["Fitur", "Harga", "Keamanan"],
  Perusahaan: ["Tentang Kami", "Karir", "Blog"],
  Dukungan: ["Pusat Bantuan", "Hubungi Kami", "Status Sistem"],
};

export function Footer() {
  return (
    <footer className="bg-arang py-16 text-kapur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <ApoterraLogo className="h-7 w-7" />
              <span className="font-serif text-lg font-bold tracking-tight">
                Apoterra
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-text-on-dark">
              Fondasi digital yang menumbuhkan apotek secara organik — berakar
              kokoh dan bertumbuh tenang.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold tracking-wider uppercase text-kapur/50">
                {category}
              </h4>
              <ul className="space-y-2.5">
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

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
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
