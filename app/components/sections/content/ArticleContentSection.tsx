import React from 'react';
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
  author?: AuthorData;
  backgroundColor: string;
  textColor: string;
}

const ArticleContentSection = ({ contentBlocks, author, backgroundColor, textColor }: ArticleContentSectionProps) => {
  
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'richText':
        // Parse content to handle bold text, numbered lists, and paragraphs
        const parseContent = (content: string) => {
          const lines = content.split('\n');
          const elements: React.ReactElement[] = [];
          let currentList: string[] = [];
          let listIndex = 0;

          const parseBoldText = (text: string) => {
            const parts = text.split('**');
            return parts.map((part, partIdx) =>
              partIdx % 2 === 1 ?
                <strong key={partIdx} className="font-bold">{part}</strong> :
                part
            );
          };

          const flushList = () => {
            if (currentList.length > 0) {
              elements.push(
                <ol key={`list-${listIndex++}`} className="list-decimal list-inside space-y-4 ml-4">
                  {currentList.map((item, idx) => (
                    <li key={idx} className={`font-normal text-base leading-[1.5] ${textColor}`}>
                      {parseBoldText(item)}
                    </li>
                  ))}
                </ol>
              );
              currentList = [];
            }
          };

          lines.forEach((line, lineIdx) => {
            if (line.trim() === '') {
              flushList();
              return;
            }

            // Handle numbered list items
            const listMatch = line.match(/^\d+\.\s*(.+)/);
            if (listMatch) {
              currentList.push(listMatch[1]);
              return;
            }

            // Flush any pending list before processing other content
            flushList();

            // Handle headings
            if (line.startsWith('### ')) {
              const headingText = line.substring(4);
              elements.push(
                <h3 key={lineIdx} className={`font-bold text-[32px] leading-[1.3] tracking-[-0.32px] pt-6 ${textColor}`}>
                  {parseBoldText(headingText)}
                </h3>
              );
            } else if (line.startsWith('## ')) {
              const headingText = line.substring(3);
              elements.push(
                <h4 key={lineIdx} className={`font-bold text-[20px] leading-[1.4] tracking-[-0.2px] pt-5 ${textColor}`}>
                  {parseBoldText(headingText)}
                </h4>
              );
            } else if (line.trim()) {
              // Handle bold text within paragraphs
              elements.push(
                <p key={lineIdx} className={`font-normal text-base leading-[1.5] ${textColor}`}>
                  {parseBoldText(line)}
                </p>
              );
            }
          });

          flushList(); // Flush any remaining list items
          return elements;
        };

        return (
          <div key={index} className="flex flex-col gap-4">
            {parseContent(block.content)}
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

            {/* Share Section - Centered */}
            <div className="flex flex-col gap-8 pt-12">
              <div className="flex flex-col gap-4 items-center w-full">
                <p className={`font-semibold text-lg leading-[1.5] ${textColor}`}>
                  Share this post
                </p>
                <div className="flex gap-2">
                  {/* Link */}
                  <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/socials/link-alt.svg"
                      alt="Share link"
                      width={24}
                      height={24}
                    />
                  </div>
                  {/* LinkedIn */}
                  <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/socials/LinkedIn.svg"
                      alt="Share on LinkedIn"
                      width={24}
                      height={24}
                    />
                  </div>
                  {/* X/Twitter */}
                  <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/socials/X.svg"
                      alt="Share on X"
                      width={24}
                      height={24}
                    />
                  </div>
                  {/* Facebook */}
                  <div className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/socials/Facebook.svg"
                      alt="Share on Facebook"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-[#00050a] w-full"></div>
              
              {/* Author Section - Centered - Only show if author is provided */}
              {author && (
                <div className="flex gap-4 items-center justify-center">
                  <div className="relative w-14 h-14 shrink-0">
                    <Image
                      src={author.avatarSrc}
                      alt={author.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col leading-[1.5] text-base">
                    <p className={`font-semibold ${textColor}`}>
                      {author.name}
                    </p>
                    <p className={`font-normal ${textColor}`}>
                      {author.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleContentSection;