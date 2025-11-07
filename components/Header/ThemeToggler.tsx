import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleThemeToggle() {
    // Use resolvedTheme to get the actual current theme (including system preference)
    const currentTheme = resolvedTheme || theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        aria-label="theme toggler"
        className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black lg:static dark:text-white"
      >
        <div className="h-6 w-6" />
      </button>
    );
  }

  return (
    <button
      aria-label="theme toggler"
      onClick={handleThemeToggle}
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black lg:static dark:text-white"
    >
      <img
        src="/images/icon/icon-moon.svg"
        alt="logo"
        className="dark:hidden"
      />

      <img
        src="/images/icon/icon-sun.svg"
        alt="logo"
        className="hidden dark:block"
      />
    </button>
  );
}
