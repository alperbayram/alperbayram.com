import React from "react";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-8">
      <h2 className="text-6xl p-0 font-extrabold tracking-tight text-gray-900 mt-5">
        About
      </h2>
      <div className="mt-10 max-w-3xl">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div className="grid justify-items-center md:justify-start md:col-span-1 ">
            <div className="flex flex-col items-center ">
              <div className="w-48 h-48 sm:w-48">
                <img
                  src="https://avatars.githubusercontent.com/u/43719324?v=4"
                  alt="alperbayram"
                  className="rounded-full md:rounded-md max-w-full h-auto"
                />
              </div>
              <p className="text-lg font-medium text-gray-900">Alper Bayram</p>
              <span>Software Developer</span>
              <a
                href="https://twitter.com/alprbayram"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-28 hover:fill-white hover:text-white rounded-full hover:bg-[#1da1f2] flex justify-center space-x-2"
              >
                <span className="grid content-center">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                  </svg>
                </span>
                <span className="grid items-center font-bold text-base">
                  Say Hi!
                </span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <h2 className="font-bold text-3xl text-emerald-500">
              About this site
            </h2>
            <p className=" text-lg leading-6 font-light text-gray-900">
              This site is my portfolio, here is my articles and projects. All
              my links are available on this site. Made with React and
              Tailwindcss.
            </p>
            <h2 className="font-bold text-2xl text-emerald-500">About me</h2>
            <ul className=" text-lg leading-6 font-light text-gray-900">
              <li>
                I am a software developer with a strong focus on Web
                Development. I have a bachelors in Computer Engineering. I enjoy
                working with a design focus. I review, translate and contribute
                to open source projects.
              </li>
              <li>
                In my spare time, I am interested in and learning NLP in the
                field of Artificial intelligence.
              </li>
              <li>I like to research and learn new things.</li>

              <li>
                You can contact me via{" "}
                <a
                  href="mailto:alperbayrm@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition duration-300 ease-in hover:bg-emerald-500 hover:font-medium"
                >
                  email
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-3 w-3 inline-block fill-current"
                  >
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
                  </svg>
                </a>{" "}
                or social media.
              </li>
              <li>
                <a
                  href="https://alper-bayram.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-emerald-500 hover:underline-offset-4 hover:font-medium hover:decoration-4"
                >
                  I also blog on Medium
                </a>
              </li>
            </ul>
            <div className="space-y-1">
              <div className="flex items-center justify-start text-gray-900">
                <h1 className="font-bold text-2xl text-emerald-500">Skills</h1>
              </div>
              <div className="space-y-2">
                <h2 className="font-medium text-lg text-gray-700">
                  Programming Languages
                </h2>
                <p className="font-extralight">Javascript, HTML, CSS,</p>
                <h2 className="font-medium text-lg text-gray-700">
                  Libraries and Frameworks
                </h2>
                <p className="font-extralight">
                  React, Nodejs, Expressjs, Threejs, TailwindCSS, Bootstrap
                </p>
                <h2 className="font-medium text-lg text-gray-700">Database</h2>
                <p className="font-extralight">SQL, MongoDB, PostgeSQL</p>
                <h2 className="font-medium text-lg text-gray-700">
                  Tools and Platforms
                </h2>
                <p className="font-extralight">
                  Git, Heroku, Vercel, WordPress, Docker, Jupyter
                </p>
                <h2 className="font-medium text-lg text-gray-700">Design</h2>
                <p className="font-extralight">
                  Figma, AdobeXD, AdobePhotoshop
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-start text-gray-900">
                <h1 className="font-bold text-2xl text-emerald-500">
                  Work Experience
                </h1>
              </div>
              <div className="space-y-1">
                <div className="flex justify-start space-x-8">
                  <p className="font-medium text-gray-900 text-base">
                    Software Engineer
                  </p>
                  <a
                    href="https://radbutter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 text-base hover:text-emerald-500"
                  >
                    RadButter Health
                  </a>
                </div>
                <div className="flex justify-start">
                  <span className="text-sm text-gray-900 font-extralight">
                    07/2022 - present
                  </span>
                </div>
                <ul className="font-light text-gray-900 text-base list-disc list-inside">
                  <li>Remote Work</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="flex justify-start space-x-8">
                  <p className="font-medium text-gray-900 text-base">
                    Software Engineer Intern
                  </p>
                  <a
                    href="https://www.hotech.systems/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 text-base hover:text-emerald-500"
                  >
                    HOTECH - Hotel Technology Ecosystem
                  </a>
                </div>
                <div className="flex justify-start">
                  <span className="text-sm text-gray-900 font-extralight">
                    02/2022 - 05/2022
                  </span>
                </div>
                <ul className="font-light text-gray-900 text-base list-disc list-inside">
                  <li>Remote Work</li>
                  <li>I was on the backend-microservices team.</li>
                  <li>Introduction to microservice architecture.</li>
                  <li>Backend services with Nodejs.</li>
                  <li>Using Rest API in the project.</li>
                  <li>Crud operations with Postman.</li>
                  <li>Remote connection to customers with TeamViewer.</li>
                  <li>I did serial port operations with Nodejs.</li>
                  <li>Git version control and operations.</li>
                  <li>Use of task management.</li>
                  <li>I received occupational health and safety training.</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="flex justify-start space-x-10">
                  <p className="font-medium text-gray-900 text-base">
                    Full Stack Engineer Intern
                  </p>
                  <a
                    href="https://detaynet.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 text-base hover:text-emerald-500"
                  >
                    Detaynet
                  </a>
                </div>
                <div className="flex justify-start space-x-10">
                  <span className="text-sm text-gray-900 font-extralight">
                    07/2020 - 12/2020
                  </span>
                </div>
                <ul className="font-light text-gray-900 text-base list-disc list-inside">
                  <li>Hybrid Work</li>
                  <li>Responsive web page design.</li>
                  <li>Remote connection to customers with AnyDesk.</li>
                  <li>Web and mobile setup of mail accounts.</li>
                  <li>Operating system installation.</li>
                  <li>Computer hardware assembly and completion.</li>
                  <li>Using linux ubuntu as operating system.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-start text-gray-900">
                <h1 className="font-bold text-2xl text-emerald-500">
                  Education
                </h1>
              </div>
              <div className="space-y-1">
                <div className="flex justify-start space-x-10">
                  <h1 className="font-extrabold text-gray-900 text-base">
                    Computer Engineering
                  </h1>
                  <a
                    href="https://www.pau.edu.tr/bilgisayar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-gray-900 text-base hover:text-emerald-500"
                  >
                    Pamukkale University
                  </a>
                </div>
                <div className="flex justify-start space-x-10">
                  <span className="text-sm text-gray-900 font-bold">
                    2018 - 2022
                  </span>
                  <span className="text-sm text-gray-900 font-bold">
                    Faculty Of Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
