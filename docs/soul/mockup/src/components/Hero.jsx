// Hero section — eyebrow tagline, headline, narrative, promise, dual CTAs, prominent logo.

import Logo from "./Logo";
import Button from "./Button";
import Section from "./Section";
import { HERO } from "../data/content";

export default function Hero() {
  return (
    <Section id="beranda" className="text-center">
      {/* Prominent logo */}
      <div className="mx-auto mb-8 flex justify-center">
        <Logo className="h-20 w-20 md:h-24 md:w-24" />
      </div>

      {/* Eyebrow tagline */}
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-tanah">
        {HERO.tagline}
      </p>

      {/* Headline */}
      <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-tight text-arang md:text-5xl">
        {HERO.headline}
      </h1>

      {/* Narrative */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
        {HERO.narrative}
      </p>

      {/* Promise — highlighted line */}
      <p className="mx-auto mt-4 max-w-2xl rounded-lg border-l-4 border-tanah bg-tanah-tint-1 px-5 py-3 text-base font-medium text-arang italic">
        {HERO.promise}
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="primary" className="px-8 py-3 text-base">
          {HERO.primaryCta}
        </Button>
        <Button
          variant="secondary"
          className="px-8 py-3 text-base"
          onClick={() =>
            document.getElementById("fitur")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {HERO.secondaryCta}
        </Button>
      </div>
    </Section>
  );
}
