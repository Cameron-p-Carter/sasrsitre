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
  title: "Care. Delivery. Honesty. The Consultant Trifecta",
  description: "What separates brilliant consultants from genuinely valuable ones is not skill alone, but the right mix of care, delivery, and candour.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `I have worked with dozens of software engineering consultants. What actually makes them worth your time and money?\n\nAfter more than twenty years in engineering across finance and technology, these are the patterns I keep seeing. I am curious how this lines up with your experience.\n\n**Most are brilliant. But brilliance is not the same as being useful.**`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder161.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `**The best ones care.** You can feel it. They ask about your constraints, team dynamics, and budget, and they do not push the perfect answer then vanish when reality bites.\n\n**Caring is draining**, so the keepers set boundaries. They stay invested without torching their energy.\n\n**They ship.** They do not overpromise. They set a realistic timeline, flag risks early, and show up when it gets hard.\n\n**They are open about constraints.** They explain what fits in four weeks, what needs more time, and why.\n\n**They explain the real trade offs:**\n* “Yes, this scales. You probably will not need it for two years.”\n* “That framework is fast, but your team will spend months learning it. Is it worth it for a 15 percent improvement?”\n* “We can build it, or you can buy off the shelf for a fifth of the cost and be live next week.”\n\n**The best ones I have worked with will tell you**:\n“I do not think I am the right fit for this,” or “This project is not set up for success and I do not want to waste your money.”\nIt costs them revenue in the short term, but it builds trust that pays dividends.\n\n**They are candid about what they do not know.**\n“I will dig in and get back to you,” then they actually do the work and collaborate with your engineers, who know the system best.\n\n**And the differentiator: they make your team better.**\nThey document decisions, explain the why, share playbooks, and mentor.\nThey aim to be replaceable because if you do not need them anymore, the engagement worked.\n\n**Hiring?** Look for care, delivery, and candour about trade offs.\n**Consulting?** Technical ability opens the door. Character keeps you in the room.`,
    } as RichTextBlock,
  ],
  author: {
    name: "Ravi Chotalia",
    title: "Head of Platform Engineering",
    avatarSrc: "/images/profiles/ravipfp.svg",
  },
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Find Your Trusted Partner",
  description: "Contact us to engage engineering consultants who deliver technical excellence alongside genuine partnership and candour.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function ConsultingPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}