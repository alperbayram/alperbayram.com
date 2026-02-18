import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-5xl mx-auto w-full px-4 pb-6 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200 pt-4">
        <ul className="grid gap-3 sm:grid-cols-3 text-sm font-medium text-gray-700">
          <li>
            <a href="https://www.linkedin.com/in/alper-bayram" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://alper-bayram.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Medium
            </a>
          </li>
          <li>
            <a href="https://github.com/alperbayram" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </li>
        </ul>

        <div className="mt-4 text-sm text-gray-700">
          <a href="mailto:contact@alperbayram.com" className="hover:underline">
            contact@alperbayram.com
          </a>
        </div>

        <p className="mt-3 text-xs text-gray-500">© {year} Alper Bayram</p>
      </div>
    </footer>
  );
}
