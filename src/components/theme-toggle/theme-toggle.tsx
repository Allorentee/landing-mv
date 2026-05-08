"use client";

import { useTheme } from "@/stores/theme-provider";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-neutral-700"
      aria-label={theme === "dark" ? "Cambiar a modo día" : "Cambiar a modo noche"}
    >
      {theme === "dark" ? (
        <SunIcon className="size-5 text-gray-300 hover:text-white transition-colors" />
      ) : (
        <MoonIcon className="size-5 text-gray-700 hover:text-black transition-colors" />
      )}
    </button>
  );
}
