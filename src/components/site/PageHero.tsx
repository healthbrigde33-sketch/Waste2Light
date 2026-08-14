import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeader";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline">
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[36rem] rounded-full bg-solar/[0.07] blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-48">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance-tight text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lede}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
