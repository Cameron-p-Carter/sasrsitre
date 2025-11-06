import ServicePageLayout from '@/app/components/ServicePageLayout';

// Define the test content for the service page
const TEST_SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder50.jpg", // Updated image placeholder
    tagline: "Optimize",
    title: "Elevate Engineering",
    titleHighlight: "Performance",
    description: "Engineering Performance is crucial for enterprises aiming to enhance their software delivery capabilities. By focusing on efficiency and quality, we empower organizations to achieve faster time-to-market while minimizing risks.",
    overlayOpacity: 0.6, // Updated opacity
  },
  // Future sections will be added here
  imageTextContent: {
    title: "Improve teams’ performance with clarity and confidence",
    description: `Understanding how your engineering teams are really performing is critical to sustained success, especially during growth, change or high-stakes delivery. Yet many organisations rely on subjective measures or outdated assumptions that don't reflect day-to-day effectiveness.

At Software@Scale, we take an objective, data-driven approach to performance assessment. We evaluate engineering teams across coding standards, delivery processes, collaboration and leadership capability, providing a clear picture of strengths, gaps and opportunities.

This insight allows you to take targeted action. Whether it is introducing better workflows, upskilling teams or refining roles, our recommendations are practical, relevant and tailored to your goals.

Our assessments are designed to be low disruption but high value. With a clear view of where to focus, you can lift performance, reduce risk and support sustainable team development.`,
    imageSrc: "/images/placeholder/placeholder51.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "Insight, improvement and impact",
    introDescription: "Software@Scale provides objective evaluations that reveal skill gaps, enhance team collaboration and deliver tailored recommendations to boost engineering performance.",
    listTitle: "How Engineering Performance Assessment works:",
    listItems: [
      "Collect performance data",
      "Review coding standards",
      "Evaluate team processes",
      "Identify improvement areas",
      "Recommend coaching plans",
    ],
    imageSrc: "/images/placeholder/placeholder52.jpg",
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
          "Performance data collection",
          "Coding standards review",
          "Process evaluation",
          "Skill gap analysis",
          "Engineering and leadership coaching",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg", // Using existing icon path for cloud_done placeholder
        title: "Delivery",
        content: [
          "Detailed technical reports",
          "Tailored improvement plans",
          "Team workshops",
          "Ongoing performance monitoring",
          "Targeted coaching support",
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

export default function EngineeringPerformancePage() {
  return (
    <ServicePageLayout data={TEST_SERVICE_DATA} />
  );
}