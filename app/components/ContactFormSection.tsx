'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ContactFormSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  labelColor: string;
  buttonColor: string;
  buttonTextColor: string;
  checkboxTextColor: string;
  placeholderColor: string;
}

export default function ContactFormSection({
  title,
  description,
  imageSrc,
  backgroundColor,
  titleColor,
  textColor,
  labelColor,
  buttonColor,
  buttonTextColor,
  checkboxTextColor,
  placeholderColor,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start w-full">
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[335px] md:h-[734px] rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-1/2">
              {/* Section Title */}
              <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                  <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                    {title}
                  </h2>
                  <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>
                    {description}
                  </p>
                </div>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start w-full">
                {/* Name Input */}
                <div className="flex flex-col gap-2 items-start w-full">
                  <label className={`font-normal text-base leading-[1.5] w-full ${labelColor}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-black/5 border border-black/15 rounded-xl px-3 py-2 w-full text-base leading-[1.5] text-white focus:outline-none focus:ring-2 focus:ring-[#14d3f3]"
                    required
                  />
                </div>
                
                {/* Email Input */}
                <div className="flex flex-col gap-2 items-start w-full">
                  <label className={`font-normal text-base leading-[1.5] w-full ${labelColor}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-black/5 border border-black/15 rounded-xl px-3 py-2 w-full text-base leading-[1.5] text-white focus:outline-none focus:ring-2 focus:ring-[#14d3f3]"
                    required
                  />
                </div>
                
                {/* Message Textarea */}
                <div className="flex flex-col gap-2 items-start w-full">
                  <label className={`font-normal text-base leading-[1.5] w-full ${labelColor}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className={`bg-black/5 border border-black/15 rounded-xl p-3 w-full h-[180px] text-base leading-[1.5] text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#14d3f3] placeholder:${placeholderColor}`}
                    required
                  />
                </div>
                
                {/* Checkbox */}
                <div className="flex gap-2 items-center pb-4">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="bg-black/5 border border-black/15 rounded w-[18px] h-[18px] accent-[#14d3f3]"
                    required
                  />
                  <label className={`font-normal text-[14px] leading-[1.5] ${checkboxTextColor}`}>
                    I accept the <span className="underline">Terms</span>
                  </label>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className={`${buttonColor} border border-[#14d3f3] rounded-xl px-6 py-2.5 font-medium text-base leading-[1.5] ${buttonTextColor} hover:opacity-90 transition-opacity`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}