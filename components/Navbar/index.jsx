"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getCurrentLang(pathname) {
  return pathname.startsWith("/en") ? "en" : "tr";
}

function switchPath(pathname, targetLang) {
  const isEnPath = pathname.startsWith("/en");

  if (targetLang === "en") {
    if (isEnPath) {
      return pathname;
    }
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }

  if (!isEnPath) {
    return pathname;
  }

  const nextPath = pathname.replace(/^\/en/, "");
  return nextPath || "/";
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const currentLang = getCurrentLang(pathname);

  return (
    <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href={currentLang === "en" ? "/en" : "/"} className="text-sm font-semibold tracking-wide text-gray-900">
            ALPER BAYRAM
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={switchPath(pathname, "en")}
              className={`px-3 py-1 rounded font-medium transition ${
                currentLang === "en" ? "bg-emerald-500 text-white" : "text-black hover:bg-gray-100"
              }`}
            >
              EN
            </Link>
            <Link
              href={switchPath(pathname, "tr")}
              className={`px-3 py-1 rounded font-medium transition ${
                currentLang === "tr" ? "bg-emerald-500 text-white" : "text-black hover:bg-gray-100"
              }`}
            >
              TR
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
