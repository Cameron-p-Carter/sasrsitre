'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/app/components/shared/SectionWrapper';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const images = {
  top: '/images/core/his34.png',
  right: '/images/core/right.jpg',
  bottom: '/images/core/bottom.jpg',
};

const valuesSection = {
  title: 'Living Our Values, Together',
  description: 'Our culture is shaped by everyday actions. How we collaborate, connect, and grow as a team reflects the values that guide our work and underpin everything we deliver.',
};

export default function ValuesSection() {
  return (
    <SectionWrapper backgroundColor="bg-[#006cc9]" padding="px-5 md:px-16 py-16 md:py-28" className="text-center">
      <div className="flex flex-col items-center gap-20">
        <motion.div
          className="max-w-[768px] mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{valuesSection.title}</h2>
          <p className="text-lg text-white/90">{valuesSection.description}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
          {/* Left column: two images stagger */}
          <motion.div
            className="flex flex-col gap-12 w-full md:max-w-[632px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {[{ src: images.top, alt: 'Value Image 1', ratio: 'aspect-[632/346.5]' }, { src: images.bottom, alt: 'Value Image 2', ratio: 'aspect-[632/357]' }].map((img) => (
              <motion.div
                key={img.alt}
                className={`relative w-full ${img.ratio} rounded-xl overflow-hidden shadow-2xl`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column: tall image slides from right */}
          <motion.div
            className="flex w-full md:max-w-[632px]"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            <div className="relative w-full aspect-[632/767] rounded-xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.45, ease }}
              >
                <Image src={images.right} alt="Value Image 3" fill className="object-cover rounded-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
