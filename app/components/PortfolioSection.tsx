import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  aspectRatio: string;
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  projects: Project[];
  viewAllButtonText: string;
}

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
        <div className="text-center mb-12 md:mb-20 max-w-[768px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#0c2080] tracking-[-0.32px] md:tracking-[-0.4px] lg:tracking-[-0.48px] mb-5 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-[17px] lg:text-[18px] font-normal leading-[1.5] text-[#00050a]">
            {description}
          </p>
        </div>

        {/* Mobile Layout: Single Column */}
        <div className="flex flex-col gap-12 md:hidden mb-12">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-5">
              <div className={`relative w-full ${project.aspectRatio} rounded-2xl overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.2px]">
                    {project.title}
                  </h3>
                  <p className="text-base font-normal leading-[1.5] text-[#00050a]">
                    {project.description}
                  </p>
                </div>
                <Link href="/collections/case-studies" className="flex items-center gap-2 cursor-pointer">
                  <span className="text-base font-medium leading-[1.5] text-[#00050a]">
                    View project
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout: Two Columns */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-start justify-center mb-16">
          {/* Left Column */}
          <div className="flex flex-col gap-16 flex-1 max-w-[634px]">
            {/* Project Cards (Left Column) */}
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <div key={project.id} className="flex flex-col gap-6">
                <div className={`relative w-full ${project.aspectRatio === 'aspect-square' ? 'aspect-square' : 'aspect-[632/346.5]'} rounded-2xl overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[20px] lg:text-[24px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.2px] lg:tracking-[-0.24px]">
                        {project.title}
                      </h3>
                      <p className="text-base font-normal leading-[1.5] text-[#00050a]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <Link href="/collections/case-studies" className="flex items-center gap-2 cursor-pointer">
                    <span className="text-base font-medium leading-[1.5] text-[#00050a]">
                      View project
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16 flex-1">
            {/* Project Cards (Right Column) */}
            {projects.filter((_, i) => i % 2 !== 0).map((project) => (
              <div key={project.id} className="flex flex-col gap-6">
                <div className={`relative w-full ${project.aspectRatio === 'aspect-square' ? 'aspect-square' : 'aspect-[632/346.5]'} rounded-2xl overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[20px] lg:text-[24px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.2px] lg:tracking-[-0.24px]">
                        {project.title}
                      </h3>
                      <p className="text-base font-normal leading-[1.5] text-[#00050a]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <Link href="/collections/case-studies" className="flex items-center gap-2 cursor-pointer">
                    <span className="text-base font-medium leading-[1.5] text-[#00050a]">
                      View project
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/collections/case-studies" className="border border-[#0c2080] text-[#0c2080] px-6 py-2.5 rounded-xl text-base font-medium leading-[1.5] hover:bg-[#0c2080] hover:text-white transition-colors">
            {viewAllButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}