import type { MetadataRoute } from 'next';
import { SITE_URL, ROUTES } from './_lib/site';
import { getMinistrySlugs } from './_lib/ministries';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainRoutes = ROUTES.map(({ path }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: (path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));

  const ministryRoutes = getMinistrySlugs().map((slug) => ({
    url: `${SITE_URL}/ministerios/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...mainRoutes, ...ministryRoutes];
}
