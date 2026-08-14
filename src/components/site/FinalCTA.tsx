import ctaImage from "@/assets/cta-landscape.jpg";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImage}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1008}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/55"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-32 lg:px-8 lg:py-44">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance-tight text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
            Let's build what comes next.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you're a school, organisation, technology partner or potential collaborator, start
            a conversation with Waste2Light.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink to="/contact">Partner With Us</CtaLink>
            <CtaLink to="/projects" variant="outline">
              Explore Our Work
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
