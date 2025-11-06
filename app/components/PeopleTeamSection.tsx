import Image from 'next/image';
import Link from 'next/link';

const TEAM_MEMBERS = [
  {
    name: "Louis Droguett",
    title: "CEO",
    description: "Technology and operations executive offering a progressive leadership, working collaboratively to align diverse stakeholders to a single vision. Builds engaged and high-performing teams in times of change to deliver measurable outcomes for the business.",
    imageSrc: "/images/people/louis.jpg",
  },
  {
    name: "Hasan Husain",
    title: "Head of Delivery",
    description: "Dynamic, experienced and results-driven technology leader. Expert at delivering large-scale technology programs and fostering a culture of collaboration and growth.",
    imageSrc: "/images/people/hasan.jpg",
  },
  {
    name: "Joel Estephan",
    title: "Head of Engineering",
    description: "Engineering leadership and technology specialist, she has led the modernisation of CBA’s critical online assets, disrupting Superannuation through the development of a new online experience, and launching Zip Money into international markets.",
    imageSrc: "/images/people/joel.jpg",
  },
  {
    name: "Ravi Chotalia",
    title: "Head of DevOps",
    description: "Leader of large devops and infrastructure teams, unblocking teams and maximising efficiency through the implementation of automation and continuous delivery pipelines.",
    imageSrc: "/images/people/ravi.jpg",
  },
  {
    name: "Patricia Droguett",
    title: "Head of Digital Transformation",
    description: "Digital Transformation Executive with extensive experience in defining and driving the delivery of high-impact technology transformation programs in financial services.",
    imageSrc: "/images/people/patricia.jpg",
  },
  {
    name: "Christian Colmenar",
    title: "Head of Business Design & Agility",
    description: "Expert in innovation, business design and agile delivery, crafting business solutions for large financial services organisations and implementing through cross-functional teams.",
    imageSrc: "/images/people/christian.jpg",
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
          {[TEAM_MEMBERS.slice(0, 3), TEAM_MEMBERS.slice(3, 6)].map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
              {row.map((member) => (
                <div key={member.name} className="flex flex-col gap-5 md:gap-6 w-full items-start md:w-1/3 md:text-center">
                  {/* Image */}
                  <div className="relative aspect-square rounded-2xl w-full">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-3 md:gap-4 w-full items-start md:items-center">
                    <div className="flex flex-col gap-0 items-start md:items-center w-full">
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