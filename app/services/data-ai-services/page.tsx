import ServicePageLayout from '@/app/components/ServicePageLayout';

// Define the test content for the service page
const TEST_SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder53.jpg", // Updated image placeholder
    tagline: "Empower",
    title: "Data and AI",
    titleHighlight: "Services",
    description: "In today's fast-paced digital landscape, harnessing the power of data and artificial intelligence is crucial for business success. Our Data / AI Services are designed to equip enterprises with the tools and insights needed to thrive.",
    overlayOpacity: 0.6, // Updated opacity
  },
  // Future sections will be added here
  imageTextContent: {
    title: "Unlock the full potential of your data and AI",
    description: `Data and AI technologies are evolving rapidly, offering powerful opportunities but also complex challenges. Understanding what your organisation truly needs and how to implement it effectively is critical to achieving meaningful results without wasted effort or cost.

At Software@Scale, we provide comprehensive support across data migration assurance and advanced AI integrations. From custom AI “brain” development to deploying generative models and agentic AI, we help you navigate this evolving landscape with confidence.

Our focus is on practical, tailored solutions that distinguish genuine AI capabilities from simple automation, ensuring your investment drives real business value. We guide you from strategy through execution to ongoing optimisation, helping you harness AI’s full power while mitigating risks. With our data and AI services, you can lift performance, reduce risk and support sustainable team development.`,
    imageSrc: "/images/placeholder/placeholder54.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "Clarity, confidence and innovation",
    introDescription: "Software@Scale delivers clear insights and practical strategies that help you harness data and AI effectively, turning complex challenges into measurable business outcomes.",
    listTitle: "How Data and AI Services works:",
    listItems: [
      "Discovery and assessment",
      "Strategy development",
      "Solution design",
      "Implementation and testing",
      "Ongoing optimisation",
    ],
    imageSrc: "/images/placeholder/placeholder55.jpg",
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
          "Data migration assurance",
          "Custom AI solutions",
          "Generative model integration",
          "Agentic AI expertise",
          "AI strategy guidance",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg", // Using existing icon path for cloud_done placeholder
        title: "Delivery",
        content: [
          "Tailored AI solutions",
          "Risk mitigation focus",
          "Scalable implementations",
          "Cross-industry expertise",
          "Continuous support",
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

export default function DataAIServicesPage() {
  return (
    <ServicePageLayout data={TEST_SERVICE_DATA} />
  );
}