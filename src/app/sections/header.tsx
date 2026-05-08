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

const navigation = [
  { name: "Panel de control", href: "#backoffice" },
  { name: "Tipos de menú", href: "#menu-styles" },
  { name: "Precios", href: "#pricing" },
  { name: "Contacto", href: "#contact-us" },
  { name: "FAQ", href: "#faqs" },
  { name: "Equipo", href: "#team" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 p-4 backdrop-blur">
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="logo.svg"
              className="h-8 w-8"
              width={32}
              height={32}
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-foreground/80 transition-colors hover:text-foreground"
          >
            <span className="sr-only">Open main menu</span>
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <a
            href="https://qr.menuvision.es/backoffice/auth/login"
            className="header-access-cta text-sm/6"
          >
            Acceder
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/logo.svg"
                className="h-8 w-8"
                width={32}
                height={32}
                alt="Logo"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="sr-only">Close menu</span>
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
                  Acceso al panel de control
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
