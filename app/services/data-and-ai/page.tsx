import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder36.jpg",
    tagline: "Innovate",
    title: "Data and",
    titleHighlight: "AI",
    description: "We help enterprises harness the power of data and artificial intelligence to drive smarter decisions and build competitive advantage.",
    overlayOpacity: 0.5,
    objectPosition: "center 25%",
    buttons: [
      { text: "Talk to a Technology Leader", href: "/contact-us", variant: "primary" as const },
      { text: "View Proven Delivery", href: "/collections/case-studies", variant: "outline" as const },
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
        title: "Data Platform Engineering",
        description: "We design and build scalable data platforms that make your data accessible, reliable and production-ready.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "AI and Agentic Solutions",
        description: "From RAG pipelines to agentic AI systems, we build intelligent solutions grounded in your business context.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Governed and Secure",
        description: "Every solution is built with data governance, privacy and security at its core — especially in regulated industries.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Practical, Not Experimental",
        description: "We focus on AI that delivers measurable business value today, not proof-of-concepts that never reach production.",
      },
    ],
  },
  imageTextContent2: {
    title: "Optimise your cloud-based services",
    description: `In today's digital landscape, many businesses have already transitioned to cloud platforms. However, the journey doesn't end with migration. Maximising performance, reducing costs and building resilience is paramount to achieving operational excellence.

At Software@Scale, we specialise in enhancing and customising cloud environments across AWS, Azure and Google Cloud to align with your unique business needs. Whether you're looking to migrate, eliminate manual processes with infrastructure-as-code or fine-tune for efficiency, our cloud engineering approach delivers measurable gains in speed, performance and cost-effectiveness.

Generic, out-of-the-box cloud configurations often fall short in meeting specific organisational requirements. We focus on tailoring architecture and automation to ensure it supports your objectives, enhances agility and provides a competitive edge.

Our approach involves a comprehensive assessment of your current setup, deep performance analysis, and implementation of best practices to ensure your cloud platform is not just functional but exceptional.`,
    imageSrc: "/images/newservice/expertiseAcross.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
    outcomeItems: [
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Data Platform Engineering",
        description: "We design and build scalable data platforms that make your data accessible, reliable and production-ready.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "AI and Agentic Solutions",
        description: "From RAG pipelines to agentic AI systems, we build intelligent solutions grounded in your business context.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Governed and Secure",
        description: "Every solution is built with data governance, privacy and security at its core — especially in regulated industries.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Practical, Not Experimental",
        description: "We focus on AI that delivers measurable business value today, not proof-of-concepts that never reach production.",
      },
    ],
  },
  imageTextContent3: {
    title: "Optimise your cloud-based services",
    description: `In today's digital landscape, many businesses have already transitioned to cloud platforms. However, the journey doesn't end with migration. Maximising performance, reducing costs and building resilience is paramount to achieving operational excellence.

At Software@Scale, we specialise in enhancing and customising cloud environments across AWS, Azure and Google Cloud to align with your unique business needs. Whether you're looking to migrate, eliminate manual processes with infrastructure-as-code or fine-tune for efficiency, our cloud engineering approach delivers measurable gains in speed, performance and cost-effectiveness.`,
    imageSrc: "/images/newservice/outcomesDelivered.jpg",
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
  centeredHeader2: {
    title: "Why Data and AI Delivers",
  },
  showServiceFeatures: true,
  repeatCenteredSection: true,
  showPortfolio: true,
  showAwards: false,
  showBlog: false,
  showTestimonial: false,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Unlock your data and AI potential today",
    description: "Contact us today to explore how our Data and AI service can transform your business.",
    primaryButtonText: "Talk to a Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function DataAndAIPage() {
  return <ServicePageLayout2 data={SERVICE_DATA} />;
}
