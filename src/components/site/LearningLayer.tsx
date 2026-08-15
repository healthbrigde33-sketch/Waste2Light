import { learningLayer } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function LearningLayer() {
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeader
          eyebrow="The learning layer"
          title="Every practical has a learning path."
          lede="The physical kit is one half. The other half is the guidance that surrounds it — printed, scanned and watched."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:gap-16">
          {/* Composition: kit -> QR -> phone -> video -> practical */}
          <Reveal className="relative flex items-center justify-center rounded-sm border border-hairline bg-background p-10">
            <div className="pointer-events-none absolute inset-0 hairline-grid opacity-50" aria-hidden="true" />
            <svg
              viewBox="0 0 320 260"
              className="relative w-full max-w-sm"
              role="img"
              aria-label="A kit box links via a QR code to a phone showing a video tutorial, which leads to a practical activity."
            >
              <rect x="12" y="150" width="120" height="86" rx="3" fill="none" stroke="var(--color-border)" />
              <path d="M12 168h120" stroke="var(--color-hairline)" />
              <text x="24" y="163" fontSize="9" className="fill-muted-foreground">
                KIT
              </text>
              <g stroke="var(--color-brand)" strokeWidth="1.2" fill="none">
                <rect x="30" y="182" width="18" height="18" />
                <rect x="56" y="182" width="18" height="18" />
                <rect x="30" y="208" width="18" height="18" />
                <rect x="86" y="196" width="8" height="8" />
                <rect x="100" y="212" width="8" height="8" />
              </g>

              <path
                d="M140 190 C 170 190, 175 120, 205 120"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="1.2"
                strokeDasharray="4 170"
                style={{ animation: "energy-dash 7s linear infinite" }}
              />
              <path d="M140 190 C 170 190, 175 120, 205 120" fill="none" stroke="var(--color-hairline)" />

              <rect x="208" y="40" width="76" height="150" rx="10" fill="none" stroke="var(--color-border)" />
              <rect x="216" y="56" width="60" height="86" rx="2" fill="var(--color-brand)" fillOpacity="0.09" stroke="var(--color-brand)" strokeOpacity="0.5" />
              <path d="M240 88l16 11-16 11z" fill="var(--color-brand)" />
              <path d="M216 156h44" stroke="var(--color-hairline)" />
              <path d="M216 166h30" stroke="var(--color-hairline)" />
              <text x="208" y="212" fontSize="9" className="fill-muted-foreground">
                VIDEO TUTORIAL
              </text>
              <text x="208" y="226" fontSize="9" className="fill-muted-foreground">
                + QR ACTIVITY
              </text>
            </svg>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-2">
            {learningLayer.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 50}
                className="bg-background p-6 transition-colors hover:bg-elevated"
              >
                <h3 className="font-display text-base font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
