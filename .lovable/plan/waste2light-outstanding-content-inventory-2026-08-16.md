# Waste2Light — Outstanding Content Inventory

Everything below is currently marked as a placeholder on the live site. Nothing here is invented copy — each item is a slot waiting for real Waste2Light information.

## 1. Company & contact details (highest priority)
- Official email — currently `hello@waste2light.example` (fake domain, shown publicly on the contact page and footer)
- Phone number — empty
- Office / registered address — empty
- Social profiles (LinkedIn, Instagram, X, YouTube) — none; footer social row is hidden until real links exist
- Contact page has no working enquiry form (email link only). No form submissions are stored anywhere.

## 2. About page
- Founder name
- Founder photo
- Founder biography
- Company history, founding date, registration details
- Team members and organisational structure
- Partnerships, customers and collaborators
- Impact figures and measured outcomes

## 3. Technology page
- Solar: scale, applications and real deployments beyond teaching kits
- Wind: any work larger than the mini turbines
- Energy Systems: commercial system offerings
- Technical specifications for Waste2Light-developed systems
- Deployment case studies, installation sites, measured outcomes
- Certifications, standards compliance, testing partners
- Technology partners and supply relationships

## 4. Starter Kits page
- Electrical ratings, quantities per kit, full technical specs
- Pricing, lead times and ordering process
- Warranty, replacement parts and servicing terms
- Product photography of the actual kits

## 5. Green Energy Corner page
- Student project photography, titles and write-ups from real cohorts
- Photos of a real installed corner / lab (currently illustrated only)

## 6. For Schools page
- Programme pricing and contribution structure
- Delivery timelines and regional availability
- Teacher orientation schedule and duration
- No school application/enrolment form exists yet

## 7. Projects page
- Zero projects published. Each entry needs: image, category, name, short description, year, status.

## 8. Legal pages (all three are empty shells)
- Privacy Policy: data collected, storage/retention, third-party processors, data subject rights, privacy contact
- Terms of Use
- Cookie Policy

## 9. Site-wide media & metadata
- Real photography (only one generated hero image is in use)
- Social share image (og:image) — none set, so link previews fall back to a screenshot
- Ecosystem card "Renewable Energy Technology" is still status: placeholder

## What I can do next (pick any)
1. You send the real details for one or more sections and I fill them in.
2. I add a working contact form and school enquiry form backed by a database (requires enabling a backend).
3. I draft starting-point Privacy/Terms/Cookie copy for your lawyer to review.
4. I generate brand-aligned imagery as interim visuals until real photos exist.

## Technical note
All of this content lives in `src/content/site.ts` plus per-route `PlaceholderNote` blocks, with a three-state status convention (confirmed / future / placeholder) so nothing unverified is ever presented as fact.
