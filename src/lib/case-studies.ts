export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  category: string;
  meta: string;
  situation: string;
  gap: string;
  built: string;
  value: string[];
  stack: string;
  proof: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "dynamite-roasting",
    client: "Dynamite Roasting Co.",
    sector: "Specialty coffee roaster · Black Mountain / Arden, NC",
    category: "CRM + Lead-Intake Automation",
    meta: "A specialty coffee roaster serving Black Mountain and Arden, NC, whose inbound leads were arriving as raw emails and being re-keyed by hand.",
    situation:
      "Inbound leads arrived as raw, unstructured emails from the company's Atlas Branding WordPress contact form. Each one was re-keyed by hand into a CRM, with a person manually splitting the information into separate contact, organization, and deal records.",
    gap: "Every lead cost minutes of manual data entry and re-keying. Records were inconsistent, follow-up was slow, and the owner had no clean pipeline view — the value of each lead was leaking between the website and the CRM.",
    built:
      "A PKDO-designed CRM plus an automated lead-intake pipeline. A raw inbound email is now parsed automatically and formatted into three structured records — Contact, Organization, and Deal/Opportunity — with no manual touch.",
    value: [
      "Manual re-keying per lead reduced to effectively zero",
      "About 10 minutes of manual work per lead, eliminated.",
      "One raw email → three clean, structured records, automatically",
      "Consistent records eliminate the typos and gaps of hand entry",
    ],
    stack:
      "Next.js · TypeScript · automated email parsing · structured CRM data model",
    proof:
      "Live pipeline: each new website lead lands as three formatted records automatically. Replaces a standing manual data-entry task.",
  },
  {
    slug: "blue-spiral-1",
    client: "Blue Spiral 1",
    sector: "Fine-art gallery · Downtown Asheville, NC",
    category: "RFM / RF$ Customer Analytics + Google Analytics",
    meta: "A fine-art gallery in downtown Asheville with an established collector base but no visibility into which customers actually drove revenue.",
    situation:
      "An established gallery with a base of collectors and buyers, but little visibility into which customers actually drove revenue, and no web analytics in place to connect online interest to sales.",
    gap: "Without segmentation, marketing and outreach were spread evenly instead of concentrated on the highest-value collectors. There was no way to see recency, frequency, or monetary value — or to spot high-value buyers going quiet.",
    built:
      "An RFM / RF$ (recency, frequency, monetary value) customer-segmentation model that ranks the collector base by value, plus a full Google Analytics implementation to measure the web-to-gallery funnel.",
    value: [
      "At-risk high-value buyers flagged for targeted re-engagement",
      "Marketing effort redirected toward the highest-RF$ segments",
      "Web traffic finally measurable and tied to outcomes",
      "For the first time the gallery could see which collectors were worth pursuing and which had likely moved on, so outreach effort went where it could actually pay off.",
    ],
    stack: "RFM / RF$ segmentation model · Google Analytics · reporting layer",
    proof:
      "Effectively the proof-of-concept behind PKDO's Haywood Analytics product — the same Pareto / at-risk-revenue logic, productized.",
  },
  {
    slug: "pisgah-outdoors",
    client: "Pisgah Outdoors",
    sector: "Guided fly fishing & outdoor outfitter · Pisgah Forest / Brevard, NC",
    category: "Analytics, SEO, SEM and Web Strategy",
    meta: "Guided fly fishing and outdoor outfitter, Pisgah Forest / Brevard, NC",
    situation:
      "A WNC outfitter offering guided fly fishing and outdoor experiences, a destination business that depends on travelers and locals finding them in search before they book a trip.",
    gap: "Qualified visitors were not converting to bookings at the rate the business could support: organic search visibility for high-intent queries was uneven, paid acquisition was not tightly measured, and the web strategy was not aligned to the actual buyer journey from discovery to inquiry.",
    built:
      "An ongoing analytics, SEO, SEM, and web strategy engagement. Structured analytics to see what was actually working, on-page and technical SEO targeted at high-intent fishing and outdoor experience queries, measurable paid search campaigns, and a web strategy tuned to turn searchers into qualified inquiries.",
    value: [
      "Meaningful lift in organic visibility for high-intent guided trip queries",
      "Paid spend made measurable, cost per inquiry and cost per booking tracked not guessed",
      "Web flow tightened so qualified search traffic converts to inquiries at a higher rate",
      "Acquisition decisions now made on data instead of intuition",
    ],
    stack:
      "Google Analytics, Google Search Console, Google Ads, on-page and technical SEO, web strategy iteration",
    proof:
      "Active ongoing engagement. Both organic and paid channels delivering measurable improvement against pre-engagement baseline.",
  },
  {
    slug: "iamavl",
    client: "IamAVL",
    sector: "Asheville music & media platform",
    category: "Analytics + Email Marketing + CRM",
    meta: "An Asheville music and media platform whose audience data, email marketing, and contact management lived in disconnected places with no analytics layer tying them together.",
    situation:
      "A local music and media organization whose audience data, email marketing, and contact management lived in disconnected places, with no analytics layer to measure what was working.",
    gap: "Content and outreach decisions were being made without data. Audience growth was hard to measure, email engagement was invisible, and there was no unified view of contacts.",
    built:
      "A Google Analytics implementation, an email-marketing system, and a CRM — integrated so audience, engagement, and contact data finally lived together.",
    value: [
      "Unified audience and contact data in one place",
      "Email engagement (opens, clicks, list growth) made measurable",
      "Content decisions backed by analytics instead of guesswork",
      "Repeatable marketing workflow instead of ad-hoc sends",
    ],
    stack: "Google Analytics · email-marketing platform · CRM integration",
    proof: "Integrated analytics + email + CRM stack, live.",
  },
  {
    slug: "leaf-global-arts",
    client: "LEAF Global Arts",
    sector: "Nonprofit arts festival · WNC",
    category: "Multi-Event Scheduling Application",
    meta: "A nonprofit arts festival in WNC running many events across many venues over multiple days, with scheduling coordinated through manual tools.",
    situation:
      "A large festival running many events across many venues over multiple days, with scheduling coordinated through manual tools.",
    gap: "Coordinating a multi-day, multi-venue, multi-event schedule by hand is error-prone and time-consuming, and leaves attendees and staff without a reliable single source of truth.",
    built:
      "A custom multi-day, multi-event, multi-venue scheduling application — one authoritative schedule for the whole festival.",
    value: [
      "Single source of truth for the entire festival schedule",
      "Coordination time cut versus manual spreadsheet wrangling",
      "Fewer scheduling conflicts across venues and time slots",
      "Better attendee and staff experience",
    ],
    stack: "Custom scheduling web app · structured event/venue data model",
    proof: "Used to run a live multi-day, multi-venue festival schedule.",
  },
  {
    slug: "odds-cafe",
    client: "Odd's Cafe",
    sector: "Independent cafe · West Asheville, NC",
    category: "Brew Loyalty — Digital Loyalty Platform",
    meta: "An independent cafe in West Asheville that wanted customer loyalty without the cost of a custom app or the lost-card problem of paper punch cards.",
    situation:
      "An independent cafe wanting customer loyalty without the cost of a custom app or the hassle and lost-card problem of paper punch cards.",
    gap: "Paper punch cards get lost, capture zero customer data, and give the shop no way to re-engage customers. A native app is overkill and too expensive for an indie cafe.",
    built:
      "Brew Loyalty: a mobile-first digital stamp card. Customers scan a QR code, enter a phone number, and get a digital card; baristas add stamps from an admin view; customers earn a reward at the target. No app download.",
    value: [
      "Customer contact data captured at the counter (vs. zero on paper)",
      "Re-engagement now possible — you can reach the customer again",
      "No app-download friction; works in the browser",
      "Productized at $19/mo per location with a 28-day free trial",
    ],
    stack:
      "Next.js 15 · TypeScript · Tailwind 4 · Supabase · QR generation/scanning · PWA",
    proof:
      "Live product. Owner Audrie Blomquist quoted on the PKDO home page — a real, named testimonial.",
  },
];
