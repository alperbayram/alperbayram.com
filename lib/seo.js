import { getDictionary, getLocalizedPath, normalizeLocale } from "@/lib/i18n";

export const SITE_URL = "https://alperbayram.com";
const DEFAULT_OG_IMAGE = "/og-cover.jpg";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

// Build a meta description from prose, keeping whole sentences under ~160 chars.
export function metaDescription(text = "", max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) {
    return clean;
  }

  const sentences = clean.match(/[^.!?]+[.!?]+/g) || [clean];
  let result = "";
  for (const sentence of sentences) {
    if ((result + sentence).trim().length > max) {
      break;
    }
    result += sentence;
  }

  result = result.trim();
  if (result) {
    return result;
  }

  return `${clean.slice(0, max).trimEnd()}…`;
}

// Home page metadata using the first "about" paragraph as the description.
export function buildHomeMetadata(locale = "en") {
  const dict = getDictionary(locale);
  const description = metaDescription(dict.home.intro.paragraphs[0]);

  return buildPageMetadata({
    locale,
    path: "/",
    meta: { ...dict.meta.home, description },
  });
}

function alternateLanguages(path) {
  return {
    en: absoluteUrl(getLocalizedPath("en", path)),
    tr: absoluteUrl(getLocalizedPath("tr", path)),
  };
}

export function buildPageMetadata({ locale = "en", path = "/", meta }) {
  const safeLocale = normalizeLocale(locale);
  const localizedPath = getLocalizedPath(safeLocale, path);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: absoluteUrl(localizedPath),
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: "website",
      locale: safeLocale === "tr" ? "tr_TR" : "en_US",
      url: absoluteUrl(localizedPath),
      title: meta.title,
      description: meta.description,
      siteName: "Alper Bayram",
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: "Personal site of Alper Bayram — software engineer, writer, and builder.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
  };
}

export function buildHomeJsonLd(locale = "en") {
  const dict = getDictionary(locale);

  return {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: dict.common.name,
      jobTitle: dict.common.title,
      email: dict.common.email,
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/alper-bayram/",
        "https://github.com/alperbayram",
        "https://alper-bayram.medium.com/",
      ],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Alper Bayram",
      url: SITE_URL,
      inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    },
  };
}
