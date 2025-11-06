interface CaseStudySectionHeaderProps {
  title: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
}

const CaseStudySectionHeader = ({
  title,
  description,
  backgroundColor = "bg-[#006cc9]",
  textColor = "text-white",
}: CaseStudySectionHeaderProps) => {
  return (
    <div className={`${backgroundColor} box-border flex flex-col gap-12 md:gap-20 items-center px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="flex flex-col gap-12 md:gap-20 items-center max-w-[1280px] w-full">
        <div className={`flex flex-col gap-5 md:gap-6 items-center max-w-[768px] ${textColor} text-center w-full`}>
          <h1 className="font-['Montserrat',sans-serif] font-bold leading-[1.2] text-[40px] md:text-[56px] tracking-[-0.4px] md:tracking-[-0.56px] w-full">
            {title}
          </h1>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[1.5] text-[16px] md:text-[18px] w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySectionHeader;