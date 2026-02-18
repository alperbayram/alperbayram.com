import { notFound, redirect } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getDictionary } from "@/lib/i18n";
import {
  buildPageMetadata,
  buildServiceJsonLd,
  SERVICE_SLUGS,
} from "@/lib/seo";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug, lang: "en" }));
}

export function generateMetadata({ params: { lang, slug } }) {
  if (!SERVICE_SLUGS.includes(slug)) {
    return {};
  }

  if (lang !== "en" && lang !== "tr") {
    return {};
  }

  const locale = lang === "en" ? "en" : "tr";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: `/services/${slug}`,
    meta: dict.meta.services[slug],
  });
}

export default function LocalizedServiceDetailPage({ params: { lang, slug } }) {
  if (!SERVICE_SLUGS.includes(slug)) {
    notFound();
  }

  if (lang === "tr") {
    redirect(`/services/${slug}`);
  }

  if (lang !== "en") {
    notFound();
  }

  const jsonLd = buildServiceJsonLd({
    locale: "en",
    slug,
    path: `/services/${slug}`,
  });

  return (
    <>
      <ServicePage lang="en" slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }} />
    </>
  );
}
