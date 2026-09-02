// Navbar / Header — responsive with mobile toggle.
// Logo + product name, nav links (Indonesian), primary CTA.

import { useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import Button from "./Button";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-kapur/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        {/* Brand */}
        <a href="#beranda" className="flex items-center gap-2.5" aria-label="Apoterra — Beranda">
          <Logo className="h-8 w-8" />
          <span className="font-serif text-xl font-bold tracking-tight text-arang">
            Apoterra
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-arang"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" onClick={() => document.getElementById("fitur")?.scrollIntoView({ behavior: "smooth" })}>
            Coba Sekarang
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-arang md:hidden"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-kapur px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Navigasi mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-tanah-tint-1 hover:text-arang"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  setMobileOpen(false);
                  document.getElementById("fitur")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Coba Sekarang
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
