import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-energy.jpg";
import labImage from "@/assets/lab-classroom.jpg";
import { CtaLink } from "@/components/site/CtaLink";
import { EcosystemCards } from "@/components/site/EcosystemCards";
import { EnergyFlowVisual } from "@/components/site/EnergyFlowVisual";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GrowthPath } from "@/components/site/GrowthPath";
import { InnovationAccount } from "@/components/site/InnovationAccount";
import { LabExplorer } from "@/components/site/LabExplorer";
import { LearningJourney } from "@/components/site/LearningJourney";
import { LearningLayer } from "@/components/site/LearningLayer";
import { Reveal } from "@/components/site/Reveal";
import { SchoolResponsibilities } from "@/components/site/SchoolResponsibilities";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";
import { StarterKitShowcase } from "@/components/site/StarterKitShowcase";
import { technologyAreas } from "@/content/site";

const title = "Waste2Light — Renewable Energy & Innovation";
const description =
  "Waste2Light is building practical pathways into renewable energy, technology and innovation — from energy solutions to hands-on learning experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="on-dark relative isolate flex min-h-[92svh] items-end overflow-hidden bg-forest">
        <img
          src={heroImage}
          alt="Close view of a solar panel array with luminous energy flowing across the cells and a wind turbine in the distance"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
          style={{ animation: "slow-drift 28s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/35"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-30" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-28">
          <Eyebrow>Renewable energy · Innovation</Eyebrow>
          <h1 className="mt-7 max-w-4xl text-balance-tight text-[2.5rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[5rem]">
            Building a cleaner future through renewable energy and innovation.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Waste2Light is building practical pathways into renewable energy, technology and
            innovation — from energy solutions to hands-on learning experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink to="/technology">Explore What We're Building</CtaLink>
            <CtaLink to="/green-energy-corner" variant="outline">
              Explore Green Energy Corner
            </CtaLink>
          </div>
        </div>
      </section>

      {/* COMPANY STATEMENT */}
      <section className="invert-band">
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
          <Reveal className="grid gap-12 lg:grid-cols-[1.25fr_minmax(0,1fr)] lg:gap-24">
            <h2 className="text-balance-tight text-3xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              Energy is changing. We want to help build what comes next.
            </h2>
            <div className="max-w-md self-end">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Waste2Light works at the point where renewable energy meets practical engineering. Our
                focus is on what can actually be built, tested and used — clean-energy technology,
                applied innovation, and the people who will carry that work forward.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Everything published here reflects what Waste2Light has confirmed. Where detail is
                still being finalised, we say so rather than fill the gap.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <EcosystemCards />

      {/* TECHNOLOGY */}
      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            eyebrow="Technology"
            title="From energy ideas to practical innovation."
            lede="Four directions define the technical ground Waste2Light works on."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {technologyAreas.map((area, i) => (
              <Reveal
                key={area.id}
                delay={i * 60}
                className="group flex flex-col bg-background p-7 transition-colors hover:bg-elevated lg:p-8"
              >
                <span className="font-mono text-xs tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink to="/technology" variant="outline">
              Explore Technology
            </CtaLink>
          </div>
        </div>
      </section>

      {/* SIGNATURE VISUAL */}
      <section className="invert-band relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/4 top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-energy/15 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader eyebrow="Signature" title="See energy differently." align="center" />
          <Reveal className="mt-16">
            <EnergyFlowVisual />
          </Reveal>
        </div>
      </section>

      {/* GREEN ENERGY CORNER FEATURE */}
      <section className="relative border-y border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-32">
          <Reveal className="overflow-hidden rounded-sm border border-hairline">
            <img
              src={labImage}
              alt="Students in lab coats building solar and wind experiments on practical benches while a teacher facilitates"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.04]"
            />
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Flagship programme"
              title="Bring renewable energy into the classroom."
              lede="The Waste2Light Green Energy Corner is a practical STEM and renewable-energy learning space where students learn by building, measuring, testing, troubleshooting and presenting projects."
            />
            <div className="mt-9">
              <CtaLink to="/green-energy-corner">Explore the Green Energy Corner</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <LearningJourney />
      <StarterKitShowcase />
      <LearningLayer />
      <LabExplorer />
      <GrowthPath />
      <SchoolResponsibilities />
      <InnovationAccount />

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="About Waste2Light"
          title="Built with a bigger vision for clean energy."
          lede="A renewable-energy and innovation company working across technology, hardware and practical learning."
        />
        <div className="mt-10">
          <CtaLink to="/about" variant="outline">
            Meet Waste2Light
          </CtaLink>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
