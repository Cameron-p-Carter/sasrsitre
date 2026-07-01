'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const approaches = [
  {
    icon: "/images/icons/productivity.svg",
    title: "Executive Technology Leadership",
    description: "Experienced technology leaders who understand both strategy and delivery, remaining actively involved in outcomes.",
  },
  {
    icon: "/images/icons/delivery_truck_bolt.svg",
    title: "Proven Delivery In Regulated Industries",
    description: "A track record of successful delivery across banking, payments, superannuation, insurance and retail.",
  },
  {
    icon: "/images/icons/person_pin.svg",
    title: "Principal Engineering Expertise",
    description: "Senior engineers and architects with deep expertise in solving complex, high-stakes technology challenges.",
  },
  {
    icon: "/images/icons/modeling.svg",
    title: "Flexible Engagement Models",
    description: "From individual specialists to managed teams, we adapt to your delivery needs and engagement preferences.",
  },
];

const ProvenApproachSection = () => {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="flex flex-col gap-12 md:gap-20 items-center max-w-[1280px] mx-auto w-full">

        {/* Title */}
        <motion.div
          className="flex flex-col items-center max-w-[768px] w-full text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease }}
        >
          <h2 className="font-bold text-[36px] md:text-[48px] leading-[1.2] text-[#0c2080] tracking-[-0.36px] md:tracking-[-0.48px] w-full">
            Why Enterprise Clients Choose Software@Scale
          </h2>
        </motion.div>

        {/* Mobile & Tablet: 2-column grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:hidden">
          {approaches.map((approach, i) => (
            <motion.div
              key={approach.title}
              className="flex flex-col gap-4 items-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <div className="w-10 h-10 relative shrink-0">
                <Image src={approach.icon} alt={approach.title} fill />
              </div>
              <div className="flex flex-col gap-2 text-[#00050a]">
                <h3 className="font-bold text-[18px] leading-[1.4] tracking-[-0.18px]">
                  {approach.title}
                </h3>
                <p className="font-normal text-base leading-[1.5]">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: three-column layout */}
        <div className="hidden lg:flex gap-12 xl:gap-[48px] items-center w-full">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-16 items-center">
            {[approaches[0], approaches[1]].map((approach, i) => (
              <motion.div
                key={approach.title}
                className="flex flex-col gap-6 items-center text-center w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
              >
                <div className="w-12 h-12 relative">
                  <Image src={approach.icon} alt={approach.title} fill />
                </div>
                <div className="flex flex-col gap-4 items-center text-[#00050a]">
                  <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                    {approach.title}
                  </h3>
                  <p className="font-normal text-[16px] leading-[1.5] w-full">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <motion.div
            className="relative rounded-2xl shrink-0 w-[420px] xl:w-[500px] h-[420px] xl:h-[500px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.75, ease }}
          >
            <Image
              src="/images/placeholder/placeholder160.jpg"
              alt="Our proven approach methodology"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-16 items-center">
            {[approaches[2], approaches[3]].map((approach, i) => (
              <motion.div
                key={approach.title}
                className="flex flex-col gap-6 items-center text-center w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
              >
                <div className="w-12 h-12 relative">
                  <Image src={approach.icon} alt={approach.title} fill />
                </div>
                <div className="flex flex-col gap-4 items-center text-[#00050a]">
                  <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                    {approach.title}
                  </h3>
                  <p className="font-normal text-[16px] leading-[1.5] w-full">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProvenApproachSection;
