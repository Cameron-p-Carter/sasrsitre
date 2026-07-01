'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TEAM_MEMBERS = [
  { name: "Louis Droguett", title: "Chief Executive Officer", description: "Technology and operations executive offering progressive leadership, working collaboratively to align diverse stakeholders to a single vision. Builds engaged and high-performing teams in times of change to deliver measurable business outcomes.", imageSrc: "/images/people/louis.jpg", objectPosition: "object-center" },
  { name: "Hasan Husain", title: "Chief Delivery Officer", description: "Dynamic, experienced, and results-driven technology leader with deep expertise in delivering large-scale technology programs. Known for fostering a strong culture of collaboration, accountability, and growth.", imageSrc: "/images/people/hasan.jpg", objectPosition: "object-[center_25%]" },
  { name: "Li-Shuai Soh", title: "Head of Architecture and Solutions", description: "Engineering leader with diverse experience across startups and large corporations. Adept at creating and leading high-performing teams, aligning technology with business outcomes, and driving both stabilisation and innovation.", imageSrc: "/images/people/Li.jpg", objectPosition: "object-center" },
  { name: "Patricia Droguett", title: "Chief Operating Officer", description: "Digital transformation executive with extensive experience defining and driving the delivery of high-impact technology transformation programs within financial services.", imageSrc: "/images/people/patricia.jpg", objectPosition: "object-top" },
  { name: "Ravi Chotalia", title: "Head of Platform Engineering", description: "Leader of large DevOps and infrastructure teams, focused on unlocking teams and maximising efficiency through the implementation of automation and continuous delivery pipelines.", imageSrc: "/images/people/ravi.jpg", objectPosition: "object-top" },
  { name: "Bashir Ansari", title: "Head of Software Engineering", description: "Brings extensive experience leading high-performance teams across fintech and major financial institutions. Focused on building and empowering strong engineering teams while fostering a collaborative, resilient, and continuously improving culture.", imageSrc: "/images/people/bashir.jpg", objectPosition: "object-top" },
  { name: "John Halls", title: "Chief Engineer", description: "CTO-level leader driving cloud-based digital transformation, with a passion for building scalable products and high-performing teams. Experienced across AWS, Azure, Google Cloud, and technologies including Java, Python, and .NET, solving complex architectural challenges across fintech and commerce.", imageSrc: "/images/people/john.jpg", objectPosition: "object-top" },
  { name: "Ribvar Shafeei", title: "Chief Information Security Officer", description: "Cybersecurity leader with over 20 years of experience across large financial organisations. Has spearheaded large-scale security programs and developed comprehensive strategies spanning identity management, threat intelligence, and secure operations across public and private sectors.", imageSrc: "/images/people/ribvar.jpg", objectPosition: "object-top" },
  { name: "Richard Ford", title: "Head of Cloud and Infrastructure", description: "Career cloud and infrastructure leader helping organisations become smarter, safer, and stronger in the cloud. Experience spans resilient hosting platforms in emerging tech ecosystems through to leading cloud and infrastructure teams at AWS, Adobe, Versent, and Software@Scale.", imageSrc: "/images/people/richard.jpg", objectPosition: "object-top" },
  { name: "James Morey", title: "Head of Data", description: "Data leader with deep expertise in designing and delivering enterprise data platforms, analytics capabilities and AI-ready infrastructure. Brings a practical, outcome-focused approach to helping organisations unlock the value of their data assets at scale.", imageSrc: "/images/people/james.jpg", objectPosition: "object-top" },
];

const PeopleTeamSection = () => {
  const rows = Array.from({ length: Math.ceil(TEAM_MEMBERS.length / 3) }, (_, i) => TEAM_MEMBERS.slice(i * 3, i * 3 + 3));

  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-start">
        <motion.div
          className="flex flex-col gap-3 md:gap-4 items-start max-w-[768px] w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-bold text-[#0c2080] text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full">
            Executive leadership
          </h2>
          <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
            Meet the talented individuals driving our success.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16 w-full">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex flex-col md:flex-row gap-12 md:gap-12 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {row.map((member) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col gap-5 md:gap-6 w-full items-start md:w-1/3"
                  variants={{
                    hidden: { opacity: 0, y: 36 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
                  }}
                >
                  <div className="relative aspect-square rounded-2xl w-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <Image src={member.imageSrc} alt={member.name} fill className={`object-cover ${member.objectPosition} rounded-2xl`} />
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4 w-full items-start">
                    <div className="flex flex-col gap-0 items-start w-full">
                      <p className="font-semibold text-[#00050a] text-base md:text-[20px] leading-[1.5] w-full">{member.name}</p>
                      <p className="font-semibold text-[#006cc9] text-base md:text-[18px] leading-[1.5] w-full">{member.title}</p>
                    </div>
                    <p className="font-normal text-base leading-[1.5] text-[#00050a] w-full">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col gap-6 items-start max-w-[768px] w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="flex flex-col gap-4 w-full">
            <h4 className="font-bold text-[#0c2080] text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full">
              We're hiring!
            </h4>
            <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
              Join our dynamic team and make an impact.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[155px]">
            <Link href="/careers" className="border border-[#0c2080] border-solid flex items-center justify-center px-6 py-2.5 rounded-xl w-full hover:bg-[#0c2080] hover:text-white transition-colors">
              <span className="font-medium text-[#0c2080] hover:text-white text-base leading-[1.5] whitespace-nowrap">
                Open Positions
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PeopleTeamSection;
