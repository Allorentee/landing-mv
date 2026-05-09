"use client";
import { Container } from "@/components/container/container";
import { useMediaQuery } from "@/hooks/use-media-query";
import clsx from "clsx";
import { useState } from "react";
import MenuTypesSlider from "./menu-types-slider";
import Video from "@/components/video/video";
import { Typography } from "@/components/typography/typography";
import { useTranslations } from "next-intl";

export default function MenuTypes() {
  const t = useTranslations("MenuTypesDesktop");
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
            {t("title")}
          </Typography>
          <Typography
            as="h3"
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
          >
            {t("subtitle")}
          </Typography>
          <Typography as="p" className="text-lg text-gray-600  max-w-2xl mx-auto">
            {t("body")}
          </Typography>
        </div>

        <div
          className="flex justify-center items-center relative h-[800px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Video
            src="/preview/type/menu-basic.mp4"
            className={clsx(
              "absolute transition-all duration-500 ease-out z-10",
              isHovered ? "-translate-x-96" : "-translate-x-58 -rotate-15",
            )}
          />
          <Video src="/preview/type/menu-video.mp4" className="relative z-20" />
          <Video
            src="/preview/type/menu-image.mp4"
            className={clsx(
              "absolute transition-all duration-500 ease-out z-10",
              isHovered ? "translate-x-96" : "translate-x-58 rotate-15",
            )}
          />
        </div>
      </div>
    </Container>
  );
}
