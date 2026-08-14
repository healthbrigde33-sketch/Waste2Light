/**
 * Waste2Light editable content layer.
 *
 * Content status convention — never present placeholders as facts:
 *   "confirmed"   = sourced from supplied Waste2Light documentation
 *   "future"      = a stated direction or idea, not a current capability
 *   "placeholder" = awaiting real information from Waste2Light
 */
export type ContentStatus = "confirmed" | "future" | "placeholder";

export const brand = {
  name: "Waste2Light",
  tagline: "Lighting tomorrow with today's waste",
  descriptor: "Renewable energy. Innovation. Possibility.",
  shortAbout:
    "Waste2Light is a renewable-energy and innovation company building practical pathways into clean energy, technology and hands-on learning.",
};

export const contact = {
  email: "hello@waste2light.example", // PLACEHOLDER
  phone: "", // PLACEHOLDER
  address: "", // PLACEHOLDER
  socials: [] as { label: string; href: string }[], // add only real profiles
};

export const nav = [
  { label: "Technology", to: "/technology" as const },
  { label: "Green Energy Corner", to: "/green-energy-corner" as const },
  { label: "Starter Kits", to: "/starter-kits" as const },
  { label: "For Schools", to: "/for-schools" as const },
  { label: "About", to: "/about" as const },
];

export const ecosystem = [
  {
    id: "technology",
    index: "01",
    title: "Renewable Energy Technology",
    description:
      "Explore Waste2Light's renewable-energy and technology direction — solar, wind, energy systems and applied innovation.",
    cta: "Explore Technology",
    to: "/technology" as const,
    status: "placeholder" as ContentStatus,
  },
  {
    id: "gec",
    index: "02",
    title: "Green Energy Corner",
    description:
      "A practical STEM and renewable-energy learning environment for schools, built around real components and real experiments.",
    cta: "Explore the Green Energy Corner",
    to: "/green-energy-corner" as const,
    status: "confirmed" as ContentStatus,
  },
  {
    id: "kits",
    index: "03",
    title: "Starter Kits",
    description:
      "Hands-on renewable-energy and electronics kits designed for practical experimentation in the classroom.",
    cta: "Explore Starter Kits",
    to: "/starter-kits" as const,
    status: "confirmed" as ContentStatus,
  },
  {
    id: "future",
    index: "04",
    title: "Future Innovation",
    description:
      "A category held open for future products, technologies, research and programmes as they are developed.",
    cta: "See the direction",
    to: "/projects" as const,
    status: "future" as ContentStatus,
  },
];

export const technologyAreas = [
  {
    id: "solar",
    title: "Solar",
    summary:
      "Photovoltaic energy capture, from small teaching-scale cells to applied solar system design.",
    detail:
      "Solar cells are a confirmed part of the Green Energy Corner kits. Waste2Light's wider solar work — system scale, applications and deployments — is to be supplied.",
    status: "placeholder" as ContentStatus,
  },
  {
    id: "wind",
    title: "Wind",
    summary:
      "Wind-to-electricity conversion, generator behaviour, rectification and controlled loads.",
    detail:
      "Mini wind turbines are a confirmed part of the Green Energy Corner kits. Details of any larger wind work are to be supplied.",
    status: "placeholder" as ContentStatus,
  },
  {
    id: "systems",
    title: "Energy Systems",
    summary:
      "How generation, conversion, storage, protection and load come together as one working system.",
    detail:
      "System-level content covering charge control, storage and protection is taught within the programme. Commercial system offerings are to be supplied.",
    status: "placeholder" as ContentStatus,
  },
  {
    id: "innovation",
    title: "Innovation",
    summary:
      "Applied research, prototyping and new ideas developed with students, schools and partners.",
    detail:
      "An open category for work in progress. Specific projects are published only once confirmed by Waste2Light.",
    status: "future" as ContentStatus,
  },
];

export const journey = [
  {
    id: "discover",
    label: "Discover",
    heading: "Understand renewable energy and how things work.",
    body: "Students start with the ideas behind energy: where it comes from, how it moves, and why systems are built the way they are.",
  },
  {
    id: "build",
    label: "Build",
    heading: "Work with real components and practical kits.",
    body: "Solar cells, mini wind turbines, motors, wires and boards. Nothing simulated — students assemble working circuits by hand.",
  },
  {
    id: "test",
    label: "Test",
    heading: "Measure, experiment and troubleshoot.",
    body: "Multimeters in hand, students take readings, compare results, find faults and understand why something did or did not work.",
  },
  {
    id: "innovate",
    label: "Innovate",
    heading: "Turn ideas into projects and demonstrations.",
    body: "Learning ends in a presentation: a project built, explained and demonstrated by the students who made it.",
  },
];

