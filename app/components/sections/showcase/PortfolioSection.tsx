'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aspectRatio: string;
  link?: string;
  objectPosition?: string;
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  projects: Project[];
  viewAllButtonText: string;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function PortfolioSection({
  title,
  description,
  projects,
  viewAllButtonText,
}: PortfolioSectionProps) {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-8 lg:px-16 py-16 md:py-28">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20 max-w-[768px] mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#0c2080] tracking-[-0.32px] md:tracking-[-0.4px] lg:tracking-[-0.48px] mb-5 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-[17px] lg:text-[18px] font-normal leading-[1.5] text-[#00050a]">
            {description}
          </p>
        </motion.div>

        {/* Mobile Layout: Single Column */}
        <motion.div
          className="flex flex-col gap-12 md:hidden mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Link href={project.link || "/collections/case-studies"} className="flex flex-col gap-5 group cursor-pointer">
                <div className={`relative w-full ${project.aspectRatio} rounded-2xl overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: project.objectPosition ?? 'center' }}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.2px] group-hover:text-[#006cc9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.4] text-[#006cc9]">
                      {project.subtitle}
                    </p>
                    <p className="text-base font-normal leading-[1.5] text-[#00050a]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#00050a]">
                    <span className="text-base font-medium leading-[1.5]">
                      View project
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-start justify-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Link href={project.link || "/collections/case-studies"} className="flex flex-col gap-6 group cursor-pointer w-full">
                <div className="relative w-full h-[340px] rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: project.objectPosition ?? 'center' }}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[20px] lg:text-[24px] font-bold leading-[1.3] text-[#0c2080] tracking-[-0.2px] lg:tracking-[-0.24px] group-hover:text-[#006cc9] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[18px] lg:text-[24px] font-bold leading-[1.4] text-[#006cc9]">
                        {project.subtitle}
                      </p>
                      <p className="text-base font-normal leading-[1.5] text-[#00050a]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium leading-[1.5] text-[#00050a]">
                      View project
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
