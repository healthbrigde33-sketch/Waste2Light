import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/content/site";

const title = "Cookie Policy — Waste2Light";
const description =
  "Which cookies and similar technologies the Waste2Light website uses, why they are used, and how to manage them.";

export const Route = createFileRoute("/cookies")({
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
      title="Cookie Policy"
      lede="Which cookies this website sets, and how preferences can be managed."
      updated="16 August 2026"
      sections={[
        {
          heading: "1. What cookies are",
          paragraphs: [
            "Cookies are small text files placed on your device by a website. Similar technologies, such as local storage, work in a comparable way. They are commonly used to make a site function, to remember preferences and to measure how a site is used.",
          ],
        },
        {
          heading: "2. Cookies used on this site",
          paragraphs: [
            "This website is a content site. It does not use advertising cookies and does not sell data to advertisers.",
          ],
          bullets: [
            "Strictly necessary — used to serve pages securely and reliably, and to protect forms against abuse. These cannot be switched off through the site.",
            "Preference — used to remember choices you make, such as dismissing a notice. Set only when you make such a choice.",
            "Analytics and measurement — currently not enabled. If we introduce analytics, this policy will be updated and, where required, consent will be requested before those cookies are set.",
          ],
        },
        {
          heading: "3. Third-party cookies",
          paragraphs: [
            "Our hosting and infrastructure providers may set strictly necessary cookies to keep the service secure and available. If we later embed third-party content such as video, that provider may set its own cookies, and this policy will be updated to name it.",
          ],
        },
        {
          heading: "4. How long cookies last",
          paragraphs: [
            "Session cookies are deleted when you close your browser. Persistent cookies remain until they expire or you delete them. Where we set a persistent preference cookie, it is kept no longer than twelve months.",
          ],
        },
        {
          heading: "5. Managing cookies",
          paragraphs: [
            "You can delete or block cookies through your browser settings. Most browsers let you clear existing cookies, block new ones and be notified when one is set.",
            "Blocking strictly necessary cookies may cause parts of this site, including forms, to stop working correctly.",
          ],
        },
        {
          heading: "6. Changes and contact",
          paragraphs: [
            "We will update this policy whenever the cookies used on this site change. The date at the top of this page shows when it was last revised.",
            `Questions about cookies can be sent to ${contact.email}.`,
          ],
        },
      ]}
    />
  ),
});
