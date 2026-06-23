const STATS = [
  { value: "180+", label: "Specialists" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "2x", label: "Deloitte Rising Star Winner" },
  { value: "AWS", label: "Advanced Partner" },
  { value: "Govt.", label: "Approved ICT Supplier" },
];

const AtAGlanceSection = () => {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-8 lg:px-16 py-10 md:py-12 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-start md:items-center">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="font-bold text-[#006cc9] text-[32px] md:text-[36px] leading-[1.2] tracking-[-0.32px]">
                {stat.value}
              </p>
              <p className="font-normal text-[#0c2080] text-[14px] md:text-[15px] leading-[1.5]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceSection;
