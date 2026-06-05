export type ShowCpa = "yes" | "maybe" | "no" | "tbd";

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  category: string;
  showCpa: ShowCpa;
  situation: string;
  gap: string;
  built: string;
  value: string[];
  equation: string;
  stack: string;
  proof: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "dynamite-roasting",
    client: "Dynamite Roasting Co.",
    sector: "Specialty coffee roaster · Black Mountain / Arden, NC",
    category: "CRM + Lead-Intake Automation",
    showCpa: "yes",
    situation:
      "Inbound leads arrived as raw, unstructured emails from the company's Atlas Branding WordPress contact form. Each one was re-keyed by hand into a CRM, with a person manually splitting the information into separate contact, organization, and deal records.",
    gap: "Every lead cost minutes of manual data entry and re-keying. Records were inconsistent, follow-up was slow, and the owner had no clean pipeline view — the value of each lead was leaking between the website and the CRM.",
    built:
      "A PKDO-designed CRM plus an automated lead-intake pipeline. A raw inbound email is now parsed automatically and formatted into three structured records — Contact, Organization, and Deal/Opportunity — with no manual touch.",
    value: [
      "Manual re-keying per lead reduced to effectively zero",
      "Lead processing roughly 2–3× faster from inbox to pipeline",
      "One raw email → three clean, structured records, automatically",
      "Consistent records eliminate the typos and gaps of hand entry",
    ],
    equation:
      "(minutes to hand-enter a lead × leads per month × loaded labor cost) − (cost of the automation) = recurring monthly value, plus faster speed-to-lead",
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
    showCpa: "yes",
    situation:
      "An established gallery with a base of collectors and buyers, but little visibility into which customers actually drove revenue, and no web analytics in place to connect online interest to sales.",
    gap: "Without segmentation, marketing and outreach were spread evenly instead of concentrated on the highest-value collectors. There was no way to see recency, frequency, or monetary value — or to spot high-value buyers going quiet.",
    built:
      "An RFM / RF$ (recency, frequency, monetary value) customer-segmentation model that ranks the collector base by value, plus a full Google Analytics implementation to measure the web-to-gallery funnel.",
    value: [
      "Top collector segment identified — the ~20% driving the majority of revenue",
      "At-risk high-value buyers flagged for targeted re-engagement",
      "Marketing effort redirected toward the highest-RF$ segments",
      "Web traffic finally measurable and tied to outcomes",
    ],
    equation:
      "(revenue recovered by re-engaging at-risk top collectors) + (efficiency from focusing spend on high-value segments) − (cost) = value created",
    stack: "RFM / RF$ segmentation model · Google Analytics · reporting layer",
    proof:
      "Effectively the proof-of-concept behind PKDO's Haywood Analytics product — the same Pareto / at-risk-revenue logic, productized.",
  },
  {
    slug: "pisgah-outdoors",
    client: "Pisgah Outdoors",
    sector: "Guided fly fishing & outdoor outfitter · Pisgah Forest / Brevard, NC",
    category: "Analytics, SEO, SEM & Web Strategy",
    showCpa: "maybe",
    situation:
      "A WNC outfitter offering guided fly fishing and other outdoor experiences — a destination business that depends on travelers and locals finding them in search before they book a trip.",
    gap: "Qualified visitors were not converting to bookings at the rate the business could support: organic search visibility for high-intent queries was uneven, paid acquisition was not tightly measured, and the web strategy was not aligned to the actual buyer journey from discovery to inquiry.",
    built:
      "An ongoing analytics, SEO, SEM, and web-strategy engagement: structured analytics to see what was actually working, on-page and technical SEO targeted at high-intent fishing and outdoor-experience queries, measurable paid search campaigns, and a web strategy tuned to turn searchers into qualified inquiries.",
    value: [
      "Meaningful lift in organic visibility for high-intent guided-trip queries",
      "Paid spend made measurable — cost per inquiry and cost per booking tracked, not guessed",
      "Web flow tightened so qualified search traffic converts to inquiries at a higher rate",
      "Acquisition decisions now made on data instead of intuition",
    ],
    equation:
      "(additional bookings from improved organic + paid acquisition × average booking value) − (PKDO fees + ad spend) = net value created",
    stack:
      "Google Analytics · Google Search Console · Google Ads · on-page & technical SEO · web-strategy iteration",
    proof:
      "Active, ongoing engagement. Both organic and paid channels delivering measurable improvement against pre-engagement baseline.",
  },
  {
    slug: "iamavl",
    client: "IamAVL",
    sector: "Asheville music & media platform",
    category: "Analytics + Email Marketing + CRM",
    showCpa: "maybe",
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
    equation:
      "(time saved on disconnected tools) + (audience growth from data-driven outreach) − (cost) = value created",
    stack: "Google Analytics · email-marketing platform · CRM integration",
    proof: "Integrated analytics + email + CRM stack, live.",
  },
  {
    slug: "leaf-global-arts",
    client: "LEAF Global Arts",
    sector: "Nonprofit arts festival · WNC",
    category: "Multi-Event Scheduling Application",
    showCpa: "no",
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
    equation:
      "(staff hours saved coordinating the schedule) + (value of fewer conflicts and a better attendee experience) − (cost) = value created",
    stack: "Custom scheduling web app · structured event/venue data model",
    proof: "Used to run a live multi-day, multi-venue festival schedule.",
  },
  {
    slug: "odds-cafe",
    client: "Odd's Cafe",
    sector: "Independent cafe · West Asheville, NC",
    category: "Brew Loyalty — Digital Loyalty Platform",
    showCpa: "maybe",
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
    equation:
      "(repeat visits driven by loyalty + value of captured customer data) − ($19/mo) = value created per location",
    stack:
      "Next.js 15 · TypeScript · Tailwind 4 · Supabase · QR generation/scanning · PWA",
    proof:
      "Live product. Owner Audrie Blomquist quoted on the PKDO home page — a real, named testimonial.",
  },
];
