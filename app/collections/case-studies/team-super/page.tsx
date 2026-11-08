import type { Metadata } from 'next';
import CaseStudyStoryLayout, { type CaseStudyStory } from '@/app/components/templates/CaseStudyStoryLayout';

// Unbranded version: the client isn't named on this page.
// The branded version is at /collections/case-studies/team-super-onetrust (not linked, not indexed).

const description = "How Software@Scale protected member data and preserved a registry platform while an Australian superannuation fund moved to a new administrator and completed a merger.";

export const metadata: Metadata = {
  title: "Turning a super fund’s legacy registry into a sale-ready asset",
  description,
  alternates: { canonical: "/collections/case-studies/team-super" },
};

const CASE_STUDY: CaseStudyStory = {
  hero: {
    imageSrc: "/images/case-studies/team-super/hero.jpg",
    title: "Decoupling 100+ components to turn a super fund’s legacy registry into a sale-ready asset",
    description: "How Software@Scale protected member data and preserved a registry platform while an Australian superannuation fund moved to a new administrator and completed a merger",
    stats: [
      { value: "100+", label: "Platform components decoupled from the fund" },
      { value: "0", label: "Residual member records found in legacy sources" },
      { value: "12 mths", label: "From data assurance to buyer due diligence" },
      { value: "8", label: "Senior specialists, end to end" },
    ],
  },
  overview: {
    paragraphs: [
      "When a major Australian superannuation fund moved its administration to a new provider ahead of a merger, it faced a real challenge. The company behind its registry platform was being wound up, and the platform still held valuable intellectual property.",
      "Software@Scale verified the removal of member data from the legacy environment, decoupled more than 100 platform components from the fund and rebuilt the registry as an independent, sale-ready asset.",
      "The fund was formed through the merger of two industry superannuation funds and manages more than A$20 billion for around 150,000 members.",
      "Before the merger, the fund administered its members on a cloud-native superannuation registry platform. It supported member accounts, investments, contributions, pensions, insurance, regulatory reporting and digital member services, with around 150 configurable administration workflows and more than 5,000 automated tests.",
    ],
    glance: [
      { label: "Customer", value: "Australian industry superannuation fund" },
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
      "Three events converged. The fund appointed a new administrator, becoming that provider’s first Australian superannuation administration outsourcing client. At the same time, the fund was preparing to merge with another fund, so the new administration arrangements had to be ready to support the combined fund. Lastly, the company behind the registry platform was being wound up.",
      "This meant the fund was holding a sophisticated platform without the organisation and engineering teams that had built and run it. Some third-party services and deployment dependencies had already been switched off or removed, and others had reached end of life. The fund’s technology arrangements were designed to run an operational platform, not to separate its intellectual property from the fund.",
      "Planning identified key risks to mitigate:",
    ],
    bullets: [
      "Operational inconsistencies or errors may affect or disrupt member accounts, contributions and pension payments.",
      "Sensitive member information left in legacy environments may create privacy and compliance risk if left unprotected.",
      "Delays could add cost, time and complexity to the merger.",
    ],
    closing: "Without the right solution or support team, the platform also could be putting its operational and commercial value at risk.",
    photo: { src: "/images/case-studies/team-super/challenge.jpg" },
  },
  engagement: {
    title: "A team that already knew the platform and the rules behind it",
    paragraphs: [
      "Software@Scale was approached through an existing relationship with the fund’s Group CEO. The fund was looking for superannuation experience, cloud engineering, security assurance and technology preservation.",
      "Its main concern was finding a team that knew superannuation registry platforms well enough to protect member data, regulatory obligations and the technology’s commercial value.",
    ],
    steps: [
      { title: "Insider knowledge of the platform", text: "Our founder and CEO had previously served as COO of the company that built the registry platform." },
      { title: "Eight senior specialists", text: "We scaled up with eight senior specialists, led by a Delivery Principal, our Head of Platform Engineering and a Security Architect, who had designed, built and operated enterprise superannuation administration platforms." },
      { title: "From scoping to start", text: "The engagement assessment moved from executive discussions to technical scoping, a statement of work and project planning, with work commencing in September 2023." },
    ],
    photo: { src: "/images/case-studies/team-super/engagement.jpg" },
  },
  solution: {
    title: "From fund-specific system to independent, sale-ready platform",
    intro: "Between September 2023 and September 2024, we took end-to-end ownership of the technology transition, from member data assurance through to buyer due diligence.",
    items: [
      { icon: "data_check", title: "Member data assurance and secure decommissioning", text: "The team verified sensitive member data migrated from the registry across SQL Server and MongoDB databases, AWS and Azure storage, backups and disaster recovery environments. Using AWS CloudTrail logs, deletion records, system evidence and manual inspections, we confirmed no residual member data remained in the agreed production sources. The legacy environment was then decommissioned. The work was informed by ISO/IEC 27001, APRA CPS 234 and the Australian Privacy Act." },
      { icon: "account_tree", title: "Decoupling more than 100 components", text: "We separated the platform from the fund’s infrastructure, operational dependencies and fund-specific integrations. The work spanned more than 100 deployable components across .NET services, SQL Server, MongoDB, AWS infrastructure, Azure DevOps repositories, infrastructure-as-code and deployment pipelines." },
      { icon: "cloud_sync", title: "Rebuilding in independent AWS environments", text: "We re-established the source code, configurations and deployment pipelines in independent AWS environments, with production-grade security, high availability and monitoring. When the member portal’s original build pipelines could no longer run, our engineers wrote manual deployment scripts and recreated and verified the portal in a test environment." },
      { icon: "handshake", title: "Sale readiness and handover", text: "We consolidated the platform’s code, architecture documentation and operating procedures, then produced technical and functional documentation, demonstrations and due diligence responses for prospective buyers. Knowledge transfer gives a future owner what it needs to run the platform." },
    ],
  },
  benefit: {
    title: "A standalone registry asset instead of a stranded legacy system",
    lead: "The fund no longer needs to keep the original environment running or rely on the original vendor to preserve the technology. It holds a standalone registry platform that a future owner can operate, maintain and extend without significant reconstruction investment first.",
    paragraphs: [
      "That knowledge also protected members during the move to the new administrator. Superannuation data links member accounts to investment holdings, contributions, rollovers, insurance, pension payments and regulatory reporting. Our specialists assessed data integrity and migration risk against how those records drive member entitlements and financial calculations, going beyond simply confirming whether records had transferred.",
      "That gave the fund confidence in its member information through the transition and merger preparation.",
    ],
  },
  result: {
    title: "Member data verified, the platform preserved and the merger supported",
    items: [
      { icon: "policy", title: "Data purge confirmed", text: "The production data-purge audit confirmed no residual member information remained in the agreed legacy data sources." },
      { icon: "build_circle", title: "Functionality reconstructed", text: "Critical administration and member portal functionality was reconstructed and tested, including account processing, business workflows, APIs and member-facing services." },
      { icon: "document_search", title: "Buyer due diligence", text: "The platform attracted strong interest from major wealth technology providers and progressed through detailed product and technical due diligence. The sale process is ongoing." },
      { icon: "flag_check", title: "Milestones closed", text: "The September 2024 closure report confirmed the key milestones were complete, with identified risks and issues closed." },
    ],
    closing: "Six months later, the two funds completed their merger. Software@Scale still works with the fund three years after the engagement began.",
    photo: { src: "/images/case-studies/team-super/result.jpg" },
  },
  closing: {
    title: "Protecting members and preserving value through a multi-billion-dollar merger",
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

export default function TeamSuperCaseStudyPage() {
  return <CaseStudyStoryLayout data={CASE_STUDY} />;
}
