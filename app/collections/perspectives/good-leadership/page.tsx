import ArticlePageLayout from '@/app/components/templates/ArticlePageLayout';

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

// --- Article Data ---

const ARTICLE_HEADER_DATA: ArticleHeaderData = {
  title: "What Good Leadership Really Looks Like",
  description: "A clearer definition of effective leadership based on problem solving, forward planning, and empowering teams rather than simply directing them.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `**No one ever told me what it really means for someone to have good leadership skills.**\n\nAt first I thought leadership meant being the loudest person in the room, and at times I have seen people selected for leadership roles based on this criteria. But with the benefit of observing many good and bad leaders over time, I have come to a better definition of what good leadership looks like, at least within the technology field where there is a focus on problem solving and delivery.\n\nThe difference between a mediocre and a good leader:`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder158.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `1. **Identify and solve symptoms of problems and address root causes**\n   Rather than fighting fires when systems or processes break down, they provide ways to avoid the fires happening in the first place.\n\n2. **Solve today’s needs and anticipate future needs**\n   Instead of delivering only against the requirements given to them, they look to build a roadmap that anticipates future requirements.\n\n3. **Get the work done and find better ways to do the work**\n   More than simply organising the team to get the necessary work done, they make improvements that allow the work to happen more quickly or with higher quality.\n\n4. **Call out what needs to change and provide a path to making the change happen**\n   Rather than spotting problems and calling them out, they provide a plan for addressing these problems.\n\n5. **Tell their team what they need to do and also empower their team to know what needs to be done**\n   Instead of managing the task list for their team members, they help their team develop the ability to manage themselves.\n\nThere is probably much more that could be added. The loud voice often associated with leadership may be the most noticeable trait, but there are many others that are far more impactful.`,
    } as RichTextBlock,
  ],
  author: {
    name: "Li-Shuai Soh",
    title: "CTO | Head of Engineering",
    avatarSrc: "/images/profiles/lipfp.svg",
  },
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Empower Your Teams",
  description: "Contact us to explore how we can help you implement processes and governance that drive high-performing teams.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function GoodLeadershipPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}