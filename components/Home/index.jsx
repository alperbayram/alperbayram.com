"use client";

import React from "react";

const translations = {
  en: {
    greeting: "Hi, I am",
    name: "Alper Bayram",
    title: "Software Engineer",
    description:
      "I am a Software Engineer with a strong focus in Web & Mobile Development.",
    websiteNote: "You can reach me through the information here.",
    sayHi: "Say Hi!",
  },
  tr: {
    greeting: "Merhaba, ben",
    name: "Alper Bayram",
    title: "Yazılım Mühendisi",
    description:
      "Web ve Mobil Geliştirme konularında uzmanlaşmış bir Yazılım Mühendisiyim.",
    websiteNote: "Buradaki bilgilerden bana ulaşabilirsin.",
    sayHi: "Merhaba De!",
  },
};

function HomePage({ lang = "en" }) {
  const t = translations[lang] || translations["en"];

  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-8">
      <div className=" md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
        <div className="grid justify-items-center md:justify-start md:col-span-1">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 md:w-48 md:h-48 mb-10 md:mb-0">
              <img
                src="/pp.jpeg"
                alt="alperbayram"
                className="rounded-full max-w-full h-auto"
              />
            </div>
            <div className="md:flex flex-col items-center hidden">
              <p className="text-lg font-medium text-gray-900">{t.name}</p>
              <span>{t.title}</span>
              <a
                href="mailto:contact@alperbayram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-28 hover:fill-white hover:text-white rounded-full hover:bg-red-500 flex justify-center items-center space-x-2"
              >
                <span className="grid content-center">{t.sayHi}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-11 md:col-span-2">
          <h6 className="text-3xl font-extrabold text-gray-900">
            {t.greeting}
          </h6>
          <h1 className="text-6xl font-extrabold text-emerald-500">{t.name}</h1>
          <p className="mt-4 text-2xl font-medium text-gray-900">
            {t.description}
            <br />
            {t.websiteNote}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
