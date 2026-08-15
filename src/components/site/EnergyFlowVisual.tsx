/**
 * Conceptual energy-flow diagram: sunlight -> cell -> flow -> storage -> use,
 * with a parallel wind path. Pure SVG + CSS animation, no libraries.
 * Conceptual only — not a Waste2Light technical architecture claim.
 */
const nodes = [
  { x: 60, label: "Sunlight" },
  { x: 240, label: "Solar cell" },
  { x: 420, label: "Conversion" },
  { x: 600, label: "Storage" },
  { x: 780, label: "Use" },
];

export function EnergyFlowVisual() {
  return (
    <figure className="relative w-full">
      <svg
        viewBox="0 0 840 300"
        className="w-full"
        role="img"
        aria-label="Conceptual diagram of energy moving through a system: sunlight and wind are captured, converted to electrical flow, stored, and then used."
      >
        <defs>
          <linearGradient id="flow-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-brand)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* wind branch */}
        <path
          d="M60 60 C 200 60, 240 140, 420 140"
          fill="none"
          stroke="var(--color-leaf)"
          strokeOpacity="0.5"
          strokeWidth="1.25"
        />
        <path
          d="M60 60 C 200 60, 240 140, 420 140"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="2"
          strokeDasharray="6 260"
          style={{ animation: "energy-dash 9s linear infinite" }}
        />
        <circle cx="60" cy="60" r="4" fill="var(--color-energy)" />
        <text x="76" y="46" className="fill-muted-foreground text-[11px]" fontSize="11">
          Wind
        </text>
        <text x="150" y="42" className="fill-muted-foreground text-[11px]" fontSize="11">
          Turbine
        </text>

        {/* main spine */}
        <line
          x1="60"
          y1="140"
          x2="780"
          y2="140"
          stroke="var(--color-leaf)"
          strokeOpacity="0.55"
          strokeWidth="1.25"
        />
        <line
          x1="60"
          y1="140"
          x2="780"
          y2="140"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          strokeDasharray="120 620"
          style={{ animation: "energy-dash 6s linear infinite" }}
        />

        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={140}
              r="5"
              fill="var(--color-background)"
              stroke={i === 0 ? "var(--color-sun)" : "var(--color-brand)"}
              strokeWidth="1.75"
            />
            <circle
              cx={n.x}
              cy={140}
              r="14"
              fill="none"
              stroke={i === 0 ? "var(--color-sun)" : "var(--color-brand)"}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <line x1={n.x} y1={152} x2={n.x} y2={188} stroke="var(--color-leaf)" strokeOpacity="0.4" strokeWidth="1" />
            <text
              x={n.x}
              y={206}
              textAnchor="middle"
              fontSize="12"
              className="fill-foreground"
              style={{ letterSpacing: "-0.01em" }}
            >
              {n.label}
            </text>
            <text x={n.x} y={226} textAnchor="middle" fontSize="10" className="fill-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-6 text-xs text-muted-foreground">
        Conceptual illustration of energy moving through a system. Not a representation of a specific
        Waste2Light product architecture.
      </figcaption>
    </figure>
  );
}
