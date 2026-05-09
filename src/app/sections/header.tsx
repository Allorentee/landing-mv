"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t("nav.backoffice"), href: "#backoffice" },
    { name: t("nav.menuTypes"), href: "#menu-styles" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.contact"), href: "#contact-us" },
    { name: t("nav.faq"), href: "#faqs" },
    { name: t("nav.team"), href: "#team" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 p-4 backdrop-blur">
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{t("brandSr")}</span>
            <Image
              src="/logo.svg"
              className="h-8 w-8"
              width={32}
              height={32}
              alt={t("logoAlt")}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-foreground/80 transition-colors hover:text-foreground"
          >
            <span className="sr-only">{t("openMobileNavSr")}</span>
            <Bars3Icon
              aria-hidden="true"
              className="size-6"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-foreground/90 transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="https://qr.menuvision.es/backoffice/auth/login"
            className="header-access-cta flex items-center text-sm/6"
          >
            {t("access")}
            <ArrowRightIcon className="size-4 ml-2" />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-4 sm:max-w-sm sm:ring-1 sm:ring-foreground/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{t("brandSr")}</span>
              <Image
                src="/logo.svg"
                className="h-8 w-8"
                width={32}
                height={32}
                alt={t("logoAlt")}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="sr-only">{t("closeMobileNavSr")}</span>
              <XMarkIcon
                aria-hidden="true"
                className="size-6"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground transition-colors hover:bg-foreground/8"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://qr.menuvision.es/backoffice/auth/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-foreground transition-colors hover:bg-foreground/8"
                >
                  {t("panelAccessMobile")}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
