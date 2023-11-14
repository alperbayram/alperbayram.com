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
        </div>
        <div className="space-y-11 md:col-span-2">
          <h6 className="text-3xl font-extrabold text-gray-900">Hi, I am</h6>
          <h1 className="text-6xl font-extrabold text-emerald-500 ">
            Alper Bayram
          </h1>
          <p className="mt-4 text-2xl font-medium text-gray-900 ">
            I am a Software Developer with a strong focus in Web Development.
            <br />
            This is my personal website.
          </p>
        </div>
      </div>

      <div className="md:mt-10 mt-0 max-w-4xl">
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="font-bold text-3xl text-emerald-500 mb-6">
              About me
            </h2>
            <p className="text-lg leading-6 font-light text-gray-900">
              As a Software Engineer, I've developed web and mobile apps using
              TypeScript/JavaScript, React Native, Node.js, and HTML/CSS. I have
              worked on both the frontend (React, Nextjs) and the backend
              (Node.js), creating responsive and user-friendly interfaces, as
              well as robust and scalable APIs and databases.
            </p>
            <ul className=" text-lg leading-6 font-light text-gray-900">
              <li>I have a bachelors in Computer Engineering.</li>
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
                  I also have a blog page on Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="space-y-5">
          <div className="flex items-center justify-start text-gray-900">
            <h1 className="font-bold text-3xl text-emerald-500">
              Work Experience
            </h1>
          </div>
          <div className="space-y-2">
            <div className="flex justify-start space-x-8">
              <p className="font-medium text-gray-900 text-xl">
                Software Engineer
              </p>
              <a
                href="https://radbutter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 text-xl hover:text-emerald-500"
              >
                OneImaging ( Radbutter Health Inc. )
              </a>
            </div>
            <div className="flex justify-start space-x-3">
              <span className="text-sm text-gray-900 font-extralight">
                07/2022 - 10/2023
              </span>
              <span className="text-sm text-gray-900 font-extralight">
                Miami, Florida, United States - Remote
              </span>
            </div>
            <p className="font-normal text-gray-900 text-base">
              As a full stack software engineer at OneImaging, I contributed to
              the development of web applications for medical imaging and
              analysis, using Reactjs, Nextjs, React Native, Nodejs, MongoDB,
              and other technologies. I worked with a cross-functional team of
              engineers, designers, and researchers, and supported the delivery
              of high-quality, user-friendly, and scalable solutions.
            </p>

            <ul className="font-light text-gray-900 text-base list-disc list-inside">
              <li>
                Development of applications using modern frontend technologies
                React.js and Next.js.{" "}
              </li>
              <li>Conversion of Figma designs into React.js code. </li>
              <li>Development of frontend and backend applications.</li>
              <li>
                {" "}
                Building a RESTful API using Node.js and Express, and utilizing
                MongoDB as the database.{" "}
              </li>
              <li>
                {" "}
                Database design and implementation using MongoDB Compass.{" "}
              </li>
              <li>Utilizing Git for version control system.</li>
              <li>
                {" "}
                Development of mobile applications for Android and iOS using
                React Native.{" "}
              </li>
              <li>Designing the UI with Tailwind CSS and MaterialUI.</li>
              <li> Creating analytics tools using ApexCharts in React.js.</li>
              <li> Integration of Gmail API services. </li>
              <li>
                {" "}
                Utilizing tools such as Notion, VS Code, Postman, Figma, MongoDB
                Compass, Firebase, iOS simulator, Android simulator, Expo,
                Postmark, and Twilio.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex justify-start space-x-8">
              <p className="font-medium text-gray-900 text-xl">
                Software Engineer Intern
              </p>
              <a
                href="https://www.hotech.systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 text-xl hover:text-emerald-500"
              >
                HOTECH - Hotel Technology Ecosystem
              </a>
            </div>
            <div className="flex justify-start space-x-3">
              <span className="text-sm text-gray-900 font-extralight">
                02/2022 - 05/2022
              </span>
              <span className="text-sm text-gray-900 font-extralight">
                Antalya, Turkey - Remote
              </span>
            </div>
            <ul className="font-light text-gray-900 text-base list-disc list-inside">
              <li>Remote Work</li>
              <li>Having knowledge about Microservice Architecture</li>
              <li>Application development with Node.js</li>
              <li>Creating and using REST APIs</li>
              <li>
                Interacting with customers and resolving software issues via
                TeamViewer.
              </li>
              <li>Developing applications with Node.js serialport.</li>
              <li>Utilizing Git version control systems.</li>
              <li>Receiving training in occupational health and safety.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex justify-start space-x-10">
              <p className="font-medium text-gray-900 text-xl">
                Full Stack Engineer Intern
              </p>
              <a
                href="https://detaynet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 text-xl hover:text-emerald-500"
              >
                Detaynet
              </a>
            </div>
            <div className="flex justify-start space-x-3">
              <span className="text-sm text-gray-900 font-extralight">
                07/2020 - 12/2020
              </span>
              <span className="text-sm text-gray-900 font-extralight">
                Antalya, Turkey - Hybrid
              </span>
            </div>
            <ul className="font-light text-gray-900 text-base list-disc list-inside">
              <li>Hybrid Work</li>
              <li>Designing a responsive website.</li>
              <li>Using Cloudflare and transferring web pages.</li>
              <li>Connecting to customers via AnyDesk to resolve issues.</li>
              <li>Setting up web and mobile mail services.</li>
              <li>Installation and setup of operating systems.</li>
              <li>Assembling computer components.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 mt-10">
          <div className="flex items-center justify-start text-gray-900">
            <h1 className="font-bold text-3xl text-emerald-500">Education</h1>
          </div>
          <div className="space-y-2">
            <div className="flex justify-start space-x-10">
              <h1 className="font-extrabold text-gray-900 text-xl">
                Computer Engineering
              </h1>
              <a
                href="https://www.pau.edu.tr/bilgisayar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-gray-900 text-xl hover:text-emerald-500"
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
  );
}

export default HomePage;
