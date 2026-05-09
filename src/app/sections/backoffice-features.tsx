"use client";

import { Lock, ClockArrowUp, Sparkles, Cog, ShoppingCart } from "lucide-react";
import RotateCard from "@/components/animations/rotate-card";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/container/container";
import Shadow from "@/components/shadow/shadow";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Typography } from "@/components/typography/typography";
import { useTranslations } from "next-intl";

type FeatureCard = {
  id:
    | "manageMenu"
    | "manageVideos"
    | "manageComments"
    | "manageSuggestions"
    | "manageStats"
    | "manageNotifications";
  icon: React.ElementType;
};

const FEATURE_CARDS: FeatureCard[] = [
  { id: "manageMenu", icon: Lock },
  { id: "manageVideos", icon: Lock },
  { id: "manageComments", icon: ClockArrowUp },
  { id: "manageSuggestions", icon: Sparkles },
  { id: "manageStats", icon: Cog },
  { id: "manageNotifications", icon: ShoppingCart },
];

interface BackofficeFeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const BackofficeFeaturesSection: React.FC = () => {
  const t = useTranslations("BackofficeFeatures");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Container id="backoffice" className="flex flex-col gap-8">
      <div className="mx-auto text-center flex flex-col gap-4">
        <Typography
          as="h2"
          className="text-base/7 font-semibold text-primary-400"
        >
          {t("eyebrow")}
        </Typography>
        <Typography
          as="h3"
          className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl sm:text-balance"
        >
          {t("title")}
        </Typography>
        <Typography className="text-lg/8 muted">{t("subtitle")}</Typography>
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
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShowVideo(true);
              }
            }}
            role="button"
            tabIndex={0}
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
                {t("playDemo")}
              </Typography>
            </div>
          </div>
        )}
      </RotateCard>

      <dl className="mx-auto grid grid-cols-1 gap-x-4 gap-y-4 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 w-full">
        <Shadow />
        {FEATURE_CARDS.map((feature) => (
          <BackofficeFeatureCard
            key={feature.id}
            title={t(`${feature.id}.title`)}
            description={t(`${feature.id}.description`)}
            icon={feature.icon}
          />
        ))}
      </dl>
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
