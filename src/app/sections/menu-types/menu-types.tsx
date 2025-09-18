"use client";
import { Container } from "@/components/container/container";
import { AppScreenshot } from "@/components/icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import MenuTypesSlider from "./menu-types-slider";
import Video from "@/components/video/video";
import { Typography } from "@/components/typography/typography";

export default function MenuTypes() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isHovered, setIsHovered] = useState(false);

  if (!isDesktop) {
    return <MenuTypesSlider />;
  }

  return (
    <Container className="max-w-full" id="menu-styles">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Typography as="h2" className="text-4xl font-bold text-gray-900 mb-6">
            Crea Menús Únicos para tu Restaurante
          </Typography>
          <Typography
            as="h3"
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
          >
            Diseña experiencias gastronómicas memorables con nuestros tres tipos
            de menús digitales
          </Typography>
          <Typography
            as="p"
            className="text-lg text-gray-600  max-w-2xl mx-auto"
          >
            Desde el menú básico perfecto para comenzar, hasta experiencias
            inmersivas con fotos y videos que cautivarán a tus clientes y
            aumentarán tus ventas.
          </Typography>
        </div>

        <div
          className="flex justify-center items-center relative h-[800px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Móvil Izquierdo - Menú Básico */}

          <Video
            src="/preview/type/menu-basic.mp4"
            className={clsx(
              "absolute transition-all duration-500 ease-out z-10",
              isHovered ? "-translate-x-96" : "-translate-x-58 -rotate-15"
            )}
          />
          <Video src="/preview/type/menu-video.mp4" className="relative z-20" />
          <Video
            src="/preview/type/menu-image.mp4"
            className={clsx(
              "absolute transition-all duration-500 ease-out z-10",
              isHovered ? "translate-x-96" : "translate-x-58 rotate-15"
            )}
          />
        </div>
      </div>
    </Container>
  );
}
