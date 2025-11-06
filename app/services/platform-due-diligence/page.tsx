import ServicePageLayout from '@/app/components/ServicePageLayout';

// Define the test content for the service page
const TEST_SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder47.jpg", // Updated image placeholder
    tagline: "Assurance",
    title: "Due Diligence",
    titleHighlight: "Matters",
    description: "Our Platform Due Diligence service is designed to provide a comprehensive assessment of your technology landscape. By identifying risks and opportunities, we empower organizations to make informed decisions that drive success.",
    overlayOpacity: 0.6, // Updated opacity
  },
  // Future sections will be added here
  imageTextContent: {
    title: "Make informed, risk-aware decisions",
    description: `When facing high-stakes moments like acquisitions, funding rounds or regulatory reviews, understanding the true state of a platform is critical. Assumptions can lead to costly surprises. Thorough technical validation gives you the confidence to move forward.

At Software@Scale, we conduct in-depth assessments across architecture, scalability, security and technical debt. Our process is designed to uncover hidden risks, highlight performance gaps and deliver actionable recommendations that support long-term value.

Every engagement results in a clear, prioritised roadmap that aligns with your goals, whether that's improving system resilience, planning for scale or navigating compliance requirements.

We combine technical rigour with commercial awareness, helping you make smarter technology decisions and avoid unnecessary costs.`,
    imageSrc: "/images/placeholder/placeholder48.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "Clarity, confidence and control",
    introDescription: "Software@Scale delivers deep technical assessments that de-risk decisions, uncover hidden issues and provide a clear path to platform improvement.",
    listTitle: "How Platform Due Diligence works:",
    listItems: [
      "Architecture review",
      "Scalability analysis",
      "Risk identification",
      "Improvement roadmap",
      "Value estimation",
    ],
    imageSrc: "/images/placeholder/placeholder49.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
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
          "Scalability assessment",
          "Technical debt analysis",
          "Operational risk review",
          "Compliance readiness check",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg", // Using existing icon path for cloud_done placeholder
        title: "Delivery",
        content: [
          "Cross-platform expertise",
          "Actionable recommendations",
          "Clear remediation plans",
          "Fast turnaround time",
          "Independent, unbiased review",
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

export default function PlatformDueDiligencePage() {
  return (
    <ServicePageLayout data={TEST_SERVICE_DATA} />
  );
}