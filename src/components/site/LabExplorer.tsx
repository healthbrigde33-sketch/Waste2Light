import { useState } from "react";
import { labZones } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

/** Zone rectangles laid out as an abstract plan — an experience, not a floor-plan document. */
const geometry: Record<string, { x: number; y: number; w: number; h: number }> = {
  teaching: { x: 4, y: 4, w: 46, h: 26 },
  practical: { x: 4, y: 34, w: 60, h: 38 },
  kit: { x: 68, y: 34, w: 28, h: 38 },
  demo: { x: 54, y: 4, w: 42, h: 26 },
  display: { x: 4, y: 76, w: 44, h: 20 },
  maker: { x: 52, y: 76, w: 44, h: 20 },
};

export function LabExplorer() {
  const [active, setActive] = useState(labZones[0]!.id);
  const zone = labZones.find((z) => z.id === active)!;

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader
        eyebrow="Inside the lab"
        title="A space designed for making."
        lede="The Green Energy Corner is organised into zones so a class can move from explanation to build to demonstration without rearranging the room."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_minmax(0,1fr)] lg:gap-14">
        <div className="relative aspect-[4/3] w-full rounded-sm border border-hairline bg-surface p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 hairline-grid opacity-50" aria-hidden="true" />
          <div className="relative h-full w-full">
            {labZones.map((z) => {
              const g = geometry[z.id]!;
              const isActive = z.id === active;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setActive(z.id)}
                  onMouseEnter={() => setActive(z.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "absolute rounded-sm border p-2.5 text-left transition-all duration-300 sm:p-3",
                    isActive
                      ? "border-solar bg-solar/10 text-foreground"
                      : "border-border bg-background/40 text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                  )}
                  style={{
                    left: `${g.x}%`,
                    top: `${g.y}%`,
                    width: `${g.w}%`,
                    height: `${g.h}%`,
                  }}
                >
                  <span className="block text-[0.625rem] font-medium uppercase leading-tight tracking-[0.12em] sm:text-[0.6875rem]">
                    {z.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-solar">
            Zone
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">{zone.name}</h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{zone.body}</p>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:hidden">
            {labZones.map((z) => (
              <li key={z.id}>
                <button
                  type="button"
                  onClick={() => setActive(z.id)}
                  className={cn(
                    "w-full rounded-full border px-3 py-2 text-left text-xs transition-colors",
                    z.id === active
                      ? "border-solar text-solar"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {z.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
