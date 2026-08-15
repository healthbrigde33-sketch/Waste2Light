import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { CtaLink } from "@/components/site/CtaLink";
import { EcosystemCards } from "@/components/site/EcosystemCards";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote } from "@/components/site/StatusTag";
import { brand, founder } from "@/content/site";

const title = "About — Waste2Light";
const description =
  "Waste2Light is a renewable-energy and innovation company working across clean-energy technology, hardware and practical learning.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built with a bigger vision for clean energy."
        lede={brand.shortAbout}
      >
        <CtaLink to="/contact">Partner With Us</CtaLink>
      </PageHero>

      <section className="invert-band">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
          <Reveal>
            <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Mission
            </h2>
            <p className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              To make renewable energy something people can build, understand and use — not just read
              about.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Vision
            </h2>
            <p className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              A generation of engineers and innovators who grew up with clean-energy technology in
              their hands.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Mission and vision statements above reflect Waste2Light's stated direction and are
              editable content — replace with the official wording when confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader eyebrow="Founder" title="The person behind Waste2Light." />
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-20">
          <Reveal className="relative flex aspect-[4/5] items-center justify-center rounded-sm border border-hairline bg-surface">
            <div className="pointer-events-none absolute inset-0 hairline-grid opacity-50" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-4 text-center">
              <User className="size-10 text-muted-foreground" aria-hidden="true" />
              <p className="max-w-[14rem] text-xs leading-relaxed text-muted-foreground">
                Founder portrait to be supplied by Waste2Light.
              </p>
            </div>
          </Reveal>

          <div className="self-center">
            {founder.name ? (
              <>
                <h3 className="font-display text-3xl font-bold tracking-tight">{founder.name}</h3>
                <p className="mt-2 text-sm text-brand">{founder.role}</p>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>
              </>
            ) : (
              <>
                <h3 className="font-display text-3xl font-bold tracking-tight text-muted-foreground">
                  Founder name
                </h3>
                <p className="mt-2 text-sm text-brand">{founder.role}</p>
                <div className="mt-8 max-w-lg">
                  <PlaceholderNote>
                    Founder name, portrait and editorial biography to be supplied. This section is
                    wired to the site content layer and will render as soon as the details are added.
                  </PlaceholderNote>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <EcosystemCards />

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            eyebrow="Company information"
            title="Details to be confirmed."
            lede="Published only once verified by Waste2Light."
          />
          <div className="mt-10 space-y-4">
            <PlaceholderNote>Company history, founding date and registration details.</PlaceholderNote>
            <PlaceholderNote>Team members and organisational structure.</PlaceholderNote>
            <PlaceholderNote>Partnerships, customers and collaborators.</PlaceholderNote>
            <PlaceholderNote>Impact figures and measured outcomes.</PlaceholderNote>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
