import Image from 'next/image';

const AwardsSection = () => {
  const awards = [
    {
      name: "Australian Government",
      src: "/images/awards/australiangov.svg",
      width: 120,
      height: 80
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-12 md:gap-16 lg:gap-20 items-center px-5 md:px-8 lg:px-16 py-12 md:py-16 lg:py-10 w-full">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-[1280px] w-full">
        {/* Mobile & Tablet: Text above awards */}
        <div className="lg:hidden flex flex-col gap-8 w-full">
          <p className="font-bold text-[#14d3f3] text-[16px] md:text-[17px] leading-[1.5] text-center w-full">
            We are the preferred ICT supplier for NSW and Australian Government Agencies, delivering secure, scalable and innovative technology solutions that support critical services, operational excellence and digital transformation across the public sector.
          </p>

          {/* Awards row */}
          <div className="flex gap-6 items-center justify-center w-full">
            {awards.map((award, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
                style={{
                  width: '140px',
                  height: '80px'
                }}
              >
                <Image
                  src={award.src}
                  alt={`${award.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Text on left, awards on right */}
        <div className="hidden lg:flex gap-8 xl:gap-[42px] items-center w-full">
          {/* Left: Text */}
          <p className="font-bold text-[#14d3f3] text-[18px] leading-[1.5] flex-1">
            We are the preferred ICT supplier for NSW and Australian Government Agencies, delivering secure, scalable and innovative technology solutions that support critical services, operational excellence and digital transformation across the public sector.
          </p>

          {/* Right: Awards */}
          <div className="flex-1 flex items-center justify-end min-w-0">
            <div className="flex gap-4 xl:gap-[35px] items-center">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0"
                  style={{
                    width: '200px',
                    height: '100px'
                  }}
                >
                  <Image
                    src={award.src}
                    alt={`${award.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;