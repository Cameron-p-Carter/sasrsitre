import type { MetadataRoute } from 'next';
import { SITE_URL } from './site-url';

export default function robots(): MetadataRoute.Robots {
  // Keep staging and preview deployments out of search results; only production is indexed
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/collections/pop'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
