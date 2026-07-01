import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/data1.jpg",
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
    imageSrc: "/images/placeholder/data2.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/question_exchange.svg",
        title: "AI Pilots Aren't Delivering Value",
        description: "Proofs of concept exist, but real business outcomes remain elusive.\n\nMany organisations have experimented with AI but struggle to translate experimentation into measurable business value.",
      },
      {
        iconSrc: "/images/icons/data_info_alert.svg",
        title: "Poor Data Foundations",
        description: "Data quality, governance and architecture issues are preventing progress.\n\nWithout trusted, accessible and governed data, even the best AI initiatives struggle to succeed.",
      },
      {
        iconSrc: "/images/icons/person_check.svg",
        title: "Capability Gaps",
        description: "Internal teams need practical engineering expertise to deliver AI solutions safely and effectively.\n\nThe challenge is often execution rather than ideas.",
      },
      {
        iconSrc: "/images/icons/brightness_alert.svg",
        title: "Uncertainty Around What Matters",
        description: "Leaders need help separating genuine opportunities from hype.\n\nNot every AI initiative should be pursued. Success comes from identifying the opportunities that create meaningful business outcomes.",
      },
    ],
  },
  centeredHeader: {
    title: "How We Help",
    description: "Our approach focuses on practical outcomes, engineering discipline and long-term sustainability.",
  },
  imageTextContent2: {
    title: "Why AI Initiatives Succeed",
    description: "",
    imageSrc: "/images/placeholder/data3.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
    outcomeItems: [
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Strong Data Foundations",
        description: "Successful AI initiatives begin with trusted, governed and accessible data. We help organisations build the foundations required for long-term success.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Built For Real-World Adoption",
        description: "Successful AI initiatives require more than good ideas. They require integration into existing systems, processes and ways of working. We focus on solutions that can be adopted, scaled and sustained in real operating environments.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Enterprise Governance",
        description: "Security, compliance and operational risk are considered from the beginning, ensuring AI solutions can operate confidently in regulated environments.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Outcomes Over Hype",
        description: "We focus on measurable business outcomes, not technology for technology's sake. Every initiative should improve decision making, automate work or create operational value.",
      },
    ],
  },
  serviceFeatureColumns: {
    backgroundColor: "bg-[#006cc9]",
    textColor: "text-white",
    titleColor: "text-[#14d3f3]",
    columns: [
      {
        title: "Data Foundations",
        content: `Building the architecture, governance and pipelines required to support modern analytics and AI.\n\nExamples:\n· Data Platforms\n· Data Engineering\n· Data Migration Assurance\n· Data Governance\n· Data Quality Uplift\n· Reporting & Analytics Foundations`,
      },
      {
        title: "AI Engineering",
        content: `Practical AI applications designed to improve decision making, automate manual processes and create measurable business value.\n\nExamples:\n· Intelligent Assistants\n· Knowledge Search\n· Decision Support Tools\n· Customer Service Automation\n· Internal Productivity Solutions`,
      },
      {
        title: "Intelligent Automation",
        content: `Moving AI from experimentation into secure, scalable and governed enterprise environments.\n\nExamples:\n· Workflow Automation\n· Process Optimisation\n· Document Processing\n· Operational Automation\n· AI-Driven Productivity Solutions`,
      },
      {
        title: "Production Delivery",
        content: `Moving AI from experimentation into secure, scalable production environments.\n\nExamples:\n· Generative AI\n· Agentic AI\n· Retrieval Augmented Generation (RAG)\n· Enterprise AI Integration\n· AI Governance\n· Model Monitoring`,
      },
    ]
  },
  showServiceFeatures: false,
  repeatCenteredSection: false,
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
