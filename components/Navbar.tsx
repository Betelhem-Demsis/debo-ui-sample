"use client";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Disclosure as="nav" className="relative">
      {({ open }) => (
        <>
          <div className="h-16 flex items-center justify-between lg:px-4 fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-sm shadow-slate-50/10 z-50 ">
            <div>
              <Link href="/">
                <img
                  src="/debologo.png"
                  alt="Logo"
                  className="h-14 lg:px-7 sm:px-5 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="hidden nav-bar md:flex items-center space-x-9 p-5">
              <div className=" space-x-8 flex">
                {["HOME", "ABOUT", "SERVICE", "BLOG", "CONTACT"].map((item) => (
                  <Link
                    key={item}
                    href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    aria-label={`${item} page`}
                    className={`link text-zinc-400 hover:text-gray-300 font-bold transition-colors duration-300 ${
                      currentPath === (item === "HOME" ? "/" : `/${item.toLowerCase()}`)
                        ? "border-b-2 border-gray-600"
                        : ""
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/20 text-white placeholder-gray-400 px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800 shadow-sm transition-all duration-300"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div className="md:hidden">
              <DisclosureButton
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>
          <DisclosurePanel
            className={`md:hidden fixed top-20 right-0 w-64 h-screen bg-white/10 backdrop-blur-lg shadow-lg z-40 transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="px-2 pt-3 pb-3 space-y-1">
              {["HOME", "ABOUT", "SERVICE", "BLOG", "GALLERY", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-800 hover:bg-gray-50 transition-colors duration-300 ${
                    currentPath === (item === "HOME" ? "/" : `/${item.toLowerCase()}`)
                      ? "bg-gray-100 text-red-800"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white/20 text-gray-700 placeholder-gray-500 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 transition-all duration-300"
                  />
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
