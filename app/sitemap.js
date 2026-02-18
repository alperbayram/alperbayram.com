import { absoluteUrl, SERVICE_SLUGS } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();

  const baseRoutes = ["/", "/en"];
  const serviceRoutes = SERVICE_SLUGS.flatMap((slug) => [
    `/services/${slug}`,
    `/en/services/${slug}`,
  ]);

  return [...baseRoutes, ...serviceRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path.includes("/services/") ? 0.8 : 1,
  }));
}
