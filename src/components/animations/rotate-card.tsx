"use client";
import { useEffect, useState, useRef } from "react";

type RotateCardProps = {
  children: React.ReactNode;
  height: number;
};

export default function RotateCard({ children }: RotateCardProps) {
  const [rotationX, setRotationX] = useState(20);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calcular la posición relativa del elemento en la ventana
      const elementCenter = elementTop + elementHeight / 2;
      const windowCenter = windowHeight / 2;

      // Si el elemento está en el centro o por debajo del centro, mantenerlo recto
      if (elementCenter <= windowCenter) {
        setRotationX(0);
        return;
      }

      // Solo aplicar rotación cuando el elemento está por encima del centro
      const distanceFromCenter = elementCenter - windowCenter;
      const maxDistance = windowHeight / 2 + elementHeight / 2;

      // Normalizar la distancia (0 = en el centro, 1 = completamente fuera)
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

      // Calcular la rotación: máxima inclinación cuando está fuera de vista
      const maxRotation = 20;
      const rotation = normalizedDistance * maxRotation;

      setRotationX(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`lg:shrink-0 lg:grow h-auto flex items-start justify-center`}
    >
      <div
        className="transition-transform duration-100 ease-out flex flex-col items-start justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${rotationX}deg) translateZ(0)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
