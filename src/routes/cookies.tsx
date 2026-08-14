import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Cookie Policy — Waste2Light";
const description = "How Waste2Light uses cookies on this website. Policy pending publication.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Cookie Policy"
      lede="Which cookies this website sets, and how preferences can be managed."
      sections={[
        "Categories of cookies used and their purpose.",
        "Analytics and measurement tooling, if any.",
        "Cookie duration and storage details.",
        "How to manage or withdraw cookie consent.",
      ]}
    />
  ),
});
