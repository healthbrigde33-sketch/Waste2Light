import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ecosystem } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { StatusTag } from "./StatusTag";

export function EcosystemCards() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeader
        eyebrow="The ecosystem"
        title="One vision. Multiple ways to build with clean energy."
        lede="Waste2Light works across technology, learning and hardware — each strand feeding the others."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
        {ecosystem.map((item, i) => (
          <Reveal key={item.id} delay={i * 70} className="bg-background">
            <Link
              to={item.to}
              className="group relative flex h-full min-h-[19rem] flex-col justify-between overflow-hidden p-8 transition-colors duration-500 hover:bg-elevated lg:p-10"
            >
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-700 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-brand">{item.index}</span>
                <StatusTag status={item.status} />
              </div>

              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight lg:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-brand">
                  {item.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
