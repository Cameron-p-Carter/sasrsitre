import Image from 'next/image';

interface FeatureColumn {
  iconSrc: string;
  title: string;
  content: string | string[]; // Can be a single paragraph string or an array of list items
}

interface ServiceFeatureColumnsProps {
  columns: FeatureColumn[];
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

const ServiceFeatureColumns = ({ columns, backgroundColor, textColor, titleColor }: ServiceFeatureColumnsProps) => {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        {/* Features Grid (Mobile: Stacked, Desktop: 3 Columns) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 items-start">
              
              {/* Icon */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={column.iconSrc}
                  alt={column.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
                <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${titleColor}`}>
                  {column.title}
                </h3>
                
                {/* Dynamic Content: List or Paragraph */}
                <div className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                  {Array.isArray(column.content) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {column.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{column.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureColumns;