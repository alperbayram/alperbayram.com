import Link from "next/link";
import { getDictionary, getLocalizedPath, normalizeLocale } from "@/lib/i18n";
import { getMediumPosts } from "@/lib/medium";
import Photos from "@/components/Photos";

const LINK_CLASS =
  "text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900";

export default async function HomePage({ lang = "en" }) {
  const locale = normalizeLocale(lang);
  const t = getDictionary(locale);
  const { intro, writing } = t.home;
  const posts = await getMediumPosts();

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:py-20">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{intro.greeting}</h1>
        <p className="mt-1 text-base text-gray-500">{intro.role}</p>
      </header>

      <section className="mt-8 space-y-4 text-base leading-7 text-gray-700">
        {intro.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="mt-6 space-y-4 text-base leading-7 text-gray-700">
        <p className="font-semibold text-gray-900">{intro.contact.lead}</p>
        <p>
          {intro.contact.links.map((part, index) => (
            <span key={index}>
              {part.before}
              <a href={part.href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                {part.label}
              </a>
              {part.after}
              {index < intro.contact.links.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </section>


      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">{writing.heading}</h2>
        {posts.length === 0 ? (
          <p className="mt-4 text-base text-gray-500">{writing.empty}</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {posts.map((post) => (
              <li key={post.slug} className="flex items-baseline justify-between gap-4">
                <Link href={getLocalizedPath(locale, `/writing/${post.slug}`)} className={LINK_CLASS}>
                  {post.title}
                </Link>
                <span className="shrink-0 text-sm text-gray-400">{post.year}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Photos data={t.home.photos} />

    </div>
  );
}
