import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/da1.jpg",
    tagline: "Accelerate",
    title: "Recover Delivery Momentum And",
    titleHighlight: "Accelerate Outcomes",
    description: "When delivery slows, deadlines slip and stakeholder confidence starts to fall, adding more people is rarely enough. Software@Scale helps organisations overcome delivery bottlenecks, strengthen engineering capability and execute complex transformation initiatives with speed and control. Our teams integrate quickly, solve difficult challenges and help organisations get critical programs back on track.",
    overlayOpacity: 0.5,
    objectPosition: "center 25%",
    buttons: [
      { text: "Talk to a Technology Leader", href: "/contact-us", variant: "primary" as const },
      { text: "View Proven Delivery", href: "/collections/case-studies", variant: "outline" as const },
    ],
  },
  imageTextContent: {
    title: "When Organisations Need Delivery Acceleration",
    description: `Organisations rarely engage Software@Scale because delivery is going well.

They engage us when the stakes are high, timelines are under pressure and the cost of failure is significant.

Whether it's a delayed program, technical debt, capability gaps or delivery uncertainty, we help teams regain momentum and deliver with confidence.`,
    imageSrc: "/images/placeholder/da2.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/timer_arrow_down.svg",
        title: "Programs Are Behind Schedule",
        description: "Critical initiatives are slipping and stakeholder confidence is starting to erode.",
      },
      {
        iconSrc: "/images/icons/send_money.svg",
        title: "Technical Debt Is Slowing Progress",
        description: "Delivery teams are spending more time working around problems than delivering outcomes.",
      },
      {
        iconSrc: "/images/icons/social_leaderboard.svg",
        title: "Capability Gaps Exist",
        description: "The right leadership, engineering expertise or specialist capability is missing.",
      },
      {
        iconSrc: "/images/icons/flag_2.svg",
        title: "Market Deadlines Cannot Move",
        description: "The organisation has committed to a delivery date that cannot be missed.",
      },
    ],
  },
  imageTextContent2: {
    title: "Why Delivery Acceleration Engagements Succeed",
    description: "",
    imageSrc: "/images/placeholder/da4.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/sync_desktop.svg",
        title: "Rapid Mobilisation",
        description: "Our teams are structured to integrate quickly and begin contributing without lengthy ramp-up periods.",
      },
      {
        iconSrc: "/images/icons/engineering_dark.svg",
        title: "Engineering-Led Recovery",
        description: "We address the root causes of delivery issues, including technical debt, capability gaps and platform constraints, not just the symptoms.",
      },
      {
        iconSrc: "/images/icons/table_eye.svg",
        title: "Executive Oversight",
        description: "Experienced technology and delivery leaders help organisations navigate complex delivery challenges and maintain stakeholder confidence.",
      },
      {
        iconSrc: "/images/icons/account_tree.svg",
        title: "Sustainable Improvement",
        description: "Our objective is not simply to recover delivery. We help teams improve capability, governance and engineering practices so momentum continues after the engagement ends.",
      },
    ],
  },
  coreCompetenciesInfo: {
    title: "Built For High Pressure Environments",
    paragraphs: [
      "Software@Scale specialises in environments where timelines are tight, delivery is critical and failure is expensive.",
      "Our teams are designed to integrate quickly, understand complex environments and begin contributing from day one.",
    ],
    imageSrc: "/images/placeholder/da3.jpg",
    imageOnRight: false,
  },
  showServiceFeatures: false,
  repeatCenteredSection: false,
  showPortfolio: true,
  showAwards: false,
  showBlog: false,
  showTestimonial: false,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Need Delivery Momentum?",
    description: "Whether you're facing delivery pressure, capability gaps or critical deadlines, Software@Scale can help.",
    primaryButtonText: "Talk to a Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function DeliveryAccelerationPage() {
  return <ServicePageLayout2 data={SERVICE_DATA} />;
}
