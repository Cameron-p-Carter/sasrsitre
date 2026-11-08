import type { Metadata } from 'next';
import CaseStudyStoryLayout, { type CaseStudyStory } from '@/app/components/templates/CaseStudyStoryLayout';

// Branded version, naming the client. For now it is a standalone page: nothing on the site links here,
// search engines are asked not to index it, and it is left out of the sitemap (app/sitemap.ts).
// The public, unbranded version is at /collections/case-studies/cba-netbank.

export const metadata: Metadata = {
  title: "CBA NetBank Next: AI-enabled engineering cuts estimated PayTo build time by 67%",
  description: "How Software@Scale squads helped Commonwealth Bank rebuild core NetBank features on cloud-native foundations, faster and with zero reported critical defects.",
  alternates: { canonical: "/collections/case-studies/cba-netbank-next" },
  robots: { index: false, follow: false },
};

const CASE_STUDY: CaseStudyStory = {
  hero: {
    imageSrc: "/images/case-studies/cba-netbank-next/hero.jpg",
    client: "Commonwealth Bank of Australia · NetBank Next",
    title: "AI-enabled engineering cuts estimated NetBank PayTo build time by 67%",
    description: "How Software@Scale squads helped Commonwealth Bank rebuild core NetBank features on cloud-native foundations, faster and with zero reported critical defects",
    stats: [
      { value: "67%", label: "Faster estimated PayTo build" },
      { value: "15", label: "Payments, security and investment features delivered" },
      { value: "3", label: "Engineering squads plus two embedded engineers" },
      { value: "2 wks", label: "To stand up a squad" },
    ],
  },
  overview: {
    paragraphs: [
      "NetBank has served Commonwealth Bank of Australia (CBA) customers since 1997. Nearly three decades of growth resulted in a technology estate that stood between CBA and its move to cloud-native AWS.",
      "Since July 2025, Software@Scale has rebuilt payments, security and investment features for NetBank Next, CBA’s modernisation program. AI-enabled engineering cut the estimated build time for one feature, PayTo, from six months to about two.",
      "Commonwealth Bank of Australia provides banking and financial services to millions of Australians. Its internet banking platform, NetBank, launched in 1997 and is one of the largest in the country. More than 2.1 million customers logged into NetBank in April 2026, including around 530,000 aged 65 and over.",
      "NetBank Next is CBA’s program to modernise that platform. It combines rebuilding critical banking functionality, improving the customer experience, retiring legacy technology and moving towards cloud-native architecture on AWS. CBA began rolling out the new NetBank to customers in late August 2026.",
    ],
    glance: [
      { label: "Customer", value: "Commonwealth Bank of Australia (CBA), NetBank Next" },
      { label: "Industry", value: "Retail banking" },
      { label: "Services", value: "Engineering@Scale, AI@Scale, Delivery@Scale" },
      { label: "Technology", value: "React, Next.js, TypeScript, GraphQL, AWS, Claude Code, GitHub, Playwright, Grafana, Jira, ServiceNow" },
      { label: "Team", value: "Three engineering squads (Product Owner, Principal Engineer, four engineers each) plus two engineers embedded in CBA teams" },
      { label: "Timeframe", value: "July 2025 to present. First features in staff pilot November 2025" },
    ],
  },
  challenge: {
    title: "Rebuilding three decades of banking logic without interrupting customer experience",
    paragraphs: [
      "NetBank had grown to more than 500 applications built across several technology generations. Critical banking functionality still depended on ageing Microsoft technologies and on-premises infrastructure, some of it near or beyond standard vendor support. The longer those systems stayed in service, the longer CBA carried the security and operational exposure, and the cost of extended support.",
      "CBA could not retire the legacy estate, or complete its move to cloud-native AWS, until the functionality that depended on it was modernised. This was more than simply replacing old applications.",
    ],
    bullets: [
      "Business rules were spread across many applications and repositories, and documentation often no longer matched how the systems behaved. Engineers needed to reconstruct rules directly from source code.",
      "CBA had already modernised individual NetBank journeys with React and .NET. Those journeys got better, but the shared business logic and infrastructure dependencies underneath them stayed in place. NetBank Next set out to remove them.",
      "Speed mattered because the sooner CBA could rebuild the dependent applications, the sooner it could retire infrastructure, reduce legacy exposure and realise the benefits of its AWS investment.",
    ],
    photo: { src: "/images/case-studies/cba-netbank-next/challenge.jpg" },
  },
  engagement: {
    title: "A referral, a four-week selection process and squads ready in two weeks",
    paragraphs: [
      "Software@Scale was introduced to CBA’s Group CIO through a referral introduction from industry leaders who knew our banking engineering work.",
      "CBA ran a competitive tender over four weeks, shortlisting from six providers before presentations. Its selection criteria included retail banking knowledge and hands-on skill in React, TypeScript, .NET, AWS and Next.js. Our deep banking knowledge and our ability to stand up squads within two weeks set us apart and meant we won the tender.",
    ],
    steps: [
      { title: "Two squads from day one", text: "We started on 15 July 2025 with two engineering squads of 12 team members, scaling out CBA’s delivery capacity." },
      { title: "Specialists embedded in CBA teams", text: "CBA then asked for specialist engineers to be placed inside its own teams to scale up technical leadership." },
      { title: "A third squad for critical priorities", text: "CBA also engaged a third squad, known as the SWAT team, to take on critical program priorities. Each squad pairs a Product Owner and a Principal Engineer with four engineers, working directly with CBA’s product, UX, architecture, platform, fraud, risk and compliance teams." },
    ],
    photo: { src: "/images/case-studies/cba-netbank-next/engagement.jpg" },
  },
  solution: {
    title: "Modern banking features, built faster on cloud-native foundations",
    intro: "Our squads built on React, Next.js, TypeScript, GraphQL and AWS. They contributed to CBA’s rebuild of NetBank functionality and removed application dependencies that held back infrastructure retirement.",
    items: [
      { icon: "payments", title: "15 payments, security and investment features", text: "The squads delivered 15 key features, including PayTo agreement approval and management, Daily Payment Limits, scheduled and recurring payments, BPAY View and AutoPay, PayID registration, and CommSec single sign-on with investment account information." },
      { icon: "network_intelligence", title: "AI across the engineering lifecycle", text: "Engineers used Claude Code and other AI-assisted tools for legacy analysis, design, implementation, test generation and code review. AI-powered analysis traced multifactor authentication rules across approximately 20 repositories in days. Product Owners validated business requirements, and engineers kept ownership of architecture, code quality and production readiness." },
      { icon: "shield_lock", title: "Reusable authentication and auditing", text: "Daily Payment Limits needed step-up authentication that did not yet exist. Rather than wait, the squad built reusable NetCode verification components, front end and back end, as an interim capability while CBA developed its longer-term solution. Approximately 20 NetBank Next journeys now use it. The squads also built shared fraud-event and customer-activity auditing." },
      { icon: "deployed_code_update", title: "Lean squads and continuous delivery", text: "Each squad owns analysis, architecture, build, testing and production support. More than 10 automated quality, security and compliance checks run on every pull request, alongside Playwright end-to-end and visual regression testing. Feature flags separate deployment from customer activation, supporting daily deployments through GitHub, Jira and ServiceNow, with Grafana monitoring in production." },
    ],
  },
  benefit: {
    title: "One fix reaches every journey that shares the component",
    lead: "CBA can now deliver complex banking functionality in shorter timeframes and replace legacy capabilities one at a time, without a single disruptive cutover. New features reach customers through controlled releases that keep established banking controls in place.",
    paragraphs: [
      "During the staff pilot, an issue on some iPhones stopped users entering their NetCode. Because the component was shared, our engineers found and corrected the underlying defect within one working day, and the fix reached pilot users within two days. One correction covered every journey using the component.",
      "Where under NetBank Classic release processes a non-critical change could potentially take weeks to reach production, Software@Scale accelerated the delivery.",
    ],
  },
  result: {
    title: "Faster delivery, zero critical defects and a team that grew from 12 to more than 70",
    items: [
      { icon: "speed", title: "67% faster PayTo build", text: "A projected six-month build delivered in about two months with AI-assisted engineering." },
      { icon: "fast_forward", title: "Staff pilot in four months", text: "First features in CBA’s staff pilot in November 2025, about four months after we started." },
      { icon: "security", title: "Zero critical defects", text: "Zero reported critical defects across approximately 20 Software@Scale releases to September 2026." },
      { icon: "deployed_code_history", title: "Hours to production", text: "Code complete to production within hours, with deployment preparation and approval taking under one hour." },
      { icon: "award_star", title: "A top-five squad", text: "One Software@Scale squad ranked in the top five of more than 100 CBA retail squads for consistently meeting commitments, and our teams received six recognitions, including Group CIO recognition for accessibility improvements." },
    ],
    closing: "CBA expanded the NetBank engagement to three squads plus two embedded engineers. Within about a year, Software@Scale’s presence across CBA grew from 12 people to more than 70, spanning business banking, credit cards, home buying, payments, AI, cloud and platform engineering.",
    photo: { src: "/images/case-studies/cba-netbank-next/result.jpg", background: "#ffcc00" },
  },
  closing: {
    title: "From two squads to a partnership across the bank",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AWS", "Claude Code", "GitHub", "Playwright", "Grafana", "Jira", "ServiceNow"],
    stats: [
      { value: "67%", label: "Reduction in estimated PayTo build time" },
      { value: "0", label: "Reported critical defects across ~20 releases" },
      { value: "70+", label: "Software@Scale people across CBA, up from 12" },
    ],
  },
  cta: {
    title: "Are you carrying decades of banking logic you need to retire?",
    description: "Our engineers know banking systems from the inside, and we can stand up accountable, AI-enabled squads within two weeks. Talk to us about your modernisation program.",
  },
};

export default function CbaNetBankNextCaseStudyPage() {
  return <CaseStudyStoryLayout data={CASE_STUDY} />;
}
