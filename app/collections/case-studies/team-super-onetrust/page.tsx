import type { Metadata } from 'next';
import CaseStudyStoryLayout, { type CaseStudyStory } from '@/app/components/templates/CaseStudyStoryLayout';

// Branded version, naming the client. For now it is a standalone page: nothing on the site links here,
// search engines are asked not to index it, and it is left out of the sitemap (app/sitemap.ts).
// The public, unbranded version is at /collections/case-studies/team-super.

export const metadata: Metadata = {
  title: "Team Super: turning a legacy registry into a sale-ready asset",
  description: "How Software@Scale protected member data and preserved the OneTrust platform while Mine Super moved to a new administrator and merged to form Team Super.",
  alternates: { canonical: "/collections/case-studies/team-super-onetrust" },
  robots: { index: false, follow: false },
};

const CASE_STUDY: CaseStudyStory = {
  hero: {
    imageSrc: "/images/case-studies/team-super-onetrust/hero.jpg",
    client: "Team Super (formerly Mine Super)",
    title: "Decoupling 100+ components to turn Team Super’s legacy registry into a sale-ready asset",
    description: "How Software@Scale protected member data and preserved the OneTrust platform while Mine Super moved to a new administrator and merged to form Team Super",
    stats: [
      { value: "100+", label: "Platform components decoupled from the fund" },
      { value: "0", label: "Residual member records found in legacy sources" },
      { value: "A$22bn", label: "Combined fund supported through the merger" },
      { value: "8", label: "Senior specialists, data assurance to handover" },
    ],
  },
  overview: {
    paragraphs: [
      "When Mine Super, now Team Super, moved its superannuation administration to SS&C ahead of its merger with TWUSUPER, it faced a real challenge. Recreo Financial, the company behind its registry platform OneTrust, was being wound up, and the platform still held valuable intellectual property.",
      "Software@Scale verified the removal of member data from the legacy environment, decoupled more than 100 platform components from the fund and rebuilt OneTrust as an independent, sale-ready asset.",
      "Team Super was formed in March 2025 through the merger of Mine Super and TWUSUPER. The combined fund manages approximately A$22 billion for 150,000 members. TWUSUPER’s integration brought more than 93,000 accounts and approximately A$7.4 billion in member benefits into the fund.",
      "Before the merger, Mine Super administered its members on OneTrust, a cloud-native superannuation registry platform. OneTrust supported member accounts, investments, contributions, pensions, insurance, regulatory reporting and digital member services, with around 150 configurable administration workflows and more than 5,000 automated tests.",
    ],
    glance: [
      { label: "Customer", value: "Team Super (formerly Mine Super)" },
      { label: "Industry", value: "Superannuation" },
      { label: "Services", value: "Engineering@Scale, Security@Scale, Operations@Scale" },
      { label: "Technology", value: ".NET, SQL Server, MongoDB, AWS, AWS CloudTrail, Azure DevOps, infrastructure-as-code" },
      { label: "Team", value: "Eight senior specialists: Delivery Principal, Head of Platform Engineering, Security Architect and five engineers" },
      { label: "Timeframe", value: "September 2023 to September 2024. Relationship ongoing" },
    ],
  },
  challenge: {
    title: "Three strategic changes landing on one complex platform",
    paragraphs: [
      "Three events converged. Mine Super appointed SS&C Technologies as its new administrator, becoming SS&C’s first Australian superannuation administration outsourcing client. At the same time, the fund was preparing to merge with TWUSUPER, so the new administration arrangements had to be ready to support the combined fund. Lastly, Recreo Financial, the company behind OneTrust, was being wound up.",
      "This meant that Mine Super was holding a sophisticated platform without the organisation and engineering teams that had built and run it. Some third-party services and deployment dependencies had already been switched off or removed, and others had reached end of life. The fund’s technology arrangements were designed to run an operational platform, not to separate its intellectual property from the fund.",
      "Planning identified key risks to mitigate:",
    ],
    bullets: [
      "Operational inconsistencies or errors may affect or disrupt member accounts, contributions and pension payments.",
      "Sensitive member information left in legacy environments may create privacy and compliance risk if left unprotected.",
      "Delays could add cost, time and complexity to the merger.",
    ],
    closing: "Without the right solution or support team, OneTrust also could be putting its operational and commercial value at risk.",
    photo: { src: "/images/case-studies/team-super-onetrust/challenge.jpg" },
  },
  engagement: {
    title: "A team that already knew the platform and the rules behind it",
    paragraphs: [
      "Software@Scale was approached through an existing relationship with Mine Super’s Group CEO. The fund was looking for superannuation experience, cloud engineering, security assurance and technology preservation.",
      "Its main concern was finding a team that knew superannuation registry platforms well enough to protect member data, regulatory obligations and the technology’s commercial value.",
    ],
    steps: [
      { title: "Insider knowledge of OneTrust", text: "Our founder and CEO, Louis Droguett, had previously served as COO of Recreo Financial." },
      { title: "Eight senior specialists", text: "We scaled up with eight senior specialists, led by a Delivery Principal, our Head of Platform Engineering and a Security Architect, who had designed, built and operated enterprise superannuation administration platforms." },
      { title: "From scoping to start", text: "The engagement assessment moved from executive discussions to technical scoping, a statement of work and project planning, with work commencing in September 2023." },
    ],
    photo: { src: "/images/case-studies/team-super-onetrust/engagement.jpg" },
  },
  solution: {
    title: "From fund-specific system to independent, sale-ready platform",
    intro: "Between September 2023 and September 2024, we took end-to-end ownership of the technology transition, from member data assurance through to buyer due diligence.",
    items: [
      { icon: "data_check", title: "Member data assurance and secure decommissioning", text: "The team verified sensitive member data migrated from OneTrust across SQL Server and MongoDB databases, AWS and Azure storage, backups and disaster recovery environments. Using AWS CloudTrail logs, deletion records, system evidence and manual inspections, we confirmed no residual member data remained in the agreed production sources. The legacy environment was then decommissioned. The work was informed by ISO/IEC 27001, APRA CPS 234 and the Australian Privacy Act." },
      { icon: "account_tree", title: "Decoupling more than 100 components", text: "We separated OneTrust from Mine Super’s infrastructure, operational dependencies and fund-specific integrations. The work spanned more than 100 deployable components across .NET services, SQL Server, MongoDB, AWS infrastructure, Azure DevOps repositories, infrastructure-as-code and deployment pipelines." },
      { icon: "cloud_sync", title: "Rebuilding in independent AWS environments", text: "We re-established the source code, configurations and deployment pipelines in independent AWS environments, with production-grade security, high availability and monitoring. When the Member Portal’s original build pipelines could no longer run, our engineers wrote manual deployment scripts and recreated and verified the portal in a test environment." },
      { icon: "handshake", title: "Sale readiness and handover", text: "We consolidated the platform’s code, architecture documentation and operating procedures, then produced technical and functional documentation, demonstrations and due diligence responses for prospective buyers. Knowledge transfer gives a future owner what it needs to run the platform." },
    ],
  },
  benefit: {
    title: "A standalone registry asset instead of a stranded legacy system",
    lead: "Team Super no longer needs to keep the original environment running or rely on Recreo Financial to preserve the technology. It holds a standalone registry platform that a future owner can operate, maintain and extend without significant reconstruction investment first.",
    paragraphs: [
      "That knowledge also protected members during the move to SS&C. Superannuation data links member accounts to investment holdings, contributions, rollovers, insurance, pension payments and regulatory reporting. Our specialists assessed data integrity and migration risk against how those records drive member entitlements and financial calculations, going beyond simply confirming whether records had transferred.",
      "That gave the fund confidence in its member information through the transition and merger preparation.",
    ],
  },
  result: {
    title: "Member data verified, the platform preserved and the merger supported",
    items: [
      { icon: "policy", title: "Data purge confirmed", text: "The production data-purge audit confirmed no residual member information remained in the agreed legacy data sources." },
      { icon: "build_circle", title: "Functionality reconstructed", text: "Critical administration and Member Portal functionality was reconstructed and tested, including account processing, business workflows, APIs and member-facing services." },
      { icon: "document_search", title: "Buyer due diligence", text: "OneTrust attracted strong interest from major wealth technology providers and progressed through detailed product and technical due diligence. The sale process is ongoing." },
      { icon: "flag_check", title: "Milestones closed", text: "The September 2024 closure report confirmed the key milestones were complete, with identified risks and issues closed." },
    ],
    closing: "Six months later, in March 2025, Mine Super and TWUSUPER completed their merger to form Team Super. Software@Scale still works with the fund three years after the engagement began.",
    photo: { src: "/images/case-studies/team-super-onetrust/result.jpg" },
  },
  closing: {
    title: "Protecting members and preserving value through a A$22 billion merger",
    technologies: [".NET", "SQL Server", "MongoDB", "AWS", "AWS CloudTrail", "Azure DevOps", "Infrastructure-as-code"],
    stats: [
      { value: "100+", label: "Deployable components decoupled" },
      { value: "0", label: "Residual member records in legacy sources" },
      { value: "150,000", label: "Members in the merged fund" },
    ],
  },
  cta: {
    title: "Are you inheriting a critical financial platform without the team that built it?",
    description: "We bring engineers who have built and run regulated financial platforms, and we take ownership from data assurance through to handover. Talk to us about your platform.",
  },
};

export default function TeamSuperOneTrustCaseStudyPage() {
  return <CaseStudyStoryLayout data={CASE_STUDY} />;
}
