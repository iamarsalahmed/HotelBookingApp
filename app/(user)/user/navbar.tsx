"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Router } from "next/router";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUrl = usePathname();
  const links = [
    { name: "Home", link: "/user" },
    { name: "Hotels", link: "/hotels" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  console.log(currentUrl)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/user"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="http://localhost:3000/logo_single.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HotelBooking
          </span>
        </Link>

        {/* Search & Menu Toggle for mobile */}
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((e, idx) => (
              <li key={idx}>
                <Link
                  href={e.link}
                  className={cn(
                    "block text-black bg-blue-700 rounded md:bg-transparent ", currentUrl == e.link && 'md:text-blue-700 md:p-0 md:dark:text-blue-500'
                  )}
                  aria-current="page"
                >
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
