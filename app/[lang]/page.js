import HomePage from "@/components/Home";
import { notFound, redirect } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { buildHomeJsonLd, buildPageMetadata } from "@/lib/seo";

export function generateMetadata({ params: { lang } }) {
  if (lang === "en") {
    const dict = getDictionary("en");
    return buildPageMetadata({ locale: "en", path: "/", meta: dict.meta.home });
  }

  if (lang === "tr") {
    const dict = getDictionary("tr");
    return buildPageMetadata({ locale: "tr", path: "/", meta: dict.meta.home });
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }} />
    </>
  );
}
