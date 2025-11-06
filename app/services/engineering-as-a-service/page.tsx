import ServicePageLayout from '@/app/components/ServicePageLayout';

// Define the test content for the service page
const TEST_SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder56.jpg", // Updated image placeholder
    tagline: "Empower",
    title: "Engineering as a Service",
    titleHighlight: "(EaaS)",
    description: "EAAS (Engineering as a Service) redefines operational efficiency by providing bespoke, on-demand engineering solutions. Focus on your core business while we ensure your operations are agile and responsive to change.",
    overlayOpacity: 0.6, // Updated opacity
  },
  // Future sections will be added here
  imageTextContent: {
    title: "Build faster with the right people embedded from day one",
    description: `When projects need to move quickly or scale reliably, access to trusted engineers can make all the difference. Software@Scale’s Engineering as a Service (EaaS) gives you flexible, embedded access to experience software engineers, without the overhead of long hiring cycles.

Our teams specialise in financial services, cloud and secure systems. They integrate directly with your delivery pipelines and internal teams, helping you move from roadmap to reality, faster.

Whether you’re scaling platforms, modernising systems or clearing a backlog, EaaS is designed to keep momentum up and standards high. You stay in control of the product, we support delivery with engineering you can rely on.

It’s engineering support that fits around your needs, accelerates your roadmap and strengthens your team as it goes.`,
    imageSrc: "/images/placeholder/placeholder57.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "Accelerated engineering without compromise",
    introDescription: "At Software@Scale, we hire only the top 1% of engineers worldwide. Our team are rigorously vetted for their technical expertise, problem-solving abilities and efficient deliveries. That means they’re ready to hit the ground running within as little as two weeks on even your most complex projects.",
    listTitle: "How EaaS works:",
    listItems: [
      "Consultation",
      "Scope definition",
      "Talent matching",
      "Real-time monitoring",
      "Ongoing support",
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
        iconSrc: "/images/icons/settings.svg", // Using existing icon path for settings placeholder
        title: "Capabilities",
        content: [
          "Platform modernisation",
          "Transformation management",
          "Enterprise processes",
          "Internal team upskilling",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg", // Using existing icon path for cloud_done placeholder
        title: "Delivery",
        content: [
          "Bespoke solutions fit for purpose",
          "Scalable code base",
          "Prototype to completion",
          "Controlled framework model",
          "QA process development",
          "Audit report",
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

export default function EngineeringAsAServicePage() {
  return (
    <ServicePageLayout data={TEST_SERVICE_DATA} />
  );
}