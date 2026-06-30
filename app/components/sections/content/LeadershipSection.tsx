import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';

interface LeadershipSectionProps {
  title: string;
  description: string;
  founders: Array<{
    name: string;
    role: string;
    imageSrc: string;
    description: string;
    objectPosition?: string;
  }>;
  buttonText: string;
  buttonLink?: string;
  underImageSrc: string;
  overImageSrc: string;
}

export default function LeadershipSection({
  title,
  description,
  founders,
  buttonText,
  buttonLink,
  underImageSrc,
  overImageSrc,
}: LeadershipSectionProps) {
  return (
    <section className="bg-[#006cc9] flex flex-col gap-20 items-center pb-28 pt-28 px-16 w-full">
      <div className="flex flex-col items-start max-w-[1280px] w-full">
        <div className="flex flex-col gap-6 items-start text-center w-full">
          <h2 className="font-bold text-white text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
            {title}
          </h2>
          <p className="font-normal text-white text-[18px] leading-[1.5] w-full">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start max-w-[1280px] w-full">
        <div className="flex gap-16 items-start w-full">
          {/* Image Container with Overlap */}
          <div className="flex-[1_0_0] h-[883px] relative">
             <div className="absolute h-[882px] left-0 right-[12.42%] rounded-bl-[16px] rounded-br-[38px] rounded-tl-[16px] rounded-tr-[16px] top-[1.4px] overflow-hidden">
               <Image src={underImageSrc} alt="Main" fill className="object-cover" />
             </div>
             <div className="absolute aspect-[496/274] left-[18.5%] right-0 rounded-[16px] top-[74.4px] overflow-hidden">
               <Image src={overImageSrc} alt="Overlap" fill className="object-cover scale-110 translate-x-2" />
             </div>
          </div>
          
          <div className="flex flex-[1_0_0] flex-col gap-8 w-full">
            <h3 className="font-bold text-[#14d3f3] text-[32px] leading-[1.3] tracking-[-0.32px]">
              Featured Founders:
            </h3>
            <div className="flex gap-16 items-start justify-center w-full">
              {founders.map((founder, index) => (
                <div key={index} className="flex flex-[1_0_0] flex-col gap-6 w-full">
                  <div className="aspect-square relative rounded-2xl overflow-hidden w-full">
                    <Image
                      src={founder.imageSrc}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: founder.objectPosition ?? 'center' }}
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center w-full">
                    <div className="flex flex-col font-semibold items-center leading-[1.5] text-[20px] w-full">
                      <p className="text-white w-full">{founder.name}</p>
                      <p className="text-[#14d3f3] w-full">{founder.role}</p>
                    </div>
                    <p className="font-normal leading-[1.5] text-white text-[16px] w-full">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              {buttonLink ? (
                <Link href={buttonLink}>
                  <Button variant="primary">{buttonText}</Button>
                </Link>
              ) : (
                <Button variant="primary">{buttonText}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
