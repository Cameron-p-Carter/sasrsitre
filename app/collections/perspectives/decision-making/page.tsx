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

// --- Placeholder Data ---

const ARTICLE_HEADER_DATA: ArticleHeaderData = {
  title: "Small Decisions, Big Consequences",
  description: "How seemingly minor choices in technology and business can create long-term impacts, and what leaders can do to avoid preventable outcomes.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `**Small changes in initial conditions can lead to unpredictable outcomes in complex systems.**\n\nThis is the premise of the butterfly effect, which can be seen in many businesses where seemingly small decisions lead to large and sometimes negative future results. Sometimes this plays out in technology decisions:\n\n**Picking the wrong framework** which then becomes embedded and takes years to unwind.\n\n**Making a poor system design decision** resulting in ongoing and expensive maintenance and remediation.\n\nQuite often, and arguably more severely, this appears in people and business decisions:\n\n**Signing up for an unfavourable client or vendor contract** which bleeds the company over the long term.\n\n**Setting up teams with the wrong goals and direction** leading to conflicting priorities that take an extended period to unravel.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder156.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `To mitigate the future impact of bad decisions you can:\n\n**Consider how easy it is to reverse a decision.** If you can back out without losing much it may be worth trying, but more thought may be needed before going ahead.\n\n**Defer decisions where possible.** If you do not need to decide on something immediately, then wait, as more data may emerge to help make a more informed decision.\n\n**Avoid sunk cost fallacy.** If something is not working then change it. Do not stay on a path simply because time or money has already been invested.\n\nOf course, ideally you make better decisions in the first place. But unless you can time travel, the guidance above may be the best you can do.`,
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
  title: "Make Better Decisions Today",
  description: "Talk to us about applying robust strategic thinking and engineering practices to your biggest challenges.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function DecisionMakingPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}