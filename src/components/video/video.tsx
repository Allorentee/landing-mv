"use client";
import { useEffect, useRef } from "react";

export default function Video({ src }: { src: string }) {
  // Referencia al video para manipulación directa
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // En iOS, a veces es necesario intentar reproducir el video manualmente
    // después de que el componente se monta, aunque esté muted y autoplay.
    // Esto ayuda a forzar la reproducción automática en más casos.
    const video = videoRef.current;
    if (video) {
      // iOS requiere muted, playsInline y autoplay para reproducir automáticamente
      // Intentamos reproducir el video por si acaso
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // En iOS, si el usuario no ha interactuado, puede fallar igual
          // Pero con muted, playsInline y autoplay suele funcionar
          // Puedes mostrar un mensaje o ignorar el error
          // console.log({error});
        });
      }
    }
  }, []);
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      ref={videoRef}
    />
  );
}
