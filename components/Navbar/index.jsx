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
    <nav className="mx-auto w-full max-w-2xl px-4 pt-8">
      <div className="flex items-center justify-between">
        <Link href={currentLang === "en" ? "/en" : "/"} className="text-sm font-medium text-gray-900">
          {currentLang === "en" ? "" : ""}
        </Link>

        <div className="flex items-center gap-3 text-sm">
          <Link
            href={switchPath(pathname, "en")}
            className={currentLang === "en" ? "font-semibold text-gray-900" : "text-gray-400 hover:text-gray-900"}
          >
            EN
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href={switchPath(pathname, "tr")}
            className={currentLang === "tr" ? "font-semibold text-gray-900" : "text-gray-400 hover:text-gray-900"}
          >
            TR
          </Link>
        </div>
      </div>
    </nav>
  );
}
