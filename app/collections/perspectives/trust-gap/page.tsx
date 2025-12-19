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
  title: "Bridging the Trust Gap Between Business and Technology",
  description: "A clear breakdown of why trust fails between business and tech teams, and what both sides must change to rebuild it.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `"I don't trust my tech team."\n\nNo statement indicates a bigger breakdown in the relationship between business and technology than this one. If this is not a prompt to take action and fix things, it is hard to know what is.\n\nThere are some obvious pitfalls on the technology side that can lead to such a broken relationship:\n\n**Lack of transparency** – The team operates as a black box, making it impossible for the business to understand why things take so long or what trade offs are being made.\n\n**Misaligned goals** – Technology initiatives that do not clearly connect to business objectives, as the team is not aligned with the broader strategy.\n\n**Not outcome focused** – A fixation on technology for its own sake rather than delivering measurable business value and solving real problems.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder154.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `But trust is a two way street. The business side often contributes to this breakdown:\n\n**Unrealistic expectations** – Demanding results that ignore the constraints of time, resources, and technical reality, then blaming the tech team when miracles do not happen.\n\n**Not sharing the why** – Treating the tech team as order takers rather than partners, withholding the context and reasoning that would help them make better decisions.\n\n**Not seeing tech as an enabler** – Viewing technology as a cost centre or a necessary evil rather than a strategic capability that can drive business outcomes.\n\nThe path forward requires intentional effort from both sides. Trust is not built overnight, but recognising these patterns is the first step toward rebuilding it.`,
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
  title: "Build Trust Through Partnership",
  description: "Contact us to learn how we can help bridge the gap between your business and technology teams through transparent, outcome-focused collaboration.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function TrustGapPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}