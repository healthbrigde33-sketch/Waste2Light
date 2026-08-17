import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/content/site";

const title = "Privacy Policy — Waste2Light";
const description =
  "How Waste2Light collects, uses, stores and protects personal information submitted through this website and its programmes.";

export const Route = createFileRoute("/privacy")({
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
      title="Privacy Policy"
      lede="How Waste2Light collects, uses and protects personal information."
      updated="16 August 2026"
      sections={[
        {
          heading: "1. Who we are",
          paragraphs: [
            "Waste2Light is a renewable-energy and innovation company that delivers clean-energy technology work and practical STEM learning programmes, including the Green Energy Corner, to schools and partner organisations.",
            `For any question about this policy or about personal information we hold, contact us at ${contact.email}.`,
            "Waste2Light's registered company details and registered office address are to be confirmed and will be published here.",
          ],
        },
        {
          heading: "2. What personal data we collect",
          paragraphs: [
            "We only collect information that you choose to give us, or that is generated automatically when you use this website.",
          ],
          bullets: [
            "Information you submit through an enquiry or application: your name, email address, phone number, school or organisation name, role, location and the content of your message.",
            "Programme information: contact details of the staff who coordinate a Green Energy Corner, and correspondence relating to delivery, orientation and support.",
            "Technical information generated automatically: IP address, browser type, device type, referring page and pages visited, used to keep the site secure and working correctly.",
          ],
        },
        {
          heading: "3. Why we use it",
          bullets: [
            "To respond to your enquiry and continue the conversation you started.",
            "To assess and administer school or partner applications to our programmes.",
            "To deliver, support and improve programmes, kits and services you have asked for.",
            "To keep records required for our legitimate business, accounting and legal purposes.",
            "To protect the website against abuse, fraud and technical failure.",
          ],
          paragraphs: [
            "We do not sell personal information, and we do not use it for advertising profiling.",
          ],
        },
        {
          heading: "4. Legal basis",
          bullets: [
            "Consent — when you submit a form or opt in to receive updates. You may withdraw consent at any time.",
            "Contract — when processing is necessary to deliver a programme, kit or service you have arranged with us.",
            "Legitimate interests — to run, secure and improve our website and services in a way you would reasonably expect.",
            "Legal obligation — where retention or disclosure is required by applicable law.",
          ],
        },
        {
          heading: "5. Children and school programmes",
          paragraphs: [
            "Our programmes are delivered through schools, and our relationship is with the school and its staff rather than directly with students. We do not intentionally collect personal information from children through this website.",
            "Where student work, names or photographs are shared with us for documentation or publication, we rely on the school to obtain the appropriate parental or guardian consent beforehand. A school may ask us to remove any student material at any time and we will do so.",
          ],
        },
        {
          heading: "6. Storage, retention and security",
          paragraphs: [
            "Personal information is stored on managed hosting and database services operated by our service providers, protected by access controls and encryption in transit.",
            "We keep enquiry records for as long as needed to respond and maintain a reasonable business record, and programme records for the duration of the engagement plus any period required by law. Information that is no longer needed is deleted or anonymised.",
            "No online service can be guaranteed to be completely secure. We take reasonable technical and organisational measures appropriate to the sensitivity of the information we hold.",
          ],
        },
        {
          heading: "7. Sharing and third-party processors",
          paragraphs: [
            "We do not sell or rent personal information. We share it only where necessary, and only with parties bound to protect it.",
          ],
          bullets: [
            "Service providers who host this website, store form submissions and deliver email on our behalf.",
            "Professional advisers, such as accountants and legal advisers, where required.",
            "Authorities, where disclosure is legally required.",
          ],
        },
        {
          heading: "8. International transfers",
          paragraphs: [
            "Some of our service providers may process information outside your country. Where that happens, we take steps to ensure a comparable level of protection through the provider's contractual safeguards.",
          ],
        },
        {
          heading: "9. Your rights",
          paragraphs: [
            "Subject to applicable law, you may ask us to do the following in relation to the personal information we hold about you.",
          ],
          bullets: [
            "Access a copy of it.",
            "Correct it if it is inaccurate or incomplete.",
            "Delete it, where we have no continuing need or legal obligation to keep it.",
            "Restrict or object to how we use it.",
            "Receive it in a portable format, where technically feasible.",
            "Withdraw consent you previously gave, without affecting processing already carried out.",
          ],
        },
        {
          heading: "10. How to exercise your rights",
          paragraphs: [
            `Send your request to ${contact.email}. We will acknowledge it and respond within the period required by applicable law. We may need to verify your identity before acting on a request.`,
            "If you are not satisfied with our response, you may raise the matter with your local data protection authority.",
          ],
        },
        {
          heading: "11. Cookies",
          paragraphs: [
            "Information about the cookies this website uses is set out in our Cookie Policy.",
          ],
        },
        {
          heading: "12. Changes to this policy",
          paragraphs: [
            "We may update this policy as our services and legal obligations change. The date at the top of this page shows when it was last revised. Material changes will be highlighted on this page.",
          ],
        },
      ]}
    />
  ),
});
