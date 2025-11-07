"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  function handleStickyMenu() {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  }

  function addStickyMenuEventListener() {
    window.addEventListener("scroll", handleStickyMenu);
  }
  useEffect(addStickyMenuEventListener, []);

  return (
    <header
      className={`fixed top-0 left-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white py-4! shadow-sm transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="max-w-c-1390 relative mx-auto flex flex-col items-center justify-between px-4 md:px-8 lg:flex-row 2xl:px-0">
        {/* Logo and Title - Left Side */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo/logo.svg" alt="logo" className="h-9" />
          <h1 className="text-2xl font-bold text-black lg:text-4xl dark:text-white">
            USB Tree
          </h1>
        </Link>

        {/* Links - Right Side */}
        <div className="flex items-center gap-6">
          <ThemeToggler />

          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/AOzmond/usb-tree"
            className=""
          >
            <img
              src="/images/icon/github.svg"
              alt="github logo"
              className="img-svg-link dark:invert"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

// w-full delay-300
