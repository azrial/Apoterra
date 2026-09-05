import { useState, useEffect } from "react";
import { ApoterraLogo } from "../icons/ApoterraLogo";

const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-kapur/80 py-2.5 shadow-[0_1px_3px_rgba(37,35,30,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-kapur/60 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <ApoterraLogo className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-serif text-lg font-bold tracking-tight text-arang">
            Apoterra
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-md px-3.5 py-2 text-[13px] font-medium tracking-wide text-text-secondary transition-colors hover:text-arang"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#mulai"
            className="inline-flex items-center rounded-lg bg-arang px-5 py-2 text-[13px] font-semibold tracking-wide text-kapur transition-all hover:bg-arat-warm hover:shadow-md hover:shadow-arang/10 focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Mulai Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-arang transition-colors hover:bg-border md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
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
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-kapur/95 px-6 pb-6 pt-4 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-border/50 hover:text-arang"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#mulai"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-arang px-4 py-3 text-sm font-semibold text-kapur transition-colors hover:bg-arat-warm"
              onClick={() => setMobileOpen(false)}
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
