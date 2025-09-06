"use client";
import { Container } from "@/components/container/container";
import { AppScreenshot } from "@/components/icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import MenuTypesSlider from "./menu-types-slider";

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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Crea Menús Únicos para tu Restaurante
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseña experiencias gastronómicas memorables con nuestros tres tipos
            de menús digitales
          </p>
        </div>

        <div
          className="flex justify-center items-center relative h-[800px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Móvil Izquierdo - Menú Básico */}
          <AppScreenshot
            className={clsx(
              "absolute transition-all duration-500 ease-out z-10",
              isHovered ? "-translate-x-96" : "-translate-x-58 -rotate-15"
            )}
          >
            <video src="/preview/type/type-basic.mov" autoPlay loop muted />
          </AppScreenshot>
          <AppScreenshot className="relative z-20">
            <video src="/preview/type/type-video.mov" autoPlay loop muted />
          </AppScreenshot>
          <AppScreenshot
            className={clsx(
              "absolute transition-all duration-500 ease-out z-10",
              isHovered ? "translate-x-96" : "translate-x-58 rotate-15"
            )}
          >
            <Image src="/preview/type/type-photo.png" alt="Menú Básico" fill />
          </AppScreenshot>
        </div>

        <div
          className={"text-center mt-16 transition-all duration-500 ease-out"}
        >
          <h3 className="text-2xl font-semibold text-gray-900  mb-4">
            Tres Tipos de Menú para Cada Necesidad
          </h3>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto">
            Desde el menú básico perfecto para comenzar, hasta experiencias
            inmersivas con fotos y videos que cautivarán a tus clientes y
            aumentarán tus ventas.
          </p>
        </div>
      </div>
    </Container>
  );
}
