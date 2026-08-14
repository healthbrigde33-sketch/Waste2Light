import { PageHero } from "./PageHero";
import { PlaceholderNote } from "./StatusTag";

export function LegalPage({
  title,
  lede,
  sections,
}: {
  title: string;
  lede: string;
  sections: string[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lede={lede} />
      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="space-y-4">
          {sections.map((s) => (
            <PlaceholderNote key={s}>{s}</PlaceholderNote>
          ))}
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          This policy is not yet published. Final wording will be issued by Waste2Light and is not
          drafted or implied here.
        </p>
      </section>
    </>
  );
}
