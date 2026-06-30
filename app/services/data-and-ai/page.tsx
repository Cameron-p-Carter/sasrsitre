import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder36.jpg",
    tagline: "Data and AI",
    title: "Move Beyond AI Experiments into",
    titleHighlight: "Production",
    description: "Most organisations don't need another AI proof of concept.\n\nThey need practical solutions that improve decision making, automate manual processes and deliver measurable business outcomes.\n\nSoftware@Scale helps organisations build the data foundations, engineering capability and governance required to successfully deploy AI in production. From modern data platforms through to intelligent automation and enterprise AI solutions, we focus on outcomes that create real business value.",
    overlayOpacity: 0.5,
    objectPosition: "center 25%",
    buttons: [
      { text: "Talk To A Technology Leader", href: "/contact-us", variant: "primary" as const },
      { text: "View Proven Delivery", href: "/collections/case-studies", variant: "outline" as const },
    ],
  },
  imageTextContent: {
    title: "When Organisations Need Data & AI Capability",
    description: `AI is creating enormous opportunity, but many organisations struggle to move beyond experimentation.

The challenge is rarely the model.

The challenge is having the right data, governance, engineering capability and delivery experience to create meaningful outcomes.`,
    imageSrc: "/images/placeholder/data1.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/settings.svg",
        title: "AI Pilots Aren't Delivering Value",
        description: "Proofs of concept exist, but real business outcomes remain elusive.\n\nMany organisations have experimented with AI but struggle to translate experimentation into measurable business value.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Poor Data Foundations",
        description: "Data quality, governance and architecture issues are preventing progress.\n\nWithout trusted, accessible and governed data, even the best AI initiatives struggle to succeed.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Capability Gaps",
        description: "Internal teams need practical engineering expertise to deliver AI solutions safely and effectively.\n\nThe challenge is often execution rather than ideas.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Uncertainty Around What Matters",
        description: "Leaders need help separating genuine opportunities from hype.\n\nNot every AI initiative should be pursued. Success comes from identifying the opportunities that create meaningful business outcomes.",
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
