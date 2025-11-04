"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed top-0 left-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white py-4! shadow-sm transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="max-w-c-1390 relative mx-auto flex items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Logo and Title - Left Side */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo/logo-dark.svg" alt="logo" />
          <h1 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
            USB Tree
          </h1>
        </Link>

        {/* Links - Right Side */}
        <div className="flex items-center gap-6">
          <ThemeToggler />

          <Link
            href="https://github.com/NextJSTemplates/solid-nextjs"
            className="text-regular hover:text-primary text-waterloo font-medium"
          >
            GitHub Repo 🌟
          </Link>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
