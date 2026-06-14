import { absoluteUrl } from "@/lib/seo";
import { getMediumPosts } from "@/lib/medium";

export default async function sitemap() {
  const now = new Date();
  const posts = await getMediumPosts();

  const baseRoutes = ["/", "/en"];
  const writingRoutes = posts.flatMap((post) => [
    `/writing/${post.slug}`,
    `/en/writing/${post.slug}`,
  ]);

  return [...baseRoutes, ...writingRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path.includes("/writing/") ? 0.8 : 1,
  }));
}
