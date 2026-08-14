import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Terms — Waste2Light";
const description = "Terms of use for the Waste2Light website and programmes. Pending publication.";

export const Route = createFileRoute("/terms")({
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
      title="Terms"
      lede="The terms governing use of this website and participation in Waste2Light programmes."
      sections={[
        "Website terms of use and acceptable use.",
        "Programme participation terms for schools.",
        "Intellectual property and content ownership.",
        "Liability, warranties and disclaimers.",
        "Governing law and dispute resolution.",
      ]}
    />
  ),
});
