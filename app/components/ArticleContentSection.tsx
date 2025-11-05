import Image from 'next/image';

interface AuthorData {
  name: string;
  title: string;
  avatarSrc: string;
}

interface ImageBlock {
  type: 'image';
  src: string;
  caption: string;
}

interface QuoteBlock {
  type: 'quote';
  text: string;
}

interface RichTextBlock {
  type: 'richText';
  content: string; // Can contain paragraphs, headings (H3, H6)
}

type ContentBlock = ImageBlock | QuoteBlock | RichTextBlock;

interface ArticleContentSectionProps {
  contentBlocks: ContentBlock[];
  author: AuthorData;
  backgroundColor: string;
  textColor: string;
}

const ArticleContentSection = ({ contentBlocks, author, backgroundColor, textColor }: ArticleContentSectionProps) => {
  
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'richText':
        // Assuming content is pre-formatted with paragraphs/headings, or we handle simple paragraphs
        // For simplicity, we'll split by double newline to simulate paragraphs.
        const paragraphs = block.content.split('\n\n');
        return (
          <div key={index} className="flex flex-col gap-4">
            {paragraphs.map((p, i) => {
              // Simple heuristic to detect headings based on Figma structure (H3, H6)
              if (p.startsWith('### ')) {
                return (
                  <h3 key={i} className={`font-bold text-[32px] leading-[1.3] tracking-[-0.32px] pt-6 ${textColor}`}>
                    {p.substring(4)}
                  </h3>
                );
              } else if (p.startsWith('## ')) {
                return (
                  <h4 key={i} className={`font-bold text-[20px] leading-[1.4] tracking-[-0.2px] pt-5 ${textColor}`}>
                    {p.substring(3)}
                  </h4>
                );
              } else {
                return (
                  <p key={i} className={`font-normal text-base leading-[1.5] ${textColor}`}>
                    {p}
                  </p>
                );
              }
            })}
          </div>
        );

      case 'image':
        return (
          <div key={index} className="flex flex-col gap-2 py-12">
            <div className="relative aspect-[768/400] rounded-2xl w-full overflow-hidden">
              <Image
                src={block.src}
                alt={block.caption}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex gap-2 items-start w-full">
              <div className="bg-gray-300 self-stretch shrink-0 w-[2px]" />
              <p className={`font-normal text-sm leading-[1.5] ${textColor} italic`}>
                {block.caption}
              </p>
            </div>
          </div>
        );

      case 'quote':
        return (
          <div key={index} className="flex gap-5 items-start py-9">
            <div className="bg-gray-300 self-stretch shrink-0 w-[2px]" />
            <p className={`font-normal text-[20px] leading-[1.4] italic ${textColor}`}>
              {`"${block.text}"`}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`${backgroundColor} px-5 md:px-16 pt-0 pb-16 md:pb-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-center">
          <div className="max-w-[768px] w-full flex flex-col gap-8 md:gap-12">
            
            {/* Render Content Blocks */}
            {contentBlocks.map(renderBlock)}

            {/* Share and Author Section */}
            <div className="flex flex-col gap-8 pt-12 border-t border-gray-300">
              
              {/* Share Buttons (Hardcoded for simplicity, based on Figma) */}
              <div className="flex items-end justify-between w-full">
                <div className="flex flex-col gap-4 items-start">
                  <p className={`font-semibold text-lg leading-[1.5] ${textColor}`}>
                    Share this article
                  </p>
                  <div className="flex gap-2">
                    {/* Link */}
                    <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.172 12L8.222 7.05L9.636 5.636L17 13L9.636 20.364L8.222 18.95L13.172 14H5V12H13.172Z" fill="#00050A"/>
                      </svg>
                    </div>
                    {/* LinkedIn */}
                    <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.1046 8 18 8.89543 18 10V19H15V10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10V19H10V10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10V19H5V8H8V9.5C8.66667 8.5 9.66667 8 11 8C12.3333 8 13.3333 8.5 14 9.5V8H16ZM6.5 5C7.32843 5 8 4.32843 8 3.5C8 2.67157 7.32843 2 6.5 2C5.67157 2 5 2.67157 5 3.5C5 4.32843 5.67157 5 6.5 5Z" fill="#00050A"/>
                      </svg>
                    </div>
                    {/* X/Twitter */}
                    <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25H21.556L14.949 10.391L22.772 21.75H16.133L10.913 14.95L4.228 21.75H1L8.596 12.45L1.5 2.25H8.038L12.123 7.81L18.244 2.25ZM17.007 19.75H18.93L7.08 4.25H5.07L17.007 19.75Z" fill="#00050A"/>
                      </svg>
                    </div>
                    {/* Facebook */}
                    <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM14.5 12.5H12.5V19H9.5V12.5H7.5V9.5H9.5V7.5C9.5 5.5 10.5 4.5 13 4.5H15V7.5H13C12.5 7.5 12.5 8 12.5 8V9.5H14.5L14 12.5Z" fill="#00050A"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex gap-4 items-center pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={author.avatarSrc}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start leading-[1.5]">
                  <p className={`font-semibold text-base ${textColor}`}>
                    {author.name}
                  </p>
                  <p className={`font-normal text-base ${textColor}`}>
                    {author.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleContentSection;