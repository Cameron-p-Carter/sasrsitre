import ArticlePageLayout from '@/app/components/templates/ArticlePageLayout';

// --- Data Structures copied from ArticlePageLayout.tsx ---

interface ArticleHeaderData {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  date?: string;
  readTime?: string;
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
  title: "Software@Scale Featured in 2025 Top Tech Innovators",
  description: "Software@Scale has been included in the CEO Magazine's 2025 Top Tech Innovators editorial, recognising the company's impact across AI, data and enterprise-scale financial services technology.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Feb 2026",
  readTime: "2 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The CEO Magazine's 2025 Top Tech Innovators editorial brings together founders, executives and technology leaders shaping the next phase of global innovation. The feature spans sectors including artificial intelligence, cybersecurity, finance and clean energy, highlighting organisations delivering measurable impact at scale.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art9.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Software@Scale was recognised for the work its teams are delivering across AI, data and large-scale financial services platforms. This includes engagements across tier-one banking, commercial lending, financial advice and Australia's payments infrastructure, operating within highly regulated environments both locally and internationally.`,
    } as RichTextBlock,
    {
      type: 'richText',
      content: `The editorial also acknowledges Software@Scale's role in building data- and AI-driven products for high-growth scale-ups, supporting organisations through critical funding and growth stages. This work spans AI-powered engineering, financial crime detection and emerging agentic AI capabilities deployed within enterprise-grade systems.

As part of the feature, Patricia Droguett, Co-Founder and COO of Software@Scale, was highlighted for her perspective on innovation leadership. Her contribution emphasised starting with a clear understanding of the customer problem, applying technology with intent, and maintaining a balance between experimentation and disciplined execution — principles reflected across Software@Scale's delivery model.

Patricia was honoured to represent the company and accept the recognition on behalf of Software@Scale, acknowledging the collective effort of its teams and the trust placed in the business by its clients.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art10.png',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The inclusion in the CEO Magazine's 2025 Top Tech Innovators editorial reflects Software@Scale's continued focus on delivering technology that performs at scale, supports critical financial systems, and enables organisations to adopt AI and data capabilities with confidence.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Let's Discuss Your Project",
  description: "Contact us today to explore how we can help you achieve your goals effectively.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function TopTechInnovatorsArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
