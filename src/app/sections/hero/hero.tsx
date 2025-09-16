"use client";
import ContactUsBadge from "./components/contact-us-badge";
import Link from "next/link";
import Shadow from "@/components/shadow/shadow";
import Video from "@/components/video/video";
import { Typography } from "@/components/typography/typography";

export default function HeroSection() {
  return (
    <section className="relative isolate z-20 h-auto xl:my-8 max-w-5xl xl:max-w-7xl mx-auto min-h-[calc(100vh-276px)]">
      <div className="lg:flex lg:items-center lg:gap-x-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <Typography
            as="h1"
            className="text-center md:text-left dark:text-black"
          >
            La carta digital que transforma tu restaurante
          </Typography>
          <ContactUsBadge />
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 text-center md:text-left">
            Tus platos, siempre actualizados, accesibles al instante y con
            filtros inteligentes para alergias y preferencias.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center md:justify-start justify-center gap-6">
            <Link
              href="#contact-us"
              className="rounded-md! text-sm/6! transition-transform! duration-300! ease-in-out! bg-primary-dark! px-8! py-2.5! font-semibold! shadow-xs! hover:scale-105! hover:bg-primary-400! text-black! focus:scale-105! active:scale-100!"
            >
              Solicitar información
            </Link>
            <Link
              target="_blank"
              href={`https://qr.menuvision.es/${process.env.NEXT_PUBLIC_DEMO_QR}`}
              className="text-sm/6 px-8 font-semibold text-gray-900"
            >
              Probar DEMO <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-10 lg:shrink-0 lg:grow">
          <Shadow />
          <Video src="/preview/test.webm" poster="/preview/poster.png" />
        </div>
      </div>
    </section>
  );
}
