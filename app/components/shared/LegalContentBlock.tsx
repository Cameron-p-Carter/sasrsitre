import React from 'react';

interface LegalContentBlockProps {
  content: string;
}

export default function LegalContentBlock({ content }: LegalContentBlockProps) {
  const paragraphs = content.split('\n\n');

  return (
    <div className="flex flex-col gap-6 text-[#00050a] font-normal text-base leading-[1.5] w-full">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="last:mb-0">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );
}