export const kitComponents = [
  { name: "Solar cells", note: "Photovoltaic energy capture" },
  { name: "Mini wind turbine", note: "Wind-to-electricity conversion" },
  { name: "Multimeter", note: "Voltage and current measurement" },
  { name: "DC motor", note: "Electrical to mechanical energy" },
  { name: "Jumper wires", note: "Circuit connection and rewiring" },
  { name: "Electronic components & accessories", note: "Boards, switches, LEDs and fittings" },
  { name: "User manual & practical activity guide", note: "Step-by-step practical guidance" },
];

export const learningLayer = [
  { title: "Printed Guides", body: "Practical manuals and activity sheets that sit beside the kit on the bench." },
  { title: "QR Activities", body: "Scannable activity links that take a class straight to the right practical." },
  { title: "Video Tutorials", body: "Short walkthroughs for setup, wiring and demonstration." },
  { title: "Troubleshooting", body: "Structured fault-finding so students learn from what does not work." },
  { title: "Project Demonstrations", body: "Guidance for presenting a finished student project." },
  { title: "Innovation Challenges", body: "Open-ended briefs that push students beyond the manual." },
];

export const labZones = [
  {
    id: "teaching",
    name: "Teaching / Presentation Zone",
    body: "Where a session opens. Concepts, briefs and demonstrations are delivered to the whole class before hands reach the components.",
  },
  {
    id: "practical",
    name: "Practical Work Zone",
    body: "Benches where students build, wire and measure in small groups. The centre of gravity of the whole space.",
  },
  {
    id: "kit",
    name: "Kit & Component Zone",
    body: "Secure, organised storage for kits, components and instruments so every session starts with a complete inventory.",
  },
  {
    id: "demo",
    name: "Renewable Energy Demonstration Zone",
    body: "A standing area for live solar and wind demonstrations that stay set up between lessons.",
  },
  {
    id: "display",
    name: "Project / Display Zone",
    body: "Finished student projects on show — the visible proof that the room produces work.",
  },
  {
    id: "maker",
    name: "Future Maker Zone",
    body: "Space deliberately left open for the equipment a school grows into: printing, robotics, advanced tooling.",
  },
];

export const growthPath = [
  { level: "Level 1", title: "Green Energy Kits", body: "The starting point. Practical solar, wind and electronics work with real components." },
  { level: "Level 2", title: "Smart TV + Internet", body: "Digital learning arrives in the room: tutorials, demonstrations and shared references." },
  { level: "Level 3", title: "3D Printer + CAD Tools", body: "Students move from assembling parts to designing and producing their own." },
  { level: "Level 4", title: "Robotics + Arduino", body: "Control, automation and code layered onto the energy fundamentals." },
  { level: "Level 5", title: "Advanced Renewable-Energy Equipment", body: "A full technology laboratory capable of serious student engineering." },
];

export const providedByWaste2Light = [
  "Starter Green Energy Kits",
  "Programme guidance",
  "Recommended laboratory layout",
  "Practical learning resources",
  "Teacher orientation",
  "Technical support",
  "Support for future STEM, renewable-energy and innovation activities",
];

export const providedBySchool = [
  "Suitable laboratory space",
  "Furniture",
  "Electrical infrastructure",
  "Safety provisions",
  "Secure storage",
  "Teachers / facilitators",
  "Internet / display where possible",
  "Laboratory maintenance",
];

export const implementationChecklist = [
  "Confirm the room to be used as the Green Energy Corner",
  "Record room dimensions and take photographs",
  "Put practical furniture in place",
  "Confirm electrical infrastructure and sockets",
  "Prepare a display area for student projects",
  "Arrange internet access where possible",
  "Put safety provisions in place",
  "Take delivery of and inventory the kits",
  "Complete teacher orientation",
  "Run the first practical session",
  "Document the first student projects",
];

export const founder = {
  name: "", // PLACEHOLDER — founder name to be supplied
  role: "Founder, Waste2Light",
  bio: "", // PLACEHOLDER — editorial biography to be supplied
  status: "placeholder" as ContentStatus,
};

export const projects: {
  name: string;
  category: string;
  description: string;
  year: string;
  status: string;
  image?: string;
}[] = [
  // Intentionally empty. Real Waste2Light projects only.
];

export const projectCategories = ["Energy Technology", "Education", "Innovation", "Community"];
