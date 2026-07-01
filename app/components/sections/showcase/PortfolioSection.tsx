'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  challenge?: string;
  outcome?: string;
  numbers?: string;
  description?: string;
  image: string;
  link?: string;
  objectPosition?: string;
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  projects: Project[];
  viewAllButtonText: string;
  variant?: 'light' | 'dark';
}

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export default function PortfolioSection({
  title,
  description,
  projects,
  viewAllButtonText,
  variant = 'light',
}: PortfolioSectionProps) {
  const dark = variant === 'dark';
  const bg = dark ? 'bg-[#006cc9]' : 'bg-[#cce1f4]';
  const headingColor = dark ? 'text-white' : 'text-[#0c2080]';
  const descColor = dark ? 'text-white/80' : 'text-[#00050a]';
  const cardTitleColor = dark ? 'text-[#14d3f3]' : 'text-[#006cc9]';
  const bodyColor = dark ? 'text-white/80' : 'text-[#00050a]';
  const labelColor = dark ? 'text-white' : 'text-[#00050a]';
  const borderColor = dark ? 'border-white/20' : 'border-[#00050a]/15';
  const linkColor = dark ? 'text-white' : 'text-[#00050a]';

  return (
    <section className={`${bg} px-5 md:px-8 lg:px-16 py-16 md:py-28`}>
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20 max-w-[768px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease }}
        >
          <h2 className={`text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] ${headingColor} tracking-[-0.32px] md:tracking-[-0.4px] lg:tracking-[-0.48px] mb-5 md:mb-6`}>
            {title}
          </h2>
          <p className={`text-base md:text-[17px] lg:text-[18px] font-normal leading-[1.5] ${descColor}`}>
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
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: project.objectPosition ?? 'center' }}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className={`text-[24px] md:text-[32px] font-bold leading-[1.3] ${cardTitleColor} tracking-[-0.32px] transition-colors`}>
                      {project.title}
                    </h3>
                    <div className={`flex flex-col border-t ${borderColor} pt-5 mt-2`}>
                      {project.description && (
                        <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} pb-5`}>{project.description}</p>
                      )}
                      {project.challenge && (
                        <div className={`flex items-center gap-4 border-b ${borderColor} py-5`}>
                          <p className={`text-[16px] md:text-[18px] font-bold ${labelColor} w-[120px] shrink-0`}>Challenge:</p>
                          <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} flex-1`}>{project.challenge}</p>
                        </div>
                      )}
                      {project.outcome && (
                        <div className={`flex items-center gap-4 border-b ${borderColor} py-5`}>
                          <p className={`text-[16px] md:text-[18px] font-bold ${labelColor} w-[120px] shrink-0`}>Outcome:</p>
                          <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} flex-1`}>{project.outcome}</p>
                        </div>
                      )}
                      {project.numbers && (
                        <div className={`flex items-center gap-4 border-b ${borderColor} py-5`}>
                          <p className={`text-[16px] md:text-[18px] font-bold ${labelColor} w-[120px] shrink-0`}>Numbers:</p>
                          <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} flex-1`}>{project.numbers}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${linkColor} mt-4`}>
                    <span className="text-base font-medium leading-[1.5]">
                      View Proven Delivery
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

        {/* Desktop Grid - rendered in aligned row bands */}
        <div className="hidden md:block mb-16">
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, pairIdx) => {
            const pair = projects.slice(pairIdx * 2, pairIdx * 2 + 2);
            return (
              <motion.div
                key={pairIdx}
                className="mb-16 last:mb-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-10% 0px' }}
              >
                {/* Images */}
                <div className="grid grid-cols-2 gap-8 lg:gap-12 mb-6">
                  {pair.map((project) => (
                    <motion.div key={project.id} variants={cardVariants}>
                      <Link href={project.link || "/collections/case-studies"} className="block group">
                        <div className="relative w-full h-[340px] rounded-2xl overflow-hidden">
                            <Image
                              src={project.image}
                              alt={`${project.title} project`}
                              fill
                              className="object-cover"
                              style={{ objectPosition: project.objectPosition ?? 'center' }}
                            />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Titles */}
                <div className="grid grid-cols-2 gap-8 lg:gap-12 mb-4">
                  {pair.map((project) => (
                    <Link key={project.id} href={project.link || "/collections/case-studies"} className="group">
                      <h3 className={`text-[24px] md:text-[32px] font-bold leading-[1.3] ${cardTitleColor} tracking-[-0.32px] group-hover:opacity-80 transition-opacity`}>
                        {project.title}
                      </h3>
                    </Link>
                  ))}
                </div>

                {/* Description / Challenge / Outcome / Numbers rows */}
                <div className={`border-t ${borderColor}`}>
                  {pair.some(p => p.description) && (
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                      {pair.map((project) => (
                        <p key={project.id} className={`text-[16px] md:text-[18px] font-normal ${bodyColor} py-5`}>{project.description ?? ''}</p>
                      ))}
                    </div>
                  )}
                  {pair.some(p => p.challenge) && (
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                      {pair.map((project) => (
                        <div key={project.id} className={`flex items-center gap-4 border-b ${borderColor} py-5`}>
                          <p className={`text-[16px] md:text-[18px] font-bold ${labelColor} w-[120px] shrink-0`}>Challenge:</p>
                          <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} flex-1`}>{project.challenge ?? ''}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {pair.some(p => p.outcome) && (
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                      {pair.map((project) => (
                        <div key={project.id} className={`flex items-center gap-4 border-b ${borderColor} py-5`}>
                          <p className={`text-[16px] md:text-[18px] font-bold ${labelColor} w-[120px] shrink-0`}>Outcome:</p>
                          <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} flex-1`}>{project.outcome ?? ''}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {pair.some(p => p.numbers) && (
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                      {pair.map((project) => (
                        <div key={project.id} className={`flex items-center gap-4 border-b ${borderColor} py-5`}>
                          <p className={`text-[16px] md:text-[18px] font-bold ${labelColor} w-[120px] shrink-0`}>Numbers:</p>
                          <p className={`text-[16px] md:text-[18px] font-normal ${bodyColor} flex-1`}>{project.numbers ?? ''}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View links */}
                <div className="grid grid-cols-2 gap-8 lg:gap-12 mt-6">
                  {pair.map((project) => (
                    <Link key={project.id} href={project.link || "/collections/case-studies"} className={`flex items-center gap-2 ${linkColor}`}>
                      <span className="text-base font-medium leading-[1.5]">View Proven Delivery</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
