import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-24">
      <p className="text-sm font-semibold text-gray-400">404</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Page not found</h1>
      <p className="mt-4 text-base leading-7 text-gray-700">
        The page you are looking for doesn&apos;t exist.{" "}
        <Link
          href="/"
          className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
        >
          Go home
        </Link>
        .
      </p>
    </div>
  );
}
