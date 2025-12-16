import Image from 'next/image';
import Button from '@/app/components/shared/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-5 md:px-8 lg:px-16 py-0 pt-[72px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[120vw] min-h-[120vh] w-auto h-auto object-cover"
        aria-hidden="true"
      >
        <source src="/videos/manager-programmer-and-business-man-with-tablet-f-2025-08-29-01-56-12-utc.mp4" type="video/mp4" />
      </video>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[rgba(12,32,128,0.6)]" aria-hidden="true"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 py-4 md:py-6 lg:py-12">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 max-w-[560px]">
          {/* Main Content */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Main Heading */}
            <h1 className="font-bold text-white text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.48px] lg:tracking-[-0.56px]">
              <span>
                Building elite solutions for{' '}
                <br className="hidden md:block" />
              </span>
              <span className="text-[#5ae0f6]">elite businesses</span>
            </h1>

            {/* Description */}
            <p className="font-normal text-white text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5]">
              At Software@Scale, we align technology strategy with your business goals to foster innovation and growth. Our expert team tackles complex challenges, ensuring your projects thrive and deliver exceptional results.
            </p>

            {/* Award Badges */}
            <div className="mt-2 md:mt-4">
              {/* Mobile: 3 + 2 Grid */}
              <div className="flex flex-col gap-4 md:hidden">
                <div className="flex gap-4">
                  <div className="relative w-[100px] h-[100px] flex-shrink-0">
                    <Image
                      src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                      alt="Atlassian Tech Leadership Finalist 2025"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[100px] h-[100px] flex-shrink-0">
                    <Image
                      src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                      alt="CUB Awards Winner 2025"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[100px] h-[100px] flex-shrink-0">
                    <Image
                      src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                      alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative w-[100px] h-[100px] flex-shrink-0">
                    <Image
                      src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png"
                      alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024 (2)"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[100px] h-[100px] flex-shrink-0">
                    <Image
                      src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                      alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop: Horizontal Layout */}
              <div className="hidden md:flex gap-6 lg:gap-[33px]">
                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                    alt="Atlassian Tech Leadership Finalist 2025"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                    alt="CUB Awards Winner 2025"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                    alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png"
                    alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024 (2)"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                    alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/core-values">
              Learn More
            </Button>
            <Button variant="outline" href="/contact-us">
              Scale Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
