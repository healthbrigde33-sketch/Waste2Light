import { cn } from "@/lib/utils";

export function Logo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M16 4v9" />
        <path d="M16 13 8.5 8" />
        <path d="M16 13l7.5-5" />
        <path d="M11 19a5 5 0 1 1 10 0c0 2.2-1.6 3.2-2 4.8h-6c-.4-1.6-2-2.6-2-4.8Z" />
        <path d="M13.5 26h5" />
        <path d="M14.5 28.5h3" />
      </svg>
      {showWord && (
        <span className="font-display text-[1.0625rem] font-extrabold tracking-tight">
          Waste<span className="text-brand">2</span>Light
        </span>
      )}
    </span>
  );
}
