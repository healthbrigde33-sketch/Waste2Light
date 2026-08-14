import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Privacy Policy — Waste2Light";
const description = "How Waste2Light handles personal information. Policy pending publication.";

export const Route = createFileRoute("/privacy")({
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
      title="Privacy Policy"
      lede="How Waste2Light collects, uses and protects personal information."
      sections={[
        "What personal data is collected and why.",
        "How data is stored, retained and secured.",
        "Third-party processors and data sharing.",
        "Data subject rights and how to exercise them.",
        "Contact details for privacy enquiries.",
      ]}
    />
  ),
});
