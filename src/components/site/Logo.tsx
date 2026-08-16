import { cn } from "@/lib/utils";

export function Logo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0 text-brand"
        fill="currentColor"
      >
        {/* Lightbulb glass */}
        <path d="M11.5 19.5c-.5-1.5-.5-3-.5-4.5 0-4 2-7 5-7s5 3 5 7c0 1.5 0 3-.5 4.5h-9z" />
        {/* Bulb neck */}
        <path d="M12.5 20h7v1.5h-7z" />
        {/* Screw threads */}
        <path d="M13 22h6v1.3h-6zM13 24h6v1.3h-6z" />
        {/* Bottom contact */}
        <path d="M14.5 26.5h3c.8 0 1.3.8.8 1.6-.4.7-1.3 1.1-2.3 1.1s-1.9-.4-2.3-1.1c-.5-.8 0-1.6.8-1.6z" />
        {/* Turbine mast */}
        <path d="M15.2 19.5V10.2h1.6v9.3z" />
        {/* Turbine hub */}
        <circle cx="16" cy="9.5" r="1.6" />
        {/* Turbine blades */}
        <path d="M15.2 8.2c-.2-1.7 0-3.2.8-4.5.8 1.3 1 2.8.8 4.5h-1.6z" />
        <path d="M14.2 10.2c-1.5-.6-2.8-1.5-3.6-2.8 1.6-.2 3 .4 4.2 1.3-.2.5-.4 1-.6 1.5z" />
        <path d="M17.8 10.2c1.5-.6 2.8-1.5 3.6-2.8-1.6-.2-3 .4-4.2 1.3.2.5.4 1 .6 1.5z" />
        {/* Outer energy arcs */}
        <path
          d="M9.5 15c-.8-2.5-.5-5.5 1.5-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22.5 15c.8-2.5.5-5.5-1.5-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      {showWord && (
        <span className="font-display text-[1.0625rem] font-extrabold tracking-tight">
          Waste<span className="text-brand">2</span>Light
        </span>
      )}
    </span>
  );
}
