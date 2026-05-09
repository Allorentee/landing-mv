"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale = locale === "es" ? "en" : "es";

  function handleToggle() {
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-label={t("languageSwitcherSr")}
      className="rounded-full px-2.5 py-1.5 text-sm font-semibold tabular-nums text-foreground/80 transition-colors hover:bg-gray-200 disabled:opacity-60 dark:hover:bg-neutral-700"
    >
      {targetLocale.toUpperCase()}
    </button>
  );
}
