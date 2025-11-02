'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  const cardsPerView = 3;
  const maxSlides = Math.ceil(blogCards.length / cardsPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const getVisibleCards = () => {
    const startIndex = currentSlide * cardsPerView;
    return blogCards.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <section className="bg-[#cce1f4] flex flex-col gap-20 items-center px-16 py-28 w-full">
      <div className="flex flex-col gap-[27px] h-[602px] max-w-[1280px] w-full">
        {/* Header */}
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col gap-4 max-w-[768px] w-full">
            <div className="flex flex-col gap-6 items-center w-full">
              <h2 className="font-bold text-[#0c2080] text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
                Latest News
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="border border-[#0c2080] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl">
              <span className="font-medium text-[#0c2080] text-base leading-[1.5] whitespace-nowrap">
                View all
              </span>
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col w-full">
          <div className="flex gap-8 w-full overflow-hidden">
            {getVisibleCards().map((card) => (
              <div key={card.id} className="flex flex-col gap-6 w-[394px] flex-shrink-0">
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
                    <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                      {card.title}
                    </h3>
                    <p className="font-normal text-base leading-[1.5] w-full">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="flex gap-2 items-center rounded-xl">
                  <span className="font-normal text-[#00050a] text-base leading-[1.5] whitespace-nowrap">
                    Read more
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="#00050a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
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
              <button
                onClick={prevSlide}
                className="bg-[#5ae0f6] flex items-center justify-center p-3 rounded-lg hover:bg-[#4ac9e0] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#00050a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#5ae0f6] flex items-center justify-center p-3 rounded-lg hover:bg-[#4ac9e0] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#00050a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;