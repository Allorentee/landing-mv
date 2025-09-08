"use client";
import { useHandlePlay } from "@/hooks/use-handle-play";
import { useEffect, useRef } from "react";

export default function Video({
  src,
  poster,
}: {
  src: string;
  poster?: string;
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
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}
