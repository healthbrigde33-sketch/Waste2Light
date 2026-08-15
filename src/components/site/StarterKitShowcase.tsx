import kitImage from "@/assets/kit-exploded.jpg";
import { kitComponents } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function StarterKitShowcase({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader
        eyebrow="Starter kits"
        title="Start with five kits. Build from there."
        lede="Each Green Energy Kit holds the components a class needs to generate, measure and use electricity for the first time."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center lg:gap-20">
        <Reveal className="relative overflow-hidden rounded-sm border border-hairline bg-surface">
          <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40" aria-hidden="true" />
          <img
            src={kitImage}
            alt="Renewable energy kit components arranged in an exploded view: solar cells, mini wind turbine, multimeter, DC motor, jumper wires, breadboard and LED lantern"
            width={1600}
            height={1200}
            loading="lazy"
            className="relative w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
          />
        </Reveal>

        <div>
          <ul className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline">
            {kitComponents.map((c, i) => (
              <Reveal
                as="li"
                key={c.name}
                delay={i * 45}
                className="group flex items-baseline gap-4 bg-background px-5 py-4 transition-colors hover:bg-elevated"
              >
                <span className="font-mono text-[0.6875rem] tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{c.name}</span>
                  <span className="block text-sm text-muted-foreground">{c.note}</span>
                </span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Component list as documented in the Green Energy Corner programme material. Quantities,
            ratings and full specifications are published once confirmed by Waste2Light.
          </p>
          {showCta && (
            <div className="mt-8">
              <CtaLink to="/starter-kits" variant="outline">
                Explore Starter Kits
              </CtaLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
