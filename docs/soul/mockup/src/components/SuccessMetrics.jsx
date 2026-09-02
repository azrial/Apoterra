// Success / Metrics section — customer outcomes checklist + growth narrative.

import Icon from "./Icon";
import Section from "./Section";
import { SUCCESS_METRICS, SUCCESS_METRICS_HEADING } from "../data/content";

export default function SuccessMetrics() {
  return (
    <Section id="sukses">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          {SUCCESS_METRICS_HEADING.heading}
        </h2>
        <p className="mt-3 text-text-secondary">
          {SUCCESS_METRICS_HEADING.description}
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

        {/* Growth narrative */}
        <div className="rounded-xl border border-border bg-surface p-8">
          <h3 className="mb-6 font-serif text-xl font-semibold text-arang">
            {SUCCESS_METRICS.business.heading}
          </h3>
          <p className="text-base leading-relaxed text-text-secondary">
            {SUCCESS_METRICS.business.description}
          </p>
        </div>
      </div>
    </Section>
  );
}
