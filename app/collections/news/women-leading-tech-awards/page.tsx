import ArticlePageLayout from '@/app/components/ArticlePageLayout';

// --- Data Structures copied from ArticlePageLayout.tsx ---

interface ArticleHeaderData {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

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
  content: string;
}

type ContentBlock = ImageBlock | QuoteBlock | RichTextBlock;

interface ArticleContentData {
  contentBlocks: ContentBlock[];
  backgroundColor: string;
  textColor: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface ArticlePageData {
  header: ArticleHeaderData;
  content: ArticleContentData;
  cta: CTASectionData;
}

// --- Placeholder Data ---

const ARTICLE_HEADER_DATA: ArticleHeaderData = {
  title: "Patricia Droguett Recognised at Women Leading Tech Awards 2025",
  description: "Software@Scale's Director of Operations, Patricia Droguett, was named a finalist at the 2025 Atlassian Women Leading Tech Awards, recognising her leadership and contribution to Australia's growing technology industry.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The Women Leading Tech Awards, presented by Atlassian, celebrate the women who are shaping the future of technology through innovation, leadership and community impact. The 2025 awards were held on 28 March in Sydney, bringing together hundreds of professionals from across Australia's technology landscape to honour those driving meaningful change.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder119.jpg',
      caption: 'Patricia Droguett, Software@Scale Director of Operations and the team',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Patricia was recognised in the Entrepreneur/Founder category for her work in advancing scalable software delivery and promoting greater representation in the technology sector. Her nomination highlights both her professional achievements and her role in fostering collaboration and growth within Software@Scale's expanding operations.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder120.jpg',
      caption: 'Celebrating leadership and contribution to Australia\'s growing technology industry',
    } as ImageBlock,
    {
      type: 'richText',
      content: `For the Software@Scale team, Patricia's recognition reflects the company's broader commitment to building an inclusive and high-performing workplace. The event was an opportunity to celebrate not only individual excellence but also the collective progress of women shaping the next generation of Australian tech.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Champion Inclusive Innovation",
  description: "Join Software@Scale in building an inclusive technology future where diverse leadership drives meaningful change and innovation.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function WomenLeadingTechAwardsArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}