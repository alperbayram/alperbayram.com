import Article from "@/components/Article";
import { notFound } from "next/navigation";
import { getMediumPost, getMediumPosts } from "@/lib/medium";
import { buildPageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = await getMediumPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params: { lang, slug } }) {
  if (lang !== "en") {
    return {};
  }

  const post = await getMediumPost(slug);
  if (!post) {
    return {};
  }

  return buildPageMetadata({
    locale: "en",
    path: `/writing/${slug}`,
    meta: { title: post.title, description: post.excerpt },
  });
}

export default async function WritingPost({ params: { lang, slug } }) {
  if (lang !== "en") {
    notFound();
  }

  const post = await getMediumPost(slug);
  if (!post) {
    notFound();
  }

  return <Article lang="en" post={post} />;
}
