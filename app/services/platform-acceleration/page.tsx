import ServicePageLayout from '@/app/components/ServicePageLayout';

// Define the test content for the service page
const TEST_SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder43.jpg", // Updated image placeholder
    tagline: "Accelerate",
    title: "Transform Your",
    titleHighlight: "Platform",
    description: "Our Platform Acceleration service empowers organizations to modernize their software delivery processes. Experience faster deployment and enhanced performance with tailored solutions designed for your unique needs.",
    overlayOpacity: 0.6, // Updated opacity
  },
  // Future sections will be added here
  imageTextContent: {
    title: "Accelerate your delivery without slowing the business",
    description: `When timelines start to slip or pressure builds from stakeholders, it is not always about headcount. It is about bringing in the right people fast who can assess, integrate and deliver with minimal ramp up.

Software@Scale’s Project Acceleration service helps you move quickly while maintaining control and quality. We deploy full squads of senior engineers, leads and architects within two weeks and they are typically fully embedded and contributing within four. These high-performing teams bring urgency, clarity and proven experience in steering complex projects back on track.

Alongside hands-on delivery, we also work across your environment to reduce blockers like technical debt, streamline delivery processes and upskill internal teams. The result is sustainable momentum and a more resilient, capable team once we transition off.

Every engagement is shaped to your goals, resources and delivery model. Whether you are preparing for investment, hitting a market window or navigating delays, we help you move forward with speed and certainty.`,
    imageSrc: "/images/placeholder/placeholder45.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "High-impact teams, fast",
    introDescription: "Software@Scale builds and embeds specialist engineering squads that hit the ground running; resolving tech debt, accelerating delivery and leaving your teams stronger than before.",
    listTitle: "How Project Acceleration works:",
    listItems: [
      "Assess goals",
      "Assemble team",
      "Integrate fast",
      "Deliver outcomes",
      "Strengthen capability",
    ],
    imageSrc: "/images/placeholder/placeholder46.jpg",
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
          "Rapid squad deployment",
          "Critical path delivery",
          "Technical debt resolution",
          "Process and workflow improvement",
          "Team coaching and uplift",
        ],
      },
      {
        iconSrc: "/images/icons/cloud_done.svg", // Using existing icon path for cloud_done placeholder
        title: "Delivery",
        content: [
          "Full team in 2 weeks",
          "Fully productive in 4 weeks",
          "Flexible engagement model",
          "Specialists in finance & insurance",
          "Focus on long-term capability, not dependency",
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
    title: "Accelerate Your Platform Today",
    description: "Transform your digital landscape with our expert Platform Acceleration services tailored for your needs.",
    primaryButtonText: "Contact",
    secondaryButtonText: "Learn More",
  },
  showTestimonial: true,
};

export default function PlatformAccelerationPage() {
  return (
    <ServicePageLayout data={TEST_SERVICE_DATA} />
  );
}