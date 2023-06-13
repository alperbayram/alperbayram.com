"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-center h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? "x" : "w"}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                <div className="hidden sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-white"
                            : "text-lg text-black ",
                          " py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <a
                      href="https://alper-bayram.medium.com/"
                      target={"_blank"}
                      className="py-2 font-medium text-lg text-black"
                    >
                      Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-300 text-white" : "text-black",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://alper-bayram.medium.com/"
                target={"_blank"}
                className="block px-3 py-2 rounded-md text-base font-medium text-black"
              >
                Blog
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
