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
  title: "Building a Production Tool as an Intern with AI",
  description: "How combining AI tool with sound engineering principles enabled a complex workforce planning system to be delivered in just one month.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Jan 2026",
  readTime: "4 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `Three months into my internship at Software@Scale, I was presented with a huge challenge. A project to create a workforce planning project that would be used within the company. I was met with mixed feelings of both excitement and doubt. Excited to make an impact on the company, but doubtful of my ability to deliver such a huge project within such a short timeframe, just one month.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/pers.png',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `I needed to make a decision quickly. Is this something I can actually pull off? A great problem to have as an intern, but what would be the solution? It seemed impossible, but prior to this at S@S, I had been researching AI development tools. I'd been testing different AI coding assistants and was familiar with their capabilities. When they suggested I explore using V0, especially with our new Vercel Silver Partnership giving us access to their latest tools, I did some quick prototyping and research. After seeing what was possible, I was confident I could pull it off.

The first critical decision was choosing the right technology. Not just frameworks and libraries that suited the problem, or that I was familiar with, but tools that worked well with AI development workflows.
 Next.js and React weren’t just good choices for a data-heavy application with frequently changing state – they were frameworks that integrated smoothly with modern AI coding assistants and supported rapid iteration as the project evolved.
I started with V0 for prototyping. Within an hour I had prototypes that would normally take weeks to develop. Not only did they look great, they also worked, automatically providing mock data to demonstrate functionality. This sped up the early discovery phase immensely. Skipping wireframes, lo-fis, and hi-fis straight to a working prototype left nothing to imagination, and I was able to get detailed, actionable feedback very quickly.

As the project progressed, I continued to use V0 where it made sense, while building out the full application with a Supabase-backed data layer to handle persistence, relationships, and business logic. However, I ran into a problem. As the application grew, the codebase was turning into a mess. Functions were getting massive, components were doing too many things, iterating became slower and slower.

This is where I had to change my approach completely. Instead of asking AI to "build a feature," I started asking it to employ the software engineering principles and practices I'd learned at university - applying the right patterns and design approaches for each specific problem I was tackling. Suddenly I had clean architecture, proper abstraction layers, and maintainable code.
One month later, the result was a full-stack workforce planning tool with real-time data visualization, intelligent resource matching, and comprehensive analytics. Everything was deployed on Vercel, where each GitHub commit automatically triggered preview environments and seamless production deployments. The entire deployment process took about 30 minutes, saving countless hours compared to traditional deployment setups.

As a violinist of 16 years and an ensemble leader, I always find a way to link lessons back to music. Each AI tool was like an instrument in an orchestra, each with its own strengths and role. I acted as the conductor, knowing when and how to use each tool, orchestrating them to work together and guiding them to perform at their best. Without that approach, this project would never have been possible`,
    } as RichTextBlock,
  ],
  author: {
    name: "Cameron Carter",
    title: "Graduate Software Engineer",
    avatarSrc: "/images/people/cam.png",
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
