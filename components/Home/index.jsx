import Image from "next/image";
import Link from "next/link";
import { getDictionary, getLocalizedPath, normalizeLocale } from "@/lib/i18n";

export default function HomePage({ lang = "en" }) {
  const locale = normalizeLocale(lang);
  const t = getDictionary(locale);

  return (
    <div className="w-full">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">{t.home.hero.eyebrow}</p>
        <div className="mt-4 grid gap-8 md:grid-cols-[180px_1fr] md:items-start">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/pp.jpeg"
              alt="Alper Bayram profile photo"
              width={180}
              height={180}
              className="rounded-full object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              {t.home.hero.heading}
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-3xl">{t.home.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={t.common.appointmentMailto}
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                {t.home.hero.primaryCta}
              </a>
              <a
                href={`mailto:${t.common.email}`}
                className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {t.home.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900">{t.home.services.heading}</h2>
        <p className="mt-3 text-gray-700">{t.home.services.description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.home.services.items.map((item) => {
            const href = getLocalizedPath(locale, `/services/${item.slug}`);

            return (
              <article key={item.slug} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-700">{item.summary}</p>
                <Link className="mt-4 inline-block text-emerald-700 font-semibold hover:underline" href={href}>
                  {item.linkLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900">{t.home.process.heading}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.home.process.steps.map((step) => (
            <article key={step.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-700">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900">{t.home.about.heading}</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">{t.home.about.description}</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900">{t.home.faq.heading}</h2>
        <div className="mt-6 space-y-4">
          {t.home.faq.items.map((item) => (
            <article key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-14">
        <div className="rounded-2xl bg-emerald-600 p-8 text-white">
          <h2 className="text-3xl font-bold">{t.home.cta.heading}</h2>
          <p className="mt-3 text-emerald-50">{t.home.cta.description}</p>
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
