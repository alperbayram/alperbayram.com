import Link from "next/link";
import React from "react";
export default function NotFound() {
  return (
    <main className="grid place-items-center bg-white px-6 py-44 sm:py-64 lg:px-8 pt-40">
      <div className="text-center">
        <p className="text-base font-semibold text-karayel-blue">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Not Found!
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Home Page 
          </Link>
        </div>
      </div>
    </main>
  );
}