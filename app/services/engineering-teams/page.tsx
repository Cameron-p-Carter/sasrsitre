import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder36.jpg",
    tagline: "Empower",
    title: "Build High-Performing Engineering Teams",
    titleHighlight: "Faster",
    description: "Whether you need an individual specialist, a cross-functional squad or ongoing engineering capability, Software@Scale provides experienced engineers, architects and technology leaders who integrate quickly, operate with ownership and deliver outcomes from day one.\n\nTrusted by organisations across banking, payments, superannuation, insurance and retail, our teams help clients accelerate delivery, reduce technology risk and strengthen engineering capability.",
    overlayOpacity: 0.5,
    objectPosition: "center 25%",
    buttons: [
      { text: "Talk to a Technology Leader", href: "/contact-us", variant: "primary" as const },
      { text: "View Proven Delivery", href: "/collections/case-studies", variant: "outline" as const },
    ],
  },
  imageTextContent: {
    title: "When Clients Need Engineering Teams",
    description: `Organisations rarely engage Software@Scale because they need more people. They engage us because they need outcomes.

Whether it's accelerating delivery, solving a difficult technology challenge or strengthening engineering capability, our teams are brought in to make progress where it matters most.`,
    imageSrc: "/images/placeholder/placeholder35.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/work_history.svg",
        title: "Hiring Takes Too Long",
        description: "Critical delivery initiatives often move faster than internal recruitment processes. By the time a role is approved, advertised and filled, delivery timelines have already slipped.",
      },
      {
        iconSrc: "/images/icons/find_replace.svg",
        title: "Specialist Skills Are Difficult To Find",
        description: "Cloud, platform, security, DevOps and senior engineering capability remain some of the hardest skills to source in the market.",
      },
      {
        iconSrc: "/images/icons/speed_dark.svg",
        title: "Projects Need Momentum Now",
        description: "Major programs often need experienced engineers immediately to unblock delivery, reduce risk and support internal teams.",
      },
      {
        iconSrc: "/images/icons/handshake.svg",
        title: "Existing Teams Need Support",
        description: "Internal teams sometimes require additional expertise, leadership or specialised capability to successfully deliver critical initiatives.",
      },
    ],
  },
  imageTextContent2: {
    title: "Expertise Across The Engineering Lifecycle",
    description: `Software@Scale combines engineering depth with enterprise delivery experience. Our teams are structured around outcomes, not technology silos.`,
    imageSrc: "/images/newservice/expertiseAcross.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
    outcomeItems: [
      {
        iconSrc: "/images/icons/sync_desktop.svg",
        title: "Software Engineering",
        description: "Modern web, mobile and backend engineering capability across customer-facing and enterprise platforms.",
      },
      {
        iconSrc: "/images/icons/engineering_dark.svg",
        title: "Platform Engineering",
        description: "Cloud platforms, infrastructure automation, reliability and operational excellence.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "DevOps & SRE",
        description: "Observability, automation, deployment pipelines and operational resilience.",
      },
      {
        iconSrc: "/images/icons/security_dark.svg",
        title: "Security Engineering",
        description: "Secure-by-design engineering capability integrated into delivery teams.",
      },
      {
        iconSrc: "/images/icons/award_star.svg",
        title: "Quality Engineering",
        description: "Automation, quality practices and engineering excellence.",
      },
      {
        iconSrc: "/images/icons/flowsheet.svg",
        title: "Data Engineering",
        description: "Modern data platforms, pipelines and analytics capability.",
      },
    ],
  },
  imageTextContent3: {
    title: "Outcomes Delivered",
    description: `Our goal is not simply to provide engineers. We measure success by the outcomes our clients achieve - faster delivery, stronger engineering capability and meaningful business results.`,
    imageSrc: "/images/newservice/outcomesDelivered.jpg",
    backgroundColor: "bg-white",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/delivery_truck_speed.svg",
        title: "Faster Delivery",
        description: "Increase engineering capacity without lengthy recruitment cycles.",
      },
      {
        iconSrc: "/images/icons/tactic.svg",
        title: "Reduced Delivery Risk",
        description: "Access experienced engineers who have solved similar challenges before.",
      },
      {
        iconSrc: "/images/icons/groups_dark.svg",
        title: "Stronger Internal Teams",
        description: "Capability transfer, mentoring and knowledge sharing built into every engagement.",
      },
      {
        iconSrc: "/images/icons/handyman_dark.svg",
        title: "Improved Engineering Quality",
        description: "Modern practices, stronger governance and better technical outcomes.",
      },
      {
        iconSrc: "/images/icons/swap_calls.svg",
        title: "Flexible Scale",
        description: "Scale capability up or down as priorities change.",
      },
      {
        iconSrc: "/images/icons/person_search.svg",
        title: "Access To Specialist Expertise",
        description: "Platform, cloud, security, data and engineering leadership available when needed.",
      },
    ],
  },
  showPortfolio: true,
  showAwards: false,
  showBlog: false,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Need Engineering Capability?",
    description: "Contact us today to explore how our Engineering Teams service can transform your business.",
    primaryButtonText: "Talk to a Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
  centeredHeader: {
    title: "Flexible Engagement Models",
    description: "Every organisation has different delivery needs. Software@Scale provides flexible engagement models that can scale with your priorities.",
  },
  centeredHeader2: {
    title: "Why Engineering Teams Succeed",
  },
  showServiceFeatures: true,
  serviceFeatures: [
    {
      title: "Senior Capability From Day One",
      description: "Our engineers, architects and technical leaders integrate quickly, understand complex environments and contribute from the start.",
    },
    {
      title: "Built For Complex Environments",
      description: "Deep experience across retail, banking, payments, superannuation, insurance and other highly regulated industries where delivery quality and reliability matter.",
    },
    {
      title: "Flexible Engagement Models",
      description: "Whether you need a specialist, a squad or ongoing engineering capability, we align the engagement model to your delivery needs.",
    },
    {
      title: "Capability That Stays Behind",
      description: "We focus on leaving teams stronger than when we arrived through mentoring, knowledge transfer and engineering uplift.",
    },
  ],
  repeatCenteredSection: true,
  showTestimonial: false,
};

export default function EngineeringTeamsPage() {
  return <ServicePageLayout2 data={SERVICE_DATA} />;
}
