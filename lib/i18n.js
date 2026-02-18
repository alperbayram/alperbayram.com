import en from "@/messages/en.json";
import tr from "@/messages/tr.json";

export const SUPPORTED_LOCALES = ["en", "tr"];

export function normalizeLocale(locale) {
  return locale === "en" ? "en" : "tr";
}

export function getDictionary(locale) {
  return normalizeLocale(locale) === "tr" ? tr : en;
}

export function getLocalizedPath(locale, path = "/") {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedLocale === "en") {
    return normalizedPath === "/" ? "/en" : `/en${normalizedPath}`;
  }

  return normalizedPath;
}
