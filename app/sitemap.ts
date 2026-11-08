import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from './site-url';

// Pages that exist but shouldn't be listed for search engines
// The branded case studies are standalone pages for now, not linked from anywhere
const EXCLUDED_ROUTES = new Set([
  '/collections/pop',
  '/collections/case-studies/cba-netbank-next',
  '/collections/case-studies/team-super-onetrust',
]);

// Every folder under app/ with a page file is a route; walk them at build time so new pages are included automatically
function findRoutes(dir: string, route = ''): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === 'api' || entry.name === 'components' || entry.name.startsWith('_') || entry.name.startsWith('(')) continue;
      routes.push(...findRoutes(path.join(dir, entry.name), `${route}/${entry.name}`));
    } else if (/^page\.(tsx|jsx|ts|js)$/.test(entry.name)) {
      routes.push(route || '/');
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return findRoutes(path.join(process.cwd(), 'app'))
    .filter(route => !EXCLUDED_ROUTES.has(route))
    .sort()
    .map(route => ({
      url: `${SITE_URL}${route === '/' ? '' : route}`,
      changeFrequency: route === '/' || route === '/careers' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1 : route.split('/').length <= 2 ? 0.8 : 0.6,
    }));
}
