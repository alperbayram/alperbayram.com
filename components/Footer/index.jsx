"use client";

import React from "react";
import { usePathname } from "next/navigation";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/alperbayram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alper-bayram" },
  { label: "Medium", href: "https://alper-bayram.medium.com/" },
  { label: "Email", href: "mailto:contact@alperbayram.com" },
];

export default function Footer() {
  const pathname = usePathname() || "/";
  const lang = pathname.startsWith("/en") ? "en" : "tr";
  const year = new Date().getFullYear();

  const links = [
    ...SOCIAL_LINKS,
    { label: "CV", href: `/cv/alper-bayram-cv-${lang}.pdf`, newTab: true },
  ];

  return (
    <footer className="mx-auto w-full max-w-2xl px-4 pb-12">
      <div className="border-t border-gray-100 pt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
          {links.map((link) => {
            const newTab = link.newTab || link.href.startsWith("http");

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={newTab ? "_blank" : undefined}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  className="hover:text-gray-900"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-xs text-gray-400">© {year} Alper Bayram</p>
      </div>
    </footer>
  );
}
