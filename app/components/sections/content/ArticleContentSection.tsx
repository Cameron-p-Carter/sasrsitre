'use client';

import React, { useState } from 'react';
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
  objectPosition?: string;
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
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'richText':
        // Parse content to handle bold text, numbered lists, bullet lists, and paragraphs
        const parseContent = (content: string) => {
          const lines = content.split('\n');
          const elements: React.ReactElement[] = [];
          let currentList: string[] = [];
          let currentListType: 'ordered' | 'unordered' | null = null;
          let listIndex = 0;

          const parseBoldText = (text: string) => {
            const elements: (string | React.ReactElement)[] = [];
            let remaining = text;
            let key = 0;

            while (remaining.length > 0) {
              // Check for bold (**text**)
              const boldMatch = remaining.match(/^(.*?)\*\*(.*?)\*\*(.*)/);
              if (boldMatch) {
                if (boldMatch[1]) elements.push(boldMatch[1]);
                elements.push(<strong key={key++} className="font-bold">{boldMatch[2]}</strong>);
                remaining = boldMatch[3];
                continue;
              }

              // Check for italic (*text*)
              const italicMatch = remaining.match(/^(.*?)\*(.*?)\*(.*)/);
              if (italicMatch) {
                if (italicMatch[1]) elements.push(italicMatch[1]);
                elements.push(<em key={key++} className="italic">{italicMatch[2]}</em>);
                remaining = italicMatch[3];
                continue;
              }

              // No more formatting found
              elements.push(remaining);
              break;
            }

            return elements;
          };

          const flushList = () => {
            if (currentList.length > 0 && currentListType) {
              if (currentListType === 'ordered') {
                elements.push(
                  <ol key={`list-${listIndex++}`} className="space-y-4">
                    {currentList.map((item, idx) => {
                      const lines = item.split('\n');
                      return (
                        <li key={idx} className="flex gap-2">
                          <span className={`font-bold ${textColor} shrink-0`}>{idx + 1}.</span>
                          <div className="flex flex-col gap-2">
                            {lines.map((line, lineIdx) => (
                              <span key={lineIdx} className={`font-normal text-base leading-[1.5] ${textColor}`}>
                                {parseBoldText(line)}
                              </span>
                            ))}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                );
              } else {
                elements.push(
                  <ul key={`list-${listIndex++}`} className="list-disc list-outside pl-5 space-y-4">
                    {currentList.map((item, idx) => (
                      <li key={idx} className={`font-normal text-base leading-[1.5] ${textColor}`}>
                        {parseBoldText(item)}
                      </li>
                    ))}
                  </ul>
                );
              }
              currentList = [];
              currentListType = null;
            }
          };

          lines.forEach((line, lineIdx) => {
            // Handle numbered list items
            const numberedListMatch = line.match(/^\d+\.\s*(.+)/);
            if (numberedListMatch) {
              if (currentListType !== 'ordered') {
                flushList();
                currentListType = 'ordered';
              }
              currentList.push(numberedListMatch[1]);
              return;
            }

            // Handle indented continuation lines for lists
            if (currentListType && line.match(/^\s+(.+)/)) {
              if (currentList.length > 0) {
                // Append to the last list item with a line break
                currentList[currentList.length - 1] += '\n' + line.trim();
              }
              return;
            }

            // Handle bullet list items (asterisk)
            const bulletListMatch = line.match(/^\*\s+(.+)/);
            if (bulletListMatch) {
              if (currentListType !== 'unordered') {
                flushList();
                currentListType = 'unordered';
              }
              currentList.push(bulletListMatch[1]);
              return;
            }

            // Handle empty lines within lists
            if (line.trim() === '') {
              if (currentListType) {
                // Don't flush list on empty lines within a list
                return;
              }
              // Flush list if we're not in a list and encounter empty line
              flushList();
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
                style={block.objectPosition ? { objectPosition: block.objectPosition } : undefined}
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
                <div className="flex gap-2 relative">
                  {/* Link */}
                  <button
                    onClick={handleCopyLink}
                    className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#cce1f4] transition-colors cursor-pointer"
                    aria-label="Copy link to clipboard"
                  >
                    <Image
                      src="/images/socials/link-alt.svg"
                      alt="Share link"
                      width={24}
                      height={24}
                    />
                  </button>
                  {copySuccess && (
                    <div className="absolute -top-10 left-0 bg-[#00050a] text-white px-3 py-1 rounded text-sm">
                      Copied!
                    </div>
                  )}
                  {/* LinkedIn */}
                  <button
                    onClick={handleLinkedInShare}
                    className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#cce1f4] transition-colors cursor-pointer"
                    aria-label="Share on LinkedIn"
                  >
                    <Image
                      src="/images/socials/LinkedIn.svg"
                      alt="Share on LinkedIn"
                      width={24}
                      height={24}
                    />
                  </button>
                  {/* X/Twitter */}
                  <button
                    onClick={handleTwitterShare}
                    className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#cce1f4] transition-colors cursor-pointer"
                    aria-label="Share on X"
                  >
                    <Image
                      src="/images/socials/X.svg"
                      alt="Share on X"
                      width={24}
                      height={24}
                    />
                  </button>
                  {/* Facebook */}
                  <button
                    onClick={handleFacebookShare}
                    className="bg-[#e5f0f9] p-1 rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#cce1f4] transition-colors cursor-pointer"
                    aria-label="Share on Facebook"
                  >
                    <Image
                      src="/images/socials/Facebook.svg"
                      alt="Share on Facebook"
                      width={24}
                      height={24}
                    />
                  </button>
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