import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/CtaLink";
import { EnergyFlowVisual } from "@/components/site/EnergyFlowVisual";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote, StatusTag } from "@/components/site/StatusTag";
import { technologyAreas } from "@/content/site";

const title = "Technology — Waste2Light";
const description =
  "Waste2Light's renewable-energy direction across solar, wind, energy systems and applied innovation.";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="From energy ideas to practical innovation."
        lede="Waste2Light works across solar, wind, energy systems and applied innovation. What follows describes direction and confirmed activity — not claims about commercial deployment."
      >
        <CtaLink to="/contact">Partner With Us</CtaLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline lg:grid-cols-2">
          {technologyAreas.map((area, i) => (
            <Reveal
              key={area.id}
              delay={i * 60}
              className="flex flex-col bg-background p-8 lg:p-12"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-solar">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <StatusTag status={area.status} />
              </div>
              <h2 className="mt-10 font-display text-2xl font-bold tracking-tight lg:text-3xl">
                {area.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {area.summary}
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">{area.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader eyebrow="Signature" title="See energy differently." align="center" />
          <Reveal className="mt-16">
            <EnergyFlowVisual />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="Content status"
          title="What we will publish here next."
          lede="This page grows as Waste2Light confirms technical detail."
        />
        <div className="mt-10 space-y-4">
          <PlaceholderNote>
            Technical specifications for any Waste2Light-developed systems.
          </PlaceholderNote>
          <PlaceholderNote>
            Deployment case studies, installation sites and measured outcomes.
          </PlaceholderNote>
          <PlaceholderNote>
            Certifications, standards compliance and testing partners.
          </PlaceholderNote>
          <PlaceholderNote>Technology partners and supply relationships.</PlaceholderNote>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
