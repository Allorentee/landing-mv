"use client";
import { AppScreenshot } from "@/components/icons";
import { Heading } from "@/components/typography/heading";
import { Highlight } from "@/components/animations/highlight";
import ContactUsBadge from "./components/contact-us-badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <Heading
              level={1}
              size="8xl"
              className="text-left dark:text-black text-6xl"
            >
              La
              <br />
              <span className="title">CARTA DIGITAL QR</span>
              <br />
              <Highlight>diferencial</Highlight>
            </Heading>
            <ContactUsBadge />
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Con esta carta digital, su restaurante podrá ofrecer la mejor
              experiencia posible, mostrando los platos del menu y dando la
              posibilidad de filtrar por alérgenos o preferencias.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#contact-us"
                className="rounded-md hover:scale-105 transition-all duration-300 bg-primary-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contacta con nosotros
              </Link>
              <Link
                target="_blank"
                href="https://qr.menuvision.es/cf6911fd-c795-4f59-a00a-99a9ff75ea67"
                className="text-sm/6 font-semibold text-gray-900"
              >
                DEMO <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <AppScreenshot>
              <video autoPlay loop muted src="/preview/preview.mp4" />
            </AppScreenshot>
          </div>
        </div>
      </div>
    </div>
  );
}
