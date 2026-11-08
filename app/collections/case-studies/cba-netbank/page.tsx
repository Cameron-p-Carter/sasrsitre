import type { Metadata } from 'next';
import CaseStudyStoryLayout, { type CaseStudyStory } from '@/app/components/templates/CaseStudyStoryLayout';

// Unbranded version: the client isn't named on this page.
// The branded version is at /collections/case-studies/cba-netbank-next (not linked, not indexed).

const description = "How Software@Scale squads helped one of Australia’s largest banks rebuild core internet banking features on cloud-native foundations, faster and with zero reported critical defects.";

export const metadata: Metadata = {
  title: "AI-enabled engineering cuts estimated PayTo build time by 67%",
  description,
  alternates: { canonical: "/collections/case-studies/cba-netbank" },
};

const CASE_STUDY: CaseStudyStory = {
  hero: {
    imageSrc: "/images/case-studies/cba-netbank/hero.jpg",
    title: "AI-enabled engineering cuts estimated PayTo build time by 67% for a major Australian bank",
    description: "How Software@Scale squads helped one of Australia’s largest banks rebuild core internet banking features on cloud-native foundations, faster and with zero reported critical defects",
    stats: [
      { value: "67%", label: "Faster estimated PayTo build" },
      { value: "15", label: "Payments, security and investment features delivered" },
      { value: "3", label: "Engineering squads plus two embedded engineers" },
      { value: "2 wks", label: "To stand up a squad" },
    ],
  },
  overview: {
    paragraphs: [
      "The bank’s internet banking platform has served customers for more than two decades. Years of growth resulted in a technology estate that stood between the bank and its move to cloud-native AWS.",
      "Since July 2025, Software@Scale has rebuilt payments, security and investment features for the bank’s internet banking modernisation program. AI-enabled engineering cut the estimated build time for one feature, PayTo, from six months to about two.",
      "The client is one of Australia’s largest banks, providing banking and financial services to millions of Australians. Its internet banking platform is one of the largest in the country, with more than two million customers logging in each month.",
      "The modernisation program combines rebuilding critical banking functionality, improving the customer experience, retiring legacy technology and moving towards cloud-native architecture on AWS. The bank began rolling out the new platform to customers in late 2026.",
    ],
    glance: [
      { label: "Customer", value: "Major Australian retail bank, internet banking modernisation program" },
      { label: "Industry", value: "Retail banking" },
      { label: "Services", value: "Engineering@Scale, AI@Scale, Delivery@Scale" },
      { label: "Technology", value: "React, Next.js, TypeScript, GraphQL, AWS, Claude Code, GitHub, Playwright, Grafana, Jira, ServiceNow" },
      { label: "Team", value: "Three engineering squads (Product Owner, Principal Engineer, four engineers each) plus two engineers embedded in the bank’s teams" },
      { label: "Timeframe", value: "July 2025 to present. First features in staff pilot November 2025" },
    ],
  },
  challenge: {
    title: "Rebuilding decades of banking logic without interrupting customer experience",
    paragraphs: [
      "The platform had grown to more than 500 applications built across several technology generations. Critical banking functionality still depended on ageing Microsoft technologies and on-premises infrastructure, some of it near or beyond standard vendor support. The longer those systems stayed in service, the longer the bank carried the security and operational exposure, and the cost of extended support.",
      "The bank could not retire the legacy estate, or complete its move to cloud-native AWS, until the functionality that depended on it was modernised. This was more than simply replacing old applications.",
    ],
    bullets: [
      "Business rules were spread across many applications and repositories, and documentation often no longer matched how the systems behaved. Engineers needed to reconstruct rules directly from source code.",
      "The bank had already modernised individual customer journeys with React and .NET. Those journeys got better, but the shared business logic and infrastructure dependencies underneath them stayed in place. The modernisation program set out to remove them.",
      "Speed mattered because the sooner the bank could rebuild the dependent applications, the sooner it could retire infrastructure, reduce legacy exposure and realise the benefits of its AWS investment.",
    ],
    photo: { src: "/images/case-studies/cba-netbank/challenge.jpg" },
  },
  engagement: {
    title: "A referral, a four-week selection process and squads ready in two weeks",
    paragraphs: [
      "Software@Scale was introduced to the bank’s Group CIO through a referral introduction from industry leaders who knew our banking engineering work.",
      "The bank ran a competitive tender over four weeks, shortlisting from six providers before presentations. Its selection criteria included retail banking knowledge and hands-on skill in React, TypeScript, .NET, AWS and Next.js. Our deep banking knowledge and our ability to stand up squads within two weeks set us apart and meant we won the tender.",
    ],
    steps: [
      { title: "Two squads from day one", text: "We started in July 2025 with two engineering squads of 12 team members, scaling out the bank’s delivery capacity." },
      { title: "Specialists embedded in the bank’s teams", text: "The bank then asked for specialist engineers to be placed inside its own teams to scale up technical leadership." },
      { title: "A third squad for critical priorities", text: "The bank also engaged a third squad, known as the SWAT team, to take on critical program priorities. Each squad pairs a Product Owner and a Principal Engineer with four engineers, working directly with the bank’s product, UX, architecture, platform, fraud, risk and compliance teams." },
    ],
    photo: { src: "/images/case-studies/cba-netbank/engagement.jpg" },
  },
  solution: {
    title: "Modern banking features, built faster on cloud-native foundations",
    intro: "Our squads built on React, Next.js, TypeScript, GraphQL and AWS. They contributed to the bank’s rebuild of internet banking functionality and removed application dependencies that held back infrastructure retirement.",
    items: [
      { icon: "payments", title: "15 payments, security and investment features", text: "The squads delivered 15 key features, including PayTo agreement approval and management, daily payment limits, scheduled and recurring payments, BPAY View and AutoPay, PayID registration, and single sign-on to the bank’s share trading platform with investment account information." },
      { icon: "network_intelligence", title: "AI across the engineering lifecycle", text: "Engineers used Claude Code and other AI-assisted tools for legacy analysis, design, implementation, test generation and code review. AI-powered analysis traced multifactor authentication rules across approximately 20 repositories in days. Product Owners validated business requirements, and engineers kept ownership of architecture, code quality and production readiness." },
      { icon: "shield_lock", title: "Reusable authentication and auditing", text: "Daily payment limits needed step-up authentication that did not yet exist. Rather than wait, the squad built reusable one-time code verification components, front end and back end, as an interim capability while the bank developed its longer-term solution. Approximately 20 customer journeys on the new platform now use it. The squads also built shared fraud-event and customer-activity auditing." },
      { icon: "deployed_code_update", title: "Lean squads and continuous delivery", text: "Each squad owns analysis, architecture, build, testing and production support. More than 10 automated quality, security and compliance checks run on every pull request, alongside Playwright end-to-end and visual regression testing. Feature flags separate deployment from customer activation, supporting daily deployments through GitHub, Jira and ServiceNow, with Grafana monitoring in production." },
    ],
  },
  benefit: {
    title: "One fix reaches every journey that shares the component",
    lead: "The bank can now deliver complex banking functionality in shorter timeframes and replace legacy capabilities one at a time, without a single disruptive cutover. New features reach customers through controlled releases that keep established banking controls in place.",
    paragraphs: [
      "During the staff pilot, an issue on some iPhones stopped users entering their one-time code. Because the component was shared, our engineers found and corrected the underlying defect within one working day, and the fix reached pilot users within two days. One correction covered every journey using the component.",
      "Where under the legacy platform’s release processes a non-critical change could potentially take weeks to reach production, Software@Scale accelerated the delivery.",
    ],
  },
  result: {
    title: "Faster delivery, zero critical defects and a team that grew from 12 to more than 70",
    items: [
      { icon: "speed", title: "67% faster PayTo build", text: "A projected six-month build delivered in about two months with AI-assisted engineering." },
      { icon: "fast_forward", title: "Staff pilot in four months", text: "First features in the bank’s staff pilot in November 2025, about four months after we started." },
      { icon: "security", title: "Zero critical defects", text: "Zero reported critical defects across approximately 20 Software@Scale releases to September 2026." },
      { icon: "deployed_code_history", title: "Hours to production", text: "Code complete to production within hours, with deployment preparation and approval taking under one hour." },
      { icon: "award_star", title: "A top-five squad", text: "One Software@Scale squad ranked in the top five of more than 100 of the bank’s retail squads for consistently meeting commitments, and our teams received six recognitions, including Group CIO recognition for accessibility improvements." },
    ],
    closing: "The bank expanded the engagement to three squads plus two embedded engineers. Within about a year, Software@Scale’s presence across the bank grew from 12 people to more than 70, spanning business banking, credit cards, home buying, payments, AI, cloud and platform engineering.",
    photo: { src: "/images/case-studies/cba-netbank/result.jpg" },
  },
  closing: {
    title: "From two squads to a partnership across the bank",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AWS", "Claude Code", "GitHub", "Playwright", "Grafana", "Jira", "ServiceNow"],
    stats: [
      { value: "67%", label: "Reduction in estimated PayTo build time" },
      { value: "0", label: "Reported critical defects across ~20 releases" },
      { value: "70+", label: "Software@Scale people across the bank, up from 12" },
    ],
  },
  cta: {
    title: "Are you carrying decades of banking logic you need to retire?",
    description: "Our engineers know banking systems from the inside, and we can stand up accountable, AI-enabled squads within two weeks. Talk to us about your modernisation program.",
  },
};

export default function CbaNetBankCaseStudyPage() {
  return <CaseStudyStoryLayout data={CASE_STUDY} />;
}
