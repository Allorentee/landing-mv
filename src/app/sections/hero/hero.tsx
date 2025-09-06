"use client";
import { AppScreenshot } from "@/components/icons";
import { Heading } from "@/components/typography/heading";
import { Highlight } from "@/components/animations/highlight";
import ContactUsBadge from "./components/contact-us-badge";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import RotateCard from "@/components/animations/rotate-card";
import { Container } from "@/components/container/container";
import Shadow from "@/components/shadow/shadow";

export default function HeroSection() {
  return (
    <section className="relative h-auto md:h-screen isolate pt-24 md:pt-28 max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="text-center md:text-left dark:text-black">
            La carta digital que transforma tu restaurante
          </h1>
          <ContactUsBadge />
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 text-center md:text-left">
            Tus platos, siempre actualizados, accesibles al instante y con
            filtros inteligentes para alergias y preferencias.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center md:justify-start justify-center gap-6">
            <Link
              href="#contact-us"
              className="rounded-md text-sm!/6 hover:scale-105 transition-all duration-300 bg-primary-dark px-3.5 py-2.5  font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Solicitar información
            </Link>
            <Link
              target="_blank"
              href={`https://qr.menuvision.es/${process.env.NEXT_PUBLIC_DEMO_QR}`}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Probar DEMO <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-10 lg:shrink-0 lg:grow">
          <Shadow />
          <AppScreenshot>
            <video autoPlay loop muted src="/preview/test.webm" />
          </AppScreenshot>
        </div>
      </div>
    </section>
  );
}
