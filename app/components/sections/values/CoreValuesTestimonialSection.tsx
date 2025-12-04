const CoreValuesTestimonialSection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-12 md:gap-8 items-center max-w-[768px] mx-auto w-full">
          {/* Testimonial Quote */}
          <p className="font-bold text-[#14d3f3] text-[20px] md:text-[24px] leading-[1.4] text-center tracking-[-0.2px] md:tracking-[-0.24px] w-full">
            {`“Software@Scale is the only company I go to when I need immediate high calibre engineering talent to confidently solve the most difficult problems we have."`}
          </p>
          
          {/* Avatar/Attribution */}
          <div className="flex flex-col gap-4 items-center w-full max-w-[300px]">
            <div className="flex flex-col items-center leading-[1.5] text-white text-base text-center w-full">
              <p className="font-semibold w-full">
                Tim Knoblance
              </p>
              <p className="font-normal w-full">
                CTO, Coates Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesTestimonialSection;