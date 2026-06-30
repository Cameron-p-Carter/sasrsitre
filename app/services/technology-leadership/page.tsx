import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder36.jpg",
    tagline: "Lead",
    title: "Technology",
    titleHighlight: "Leadership",
    description: "We provide experienced technology leaders who remain accountable for delivery and drive outcomes with confidence.",
    overlayOpacity: 0.5,
    objectPosition: "center 25%",
    buttons: [
      { text: "Talk to a Technology Leader", href: "/contact-us", variant: "primary" as const },
      { text: "View Proven Delivery", href: "/case-studies", variant: "outline" as const },
    ],
  },
  imageTextContent: {
    title: "Optimise your cloud-based services",
    description: `In today's digital landscape, many businesses have already transitioned to cloud platforms. However, the journey doesn't end with migration. Maximising performance, reducing costs and building resilience is paramount to achieving operational excellence.

At Software@Scale, we specialise in enhancing and customising cloud environments across AWS, Azure and Google Cloud to align with your unique business needs. Whether you're looking to migrate, eliminate manual processes with infrastructure-as-code or fine-tune for efficiency, our cloud engineering approach delivers measurable gains in speed, performance and cost-effectiveness.

Generic, out-of-the-box cloud configurations often fall short in meeting specific organisational requirements. We focus on tailoring architecture and automation to ensure it supports your objectives, enhances agility and provides a competitive edge.

Our approach involves a comprehensive assessment of your current setup, deep performance analysis, and implementation of best practices to ensure your cloud platform is not just functional but exceptional.`,
    imageSrc: "/images/placeholder/placeholder35.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Executive Experience",
        description: "Our leaders have held CTO, CIO and VP Engineering roles inside large financial services and technology organisations.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Accountable for Delivery",
        description: "Unlike advisors who observe from the sidelines, our leaders stay involved and own outcomes alongside your team.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Regulatory Confidence",
        description: "Deep experience navigating compliance, governance and risk in highly regulated sectors.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Strategic Alignment",
        description: "We align technology investment with business objectives, ensuring your roadmap drives measurable commercial outcomes.",
      },
    ],
  },
  imageTextContent2: {
    title: "Optimise your cloud-based services",
    description: `In today's digital landscape, many businesses have already transitioned to cloud platforms. However, the journey doesn't end with migration. Maximising performance, reducing costs and building resilience is paramount to achieving operational excellence.

At Software@Scale, we specialise in enhancing and customising cloud environments across AWS, Azure and Google Cloud to align with your unique business needs. Whether you're looking to migrate, eliminate manual processes with infrastructure-as-code or fine-tune for efficiency, our cloud engineering approach delivers measurable gains in speed, performance and cost-effectiveness.

Generic, out-of-the-box cloud configurations often fall short in meeting specific organisational requirements. We focus on tailoring architecture and automation to ensure it supports your objectives, enhances agility and provides a competitive edge.

Our approach involves a comprehensive assessment of your current setup, deep performance analysis, and implementation of best practices to ensure your cloud platform is not just functional but exceptional.`,
    imageSrc: "/images/placeholder/placeholder35.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
    outcomeItems: [
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Executive Experience",
        description: "Our leaders have held CTO, CIO and VP Engineering roles inside large financial services and technology organisations.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Accountable for Delivery",
        description: "Unlike advisors who observe from the sidelines, our leaders stay involved and own outcomes alongside your team.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Regulatory Confidence",
        description: "Deep experience navigating compliance, governance and risk in highly regulated sectors.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Strategic Alignment",
        description: "We align technology investment with business objectives, ensuring your roadmap drives measurable commercial outcomes.",
      },
    ],
  },
  imageTextContent3: {
    title: "Optimise your cloud-based services",
    description: `In today's digital landscape, many businesses have already transitioned to cloud platforms. However, the journey doesn't end with migration. Maximising performance, reducing costs and building resilience is paramount to achieving operational excellence.

At Software@Scale, we specialise in enhancing and customising cloud environments across AWS, Azure and Google Cloud to align with your unique business needs. Whether you're looking to migrate, eliminate manual processes with infrastructure-as-code or fine-tune for efficiency, our cloud engineering approach delivers measurable gains in speed, performance and cost-effectiveness.`,
    imageSrc: "/images/placeholder/placeholder35.jpg",
    backgroundColor: "bg-white",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Placeholder Title One",
        description: "Placeholder description for the first outcome item.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Placeholder Title Two",
        description: "Placeholder description for the second outcome item.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Placeholder Title Three",
        description: "Placeholder description for the third outcome item.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Placeholder Title Four",
        description: "Placeholder description for the fourth outcome item.",
      },
    ],
  },
  centeredHeader: {
    title: "Flexible Engagement Models",
    description: "Every organisation has different delivery needs. Software@Scale provides flexible engagement models that can scale with your priorities.",
  },
  showServiceFeatures: true,
  repeatCenteredSection: true,
  showPortfolio: true,
  showAwards: false,
  showBlog: false,
  showTestimonial: false,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Strengthen your technology leadership today",
    description: "Contact us today to explore how our Technology Leadership service can transform your business.",
    primaryButtonText: "Contact",
    secondaryButtonText: "Learn More",
  },
};

export default function TechnologyLeadershipPage() {
  return <ServicePageLayout2 data={SERVICE_DATA} />;
}
