import { ApoterraLogo } from "../icons/ApoterraLogo";

const FOOTER_LINKS = {
  Produk: ["Fitur", "Harga", "Keamanan"],
  Perusahaan: ["Tentang Kami", "Karir", "Blog"],
  Dukungan: ["Pusat Bantuan", "Hubungi Kami", "Status Sistem"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-arang py-16 text-kapur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <ApoterraLogo className="h-7 w-7" />
              <span className="font-serif text-lg font-bold tracking-tight">
                Apoterra
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-on-dark">
              Fondasi digital yang menumbuhkan apotek secara organik — berakar
              kokoh dan bertumbuh tenang.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-kapur/80">
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

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
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
