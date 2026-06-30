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
        title: "Fast Integration",
        description: "Our engineers operate with ownership from day one, minimising ramp-up time and delivering value immediately.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Top 1% Talent",
        description: "We source only senior engineers and architects with proven experience in complex, regulated environments.",
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Flexible Scale",
        description: "Grow or reduce your team based on project needs without sacrificing quality or continuity.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "Embedded Accountability",
        description: "Our people work as part of your team, not alongside it — with the same standards and delivery expectations.",
      },
    ],
  },
  imageTextListContent: {
    title: "Secure, compliant and resilient systems",
    introDescription: "Software@Scale's engineers focus on building and managing resilient cloud environments that reduce costs, support your growth, enhance agility and ensure operational excellence.",
    listTitle: "How Cloud Engineering works:",
    listItems: [
      "Consultation and assessment",
      "Solution design",
      "Automation setup",
      "Performance tuning",
      "Ongoing support",
    ],
    imageSrc: "/images/placeholder/placeholder37.jpg",
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
        iconSrc: "/images/icons/settings.svg",
        title: "Capabilities",
        content: [
          "Infrastructure modernisation",
          "Cloud cost optimisation",
          "Risk mitigation strategy",
          "Transformation management",
          "Internal team upskilling",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Delivery",
        content: [
          "Azure, Google and AWS engineering experience",
          "Eliminate ClickOps with Infrastructure as Code (IaC)",
          "Platform-neutral approach",
          "No long-term commitments",
        ],
      },
      {
        iconSrc: "/images/icons/devices.svg",
        title: "Technologies",
        content: "• Next JS • Node JS • Angular • React • Vue.JS • Typescript • PHP • Python • C# .NET • Java • C++ • Docker • Kubernetes • Terraform • CloudFormation • AWS • Azure • GCP • Scala •",
      },
    ],
  },
  serviceStatsContent: {
    title: "The Software@Scale difference",
    listItems: [
      "Regulatory expertise: Our team excels in risk mitigation strategies, adhering to regulatory compliance requirements.",
      "Support across all major cloud platforms: Proficient in Azure, Google Cloud and AWS.",
      "Top 1% engineering talent: We hire only the very best engineers who've built for scale at top tech firms and high-growth enterprises.",
      "Unbiased and strategy-driven: Bespoke strategies designed for your business goals.",
      "Faster time to market: Our teams are accustomed to high-stakes environments and rapid project turnover.",
      "Flexible engagements: Scale up or down based on project scope and budget, without sacrificing quality or continuity.",
    ],
    stats: [
      { value: "45%", description: "Principal level and experts in complex platforms." },
      { value: "40%", description: "Specialists in cloud infrastructure across Azure, Google and AWS." },
      { value: "55%", description: "Experts in banking and payment systems." },
    ],
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    accentColor: "text-[#006cc9]",
  },
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Build your engineering team today",
    description: "Contact us today to explore how our Engineering Teams service can transform your business.",
    primaryButtonText: "Contact",
    secondaryButtonText: "Learn More",
  },
  showTestimonial: true,
};

export default function EngineeringTeamsPage() {
  return <ServicePageLayout2 data={SERVICE_DATA} />;
}
