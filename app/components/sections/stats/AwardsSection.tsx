'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const awards = [{ name: "Australian Government", src: "/images/awards/australiangov.svg", width: 120, height: 80 }];

const AwardsSection = () => {
  return (
    <section className="bg-[#006cc9] flex flex-col gap-12 md:gap-16 lg:gap-20 items-center px-5 md:px-8 lg:px-16 pt-8 pb-12 md:pb-16 lg:pb-20 w-full">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-[1280px] w-full">

        {/* Mobile & Tablet */}
        <motion.div
          className="lg:hidden flex flex-col gap-8 w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="font-bold text-[#14d3f3] text-[16px] md:text-[17px] leading-[1.5] text-center w-full">
            We are the preferred ICT supplier for NSW and Australian Government Agencies, delivering secure, scalable and innovative technology solutions that support critical services, operational excellence and digital transformation across the public sector.
          </p>
          <div className="flex gap-6 items-center justify-center w-full">
            {awards.map((award, index) => (
              <div key={index} className="relative flex-shrink-0" style={{ width: '140px', height: '80px' }}>
                <Image src={award.src} alt={`${award.name} logo`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:flex gap-8 xl:gap-[42px] items-center w-full">
          <motion.p
            className="font-bold text-[#14d3f3] text-[18px] leading-[1.5] flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.75, ease }}
          >
            We are the preferred ICT supplier for NSW and Australian Government Agencies, delivering secure, scalable and innovative technology solutions that support critical services, operational excellence and digital transformation across the public sector.
          </motion.p>
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="flex gap-4 xl:gap-[35px] items-center">
              {awards.map((award, index) => (
                <div key={index} className="relative flex-shrink-0" style={{ width: '200px', height: '100px' }}>
                  <Image src={award.src} alt={`${award.name} logo`} fill className="object-contain" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
