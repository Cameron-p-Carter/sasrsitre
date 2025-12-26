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
  author: AuthorData;
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
  title: "What Makes a Great Tech Leader?",
  description: "A practical look at the three intangible qualities that distinguish strong technical managers from exceptional tech leaders.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Dec 2025",
  readTime: "3 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `**Hiring good tech leaders is hard.**\n\nTechnical ability is table stakes - but what really separates a good tech leader from a great one are the less tangible skills that are much harder to assess in an interview. How do you find the right balance between both? And how do you do it efficiently when hiring can consume so much time?`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placeholder152.jpg',
      caption: 'Tech leadership requires balancing technical skills with people management',
    } as ImageBlock,
    {
      type: 'richText',
      content: `After far too much time spent interviewing and hiring, here are the top three things I focus on beyond pure technical competence:\n\n1. **Fit for company size and scale of the work**\n   Do they have experience with the level of structure and rigour needed for bigger companies? Can they take the initiative required in smaller companies? Are they aligned to the scale of technology and systems you're working with?\n\n2. **Analytical thinking and problem solving**\n   Can they demonstrate critical thinking? Do they get into the details by breaking down problems and working through them methodically - without getting lost in the detail?\n\n3. **Engagement with people**\n   Beyond basic communication - do they know how to work with, and influence, their stakeholders? Can they work constructively through difficult conversations?\n\nThe technical skills in potential hires are important and need to be assessed, but it's these intangible qualities that determine whether someone will truly excel in a tech leadership role.`,
    } as RichTextBlock,
  ],
  author: {
    name: "Li-Shuai Soh",
    title: "Head of Architecture and Solutions",
    avatarSrc: "/images/profiles/lipfp.svg",
  },
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Join Us on Our Journey",
  description: "Contact us today to explore how our Cloud Engineering services can transform your business.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function FirstArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
