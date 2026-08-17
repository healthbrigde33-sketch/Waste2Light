import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/content/site";

const title = "Terms of Use — Waste2Light";
const description =
  "The terms governing use of the Waste2Light website and participation in Waste2Light programmes, kits and services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms of Use"
      lede="The terms governing use of this website and participation in Waste2Light programmes."
      updated="16 August 2026"
      sections={[
        {
          heading: "1. Acceptance of these terms",
          paragraphs: [
            "By accessing or using this website you agree to these terms. If you do not agree with them, please do not use the site.",
            "Waste2Light's registered company details are to be confirmed and will be published here.",
          ],
        },
        {
          heading: "2. Use of this website",
          paragraphs: [
            "You may browse this site and use the information on it for your own lawful, non-commercial purposes, or to evaluate working with Waste2Light.",
            "You agree not to do any of the following.",
          ],
          bullets: [
            "Use the site in a way that breaks any applicable law or regulation.",
            "Attempt to gain unauthorised access to the site, its servers or connected systems.",
            "Introduce malicious code, or attempt to disrupt or overload the service.",
            "Scrape, copy or republish substantial parts of the site for commercial purposes without written permission.",
            "Submit false, misleading or third-party information through our forms without authority to do so.",
          ],
        },
        {
          heading: "3. Information on this site",
          paragraphs: [
            "We publish information about our technology direction, programmes and kits in good faith. Some items are clearly marked as future direction or as pending confirmation, and those must not be read as current capabilities or commitments.",
            "Specifications, component lists, availability and timelines may change. Nothing on this site forms a binding offer or quotation.",
          ],
        },
        {
          heading: "4. Enquiries and applications",
          paragraphs: [
            "Submitting an enquiry or a school application does not create a contract. It starts a conversation. Any programme, supply or partnership is governed by a separate written agreement between Waste2Light and the school or organisation.",
            "You confirm that any information you submit is accurate and that you are authorised to submit it on behalf of the school or organisation you name.",
          ],
        },
        {
          heading: "5. Programme participation",
          paragraphs: [
            "Where a school or organisation participates in a Waste2Light programme, the specific terms — including deliverables, responsibilities, safety requirements, contributions, timelines and support — are set out in the agreement signed for that engagement.",
            "Schools remain responsible for supervision, site safety and safeguarding at their premises, and for obtaining any consents required before sharing student names, work or photographs with us.",
          ],
        },
        {
          heading: "6. Intellectual property",
          paragraphs: [
            "The Waste2Light name, logo, brand, site design, written content, diagrams and curriculum materials are owned by Waste2Light or its licensors and are protected by intellectual property law.",
            "You may not copy, adapt, distribute or create derivative works from our materials without written permission, except where a programme agreement expressly grants a school a licence to use materials for teaching.",
            "Student work created within a programme remains the work of its creators. Waste2Light may seek permission to feature it.",
          ],
        },
        {
          heading: "7. Third-party links",
          paragraphs: [
            "This site may link to third-party websites. We do not control them and are not responsible for their content, products or privacy practices.",
          ],
        },
        {
          heading: "8. Disclaimers",
          paragraphs: [
            "This website is provided on an 'as is' and 'as available' basis. We do not warrant that it will be uninterrupted, error-free or free of harmful components.",
            "Content on this site is general information, not engineering, safety, legal or financial advice. Practical electrical and energy activities must be carried out under qualified supervision and in line with the safety guidance issued with the relevant kit or programme.",
          ],
        },
        {
          heading: "9. Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, Waste2Light is not liable for indirect or consequential loss, or for loss of profit, revenue, data or goodwill, arising from use of this website.",
            "Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence, or for fraud.",
          ],
        },
        {
          heading: "10. Privacy",
          paragraphs: [
            "Personal information submitted through this site is handled in line with our Privacy Policy.",
          ],
        },
        {
          heading: "11. Changes to these terms",
          paragraphs: [
            "We may revise these terms from time to time. The revised version applies from the date shown at the top of this page, and continued use of the site constitutes acceptance.",
          ],
        },
        {
          heading: "12. Governing law and contact",
          paragraphs: [
            "These terms are governed by the laws of the jurisdiction in which Waste2Light is registered. The governing jurisdiction is to be confirmed and will be stated here.",
            `Questions about these terms can be sent to ${contact.email}.`,
          ],
        },
      ]}
    />
  ),
});
