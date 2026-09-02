// Success / Metrics section — customer outcomes checklist + business priority list.

import Icon from "./Icon";
import Section from "./Section";
import { SUCCESS_METRICS } from "../data/content";

export default function SuccessMetrics() {
  return (
    <Section id="sukses">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          Ukuran Kesuksesan
        </h2>
        <p className="mt-3 text-text-secondary">
          Apa yang menandakan Apoterra berhasil — bagi pelanggan dan bagi bisnis.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Customer success — checklist */}
        <div className="rounded-xl border border-border bg-surface p-8">
          <h3 className="mb-6 font-serif text-xl font-semibold text-arang">
            {SUCCESS_METRICS.customer.heading}
          </h3>
          <ul className="space-y-4">
            {SUCCESS_METRICS.customer.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-bg text-success">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business success — numbered priorities */}
        <div className="rounded-xl border border-border bg-surface p-8">
          <h3 className="mb-6 font-serif text-xl font-semibold text-arang">
            {SUCCESS_METRICS.business.heading}
          </h3>
          <ol className="space-y-5">
            {SUCCESS_METRICS.business.priorities.map((priority) => (
              <li key={priority.rank} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tanah-tint-2 font-sans text-sm font-bold text-arang">
                  {priority.rank}
                </span>
                <div>
                  <p className="font-semibold text-arang">{priority.label}</p>
                  <p className="text-sm text-text-secondary">
                    {priority.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
