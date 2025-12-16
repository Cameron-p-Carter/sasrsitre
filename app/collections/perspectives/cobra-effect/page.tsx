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
  title: "The Cobra Effect in Software",
  description: "How well-intended metrics can create perverse incentives and lead teams further from the outcomes they are trying to achieve.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `Here is a favourite cautionary tale that says a lot about incentives and outcomes.\n\n**The British Raj in Delhi tried to fix a dangerous cobra problem by paying a bounty for every dead snake.**\n\nAt first it seemed to work because more dead cobras showed up and everyone thought the streets were getting safer.\n\nPeople soon realised **they could breed cobras** at home and turn them in for cash, which quietly turned a fix into a cottage industry.\n\nWhen the bounty was cancelled, breeders released the now worthless snakes and the city ended up with even more cobras than before.\n\nEconomists often cite this as the Cobra Effect, where a solution creates a bigger problem through perverse incentives.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder157.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `This same pattern shows up in software teams more often than we like to admit.\n\nForget lines of code as a yardstick and consider a modern example that hits closer to home.\n\n**Velocity began as a planning aid for the team to forecast capacity rather than a scoreboard for performance.**\n\nOnce velocity becomes a KPI, people start optimising for the number rather than the outcome and the system gets gamed.\n\nTeams pad estimates. Simple work turns into bigger point stories. Quality slips to close more tickets. Valuable work such as refactoring and mentoring gets sidelined.\n\nCharts look great while the product gets buggier and harder to maintain, which is the exact opposite of the goal.\n\n**The pattern is clear and it is the same lesson as the cobra story.**\n\n**Metrics are useful signals, yet elevating them above the mission can invite side effects.**\n\n**They wanted safer streets and ended up with more snakes. We want better software and end up with more story points.**\n\nBefore **rolling out that next KPI**, pause and ask three hard questions:\n\n1. **How will smart people try to game this,** even if they mean well?\n\n2. **What important unmeasured work** will this incentive accidentally push to the side?\n\n3. **Are we celebrating real progress for customers** or just a number moving in the right direction on a dashboard?\n\nThinking through second order and third order effects is how to avoid breeding our own cobras.`,
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
  title: "Build Systems with the Right Incentives",
  description: "Contact us to explore how robust metrics and governance can align your teams with true business outcomes.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function CobraEffectPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}