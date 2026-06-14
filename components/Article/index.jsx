import Link from "next/link";
import { getDictionary, getLocalizedPath, normalizeLocale } from "@/lib/i18n";

export default function Article({ lang = "en", post }) {
  const locale = normalizeLocale(lang);
  const t = getDictionary(locale);
  const labels = t.home.writing;
  const homeHref = getLocalizedPath(locale, "/");

  const dateLabel = post.isoDate
    ? new Date(post.isoDate).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : post.year;

  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-16 sm:py-20">
      <Link
        href={homeHref}
        className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 hover:decoration-gray-900"
      >
        ← {labels.back}
      </Link>

      <header className="mt-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{post.title}</h1>
        {dateLabel ? <p className="mt-2 text-sm text-gray-400">{dateLabel}</p> : null}
      </header>

      <div
        className="article-body mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 border-t border-gray-100 pt-6">
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 hover:decoration-gray-900"
        >
          {labels.readOnMedium}
        </a>
      </footer>
    </article>
  );
}
