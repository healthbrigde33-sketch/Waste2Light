import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled || open
            ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] lg:px-8">
          <Link to="/" className="shrink-0" aria-label="Waste2Light home">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-full bg-solar px-5 py-2.5 text-sm font-medium text-solar-foreground transition-all duration-300 hover:brightness-110 sm:inline-flex"
            >
              Partner With Us
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-solar hover:text-solar lg:hidden"
            >
              {open ? <Menu className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:h-[4.5rem]">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-5 pb-16">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={open ? 0 : -1}
              className="border-b border-hairline py-4 font-display text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-solar"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            tabIndex={open ? 0 : -1}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-solar px-6 text-sm font-medium text-solar-foreground"
          >
            Partner With Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
