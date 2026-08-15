import { growthPath } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function GrowthPath() {
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="The growth path"
          title="Start small. Build something bigger."
          lede="The first five kits are the beginning, not the destination. Each level adds capability to the same room."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
          {growthPath.map((step, i) => (
            <Reveal
              as="li"
              key={step.level}
              delay={i * 70}
              className="group relative flex flex-col bg-background p-6 transition-colors duration-300 hover:bg-elevated lg:p-7"
            >
              <span className="font-mono text-xs tabular-nums text-brand">{step.level}</span>
              <h3 className="mt-5 font-display text-lg font-bold leading-tight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              <span
                className="mt-auto block h-px w-full origin-left scale-x-0 bg-brand pt-8 transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
