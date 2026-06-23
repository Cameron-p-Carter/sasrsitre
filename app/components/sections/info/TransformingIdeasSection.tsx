import Image from 'next/image';
import Link from 'next/link';

const TransformingIdeasSection = () => {
  const services = [
    {
      image: "/images/placeholder/placeholder7.jpg",
      title: "Engineering Teams",
      description: "Build high-performing engineering teams faster with individual specialists, cross-functional squads or ongoing engineering capability.",
      href: "/services/engineering-teams"
    },
    {
      image: "/images/placeholder/placeholder8jpg.jpg",
      title: "Delivery Acceleration",
      description: "Recover delivery momentum and accelerate outcomes across delayed programs, technical debt and capability gaps.",
      href: "/services/delivery-acceleration"
    },
    {
      image: "/images/placeholder/placeholder164.jpg",
      title: "Technology Leadership",
      description: "Access experienced technology executives, architects and engineering leaders for critical decisions and transformation.",
      href: "/services/technology-leadership"
    },
    {
      image: "/images/placeholder/placeholder161.jpg",
      title: "Data & AI",
      description: "Build data foundations and deploy practical AI solutions that create measurable business outcomes.",
      href: "/services/data-ai"
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-12 md:gap-20 items-center px-5 md:px-8 lg:px-16 py-16 md:py-28 w-full">
      <div className="flex flex-col gap-12 md:gap-20 max-w-[1280px] w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-[768px] w-full">
          <h2 className="font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] lg:tracking-[-0.48px] w-full">
            Services Built Around Enterprise Delivery Needs
          </h2>
        </div>

        {/* Services Grid — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="flex flex-col gap-6 overflow-hidden group">
              <div className="relative w-full aspect-[394/240] rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="font-bold text-white text-[24px] md:text-[28px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.28px] w-full">
                  {service.title}
                </h3>
                <p className="font-normal text-[#cce1f4] text-base leading-[1.5] w-full">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformingIdeasSection;