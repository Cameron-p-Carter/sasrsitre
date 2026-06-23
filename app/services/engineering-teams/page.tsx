import ServicePageLayout from '@/app/components/templates/ServicePageLayout';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder56.jpg",
    tagline: "Engineering Teams",
    title: "Build High-Performing",
    titleHighlight: "Engineering Teams Faster",
    description: "Whether you need an individual specialist, a cross-functional squad or ongoing engineering capability, Software@Scale provides experienced engineers, architects and technology leaders who integrate quickly, operate with ownership and deliver outcomes from day one.\n\nTrusted by organisations across banking, payments, superannuation, insurance and retail, our teams help clients accelerate delivery, reduce technology risk and strengthen engineering capability.",
    overlayOpacity: 0.6,
    objectPosition: "center",
  },
  imageTextContent: {
    title: "When Clients Need Engineering Teams",
    description: "Organisations rarely engage Software@Scale because they need more people. They engage us because they need outcomes.\n\nWhether it's accelerating delivery, solving a difficult technology challenge or strengthening engineering capability, our teams are brought in to make progress where it matters most.",
    imageSrc: "/images/placeholder/placeholder57.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "Flexible Engagement Models",
    introDescription: "Every organisation has different delivery needs. Software@Scale provides flexible engagement models that can scale with your priorities.",
    listTitle: "Engagement options:",
    listItems: [
      "Individual Specialists — senior engineers, architects, platform specialists and delivery leaders embedded directly into your team",
      "Engineering Squads — cross-functional teams aligned to a specific business outcome",
      "Managed Teams — Software@Scale provides both capability and leadership accountability",
      "Engineering As A Service — scalable engineering capability available on demand",
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
        iconSrc: "/images/icons/engineering.svg",
        title: "Software Engineering",
        content: "Modern web, mobile and backend engineering capability across customer-facing and enterprise platforms.",
      },
      {
        iconSrc: "/images/icons/cloud.svg",
        title: "Platform Engineering",
        content: "Cloud platforms, infrastructure automation, reliability and operational excellence.",
      },
      {
        iconSrc: "/images/icons/settings.svg",
        title: "DevOps & SRE",
        content: "Observability, automation, deployment pipelines and operational resilience.",
      },
      {
        iconSrc: "/images/icons/security.svg",
        title: "Security Engineering",
        content: "Secure-by-design engineering capability integrated into delivery teams.",
      },
      {
        iconSrc: "/images/icons/monitoring.svg",
        title: "Quality Engineering",
        content: "Automation, quality practices and engineering excellence.",
      },
      {
        iconSrc: "/images/icons/dynamic_form.svg",
        title: "Data Engineering",
        content: "Modern data platforms, pipelines and analytics capability.",
      },
    ],
  },
  serviceStatsContent: {
    title: "Outcomes Delivered",
    listItems: [
      "Faster Delivery — increase engineering capacity without lengthy recruitment cycles",
      "Reduced Delivery Risk — access experienced engineers who have solved similar challenges before",
      "Stronger Internal Teams — capability transfer, mentoring and knowledge sharing built into every engagement",
      "Improved Engineering Quality — modern practices, stronger governance and better technical outcomes",
      "Flexible Scale — scale capability up or down as priorities change",
      "Access To Specialist Expertise — platform, cloud, security, data and engineering leadership available when needed",
    ],
    stats: [
      { value: "180+", description: "Specialists across engineering, platform, security and data." },
      { value: "30+", description: "Enterprise clients across banking, payments, superannuation and retail." },
      { value: "Day 1", description: "Our teams integrate quickly and contribute from the start." },
    ],
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    accentColor: "text-[#006cc9]",
  },
  showTestimonial: true,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Need Engineering Capability?",
    description: "Whether you're looking for an individual specialist, a high-performing squad or ongoing engineering capability, Software@Scale can help.",
    primaryButtonText: "Talk To A Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function EngineeringTeamsPage() {
  return <ServicePageLayout data={SERVICE_DATA} />;
}
