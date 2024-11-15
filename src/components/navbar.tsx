"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "./searchbar";
import { roboto } from "@/app/utils/font_utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-full justify-between items-center">
      <div>
        <Link href="/">
          <Image
            aria-hidden
            src="/rmovies_logo.svg"
            alt="Globe icon"
            width={180}
            height={100}
          />
        </Link>
      </div>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-md focus:outline-none"
      >
        {/* Icon (You can use an SVG or any icon library) */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-custombg text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4 flex justify-between items-center">
          <Link href="/">
            <Image
              aria-hidden
              src="/rmovies_logo.svg"
              alt="Globe icon"
              width={180}
              height={100}
            />
          </Link>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#" className={roboto.className}>
            Movies
          </a>
          <a href="#" className={roboto.className}>
            Anime
          </a>
          <a href="#" className={roboto.className}>
            Series
          </a>
          <a href="#" className={roboto.className}>
            Shows
          </a>
        </nav>
      </div>

      <ul className="hidden md:flex flex-row gap-10 items-center">
        <li>
          <Searchbar />
        </li>

        <li>
          <Link className={roboto.className} href="/browse">
            Movies
          </Link>
        </li>
        <li>
          <Link className={roboto.className} href="/browse">
            Anime
          </Link>
        </li>
        <li>
          <Link className={roboto.className} href="/browse">
            Series
          </Link>
        </li>
        <li>
          <Link className={roboto.className} href="/browse">
            Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
