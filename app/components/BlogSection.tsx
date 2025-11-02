'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogCard {
  id: number;
  image: string;
  title: string;
  description: string;
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
      image: '/images/placeholder/placeholder1.png',
      title: 'Exploring the Future of Digital Transformation',
      description: 'Discover how technology is reshaping industries and driving innovation.',
      hasCategory: false
    },
    {
      id: 2,
      image: '/images/placeholder/placeholder2.png',
      title: 'Navigating the Cloud Landscape Today',
      description: 'Key trends and strategies for successful cloud adoption.',
      hasCategory: false
    },
    {
      id: 3,
      image: '/images/placeholder/placeholder3.jpg',
      title: 'The Importance of Cybersecurity Today',
      description: 'Understanding risks and safeguarding your digital assets.',
      hasCategory: false
    },
    {
      id: 4,
      image: '/images/placeholder/placeholder4.jpg',
      title: 'News title heading will go here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      hasCategory: false
    },
    {
      id: 5,
      image: '/images/placeholder/placeholder4.jpg',
      title: 'Blog title heading will go here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      category: 'Category',
      readTime: '5 min read',
      hasCategory: true
    },
    {
      id: 6,
      image: '/images/placeholder/placeholder4.jpg',
      title: 'Blog title heading will go here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      category: 'Category',
      readTime: '5 min read',
      hasCategory: true
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
            <button className="border border-[#0c2080] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#0c2080] hover:text-white transition-colors">
              <span className="font-medium text-[#0c2080] hover:text-white text-base leading-[1.5] whitespace-nowrap">
                View all
              </span>
            </button>
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
                  <div className="flex gap-2 items-center rounded-xl cursor-pointer group">
                    <span className="font-normal text-[#00050a] text-base leading-[1.5] whitespace-nowrap group-hover:text-[#0c2080] transition-colors">
                      Read more
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
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
                  <div className="flex gap-2 items-center rounded-xl cursor-pointer group">
                    <span className="font-normal text-[#00050a] text-base leading-[1.5] whitespace-nowrap group-hover:text-[#0c2080] transition-colors">
                      Read more
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
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
          <button className="border border-[#0c2080] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#0c2080] hover:text-white transition-colors">
            <span className="font-medium text-[#0c2080] hover:text-white text-base leading-[1.5] whitespace-nowrap">
              View all
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;