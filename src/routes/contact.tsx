import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PlaceholderNote } from "@/components/site/StatusTag";
import { contact } from "@/content/site";

const title = "Partner With Us — Waste2Light";
const description =
  "Start a conversation with Waste2Light — schools, organisations, technology partners and collaborators.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const paths = [
  {
    title: "Schools",
    body: "Set up a Green Energy Corner, arrange teacher orientation and schedule a first practical session.",
  },
  {
    title: "Organisations & sponsors",
    body: "Support the rollout of practical renewable-energy learning environments.",
  },
  {
    title: "Technology partners",
    body: "Collaborate on clean-energy technology, hardware and applied innovation.",
  },
  {
    title: "Collaborators",
    body: "Researchers, engineers and educators interested in working with Waste2Light.",
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build what comes next."
        lede="Whether you're a school, organisation, technology partner or potential collaborator, start a conversation with Waste2Light."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionHeader eyebrow="Reach us" title="Direct contact." />
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-display text-xl font-bold tracking-tight transition-colors hover:text-brand"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </dt>
                <dd className="mt-3 max-w-sm">
                  {contact.phone ? (
                    <a href={`tel:${contact.phone}`} className="text-lg">
                      {contact.phone}
                    </a>
                  ) : (
                    <PlaceholderNote>Contact phone number to be supplied.</PlaceholderNote>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Address
                </dt>
                <dd className="mt-3 max-w-sm">
                  {contact.address ? (
                    <p className="text-base leading-relaxed">{contact.address}</p>
                  ) : (
                    <PlaceholderNote>Office address to be supplied.</PlaceholderNote>
                  )}
                </dd>
              </div>
            </dl>
            <p className="mt-10 max-w-sm text-xs leading-relaxed text-muted-foreground">
              The contact address above is a placeholder held in the site content layer. Replace it
              with the official Waste2Light address to make this page live.
            </p>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-sm border border-hairline bg-hairline">
            {paths.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 55} className="bg-background p-7">
                <h2 className="font-display text-lg font-bold tracking-tight">{p.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
