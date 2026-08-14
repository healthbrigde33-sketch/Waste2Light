import type { ContentStatus } from "@/content/site";
import { cn } from "@/lib/utils";

const labels: Record<ContentStatus, string> = {
  confirmed: "Confirmed",
  future: "Future direction",
  placeholder: "Awaiting content",
};

const styles: Record<ContentStatus, string> = {
  confirmed: "border-leaf/40 text-leaf",
  future: "border-border text-muted-foreground",
  placeholder: "border-solar/40 text-solar",
};

export function StatusTag({ status, className }: { status: ContentStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.14em]",
        styles[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}

/** Explicit, non-deceptive placeholder block for information Waste2Light must supply. */
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-sm border border-dashed border-solar/35 bg-solar/[0.04] px-4 py-3 text-sm leading-relaxed text-muted-foreground">
      <span className="mr-2 font-medium uppercase tracking-[0.14em] text-solar text-[0.625rem]">
        Placeholder
      </span>
      {children}
    </p>
  );
}
