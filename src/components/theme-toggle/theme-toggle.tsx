"use client";

import { useTheme } from "@/stores/theme-provider";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("ThemeToggle");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-neutral-700"
      aria-label={theme === "dark" ? t("ariaToLight") : t("ariaToDark")}
    >
      {theme === "dark" ? (
        <SunIcon className="size-5 text-gray-300 hover:text-white transition-colors" />
      ) : (
        <MoonIcon className="size-5 text-gray-700 hover:text-black transition-colors" />
      )}
    </button>
  );
}
