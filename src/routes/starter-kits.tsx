import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/CtaLink";
import { FinalCTA } from "@/components/site/FinalCTA";
import { LearningLayer } from "@/components/site/LearningLayer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote } from "@/components/site/StatusTag";
import { StarterKitShowcase } from "@/components/site/StarterKitShowcase";

const title = "Starter Kits — Waste2Light";
const description =
  "Hands-on renewable-energy and electronics kits: solar cells, a mini wind turbine, multimeter, DC motor, jumper wires and practical guidance.";

export const Route = createFileRoute("/starter-kits")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StarterKitsPage,
});

function StarterKitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hardware"
        title="Start with five kits. Build from there."
        lede="Five Waste2Light Green Energy Kits form the starting inventory of a Green Energy Corner — enough for a class to work in small groups with real components."
      >
        <CtaLink to="/contact">Request kit information</CtaLink>
      </PageHero>

      <StarterKitShowcase showCta={false} />

      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            eyebrow="Specifications"
            title="What we publish, and what we don't."
            lede="Component lists come from the programme documentation. Anything beyond that waits for confirmation."
          />
          <div className="mt-10 space-y-4">
            <PlaceholderNote>
              Electrical ratings, quantities per kit and full technical specifications.
            </PlaceholderNote>
            <PlaceholderNote>Pricing, lead times and ordering process.</PlaceholderNote>
            <PlaceholderNote>Warranty, replacement parts and servicing terms.</PlaceholderNote>
          </div>
        </div>
      </section>

      <LearningLayer />
      <FinalCTA />
    </>
  );
}
