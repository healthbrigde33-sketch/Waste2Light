import { createFileRoute } from "@tanstack/react-router";
import labImage from "@/assets/lab-classroom.jpg";
import { CtaLink } from "@/components/site/CtaLink";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GrowthPath } from "@/components/site/GrowthPath";
import { InnovationAccount } from "@/components/site/InnovationAccount";
import { LabExplorer } from "@/components/site/LabExplorer";
import { LearningJourney } from "@/components/site/LearningJourney";
import { LearningLayer } from "@/components/site/LearningLayer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SchoolResponsibilities } from "@/components/site/SchoolResponsibilities";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote } from "@/components/site/StatusTag";
import { StarterKitShowcase } from "@/components/site/StarterKitShowcase";
import { implementationChecklist } from "@/content/site";

const title = "Green Energy Corner — Waste2Light";
const description =
  "A practical STEM and renewable-energy learning space where students build, measure, test, troubleshoot and present real projects.";

export const Route = createFileRoute("/green-energy-corner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GreenEnergyCornerPage,
});

function GreenEnergyCornerPage() {
  return (
    <>
      <PageHero
        eyebrow="A Waste2Light programme"
        title="Bring renewable energy into the classroom."
        lede="The Waste2Light Green Energy Corner is a practical STEM and renewable-energy learning space where students learn by building, measuring, testing, troubleshooting and presenting projects."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink to="/contact">Request the programme</CtaLink>
          <CtaLink to="/for-schools" variant="outline">
            See School Requirements
          </CtaLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="overflow-hidden rounded-sm border border-hairline">
            <img
              src={labImage}
              alt="Students working with solar panels, mini wind turbines and multimeters in a school renewable energy laboratory"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <SectionHeader
            eyebrow="What it is"
            title="A room where energy stops being theory."
            lede="Rather than a demonstration cupboard, the Green Energy Corner is a working space: kits on benches, instruments in hand, projects on display. Students generate electricity, measure it, and find out what happens when a circuit is wrong."
          />
        </div>
      </section>

      <LearningJourney />
      <LabExplorer />
      <StarterKitShowcase />
      <LearningLayer />

      {/* STUDENT PROJECTS */}
      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="Student projects"
          title="The work the room produces."
          lede="Every cycle ends with student projects built, demonstrated and documented."
        />
        <div className="mt-10">
          <PlaceholderNote>
            Student project photography, titles and write-ups from participating schools, to be added
            as the first cohorts complete their practicals.
          </PlaceholderNote>
        </div>
      </section>

      <GrowthPath />
      <SchoolResponsibilities />
      <InnovationAccount />

      {/* SETUP REQUIREMENTS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="Setup requirements"
          title="Eleven steps from empty room to first practical."
          lede="The implementation checklist used with every school."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {implementationChecklist.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 35}
              className="flex gap-4 bg-background p-6 transition-colors hover:bg-elevated"
            >
              <span className="font-mono text-[0.6875rem] tabular-nums text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed">{item}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      <FinalCTA />
    </>
  );
}
