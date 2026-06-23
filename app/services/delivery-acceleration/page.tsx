import ServicePageLayout from '@/app/components/templates/ServicePageLayout';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder56.jpg",
    tagline: "Delivery Acceleration",
    title: "Recover Delivery Momentum",
    titleHighlight: "And Accelerate Outcomes",
    description: "When delivery slows, deadlines slip and stakeholder confidence starts to fall, adding more people is rarely enough.\n\nSoftware@Scale helps organisations overcome delivery bottlenecks, strengthen engineering capability and execute complex transformation initiatives with speed and control. Our teams integrate quickly, solve difficult challenges and help organisations get critical programs back on track.",
    overlayOpacity: 0.6,
    objectPosition: "center",
  },
  imageTextContent: {
    title: "When Organisations Need Delivery Acceleration",
    description: "Organisations rarely engage Software@Scale because delivery is going well.\n\nThey engage us when the stakes are high, timelines are under pressure and the cost of failure is significant.\n\nWhether it's a delayed program, technical debt, capability gaps or delivery uncertainty, we help teams regain momentum and deliver with confidence.",
    imageSrc: "/images/placeholder/placeholder57.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "How We Help",
    introDescription: "Every situation is different. Some organisations need additional engineering capability. Others need leadership, governance or technical recovery. Our approach is tailored to the challenge.",
    listTitle: "Our delivery acceleration services:",
    listItems: [
      "Rapid Squad Deployment — cross-functional engineering teams mobilised quickly to increase delivery capacity",
      "Engineering Recovery — technical leaders who can identify blockers, address technical debt and restore momentum",
      "Delivery Leadership — experienced delivery and engineering leaders embedded directly into critical initiatives",
      "Capability Uplift — strengthening internal teams through coaching, governance and improved engineering practices",
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
        iconSrc: "/images/icons/bolt.svg",
        title: "Rapid Mobilisation",
        content: "Our teams are structured to integrate quickly and begin contributing without lengthy ramp-up periods.",
      },
      {
        iconSrc: "/images/icons/engineering.svg",
        title: "Engineering-Led Recovery",
        content: "We address the root causes of delivery issues — technical debt, capability gaps and platform constraints — not just the symptoms.",
      },
      {
        iconSrc: "/images/icons/diversity_1.svg",
        title: "Executive Oversight",
        content: "Experienced technology and delivery leaders help organisations navigate complex delivery challenges and maintain stakeholder confidence.",
      },
      {
        iconSrc: "/images/icons/monitoring.svg",
        title: "Sustainable Improvement",
        content: "We help teams improve capability, governance and engineering practices so momentum continues after the engagement ends.",
      },
    ],
  },
  serviceStatsContent: {
    title: "Built For High Pressure Environments",
    listItems: [
      "Specialises in environments where timelines are tight, delivery is critical and failure is expensive",
      "Teams designed to integrate quickly and understand complex environments",
      "Begin contributing from day one without lengthy ramp-up periods",
      "Experience across banking, superannuation, retail and digital platforms",
    ],
    stats: [
      { value: "180+", description: "Specialists ready to mobilise for your delivery challenges." },
      { value: "30+", description: "Enterprise clients supported across high-pressure delivery environments." },
      { value: "Day 1", description: "Our teams contribute from the moment they start." },
    ],
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    accentColor: "text-[#006cc9]",
  },
  showTestimonial: true,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Need Delivery Momentum?",
    description: "Whether you're facing delivery pressure, capability gaps or critical deadlines, Software@Scale can help.",
    primaryButtonText: "Talk To A Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function DeliveryAccelerationPage() {
  return <ServicePageLayout data={SERVICE_DATA} />;
}
