import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/CtaLink";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GrowthPath } from "@/components/site/GrowthPath";
import { LabExplorer } from "@/components/site/LabExplorer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SchoolResponsibilities } from "@/components/site/SchoolResponsibilities";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote } from "@/components/site/StatusTag";
import { implementationChecklist } from "@/content/site";

const title = "For Schools — Waste2Light Green Energy Corner";
const description =
  "Requirements, layout, safety, responsibilities and the implementation checklist for setting up a Green Energy Corner in your school.";

export const Route = createFileRoute("/for-schools")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ForSchoolsPage,
});

const requirements = [
  {
    title: "Who it is for",
    items: [
      "Primary schools running introductory practical science",
      "Secondary schools building STEM and electronics capability",
      "Institutions preparing students for engineering pathways",
    ],
  },
  {
    title: "Minimum laboratory requirements",
    items: [
      "A dedicated, secure room that can be reserved for practical work",
      "Room dimensions recorded and photographed before setup",
      "Space for a teaching area and separate practical benches",
    ],
  },
  {
    title: "Furniture",
    items: [
      "Practical work tables suitable for group work",
      "Seating for a full class",
      "Lockable storage for kits and components",
      "A display surface or shelving for finished projects",
    ],
  },
  {
    title: "Electrical & digital infrastructure",
    items: [
      "Working sockets serving the practical benches",
      "Adequate lighting for detailed component work",
      "Internet access and a display screen where possible",
    ],
  },
  {
    title: "Safety",
    items: [
      "Safety provisions in place before the first practical",
      "Supervised handling of components and instruments",
      "Clear procedures for storage and end-of-session checks",
    ],
  },
];

function ForSchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For schools"
        title="Built with schools. Designed to grow with them."
        lede="A practical guide for administrators: what the room needs, what Waste2Light supplies, and how the first practical session gets scheduled."
      >
        <CtaLink to="/contact">Request the programme</CtaLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="Requirements"
          title="What the room needs."
          lede="Grounded in the Green Energy Corner setup guidelines."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline lg:grid-cols-2">
          {requirements.map((group, i) => (
            <Reveal key={group.title} delay={i * 55} className="bg-background p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold tracking-tight">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-solar" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <LabExplorer />
      <SchoolResponsibilities showCta={false} />

      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            eyebrow="Implementation"
            title="The setup checklist."
            lede="Worked through together, in order, before the room opens to students."
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {implementationChecklist.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 35}
                className="flex gap-4 bg-background p-6 transition-colors hover:bg-elevated"
              >
                <span className="font-mono text-[0.6875rem] tabular-nums text-solar">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <GrowthPath />

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="Still to be confirmed"
          title="Commercial and scheduling detail."
          lede="Discussed directly with each school rather than published."
        />
        <div className="mt-10 space-y-4">
          <PlaceholderNote>Programme pricing and contribution structure.</PlaceholderNote>
          <PlaceholderNote>Delivery timelines and regional availability.</PlaceholderNote>
          <PlaceholderNote>Teacher orientation schedule and duration.</PlaceholderNote>
        </div>
        <div className="mt-10">
          <CtaLink to="/contact">Start the conversation</CtaLink>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
