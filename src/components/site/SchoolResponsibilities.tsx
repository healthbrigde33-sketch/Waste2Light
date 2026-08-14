import { Check } from "lucide-react";
import { providedBySchool, providedByWaste2Light } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function Column({ title, items, accent }: { title: string; items: string[]; accent: boolean }) {
  return (
    <Reveal className="rounded-sm border border-hairline bg-surface p-7 lg:p-9">
      <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <Check
              className={accent ? "mt-0.5 size-4 shrink-0 text-solar" : "mt-0.5 size-4 shrink-0 text-leaf"}
              aria-hidden="true"
            />
            <span className="text-foreground/85">{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function SchoolResponsibilities({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader
        eyebrow="For schools"
        title="Built with schools. Designed to grow with them."
        lede="A clear split of responsibilities keeps setup realistic and the programme sustainable."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Column title="Waste2Light provides" items={providedByWaste2Light} accent />
        <Column title="The school provides" items={providedBySchool} accent={false} />
      </div>

      {showCta && (
        <div className="mt-12">
          <CtaLink to="/for-schools" variant="outline">
            See School Requirements
          </CtaLink>
        </div>
      )}
    </section>
  );
}
