import HomePage from "@/components/Home";
import { buildHomeJsonLd, buildHomeMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildHomeMetadata("tr");
}

export default function Home() {
  const jsonLd = buildHomeJsonLd("tr");

  return (
    <>
      <HomePage lang="tr" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.website) }} />
    </>
  );
}
