// Features section — grid of feature cards mapped from persona pain points.

import Icon from "./Icon";
import Section from "./Section";
import { FEATURES } from "../data/content";

export default function Features() {
  return (
    <Section id="fitur">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          Fitur Inti
        </h2>
        <p className="mt-3 text-text-secondary">
          Solusi langsung untuk setiap tantangan operasional apotek Anda.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.id}
            className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-tanah hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-arang-hangat text-kapur transition-colors group-hover:bg-arang-hangat-hover">
              <Icon name={feature.iconName} className="h-6 w-6" ariaLabel={feature.title} />
            </div>
            <h3 className="mb-2 font-serif text-lg font-semibold text-arang">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
