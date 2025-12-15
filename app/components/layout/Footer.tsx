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

const SOCIAL_LINKS = [
  // Assuming these are the desired social media icons, reused from original footer SVG paths
  // Facebook
  {
    href: "#",
    svgPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  // Instagram (using Pinterest/Dribble-like icon from original code L426, since true IG wasn't there)
  {
    href: "#",
    svgPath: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z",
  },
  // X/Twitter
  {
    href: "#",
    svgPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  // LinkedIn
  {
    href: "#",
    svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  // YouTube
  {
    href: "#",
    svgPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const FooterLink = ({ href = '#', children, className = '' }: { href?: string, children: React.ReactNode, className?: string }) => (
  <Link
    href={href}
    className={`text-white text-sm font-normal leading-[1.5] py-2 hover:text-[#5ae0f6] transition-colors ${className}`}
  >
    {children}
  </Link>
);

const FooterSocialIcon = ({ href, svgPath }: { href: string, svgPath: string }) => (
  <a href={href} className="w-6 h-6 text-white hover:text-[#5ae0f6] transition-colors">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d={svgPath} />
    </svg>
  </a>
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
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 w-full min-w-0 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-16 lg:flex-1">
            
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
            
            {/* Copyright and Legal Links */}
            <div className="flex flex-col gap-4 text-white text-sm font-normal leading-[1.5]">
              <div className="flex flex-col gap-4">
                <FooterLink href="/privacy-policy" className="underline">Privacy Policy</FooterLink>
                <FooterLink href="/terms-and-conditions" className="underline">Terms of Service</FooterLink>
                <FooterLink href="#" className="underline">Cookies Settings</FooterLink>
              </div>
              <span className="shrink-0">
                © 2025 Software@Scale. All rights reserved.
              </span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link, index) => (
                <FooterSocialIcon key={index} href={link.href} svgPath={link.svgPath} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}