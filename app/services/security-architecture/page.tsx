import ServicePageLayout from '@/app/components/ServicePageLayout';

// Define the test content for the service page
const TEST_SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder41.jpg", // Updated image placeholder
    tagline: "Fortify",
    title: "Security",
    titleHighlight: "Architecture",
    description: "Our Security Architecture service equips enterprises with the tools to defend against modern threats. Tailored solutions ensure your infrastructure is resilient, compliant, and future-ready.",
    overlayOpacity: 0.6, // Updated opacity
  },
  // Future sections will be added here
  imageTextContent: {
    title: "Protecting your most critical assets with precision and foresight",
    description: `In a world where cyber threats grow more complex every day, protecting your business requires more than reactive responses. Software@Scale designs security architecture that anticipates risks and builds resilience into your systems from the ground up. We focus on creating robust, compliant environments that safeguard sensitive data and maintain trust with your customers and partners.

Our expertise covers a full range of security services including vulnerability assessments, penetration testing and dark web monitoring. We specialise in high-stakes industries such as finance and insurance, where a single breach can have serious operational and reputational consequences. Our targeted threat simulations identify weaknesses before they can be exploited.

Security is not just about tools and technology but embedding best practices and processes that keep your teams alert and prepared. We work closely with your internal teams to build security awareness, strengthen governance and implement proactive strategies that reduce risk across your entire technology stack.

From initial assessments to ongoing monitoring, our security architecture service is designed to evolve with your business needs. By balancing rigorous defence with practical implementation, we help you maintain compliance, reduce risk and operate confidently in a rapidly changing threat landscape.`,
    imageSrc: "/images/placeholder/placeholder42.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "Built-in security at every step",
    introDescription: "Software@Scale designs security architecture to protect your critical systems from evolving threats. We identify risks early, implement robust controls and ensure ongoing compliance, helping you stay secure and resilient.",
    listTitle: "How Security Architecture works:",
    listItems: [
      "Assess vulnerabilities",
      "Simulate threats",
      "Design controls",
      "Implement safeguards",
      "Monitor continuously",
    ],
    imageSrc: "/images/placeholder/placeholder43.jpg",
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
        iconSrc: "/images/icons/settings.svg", // Using existing icon path for settings placeholder
        title: "Capabilities",
        content: [
          "Vulnerability assessments",
          "Penetration testing",
          "Threat simulation",
          "Risk mitigation",
          "Compliance audits",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg", // Using existing icon path for cloud_done placeholder
        title: "Delivery",
        content: [
          "Proactive monitoring",
          "Incident response",
          "Security architecture design",
          "Custom control implementation",
          "Expert consulting and coaching",
        ],
      },
      {
        iconSrc: "/images/icons/devices.svg", // Using existing icon path for devices placeholder
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
      "Top 1% engineering talent: We hire only the very best engineers who’ve built for scale at top tech firms and high-growth enterprises.",
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
    title: "Join Us on Our Journey",
    description: "Contact us today to explore how our Cloud Engineering services can transform your business.",
    primaryButtonText: "Contact",
    secondaryButtonText: "Learn More",
  },
  showTestimonial: true,
};

export default function SecurityArchitecturePage() {
  return (
    <ServicePageLayout data={TEST_SERVICE_DATA} />
  );
}