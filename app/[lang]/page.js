import HomePage from "@/components/Home";
import { notFound, redirect } from "next/navigation";
import { buildHomeJsonLd, buildHomeMetadata } from "@/lib/seo";

export function generateMetadata({ params: { lang } }) {
  if (lang === "en" || lang === "tr") {
    return buildHomeMetadata(lang);
  }

  return {};
}

export default function Home({ params: { lang } }) {
  if (lang === "tr") {
    redirect("/");
  }

  if (lang !== "en") {
    notFound();
  }

  const jsonLd = buildHomeJsonLd("en");

  return (
    <>
      <HomePage lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.website) }} />
    </>
  );
}
