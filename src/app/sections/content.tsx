"use client";

import { useRef, useState } from "react";
import { AppScreenshot } from "@/components/icons";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    type: "img",
    src: "/preview/details.webp",
    alt: "Vista de la carta digital",
  },
  {
    type: "img",
    src: "/preview/filters.webp",
    alt: "Vista de los filtros de la carta digital",
  },
  {
    type: "img",
    src: "/preview/video.webp",
    alt: "Vista previa en vídeo de la carta digital",
  },
];

export default function ContentSection() {
  const movilRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Refs para los textos a animar
  const mainBlockRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  const textRefs: any[] = [mainBlockRef, p1Ref, ulRef, p2Ref, h2Ref, p3Ref];

  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    if (!sectionRef.current) return;

    let triggers: ScrollTrigger[] = [];

    // Definimos los puntos de cambio de imagen
    const steps = [0, 0.33, 0.66, 1];

    steps.forEach((step, idx) => {
      if (idx === steps.length - 1) return; // No hay trigger para el último

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${step * (sectionRef.current?.offsetHeight ?? 0)} center`,
        end: `top+=${
          steps[idx + 1] * (sectionRef.current?.offsetHeight ?? 0)
        } center`,
        onEnter: () => setCurrentIndex(idx),
        onEnterBack: () => setCurrentIndex(idx),
        markers: false, // Activa las líneas de debug de ScrollTrigger
      });
      triggers.push(trigger);
    });

    // Animación de los textos al hacer scroll
    textRefs.forEach((ref, i) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            markers: false, // Activa las líneas de debug para cada animación de texto
          },
        }
      );
    });

    return () => {
      triggers.forEach((t) => t.kill());
      textRefs.forEach((ref) => {
        if (ref.current) ScrollTrigger.getById(ref.current.id)?.kill();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={sectionRef}
      id="content"
      className="relative isolate z-20 max-w-5xl xl:max-w-7xl mx-auto overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg" ref={textRefs[0]}>
            <p className="text-base/7 font-semibold text-primary">
              Optimiza la experiencia de tus clientes
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              La carta digital más completa y fácil de usar
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Con nuestra carta digital, tus clientes podrán consultar el menú,
              filtrar por alérgenos y preferencias, y descubrir los platos
              recomendados de forma rápida y visual. Mejora la gestión y la
              imagen de tu restaurante con tecnología moderna y accesible.
            </p>
          </div>
        </div>
        <div
          ref={movilRef}
          className="-mt-12  p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <AppScreenshot>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={366}
              height={729}
              className="transition-all duration-500"
            />
          </AppScreenshot>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
            <p ref={textRefs[1]}>
              Nuestra plataforma está diseñada para que puedas gestionar tu
              carta digital de manera sencilla y eficiente. Haz cambios en
              tiempo real, destaca platos, añade imágenes y mantén siempre tu
              menú actualizado para tus clientes.
            </p>
            <ul
              ref={textRefs[2]}
              role="list"
              className="mt-8 space-y-8 text-gray-600"
            >
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-primary"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-primary">
                    Actualización instantánea.
                  </strong>{" "}
                  Modifica tu carta y los cambios se reflejarán al instante en
                  todos los dispositivos de tus clientes.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-primary"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-primary">
                    Seguridad y privacidad.
                  </strong>
                  Tus datos y los de tus clientes están protegidos con los más
                  altos estándares de seguridad.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-primary"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-primary">
                    Copias de seguridad automáticas.
                  </strong>
                  No pierdas nunca la información de tu carta gracias a nuestras
                  copias de seguridad diarias.
                </span>
              </li>
            </ul>
            <p className="mt-8" ref={textRefs[3]}>
              Ofrece una experiencia moderna y profesional a tus clientes,
              reduce errores y ahorra tiempo en la gestión diaria de tu
              restaurante. Nuestra carta digital es la herramienta perfecta para
              destacar en el sector de la hostelería.
            </p>
            <h2
              className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
              ref={textRefs[4]}
            >
              Sin complicaciones técnicas
            </h2>
            <p className="mt-6" ref={textRefs[5]}>
              No necesitas servidores propios ni conocimientos técnicos
              avanzados. Nosotros nos encargamos de todo para que puedas
              centrarte en lo más importante: tu negocio y tus clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
