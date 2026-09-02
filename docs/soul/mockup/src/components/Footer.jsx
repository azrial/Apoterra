// Footer — logo, tagline, link columns, copyright.

import Logo from "./Logo";
import { FOOTER } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-arang text-kapur">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-serif text-xl font-bold tracking-tight">
                Apoterra
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-kapur/70">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-kapur/50">
                {column.heading}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-kapur/70 transition-colors hover:text-kapur"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-kapur/10 pt-6 text-center">
          <p className="text-xs text-kapur/50">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
