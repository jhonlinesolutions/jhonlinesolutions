import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPostDate = posts[0] ? new Date(posts[0].date) : undefined;

  const staticRoutes: MetadataRoute.Sitemap = [
    { route: "", priority: 1, lastModified: latestPostDate },
    { route: "/servicos", priority: 0.9 },
    { route: "/sobre", priority: 0.8 },
    { route: "/contato", priority: 0.8 },
    { route: "/blog", priority: 0.8, lastModified: latestPostDate },
    { route: "/politica-de-privacidade", priority: 0.2 },
    { route: "/termos-de-uso", priority: 0.2 },
  ].map(({ route, priority, lastModified }) => ({
    url: `${siteConfig.url}${route}`,
    ...(lastModified && { lastModified }),
    priority,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
