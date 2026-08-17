import { PageHero } from "./PageHero";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  title,
  lede,
  updated,
  sections,
}: {
  title: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lede={lede} />
      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="rounded-sm border border-ember/60 bg-ember/5 p-5">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ember-ink">
            Draft — pending legal review
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This document is a starting point prepared for Waste2Light. It must be reviewed and
            approved by a qualified legal adviser, and any company-specific details confirmed,
            before it is relied upon.
          </p>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Last updated: {updated}
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl font-bold tracking-tight">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-brand"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
