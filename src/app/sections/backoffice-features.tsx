"use client";

import { Lock, ClockArrowUp, Sparkles, Cog, ShoppingCart } from "lucide-react";
import RotateCard from "@/components/animations/rotate-card";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/container/container";
import Shadow from "@/components/shadow/shadow";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Typography } from "@/components/typography/typography";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const BACKOFFICE_FEATURES: Feature[] = [
  {
    id: "gestionar-carta",
    title: "Gestionar la carta",
    description:
      "Modifique precios, unidades, alérgenos, disponibilidad, sugerencias del chef y muchas más opciones",
    icon: Lock,
  },
  {
    id: "gestionar-videos",
    title: "Gestionar los videos",
    description:
      "Modifique los videos de los platos para que sean más atractivos",
    icon: Lock,
  },
  {
    id: "gestionar-comentarios",
    title: "Gestionar los comentarios",
    description: "Lea los comentarios de los clientes y responda a sus dudas",
    icon: ClockArrowUp,
  },
  {
    id: "gestionar-sugerencias",
    title: "Gestionar las sugerencias",
    description: "Lea las sugerencias de los clientes y responda a sus dudas",
    icon: Sparkles,
  },
  {
    id: "gestionar-estadisticas",
    title: "Gestionar las estadísticas",
    description: "Acceda a las estadísticas de la carta y de los clientes",
    icon: Cog,
  },
  {
    id: "gestionar-notificaciones",
    title: "Gestionar las notificaciones",
    description: "Reciba notificaciones de los clientes y responda a sus dudas",
    icon: ShoppingCart,
  },
];

interface BackofficeFeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const BackofficeFeaturesSection: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Container id="backoffice" className="flex flex-col gap-8">
      <div className="mx-auto text-center flex flex-col gap-4">
        <Typography
          as="h2"
          className="text-base/7 font-semibold text-primary-400"
        >
          Todo lo que necesitas para gestionar tu carta
        </Typography>
        <Typography
          as="h3"
          className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl sm:text-balance"
        >
          Un panel de gestión para actualizar la carta en tiempo real
        </Typography>
        <Typography className="text-lg/8 muted">
          Modifique precios, unidades, alérgenos, disponibilidad, sugerencias
          del chef y muchas más opciones desde un solo lugar y en tiempo real
        </Typography>
      </div>
      <RotateCard height={isDesktop ? 800 : 460}>
        {showVideo ? (
          <video
            autoPlay
            loop
            muted
            controls={false}
            playsInline
            src="/demo.webm"
            width={1280}
            height={800}
            className="rounded-xl ring-1 shadow-2xl ring-white/10 object-cover border-10 border-black/50"
            style={{}}
            ref={(el) => {
              if (el) {
                el.playbackRate = 1.5;
              }
            }}
          />
        ) : (
          <div
            className="relative group cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src="/images/backoffice-dark.webp"
              alt="Demo"
              width={1280}
              height={800}
              className="rounded-xl ring-1 shadow-2xl ring-white/10 object-cover border-10 border-black/50"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <Typography as="h1" className="text-white text-2xl font-bold">
                Visualizar demo
              </Typography>
            </div>
          </div>
        )}
      </RotateCard>

      <div className="mx-auto max-w-7xl">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          <Shadow />
          {BACKOFFICE_FEATURES.map((feature) => (
            <BackofficeFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </dl>
      </div>
    </Container>
  );
};

function BackofficeFeatureCard({
  title,
  description,
  icon: Icon,
}: BackofficeFeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg p-6 border border-primary/90 glass-effect">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-400/20 text-primary-400 shadow-lg shadow-primary/10 backdrop-blur-md">
        <Icon className="h-6 w-6 text-primary-dark" />
      </div>
      <Typography as="h3">{title}</Typography>
      <Typography as="p">{description}</Typography>
    </div>
  );
}
export default BackofficeFeaturesSection;
