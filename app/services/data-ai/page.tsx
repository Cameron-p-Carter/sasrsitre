import ServicePageLayout from '@/app/components/templates/ServicePageLayout';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder56.jpg",
    tagline: "Data & AI",
    title: "Move Beyond AI Experiments",
    titleHighlight: "Into Production",
    description: "Most organisations don't need another AI proof of concept. They need practical solutions that improve decision making, automate manual processes and deliver measurable business outcomes.\n\nSoftware@Scale helps organisations build the data foundations, engineering capability and governance required to successfully deploy AI in production. From modern data platforms through to intelligent automation and enterprise AI solutions, we focus on outcomes that create real business value.",
    overlayOpacity: 0.6,
    objectPosition: "center",
  },
  imageTextContent: {
    title: "When Organisations Need Data & AI Capability",
    description: "AI is creating enormous opportunity, but many organisations struggle to move beyond experimentation.\n\nThe challenge is rarely the model. The challenge is having the right data, governance, engineering capability and delivery experience to create meaningful outcomes.",
    imageSrc: "/images/placeholder/placeholder57.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "How We Help",
    introDescription: "Our approach focuses on practical outcomes, engineering discipline and long-term sustainability.",
    listTitle: "Our Data & AI services:",
    listItems: [
      "Data Foundations — data platforms, data engineering, data migration assurance, data governance, data quality uplift and reporting & analytics foundations",
      "AI Engineering — intelligent assistants, knowledge search, decision support tools, customer service automation and internal productivity solutions",
      "Intelligent Automation — workflow automation, process optimisation, document processing and AI-driven productivity solutions",
      "Production Delivery — generative AI, agentic AI, retrieval augmented generation (RAG), enterprise AI integration, AI governance and model monitoring",
    ],
    imageSrc: "/images/placeholder/placeholder58.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
  },
  serviceFeatureColumns: {
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#00050a]",
    columns: [
      {
        iconSrc: "/images/icons/dynamic_form.svg",
        title: "Strong Data Foundations",
        content: "Successful AI initiatives begin with trusted, governed and accessible data. We help organisations build the foundations required for long-term success.",
      },
      {
        iconSrc: "/images/icons/engineering.svg",
        title: "Built For Real-World Adoption",
        content: "Successful AI initiatives require integration into existing systems, processes and ways of working. We focus on solutions that can be adopted, scaled and sustained.",
      },
      {
        iconSrc: "/images/icons/security.svg",
        title: "Enterprise Governance",
        content: "Security, compliance and operational risk are considered from the beginning, ensuring AI solutions can operate confidently in regulated environments.",
      },
      {
        iconSrc: "/images/icons/monitoring.svg",
        title: "Outcomes Over Hype",
        content: "We focus on measurable business outcomes, not technology for technology's sake. Every initiative should improve decision making, automate work or create operational value.",
      },
    ],
  },
  showTestimonial: true,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Need Practical AI Outcomes?",
    description: "Whether you're exploring AI opportunities, improving data foundations or moving solutions into production, Software@Scale can help.",
    primaryButtonText: "Talk To A Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function DataAIPage() {
  return <ServicePageLayout data={SERVICE_DATA} />;
}
