import Image from 'next/image';

const BACKGROUND_IMAGE_SRC = "/images/placeholder/placeholder10.jpg";

const CoreValuesMissionSection = () => {
  return (
    <section className="bg-[#cce1f4] px-16 py-28 w-full">
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop Layout: Two Columns */}
        <div className="flex gap-[80px] items-center w-full">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="font-bold text-[#0c2080] text-[40px] leading-[1.2] tracking-[-0.4px] w-full">
                Empowering Your Digital Transformation with Excellence and Innovation
              </h2>
              <p className="font-normal text-lg leading-[1.5] text-[#00050a] w-full">
                At Software at Scale, our mission is to drive digital acceleration for enterprises. We are dedicated to engineering excellence, ensuring our clients thrive in a rapidly evolving technological landscape.
              </p>
            </div>
            
            {/* Mission and Values List */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-6 items-start py-2 w-full">
                {/* Mission Item */}
                <div className="flex flex-col gap-4 w-1/2 text-[#00050a]">
                  <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.2px] w-full">
                    Our Mission
                  </h3>
                  <p className="font-normal text-base leading-[1.5] w-full">
                    To enable businesses to scale confidently and modernize their platforms with minimal risk.
                  </p>
                </div>
                
                {/* Values Item */}
                <div className="flex flex-col gap-4 w-1/2 text-[#00050a]">
                  <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.2px] w-full">
                    Our Values
                  </h3>
                  <p className="font-normal text-base leading-[1.5] w-full">
                    Integrity, innovation, and collaboration drive our commitment to client success and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative rounded-2xl shrink-0 w-[540px] h-[540px]">
            <Image
              src={BACKGROUND_IMAGE_SRC}
              alt="Placeholder Image"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesMissionSection;