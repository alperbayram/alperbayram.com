import Link from "next/link";
import { getDictionary, getLocalizedPath, normalizeLocale } from "@/lib/i18n";

export default function ServicePage({ lang = "en", slug }) {
  const locale = normalizeLocale(lang);
  const t = getDictionary(locale);
  const service = t.servicePages.items[slug];

  if (!service) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={getLocalizedPath(locale, "/")} className="hover:underline">
              {t.servicePages.breadcrumbs.home}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`${getLocalizedPath(locale, "/")}#services`} className="hover:underline">
              {t.servicePages.breadcrumbs.services}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-semibold">{service.name}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-extrabold text-gray-900">{service.name}</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">{service.summary}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">{t.servicePages.sections.deliverables}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {service.deliverables.map((item) => (
            <li key={item} className="rounded-xl border border-gray-200 bg-white p-4 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">{t.servicePages.sections.process}</h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-3">
          {service.process.map((item, index) => (
            <li key={item} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700">
              <span className="block text-sm font-semibold text-emerald-700">{index + 1}</span>
              <p className="mt-2">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <div className="rounded-2xl bg-emerald-600 p-8 text-white">
          <h2 className="text-2xl font-bold">{t.servicePages.sections.ctaTitle}</h2>
          <p className="mt-2 text-emerald-50">{t.servicePages.sections.ctaText}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={t.common.appointmentMailto}
              className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700"
            >
              {t.home.cta.primary}
            </a>
            <a
              href={`mailto:${t.common.email}`}
              className="inline-flex items-center rounded-full border border-emerald-100 px-5 py-3 text-sm font-semibold text-white"
            >
              {t.home.cta.secondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
