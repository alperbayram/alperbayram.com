"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  const [location, setLocation] = useState("");
  const webLocation = usePathname();
  useEffect(() => {
    setLocation(webLocation);
  }, [webLocation]);

  const year = new Date().getFullYear();

  return (
    <footer
      className={classNames(
        "max-w-5xl mx-auto px-2 pb-4 sm:px-6 lg:px-8 bg-transparent mt-5 sm:mt-40"
      )}
    >
      <div className="max-w-5xl">
        <hr className="pb-4" />
        <div className="text-base font-medium">
          <ul className="grid gap-y-2 gap-x-6 grid-cols-3 xl:gap-x-8 justify-items-center px-6">
            <li className="mr-3">
              <a
                href="https://www.linkedin.com/in/alper-bayram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black flex gap-2"
              >
                Linkedln{" "}
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://alper-bayram.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black flex gap-2"
              >
                Medium{" "}
              </a>
            </li>

            <li className="mr-3">
              <a
                href="https://github.com/alperbayram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black flex gap-2"
              >
                Github{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center pt-2">
          <a
            href="mailto:contact@alperbayram.com"
            className="text-black flex gap-2"
          >
            contact@alperbayram.com
          </a>
        </div>
      </div>
    </footer>
  );
}
