import Image from 'next/image';
import Link from 'next/link';

// Awards data for Left Column (matches the 5 awards list established in app/page.tsx)
const FOOTER_AWARDS_BADGES = [
  { name: "Atlassian Tech Leadership Finalist 2025", src: "/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png" },
  { name: "CUB Awards Winner 2025", src: "/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png" },
  { name: "Deloitte Rising Star 1", src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png" },
  { name: "Deloitte Rising Star 2", src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png" },
  { name: "CEO Magazine Finalist 2025", src: "/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png" },
];

// SOCIAL_LINKS constant and FooterSocialIcon component removed as per Figma design.

const FooterLink = ({ href = '#', children, className = '' }: { href?: string, children: React.ReactNode, className?: string }) => (
  <Link
    href={href}
    className={`text-white text-sm font-normal leading-[1.5] py-2 hover:text-[#5ae0f6] transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-[#0c2080] px-5 md:px-8 lg:px-16 py-12 md:py-20 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-20 lg:gap-32">
        {/* TOP SECTION: Logo/Awards + Links */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 2xl:gap-[61px] items-start w-full">
          
          {/* COLUMN 1: Logo & Awards (Left Side) */}
          <div className="flex flex-col gap-8 w-full md:w-auto lg:w-[235px] lg:flex-shrink-0">
            {/* Logo */}
            <div className="w-[150px] h-8 relative">
              <Image
                src="/images/logos/S@S_Logo_WHITE_RGB.png"
                alt="Software@Scale Logo"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 150px, 150px"
              />
            </div>
            
            {/* Awards Badges (Responsive 2xN grid for mobile, inline for desktop) */}
            <div className="flex flex-wrap gap-4 w-full md:w-[235px]">
              {FOOTER_AWARDS_BADGES.map((award, index) => (
                <div key={index} className="w-[100px] h-[100px] relative flex-shrink-0">
                  <Image
                    src={award.src}
                    alt={award.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* COLUMNS 2-6: Navigation Links (Right Side) */}
          {/* Wrap 5 columns into a flexible container */}
          {/* Default to stacked columns on mobile, switch to 5-column grid on desktop */}
          <div className="flex flex-col gap-12 w-full min-w-0 lg:grid lg:grid-cols-5 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-16 lg:flex-1">
            
            {/* 2. Company Info Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Company Info
              </h3>
              <div className="flex flex-col">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
              </div>
            </div>
            
            {/* 3. Resources Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Resources
              </h3>
              <div className="flex flex-col">
                <FooterLink href="/collections/case-studies">Case Studies</FooterLink>
                <FooterLink href="/collections/news">News</FooterLink>
                <FooterLink href="/collections/perspectives">Perspectives</FooterLink>
                <FooterLink href="/careers/referral-program">Referral Program</FooterLink>
              </div>
            </div>
            
            {/* 4. Service Products Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Service Products
              </h3>
              <div className="flex flex-col">
                <FooterLink href="/services/cloud-engineering">Cloud Engineering</FooterLink>
                <FooterLink href="/services/security-architecture">Security Architecture</FooterLink>
                <FooterLink href="/services/platform-acceleration">Project Acceleration</FooterLink>
                <FooterLink href="/services/platform-due-diligence">Platform Due Diligence</FooterLink>
                <FooterLink href="/services/engineering-performance">Engineering Performance</FooterLink>
                <FooterLink href="/services/data-ai-services">Digital Services</FooterLink>
              </div>
            </div>

            {/* 5. General Services Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                General Services
              </h3>
              <div className="flex flex-col">
                <FooterLink href="/services/engineering-as-a-service">EAAS</FooterLink>
                <FooterLink href="/services/technology-advisory">Technology Advisory / Fractional Services</FooterLink>
              </div>
            </div>
            
            {/* 6. Industries Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Industries
              </h3>
              <div className="flex flex-col">
                {/* Note: Linking to # as specific industry pages are not confirmed */}
                <FooterLink href="#">Banking</FooterLink>
                <FooterLink href="#">Payments</FooterLink>
                <FooterLink href="#">Superannuation</FooterLink>
                <FooterLink href="#">Insurance</FooterLink>
                <FooterLink href="#">Retail</FooterLink>
                <FooterLink href="#">Media</FooterLink>
              </div>
            </div>
          </div>
        </div>
        
        {/* FOOTER BOTTOM SECTION: Divider, Copyright & Legal Links, Social */}
        <div className="flex flex-col gap-8 w-full pt-6 md:pt-0">
          <div className="h-px bg-white opacity-20 w-full"></div>

          {/* Bottom Row - Desktop/Tablet/Mobile */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Copyright and Legal Links (Copyright first, then Legal Links on mobile, horizontal/spaced on LG+) */}
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:items-center text-white text-sm font-normal leading-[1.5]">
              <span className="shrink-0 order-1 lg:order-1">
                © 2025 Software@Scale. All rights reserved.
              </span>
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 order-2 lg:order-2">
                <FooterLink href="/privacy-policy" className="underline">Privacy Policy</FooterLink>
                <FooterLink href="/terms-and-conditions" className="underline">Terms of Service</FooterLink>
                <FooterLink href="#" className="underline">Cookies Settings</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}