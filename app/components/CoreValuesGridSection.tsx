import Image from 'next/image';

// SVG assets from Figma context
const ICON_INTEGRITY = "/images/icons/heart_plus.svg";
const ICON_COLLABORATION = "/images/icons/group_work.svg";
const ICON_INNOVATION = "/images/icons/explore.svg";

const CoreValuesGridSection = () => {
  const values = [
    {
      icon: ICON_INTEGRITY,
      title: "Integrity: The Heart of Our Operations",
      description: "We uphold honesty and transparency in all interactions.",
    },
    {
      icon: ICON_COLLABORATION,
      title: "Collaboration: Achieving More Together",
      description: "We believe that teamwork leads to greater success.",
    },
    {
      icon: ICON_INNOVATION,
      title: "Innovation: Embracing Change and Creativity",
      description: "We continuously seek innovative solutions to challenges.",
    },
  ];

  return (
    <section className="bg-[#cce1f4] px-16 py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[80px] items-center">
        {/* Section Title and Description */}
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full text-center">
          <h2 className="font-bold text-[#0c2080] text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
            Our Core Values Shape Our Success
          </h2>
          <p className="font-normal text-lg leading-[1.5] text-[#00050a] w-full">
            At Software at Scale, our core values are the foundation of our culture. They inspire us to deliver exceptional results and foster strong partnerships.
          </p>
        </div>

        {/* Core Values Grid (Desktop: 3 Columns) */}
        <div className="flex gap-12 w-full">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col gap-6 items-center w-1/3 text-center">
              {/* Icon */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-6 items-center text-[#00050a] w-full">
                <h3 className="font-bold text-[32px] leading-[1.3] tracking-[-0.32px] w-full">
                  {value.title}
                </h3>
                <p className="font-normal text-base leading-[1.5] w-full">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesGridSection;