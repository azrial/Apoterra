// Vision & Mission section — heading, big vision quote + numbered mission items.

import Section from "./Section";
import { VISION_MISSION } from "../data/content";

export default function VisionMission() {
  return (
    <Section id="visi" background="surface">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-arang md:text-4xl">
          {VISION_MISSION.heading}
        </h2>
      </div>

      {/* Vision — large quote */}
      <blockquote className="mx-auto mb-14 max-w-3xl border-l-4 border-tanah pl-6">
        <p className="font-serif text-2xl font-medium leading-relaxed text-arang italic md:text-3xl">
          &ldquo;{VISION_MISSION.vision}&rdquo;
        </p>
      </blockquote>

      {/* Mission — numbered list */}
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-6 text-center font-serif text-xl font-semibold text-arang">
          Misi Kami
        </h3>
        <ol className="space-y-5">
          {VISION_MISSION.mission.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-arang-hangat font-sans text-sm font-bold text-kapur">
                {index + 1}
              </span>
              <p className="pt-1 text-base leading-relaxed text-text-secondary">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
