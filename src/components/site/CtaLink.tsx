import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 min-h-11";

const variants: Record<Variant, string> = {
  solid: "bg-solar text-solar-foreground hover:brightness-110 hover:gap-3",
  outline:
    "border border-border bg-transparent text-foreground hover:border-solar hover:text-solar hover:gap-3",
  ghost: "px-0 text-foreground hover:text-solar hover:gap-3",
};

export function CtaLink({
  to,
  children,
  variant = "solid",
  className,
  arrow = true,
  ...rest
}: {
  to: ComponentProps<typeof Link>["to"];
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && <ArrowRight className="size-4 shrink-0 transition-transform duration-300" aria-hidden="true" />}
    </Link>
  );
}
