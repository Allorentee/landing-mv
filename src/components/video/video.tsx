"use client";
import { useHandlePlay } from "@/hooks/use-handle-play";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export default function Video({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const { videoRef } = useHandlePlay({ productId: src });

  return (
    <video
      src={src}
      autoPlay
      preload="yes"
      loop
      muted
      playsInline
      controls={false}
      ref={videoRef}
      // El poster puede ayudar a forzar el renderizado inicial en algunos navegadores
      poster={poster}
      // El problema puede ser que tanto el style como la clase están sobrescribiendo la sombra.
      // Además, la clase 'shadow-xl' de Tailwind puede ser menos visible en fondos oscuros.
      // Recomiendo dejar solo el style para la sombra personalizada y eliminar la sombra de Tailwind.
      className={clsx(
        "block mx-auto rounded-[30px] border-[6px] border-gray-300 bg-black aspect-[9/19.5] max-w-[320px] min-w-[220px]",
        className
      )}
      style={{
        display: "block",
        boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.268)", // Aumenta la opacidad y el spread para que se note más
        borderRadius: "30px",
        border: "1px solid #d1d5db",
        background: "#000",
        aspectRatio: "9/19.5",
        maxWidth: "320px",
        minWidth: "220px",
      }}
    />
  );
}
