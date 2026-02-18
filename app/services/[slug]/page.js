import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getDictionary } from "@/lib/i18n";
import {
  buildPageMetadata,
  buildServiceJsonLd,
  SERVICE_SLUGS,
} from "@/lib/seo";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params: { slug } }) {
  if (!SERVICE_SLUGS.includes(slug)) {
    return {};
  }

  const dict = getDictionary("tr");
  return buildPageMetadata({
    locale: "tr",
    path: `/services/${slug}`,
    meta: dict.meta.services[slug],
  });
}

export default function ServiceDetailPage({ params: { slug } }) {
  if (!SERVICE_SLUGS.includes(slug)) {
    notFound();
  }

  const jsonLd = buildServiceJsonLd({
    locale: "tr",
    slug,
    path: `/services/${slug}`,
  });

  return (
    <>
      <ServicePage lang="tr" slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }} />
    </>
  );
}
