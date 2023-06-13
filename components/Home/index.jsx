import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-8 mb-20">
      <div className="py-20 space-y-8">
        <h6 className="text-3xl font-extrabold text-gray-900">Hi, I am</h6>
        <h1 className="text-6xl font-extrabold text-emerald-500 ">
          Alper Bayram
        </h1>
        <p className="mt-4 text-2xl font-medium text-gray-900 ">
          I am a software developer with a strong focus in Web Development.
          <br />
          This is my personal website.
        </p>
        <p>
          <Link
            href="/about"
            className="text-base font-bold  text-gray-700 hover:text-gray-900"
          >
            More about me
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
