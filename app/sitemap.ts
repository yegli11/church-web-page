import type { MetadataRoute } from 'next';
import { SITE_URL, ROUTES } from './_lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
