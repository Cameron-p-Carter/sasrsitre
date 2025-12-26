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

// --- Article Data ---

const ARTICLE_HEADER_DATA: ArticleHeaderData = {
  title: "From Hype to Engineered Success: Be the Pragmatist",
  description: "Three approaches dominate how teams use AI today, but only one consistently ships reliable outcomes.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Jan 2025",
  readTime: "3 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `**The Believers treat AI as an oracle. The Skeptics treat it as a risk.**\n\nThe Pragmatists treat AI as an unreliable component in a reliable system. AI is nondeterministic and probabilistic, so they build determinism around it.\n\nI have been in many conversations from meetups and BeerOps to deep dive sessions with teams at some of the largest banks in Australia. AI is everywhere, but I see only three approaches and only one consistently delivers.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placeholder163.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `**The Three Camps**\n\n**The Skeptics** (Trial and Abandon)\nI watched a senior engineer try Copilot for a week. He asked it to scaffold an API controller. Or he tried to build a Docusign clone in a single prompt. He got back code with fake imports and subtle bugs.\n“See? It is garbage. I will just write it myself.”\n\nThey tried AI a few times, expected it to work like a senior dev, got burned by hallucinations, and gave up.\n\n**The Believers** (Magic and Chaos)\nOne team pushed auto generated API docs straight to production without review. It looked great until customers realised half the endpoints did not exist. They move fast, break things, and spend weeks fixing the mess.\n\n**The Pragmatic Operators**\nThese teams accept that AI is probabilistic. So they wrap it in processes that are deterministic. They use AI to accelerate the work but never to authorise it. They keep humans in the loop and verify everything.\n\nI am working **with a team using AI to analyse current state by scanning thousands of lines of legacy code. It turns months of manual discovery into days of validated insight.**\n\nOur team uses **AI for initial code review**, treating it like a junior engineer's feedback. It catches trivial issues so engineers save hours and can focus on what matters.\n\nWe use Figma MCP with Claude to scaffold initial UI code. Engineers still own the final quality check. We also use AI to act as a red team, finding security gaps in seconds that used to take weeks.\n\n**What Separates Them**\n**Pragmatists assume hallucinations and bugs**, so they build guardrails first. Automated tests, review gates, and **strict validation. They do not trust the AI blindly. They trust the process around it.**\n\n**You can still do it right.**\n\n1. **Define failure modes first**, not success metrics\n2. **Build guardrails that block**, not just warn\n3. **Value shipped and verified** over perfect on paper\n\nPragmatists are engineering reliability out of an unreliable tool. Choose to be one today.`,
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
  title: "Engineer Reliability into AI",
  description: "Contact us to deploy AI tools with the guardrails and engineering practices needed to ensure reliable business outcomes.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function PragmatismPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
