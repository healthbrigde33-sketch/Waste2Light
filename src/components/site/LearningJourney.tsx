import { useState } from "react";
import { journey } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export function LearningJourney() {
  const [active, setActive] = useState(0);
  const stage = journey[active]!;

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader
        eyebrow="How students learn"
        title="Discover. Build. Test. Innovate."
        lede="Four stages that repeat every term, each one grounded in physical work rather than theory alone."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.15fr] lg:gap-16">
        <ol className="flex flex-col" role="tablist" aria-label="Learning stages">
          {journey.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                role="tab"
                id={`stage-tab-${s.id}`}
                aria-selected={i === active}
                aria-controls={`stage-panel-${s.id}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group flex w-full items-baseline gap-5 border-t border-hairline py-6 text-left transition-colors",
                  i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs tabular-nums transition-colors",
                    i === active ? "text-brand" : "text-muted-foreground",
                  )}
                >
                  0{i + 1}
                </span>
                <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {s.label}
                </span>
                <span
                  className={cn(
                    "ml-auto h-px flex-1 self-center bg-brand transition-transform duration-500 origin-left",
                    i === active ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
          <li className="border-t border-hairline" aria-hidden="true" />
        </ol>

        <div
          role="tabpanel"
          id={`stage-panel-${stage.id}`}
          aria-labelledby={`stage-tab-${stage.id}`}
          className="relative overflow-hidden rounded-sm border border-hairline bg-surface p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/10 blur-3xl transition-all duration-700"
            style={{ transform: `translateY(${active * 22}px)` }}
            aria-hidden="true"
          />
          <div className="relative">
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-brand">
              {stage.label}
            </span>
            <p className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {stage.heading}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{stage.body}</p>

            <div className="mt-12 flex gap-1.5" aria-hidden="true">
              {journey.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-0.5 flex-1 rounded-full transition-colors duration-500",
                    i <= active ? "bg-brand" : "bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
