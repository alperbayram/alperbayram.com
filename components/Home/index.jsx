import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-8 mb-20">
      <div className="py-20 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
        <div className="grid justify-items-center md:justify-start md:col-span-1 ">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40  md:w-48 md:h-48 mb-10 md:mb-0">
              <img
                src="https://pbs.twimg.com/profile_images/1704479419476115456/XF3muQ_C_400x400.jpg"
                alt="alperbayram"
                className="rounded-full max-w-full h-auto"
              />
            </div>
            <div className="md:flex flex-col items-center hidden">
              <p className="text-lg font-medium text-gray-900">Alper Bayram</p>
              <span>Software Engineer</span>
              <a
                href="https://www.linkedin.com/in/alper-bayram/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-28 hover:fill-white hover:text-white rounded-full hover:bg-[#0077B5] flex justify-center items-center space-x-2"
              >
                <span className="grid content-center">
                  {/* <svg
                    viewBox="0 0 1024 1024"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="h-5 w-5"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
                  </svg>
                </span>
                {/* <span className="grid items-center font-bold text-base">
                  Say Hi!
                </span> */}
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-11 md:col-span-2">
          <h6 className="text-3xl font-extrabold text-gray-900">Hi, I am</h6>
          <h1 className="text-6xl font-extrabold text-emerald-500 ">
            Alper Bayram
          </h1>
          <p className="mt-4 text-2xl font-medium text-gray-900 ">
            I am a Software Developer with a strong focus in Web & Mobile
            Development.
            <br />
            This is my personal website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
