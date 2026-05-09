"use client";
import Link from "next/link";
import Shadow from "@/components/shadow/shadow";
import Video from "@/components/video/video";
import { Typography } from "@/components/typography/typography";
import clsx from "clsx";
import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className={clsx(
        // Posicionamiento y stacking
        "relative isolate z-20",
        // Espaciado y tamaño
        "h-auto w-full  md:max-w-7xl",
        // Margenes
        "px-4 lg:px-10 xl:px-0 md:mx-auto my-16 md:mb-50 md:mt-40",
        // Flexbox
        "flex md:flex-row flex-col justify-center items-center",
        // Scroll margin top
        "scroll-mt-[100px]",
      )}
    >
      <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto flex-2 flex flex-col gap-6 md:gap-10">
        <Typography
          as="h1"
          className="text-center md:text-left dark:text-black"
        >
          La carta digital que transforma tu restaurante
        </Typography>

        <Typography
          as="p"
          className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 text-center md:text-left"
        >
          Tus platos, siempre actualizados, accesibles al instante y con filtros
          inteligentes para alergias y preferencias.
        </Typography>

        <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-6">
          <Link
            href="https://qr.menuvision.es/backoffice/auth/register"
            className="hero-cta-primary"
          >
            ¡Empezar ahora!
          </Link>
          <Link href="#contact-us" className="hero-contact-badge">
            <Mail size={16} aria-hidden="true" />
            <span>¡Solicita tu demo!</span>
          </Link>
          <Link
            target="_blank"
            href={`https://qr.menuvision.es/${process.env.NEXT_PUBLIC_DEMO_QR}`}
          >
            Carta de ejemplo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="mt-6 w-full flex-1 md:mt-10">
        <Shadow />
        <Video src="/preview/test.webm" poster="/preview/poster.png" />
      </div>
    </section>
  );
}
