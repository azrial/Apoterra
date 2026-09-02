// Personas section — two user group cards with SVG icons.

import Icon from "./Icon";
import Section from "./Section";
import { PERSONAS } from "../data/content";

export default function Personas() {
  return (
    <Section id="persona">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          Siapa yang Dilayani
        </h2>
        <p className="mt-3 text-text-secondary">
          Apoterra dirancang untuk dua kelompok pengguna utama.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {PERSONAS.map((persona) => (
          <article
            key={persona.id}
            className="rounded-xl border border-border bg-surface p-8"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-arang text-kapur">
              <Icon name={persona.iconName} className="h-8 w-8" ariaLabel={persona.role} />
            </div>

            <h3 className="mb-2 font-serif text-2xl font-semibold text-arang">
              {persona.role}
            </h3>
            <p className="mb-4 text-base font-medium text-arang-hangat">
              {persona.summary}
            </p>

            {/* Owner-specific types */}
            {persona.types && (
              <ul className="space-y-2">
                {persona.types.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tanah" />
                    {type}
                  </li>
                ))}
              </ul>
            )}

            {/* Staff-specific device note */}
            {persona.devices && (
              <p className="text-sm leading-relaxed text-text-secondary">
                {persona.devices}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
