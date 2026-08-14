import { Link } from "@tanstack/react-router";
import { brand, contact } from "@/content/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Technology", to: "/technology" as const },
      { label: "Green Energy Corner", to: "/green-energy-corner" as const },
      { label: "Starter Kits", to: "/starter-kits" as const },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "For Schools", to: "/for-schools" as const },
      { label: "About", to: "/about" as const },
      { label: "Projects", to: "/projects" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" as const },
      { label: "Terms", to: "/terms" as const },
      { label: "Cookie Policy", to: "/cookies" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {brand.descriptor}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {brand.tagline}.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="min-w-0">
              <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 transition-colors hover:text-solar"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          {contact.socials.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {contact.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-solar"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
