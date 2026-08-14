import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const supports = [
  "Replacement components",
  "STEM materials",
  "Repairs",
  "Student projects",
  "Future innovation activities",
];

export function InnovationAccount() {
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="Innovation account"
          title="A lab that can keep growing."
          lede="Approved practical activities may contribute to a school Innovation Account — a small internal fund that keeps the room stocked and moving after the first term."
        />

        <Reveal className="self-center">
          <ul className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline">
            {supports.map((s, i) => (
              <li key={s} className="flex items-baseline gap-4 bg-background px-5 py-4">
                <span className="font-mono text-[0.6875rem] tabular-nums text-solar">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Contribution structure and commercial terms are agreed directly with each school and are
            not published here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
