import HomePage from "@/components/Home";
import { getDictionary } from "@/lib/i18n";
import { buildHomeJsonLd, buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  const dict = getDictionary("tr");
  return buildPageMetadata({ locale: "tr", path: "/", meta: dict.meta.home });
}

export default function Home() {
  const jsonLd = buildHomeJsonLd("tr");

  return (
    <>
      <HomePage lang="tr" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }} />
    </>
  );
}
