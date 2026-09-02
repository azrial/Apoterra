// Principles section — 3 core principles + highlighted standards callout.

import Section from "./Section";
import { PRINCIPLES, PRINCIPLES_HEADING } from "../data/content";

export default function Principles() {
  return (
    <Section id="prinsip" background="surface">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          {PRINCIPLES_HEADING.heading}
        </h2>
        <p className="mt-3 text-text-secondary">
          {PRINCIPLES_HEADING.description}
        </p>
      </div>

      {/* Core principles */}
      <div className="grid gap-6 md:grid-cols-3">
        {PRINCIPLES.core.map((principle) => (
          <article
            key={principle.id}
            className="rounded-xl border border-border bg-kapur p-6"
          >
            <h3 className="mb-2 font-serif text-lg font-semibold text-arang">
              {principle.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {principle.description}
            </p>
          </article>
        ))}
      </div>

      {/* Standards callout */}
      <div className="mt-12 rounded-2xl border-2 border-tanah bg-tanah-tint-1 p-8 text-center">
        <h3 className="mb-4 font-serif text-2xl font-bold text-arang">
          {PRINCIPLES.dualStandards.heading}
        </h3>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {PRINCIPLES.dualStandards.items.map((item) => (
            <span
              key={item}
              className="inline-block rounded-full bg-surface px-6 py-2 text-base font-bold text-arang-hangat shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-secondary">
          {PRINCIPLES.dualStandards.note}
        </p>
      </div>
    </Section>
  );
}
