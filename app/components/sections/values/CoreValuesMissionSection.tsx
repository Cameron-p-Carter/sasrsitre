'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const BACKGROUND_IMAGE_SRC = "/images/placeholder/placeholder10.jpg";

const CoreValuesMissionSection = () => {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] items-center w-full">
          {/* Left: slides from left */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2 order-1"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="flex flex-col gap-5 md:gap-6 w-full">
              <h2 className="font-bold text-[#0c2080] text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] w-full">
                Empowering Your Digital Transformation with Excellence and Innovation
              </h2>
              <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
                At Software at Scale, our mission is to drive digital acceleration for enterprises. We are dedicated to engineering excellence, ensuring our clients thrive in a rapidly evolving technological landscape.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-4 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start py-2 w-full">
                {[
                  { heading: 'Our Mission', body: 'To enable businesses to scale confidently and modernise their platforms with minimal risk.' },
                  { heading: 'Our Values', body: 'Integrity, innovation, and collaboration drive our commitment to client success and excellence.' },
                ].map((item) => (
                  <motion.div
                    key={item.heading}
                    className="flex flex-col gap-3 md:gap-4 w-full md:w-1/2 text-[#00050a]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                    }}
                  >
                    <h3 className="font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.18px] md:tracking-[-0.2px] w-full">
                      {item.heading}
                    </h3>
                    <p className="font-normal text-base leading-[1.5] w-full">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: image scales in */}
          <motion.div
            className="relative rounded-2xl shrink-0 w-full h-[348px] md:w-1/2 md:h-[540px] order-2 overflow-hidden"
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease }}
          >
            <Image src={BACKGROUND_IMAGE_SRC} alt="Placeholder Image" fill className="object-cover rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesMissionSection;
