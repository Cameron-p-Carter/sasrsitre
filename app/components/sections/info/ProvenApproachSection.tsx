'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const ProvenApproachSection = () => {
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
    }
  ];

  return (
    <section className="bg-[#cce1f4] flex flex-col items-center pb-[112px] pt-[112px] px-[64px] w-full">
      <div className="flex flex-col gap-[80px] items-center max-w-[1280px] w-full">
        {/* Section Title */}
        <motion.div
          className="flex flex-col items-center max-w-[768px] w-full"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-bold text-[48px] leading-[1.2] text-[#0c2080] text-center tracking-[-0.48px] w-full">
            Why Enterprise Clients Choose Software@Scale
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex gap-[48px] items-center w-full">
          {/* Left Column — slides in from left */}
          <div className="flex-[1_0_0] flex flex-col gap-[64px] items-center w-full">
            {[approaches[0], approaches[1]].map((approach, i) => (
              <motion.div
                key={approach.title}
                className="flex flex-col gap-[24px] items-center w-full"
                initial={{ opacity: 0, x: -56 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.75, delay: i * 0.14, ease }}
              >
                <div className="w-[48px] h-[48px] relative">
                  <Image src={approach.icon} alt={approach.title} fill />
                </div>
                <div className="flex flex-col gap-[16px] items-center text-[#00050a] text-center w-full">
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

          {/* Center Image — scale + fade reveal */}
          <motion.div
            className="relative rounded-[16px] shrink-0 w-[540px] h-[540px] overflow-hidden"
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.0, ease }}
          >
            <Image
              src="/images/placeholder/placeholder160.jpg"
              alt="Our proven approach methodology"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column — slides in from right */}
          <div className="flex-[1_0_0] flex flex-col gap-[64px] items-center w-full">
            {[approaches[2], approaches[3]].map((approach, i) => (
              <motion.div
                key={approach.title}
                className="flex flex-col gap-[24px] items-center w-full"
                initial={{ opacity: 0, x: 56 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.75, delay: i * 0.14, ease }}
              >
                <div className="w-[48px] h-[48px] relative">
                  <Image src={approach.icon} alt={approach.title} fill />
                </div>
                <div className="flex flex-col gap-[16px] items-center text-[#00050a] text-center w-full">
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
