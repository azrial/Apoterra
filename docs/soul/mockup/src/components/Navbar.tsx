import { useState } from "react";
import { ApoterraLogo } from "../icons/ApoterraLogo";

const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-kapur/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <ApoterraLogo className="h-7 w-7" />
          <span className="font-serif text-lg font-bold tracking-tight text-arang">
            Apoterra
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-arang/[0.04] hover:text-arang"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <a
            href="#mulai"
            className="inline-flex items-center rounded-lg bg-arang px-5 py-2 text-sm font-semibold text-kapur transition-colors hover:bg-arat-warm focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Mulai Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-arang transition-colors hover:bg-arang/[0.06] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-kapur px-6 pb-6 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-base font-medium text-text-secondary transition-colors hover:bg-arang/[0.04] hover:text-arang"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#mulai"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-arang px-5 py-3 text-sm font-semibold text-kapur transition-colors hover:bg-arat-warm"
              onClick={() => setMobileOpen(false)}
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
