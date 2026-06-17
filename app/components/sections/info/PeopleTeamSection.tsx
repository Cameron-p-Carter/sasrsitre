import Image from 'next/image';
import Link from 'next/link';

const TEAM_MEMBERS = [
  {
    name: "Louis Droguett",
    title: "Chief Executive Officer",
    description: "Technology and operations executive offering progressive leadership, working collaboratively to align diverse stakeholders to a single vision. Builds engaged and high-performing teams in times of change to deliver measurable business outcomes.",
    imageSrc: "/images/people/louis.jpg",
  },
  {
    name: "Hasan Husain",
    title: "Chief Delivery Officer",
    description: "Dynamic, experienced, and results-driven technology leader with deep expertise in delivering large-scale technology programs. Known for fostering a strong culture of collaboration, accountability, and growth.",
    imageSrc: "/images/people/hasan.jpg",
  },
  {
    name: "Li-Shuai Soh",
    title: "Head of Architecture and Solutions",
    description: "Engineering leader with diverse experience across startups and large corporations. Adept at creating and leading high-performing teams, aligning technology with business outcomes, and driving both stabilisation and innovation.",
    imageSrc: "/images/people/Li.jpg",
  },
  {
    name: "Patricia Droguett",
    title: "Chief Operating Officer",
    description: "Digital transformation executive with extensive experience defining and driving the delivery of high-impact technology transformation programs within financial services.",
    imageSrc: "/images/people/patricia.jpg",
  },
  {
    name: "Ravi Chotalia",
    title: "Head of Platform Engineering",
    description: "Leader of large DevOps and infrastructure teams, focused on unlocking teams and maximising efficiency through the implementation of automation and continuous delivery pipelines.",
    imageSrc: "/images/people/ravi.jpg",
  },
  {
    name: "Bashir Ansari",
    title: "Head of Software Engineering",
    description: "Brings extensive experience leading high-performance teams across fintech and major financial institutions. Focused on building and empowering strong engineering teams while fostering a collaborative, resilient, and continuously improving culture.",
    imageSrc: "/images/people/bashir.jpg",
  },
  {
    name: "John Halls",
    title: "Chief Engineer",
    description: "CTO-level leader driving cloud-based digital transformation, with a passion for building scalable products and high-performing teams. Experienced across AWS, Azure, Google Cloud, and technologies including Java, Python, and .NET, solving complex architectural challenges across fintech and commerce.",
    imageSrc: "/images/people/john.jpg",
  },
  {
    name: "Ribvar Shafeei",
    title: "Chief Information Security Officer",
    description: "Cybersecurity leader with over 20 years of experience across large financial organisations. Has spearheaded large-scale security programs and developed comprehensive strategies spanning identity management, threat intelligence, and secure operations across public and private sectors.",
    imageSrc: "/images/people/ribvar.jpg",
  },
  {
    name: "Richard Ford",
    title: "Head of Cloud and Infrastructure",
    description: "Career cloud and infrastructure leader helping organisations become smarter, safer, and stronger in the cloud. Experience spans resilient hosting platforms in emerging tech ecosystems through to leading cloud and infrastructure teams at AWS, Adobe, Versent, and Software@Scale.",
    imageSrc: "/images/people/richard.jpg",
  },
];

const PeopleTeamSection = () => {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-start">
        {/* Section Title */}
        <div className="flex flex-col gap-3 md:gap-4 items-start max-w-[768px] w-full">
          <h2 className="font-bold text-[#0c2080] text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full">
            Executive leadership
          </h2>
          <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
            Meet the talented individuals driving our success.
          </p>
        </div>

        {/* Team Grid (Mobile: Stacked, Desktop: 3 Columns per row) */}
        <div className="flex flex-col gap-12 md:gap-16 w-full">
          {[TEAM_MEMBERS.slice(0, 3), TEAM_MEMBERS.slice(3, 6), TEAM_MEMBERS.slice(6, 9)].map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
              {row.map((member) => (
                <div key={member.name} className="flex flex-col gap-5 md:gap-6 w-full items-start md:w-1/3">
                  {/* Image */}
                  <div className="relative aspect-square rounded-2xl w-full">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className="object-cover object-top rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 md:gap-4 w-full items-start">
                    <div className="flex flex-col gap-0 items-start w-full">
                      <p className="font-semibold text-[#00050a] text-base md:text-[20px] leading-[1.5] w-full">
                        {member.name}
                      </p>
                      <p className="font-semibold text-[#006cc9] text-base md:text-[18px] leading-[1.5] w-full">
                        {member.title}
                      </p>
                    </div>
                    <p className="font-normal text-base leading-[1.5] text-[#00050a] w-full">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* We're Hiring CTA */}
        <div className="flex flex-col gap-6 items-start max-w-[768px] w-full">
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
        </div>
      </div>
    </section>
  );
};

export default PeopleTeamSection;