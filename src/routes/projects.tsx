import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote } from "@/components/site/StatusTag";
import { projectCategories, projects } from "@/content/site";

const title = "Projects — Waste2Light";
const description =
  "Waste2Light's work across energy technology, education, innovation and community. Published as projects are confirmed.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="The work, as it becomes real."
        lede="This showcase publishes actual Waste2Light projects only. Nothing here is illustrative or invented."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <ul className="flex flex-wrap gap-2" aria-label="Project categories">
          {projectCategories.map((c) => (
            <li key={c}>
              <span className="inline-flex rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
                {c}
              </span>
            </li>
          ))}
        </ul>

        {projects.length === 0 ? (
          <Reveal className="mt-12 max-w-2xl">
            <PlaceholderNote>
              No projects have been published yet. Project entries — image, category, name, short
              description, year and status — are added to the site content layer as Waste2Light
              confirms them.
            </PlaceholderNote>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 60} className="group bg-background">
                <article className="flex h-full flex-col">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-brand">
                      {p.category}
                    </span>
                    <h2 className="mt-4 font-display text-xl font-bold tracking-tight">{p.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <p className="mt-auto pt-6 text-xs text-muted-foreground">
                      {p.year} · {p.status}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            eyebrow="Coming to this page"
            title="Energy technology. Education. Innovation. Community."
            lede="Four categories, each populated with verified Waste2Light work."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
