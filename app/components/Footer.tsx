import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0c2080] px-5 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-12 md:hidden">
          {/* Logo and Awards */}
          <div className="flex flex-col gap-7">
            {/* Logo */}
            <div className="w-full max-w-[335px]">
              <Image
                src="/images/logos/S@S_Logo_WHITE_RGB.png"
                alt="Software@Scale Logo"
                width={335}
                height={71}
                className="object-contain w-full h-auto"
              />
            </div>
            
            {/* Award Badges - 2x2 Grid */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                    alt="Atlassian Tech Leadership Finalist 2025"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                    alt="CUB Awards Winner 2025"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                    alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                    alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-12">
            {/* Company Info Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Company Info
              </h3>
              <div className="flex flex-col">
                <Link href="/" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Home
                </Link>
                <Link href="/services" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Services
                </Link>
                <Link href="/industries" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Industries
                </Link>
                <Link href="/careers" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Careers
                </Link>
                <Link href="/contact-us" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Resources
              </h3>
              <div className="flex flex-col">
                <Link href="/collections/case-studies" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Case Studies
                </Link>
                <Link href="/collections/news" className="text-white text-sm font-normal leading-[1.5] py-2">
                  News
                </Link>
                <Link href="/collections/perspectives" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Perspectives
                </Link>
                <Link href="/careers/referral-program" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Referral Program
                </Link>
              </div>
            </div>

            {/* Stay Connected Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-base font-semibold leading-[1.5]">
                Stay Connected
              </h3>
              <div className="flex flex-col">
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Facebook
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Twitter
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  LinkedIn
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Instagram
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col gap-12">
          {/* Logo and Awards Row */}
          <div className="flex items-start justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-[120px] h-6">
                <Image
                  src="/images/logos/S@S_Logo_WHITE_RGB.png"
                  alt="Software@Scale Logo"
                  width={120}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Award Badges - 2x2 Grid */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-[80px] h-[80px]">
                  <Image
                    src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                    alt="Atlassian Tech Leadership Finalist 2025"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="w-[80px] h-[80px]">
                  <Image
                    src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                    alt="CUB Awards Winner 2025"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-[80px] h-[80px]">
                  <Image
                    src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                    alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="w-[80px] h-[80px]">
                  <Image
                    src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                    alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links Row */}
          <div className="flex justify-between gap-8">
            {/* Company Info Column */}
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="text-white text-base font-semibold leading-[1.5] mb-2">
                Company Info
              </h3>
              <div className="flex flex-col">
                <Link href="/" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Home
                </Link>
                <Link href="/services" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Services
                </Link>
                <Link href="/industries" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Industries
                </Link>
                <Link href="/careers" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Careers
                </Link>
                <Link href="/contact-us" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="text-white text-base font-semibold leading-[1.5] mb-2">
                Resources
              </h3>
              <div className="flex flex-col">
                <Link href="/collections/case-studies" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Case Studies
                </Link>
                <Link href="/collections/news" className="text-white text-sm font-normal leading-[1.5] py-2">
                  News
                </Link>
                <Link href="/collections/perspectives" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Perspectives
                </Link>
                <Link href="/careers/referral-program" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Referral Program
                </Link>
              </div>
            </div>

            {/* Stay Connected Column */}
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="text-white text-base font-semibold leading-[1.5] mb-2">
                Stay Connected
              </h3>
              <div className="flex flex-col">
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Facebook
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Twitter
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  LinkedIn
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Instagram
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-4 xl:gap-8 2xl:gap-16 items-start mb-44">
          {/* Logo Column */}
          <div className="flex-shrink-0">
            <div className="w-[120px] xl:w-[150px] h-6 xl:h-8">
              <Image
                src="/images/logos/S@S_Logo_WHITE_RGB.png"
                alt="Software@Scale Logo"
                width={150}
                height={32}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Award Badges Columns */}
          <div className="flex gap-4 xl:gap-8 2xl:gap-16 flex-shrink-0">
            {/* First Awards Column */}
            <div className="flex flex-col gap-4">
              <div className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px]">
                <Image
                  src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                  alt="Atlassian Tech Leadership Finalist 2025"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px]">
                <Image
                  src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                  alt="CUB Awards Winner 2025"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Second Awards Column */}
            <div className="flex flex-col gap-4">
              <div className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px]">
                <Image
                  src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                  alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px]">
                <Image
                  src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                  alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex gap-4 xl:gap-8 2xl:gap-16 flex-1 min-w-0">
            {/* Company Info Column */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <h3 className="text-white text-base font-semibold leading-[1.5] mb-2">
                Company Info
              </h3>
              <div className="flex flex-col">
                <Link href="/" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Home
                </Link>
                <Link href="/services" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Services
                </Link>
                <Link href="/industries" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Industries
                </Link>
                <Link href="/careers" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Careers
                </Link>
                <Link href="/contact-us" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <h3 className="text-white text-base font-semibold leading-[1.5] mb-2">
                Resources
              </h3>
              <div className="flex flex-col">
                <Link href="/collections/case-studies" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Case Studies
                </Link>
                <Link href="/collections/news" className="text-white text-sm font-normal leading-[1.5] py-2">
                  News
                </Link>
                <Link href="/collections/perspectives" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Perspectives
                </Link>
                <Link href="/careers/referral-program" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Referral Program
                </Link>
              </div>
            </div>

            {/* Stay Connected Column */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <h3 className="text-white text-base font-semibold leading-[1.5] mb-2">
                Stay Connected
              </h3>
              <div className="flex flex-col">
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Facebook
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Twitter
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  LinkedIn
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  Instagram
                </a>
                <a href="#" className="text-white text-sm font-normal leading-[1.5] py-2">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-6 md:gap-8 pt-6 md:pt-0">
          {/* Divider */}
          <div className="h-px bg-white opacity-20"></div>

          {/* Mobile Bottom */}
          <div className="flex flex-col gap-8 md:hidden">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links and Copyright */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-white text-sm font-normal leading-[1.5]">
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                <a href="#" className="underline">
                  Terms of Service
                </a>
                <a href="#" className="underline">
                  Cookies Settings
                </a>
              </div>
              <div className="text-white text-sm font-normal leading-[1.5]">
                © 2025 Software@Scale. All rights reserved.
              </div>
            </div>
          </div>

          {/* Tablet Bottom Row */}
          <div className="hidden md:flex lg:hidden flex-col gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links and Copyright */}
            <div className="flex flex-col gap-4 text-white text-sm font-normal leading-[1.5]">
              <div className="flex flex-wrap gap-6">
                <span>© 2025 Software@Scale. All rights reserved.</span>
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                <a href="#" className="underline">
                  Terms of Service
                </a>
                <a href="#" className="underline">
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Bottom Row */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Copyright and Links */}
            <div className="flex items-center gap-6 text-white text-sm font-normal leading-[1.5]">
              <span>© 2025 Software@Scale. All rights reserved.</span>
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Cookies Settings
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}