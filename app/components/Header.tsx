import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#0c2080] w-full">
      <div className="flex items-center justify-between h-[72px] px-16 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-6 w-[260px]">
          <div className="relative h-[51.84px] w-[243px]">
            <Image
              src="/images/logos/S@S_Logo_WHITE_RGB.png"
              alt="Software@Scale Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Decorative S Element */}
        <div className="flex-1 h-[73px] relative">
          <div className="absolute left-[-6px] top-[0.5px] w-[269px] h-[72px] overflow-hidden">
            <Image
              src="/images/logos/Desktop Menu_S_Element.svg"
              alt="Decorative S Element"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  About
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Our Services
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Industries
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Collections
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1">
              <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                Careers
              </span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <button className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-5 py-2 rounded-xl">
              <span className="font-medium text-[#002b50] text-base leading-6 whitespace-nowrap">
                Contact
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;