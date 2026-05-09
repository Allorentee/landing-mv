"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export function DocumentLangEffect() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);

  return null;
}
