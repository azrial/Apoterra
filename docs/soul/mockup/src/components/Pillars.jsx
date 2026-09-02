// Pillars section — 3 brand pillar cards with custom SVG icons.

import Icon from "./Icon";
import Section from "./Section";
import { PILLARS, PILLARS_HEADING } from "../data/content";

export default function Pillars() {
  return (
    <Section id="pilar" background="surface">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          {PILLARS_HEADING.heading}
        </h2>
        <p className="mt-3 text-text-secondary">
          {PILLARS_HEADING.description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.id}
            className="rounded-xl border border-border bg-kapur p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-tanah-tint-1 text-tanah-shade">
              <Icon name={pillar.iconName} className="h-7 w-7" ariaLabel={pillar.title} />
            </div>
            <h3 className="mb-2 font-serif text-xl font-semibold text-arang">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
