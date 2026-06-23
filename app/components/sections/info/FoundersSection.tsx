import Image from 'next/image';
import Link from 'next/link';

const FOUNDERS = [
  {
    name: "Louis Droguett",
    title: "Chief Executive Officer",
    imageSrc: "/images/people/louis.jpg",
    objectPosition: "object-[center_34%]",
    bio: "After leading large engineering organisations inside Commonwealth Bank, Louis founded Software@Scale with a simple belief: organisations achieve better outcomes when experienced technology leaders remain accountable for delivery.\n\nToday he works directly with enterprise clients to solve difficult technology challenges, build high-performing engineering teams and execute complex transformation programs.",
  },
  {
    name: "Patricia Droguett",
    title: "Chief Operating Officer",
    imageSrc: "/images/people/patricia.jpg",
    objectPosition: "object-[center_25%]",
    bio: "Patricia has spent her career delivering large-scale technology transformation programs across financial services and highly regulated environments.\n\nShe specialises in turning complex challenges into executable plans, building delivery capability and helping organisations improve performance without increasing risk.",
  },
];

const FoundersSection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className="flex flex-col gap-6 w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={founder.imageSrc}
                  alt={founder.name}
                  fill
                  className={`object-cover ${founder.objectPosition}`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold text-white text-[20px] md:text-[24px] leading-[1.3]">{founder.name}</p>
                  <p className="font-semibold text-[#5ae0f6] text-base md:text-[18px] leading-[1.5]">{founder.title}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {founder.bio.split('\n\n').map((para, i) => (
                    <p key={i} className="font-normal text-white text-base leading-[1.5]">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/people"
            className="inline-flex items-center justify-center gap-2 bg-[#5ae0f6] border border-[#5ae0f6] px-6 py-2.5 rounded-xl font-medium text-[#0c2080] text-base leading-[1.5] hover:bg-[#4dd4e8] transition-colors"
          >
            Meet Our Leadership Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
