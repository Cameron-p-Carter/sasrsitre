import React from 'react';

interface ServiceFeature {
  title: string;
  description: string;
}

const DEFAULT_FEATURES: ServiceFeature[] = [
  {
    title: "Individual Specialists",
    description: "Senior engineers, architects, platform specialists and delivery leaders embedded directly into your team.\n\nBest suited to:\n• capability gaps\n• specialist expertise\n• leadership support\n• delivery acceleration"
  },
  {
    title: "Engineering Squads",
    description: "Cross-functional teams aligned to a specific business outcome.\n\nTypical squad composition:\n• Engineering Lead\n• Senior Engineers\n• Platform Engineers\n• QA Engineers\n• Product Owner\n• Delivery Support\n\nBest suited to:\n• product delivery\n• transformation initiatives\n• platform modernisation"
  },
  {
    title: "Managed Teams",
    description: "Software@Scale provides both capability and leadership accountability.\n\nBest suited to:\n• long-term initiatives\n• capability uplift\n• engineering ownership"
  },
  {
    title: "Engineering As A Service",
    description: "Scalable engineering capability available on demand.\n\nBest suited to:\n• fluctuating demand\n• multiple concurrent initiatives\n• rapid growth"
  }
];

const ServiceFeaturesSection = ({ features }: { features?: ServiceFeature[] }) => {
  const items = features ?? DEFAULT_FEATURES;

  return (
    <section className="bg-[#006cc9] w-full py-[112px] px-[64px] flex flex-col items-center text-white" data-node-id="10449:21406">
      <div className="max-w-[1280px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px]">
          {items.map((feature, index) => (
            <div key={index} className="flex flex-col gap-[24px]">
              <h3 className="text-[#14d3f3] font-bold text-[32px] tracking-[-0.32px] leading-[1.3]">
                {feature.title}
              </h3>
              <div className="text-[16px] leading-[1.5] whitespace-pre-wrap font-['Montserrat',sans-serif]">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
