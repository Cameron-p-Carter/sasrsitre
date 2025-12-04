'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogCard {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  category?: string;
  readTime?: string;
  hasCategory?: boolean;
}

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const blogCards: BlogCard[] = [
    {
      id: 1,
      image: '/images/placeholder/placeholder101.jpg',
      title: 'Celebrating Growth at the 2025 CUB Awards',
      description: 'Recognised as Australia\'s Fastest Growing Business for quality, innovation and measurable impact.',
      link: '/collections/news/cub-awards',
      hasCategory: false
    },
    {
      id: 2,
      image: '/images/placeholder/placeholder102.png',
      title: 'Connecting with the Tech Community at BeerOps 2025',
      description: 'Joined Australia\'s largest tech networking event to connect with peers and celebrate diversity.',
      link: '/collections/news/beerops',
      hasCategory: false
    },
    {
      id: 3,
      image: '/images/placeholder/placeholder103.jpg',
      title: 'Louis Droguett Named Finalist in 2025 CEO of the Year Awards',
      description: 'CEO recognised for leadership in scaling one of Australia\'s fastest-growing tech businesses.',
      link: '/collections/news/2025-executive-of-the-year-awards',
      hasCategory: false
    },
    {
      id: 4,
      image: '/images/placeholder/placeholder104.jpg',
      title: 'Software@Scale Presents at AWS Community Day 2025',
      description: 'Richard Ford delivered insights on innovation, embedded systems and cloud scalability.',
      link: '/collections/news/aws-community-day',
      hasCategory: false
    },
    {
      id: 5,
      image: '/images/placeholder/placeholder105.jpg',
      title: 'Software@Scale at the 2025 Iress WealthTech Summit',
      description: 'CEO shared insights on cybersecurity and digital protection in financial advice.',
      link: '/collections/news/iress-wealthtech-summit',
      hasCategory: false
    },
    {
      id: 6,
      image: '/images/placeholder/placeholder106jpg.jpg',
      title: 'Patricia Droguett Recognised at Women Leading Tech Awards 2025',
      description: 'Director of Operations recognised as finalist celebrating women driving innovation.',
      link: '/collections/news/women-leading-tech-awards',
      hasCategory: false
    },
    {
      id: 7,
      image: '/images/placeholder/placeholder107.jpg',
      title: 'Software@Scale Named Rising Star in Deloitte Technology Fast 50',
      description: 'Recognised for exceptional growth and innovation in the technology sector.',
      link: '/collections/news/deloitte-tech-fast-50',
      hasCategory: false
    },
    {
      id: 8,
      image: '/images/placeholder/placeholder108.png',
      title: 'Approved Supplier: Federal Government ICT Digital and Cloud Marketplace Panels',
      description: 'Approved for direct engagement with government agencies for digital transformation.',
      link: '/collections/news/ict-supplier',
      hasCategory: false
    },
    {
      id: 9,
      image: '/images/placeholder/placeholder109.jpg',
      title: 'Software@Scale Joins Government Digital Marketplace Panels',
      description: 'Expanding capability to support public sector digital transformation across Australia.',
      link: '/collections/news/panels',
      hasCategory: false
    }
  ];

  // Update cards per view on resize
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxSlides = Math.ceil(blogCards.length / cardsPerView) - 1;

  const nextSlide = () => {
    const newSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    
    // For mobile horizontal scroll
    if (scrollContainerRef.current && window.innerWidth < 768) {
      const cardWidth = 300 + 24; // card width + gap
      scrollContainerRef.current.scrollTo({
        left: newSlide * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    const newSlide = currentSlide <= 0 ? maxSlides : currentSlide - 1;
    setCurrentSlide(newSlide);
    
    // For mobile horizontal scroll
    if (scrollContainerRef.current && window.innerWidth < 768) {
      const cardWidth = 300 + 24; // card width + gap
      scrollContainerRef.current.scrollTo({
        left: newSlide * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const getVisibleCards = () => {
    const startIndex = currentSlide * cardsPerView;
    return blogCards.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <section className="bg-[#cce1f4] flex flex-col gap-12 md:gap-16 lg:gap-20 items-center px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="flex flex-col gap-6 md:gap-8 max-w-[1280px] w-full">
        {/* Header - Desktop */}
        <div className="hidden md:flex items-end justify-between w-full">
          <div className="flex flex-col gap-4 max-w-[768px] w-full">
            <div className="flex flex-col gap-6 items-center w-full">
              <h2 className="font-bold text-[#0c2080] text-[40px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] w-full">
                Latest News
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/collections/news" className="border border-[#0c2080] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#0c2080] hover:text-white transition-colors">
              <span className="font-medium text-[#0c2080] hover:text-white text-base leading-[1.5] whitespace-nowrap">
                View all
              </span>
            </Link>
          </div>
        </div>

        {/* Header - Mobile */}
        <div className="flex md:hidden flex-col gap-6 w-full">
          <h2 className="font-bold text-[#0c2080] text-[36px] leading-[1.2] tracking-[-0.36px] w-full">
            Latest News
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col w-full">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" 
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {blogCards.map((card) => (
                <motion.div 
                  key={card.id} 
                  className="flex flex-col gap-6 w-[300px] flex-shrink-0" 
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[300/198] rounded-2xl overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 w-full">
                    {card.hasCategory && (
                      <div className="flex gap-4 items-center">
                        <div className="bg-[rgba(0,5,10,0.05)] border border-[rgba(0,5,10,0.15)] border-solid flex items-start px-2.5 py-1 rounded-md">
                          <span className="font-semibold text-[#00050a] text-sm leading-[1.5] whitespace-nowrap">
                            {card.category}
                          </span>
                        </div>
                        <span className="font-semibold text-[#00050a] text-sm leading-[1.5] whitespace-nowrap">
                          {card.readTime}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 text-[#00050a] w-full">
                      <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.2px] w-full">
                        {card.title}
                      </h3>
                      <p className="font-normal text-base leading-[1.5] w-full">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link href={card.link} className="flex gap-2 items-center rounded-xl cursor-pointer group">
                    <span className="font-normal text-[#00050a] text-base leading-[1.5] whitespace-nowrap group-hover:text-[#0c2080] transition-colors">
                      Read more
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet & Desktop: Grid Layout with Animation */}
          <div className="hidden md:flex gap-6 lg:gap-8 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              {getVisibleCards().map((card, index) => (
                <motion.div 
                  key={`${card.id}-${currentSlide}`}
                  className="flex flex-col gap-6 flex-1 max-w-[394px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[394/262.6] rounded-2xl overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 w-full">
                    {card.hasCategory && (
                      <div className="flex gap-4 items-center">
                        <div className="bg-[rgba(0,5,10,0.05)] border border-[rgba(0,5,10,0.15)] border-solid flex items-start px-2.5 py-1 rounded-md">
                          <span className="font-semibold text-[#00050a] text-sm leading-[1.5] whitespace-nowrap">
                            {card.category}
                          </span>
                        </div>
                        <span className="font-semibold text-[#00050a] text-sm leading-[1.5] whitespace-nowrap">
                          {card.readTime}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 text-[#00050a] w-full">
                      <h3 className="font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.22px] lg:tracking-[-0.24px] w-full">
                        {card.title}
                      </h3>
                      <p className="font-normal text-base leading-[1.5] w-full">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link href={card.link} className="flex gap-2 items-center rounded-xl cursor-pointer group">
                    <span className="font-normal text-[#00050a] text-base leading-[1.5] whitespace-nowrap group-hover:text-[#0c2080] transition-colors">
                      Read more
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between w-full mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#0c2080]' : 'bg-[#0c2080]/30'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <motion.button
                onClick={prevSlide}
                className="bg-[#5ae0f6] flex items-center justify-center p-3 rounded-lg hover:bg-[#4ac9e0] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#00050a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="bg-[#5ae0f6] flex items-center justify-center p-3 rounded-lg hover:bg-[#4ac9e0] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#00050a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="flex md:hidden justify-start">
          <Link href="/collections/news" className="border border-[#0c2080] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#0c2080] hover:text-white transition-colors">
            <span className="font-medium text-[#0c2080] hover:text-white text-base leading-[1.5] whitespace-nowrap">
              View all
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;