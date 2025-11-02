import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative px-16 py-28">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/placeholder/placeholder16.jpg"
          alt="Contact us background"
          fill
          className="object-cover"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(12,32,128,0.5)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-8 items-center max-w-[768px] mx-auto text-center">
          {/* Content */}
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px]">
              Get in Touch with Us
            </h2>
            <p className="text-[18px] font-normal leading-[1.5]">
              Reach out today to discover how we can help accelerate your digital transformation journey.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#4dd0e6] transition-colors">
              <span className="font-medium text-[#0c2080] text-[16px] leading-[1.5] whitespace-nowrap">
                Contact
              </span>
            </button>
            <button className="border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#5ae0f6] hover:text-[#0c2080] transition-colors">
              <span className="font-medium text-[#5ae0f6] text-[16px] leading-[1.5] whitespace-nowrap hover:text-[#0c2080]">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}