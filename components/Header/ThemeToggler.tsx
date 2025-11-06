import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
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
