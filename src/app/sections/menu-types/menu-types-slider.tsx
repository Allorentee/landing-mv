"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Container } from "@/components/container/container";
import Video from "@/components/video/video";
import { Typography } from "@/components/typography/typography";
import { useTranslations } from "next-intl";

export default function MenuTypesSlider() {
  const t = useTranslations("MenuTypesSlider");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container className="max-w-full" id="menu-styles">
      <div className="text-center flex flex-col gap-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900">{t("title")}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </div>
      <Slider {...settings} className="mx-6">
        <div className="flex! flex-col items-center justify-center gap-4">
          <h4 className="text-center!">{t("basicTitle")}</h4>
          <Typography as="p" className="text-center! muted">
            {t("basicDesc")}
          </Typography>

          <Video src="/preview/type/menu-basic.mp4" />
        </div>
        <div className="flex! flex-col items-center justify-center gap-4">
          <h4 className="text-center!">{t("videoTitle")}</h4>
          <Typography as="p" className="text-center! muted ">
            {t("videoDesc")}
          </Typography>

          <Video src="/preview/type/menu-video.mp4" />
        </div>
        <div className="flex! flex-col items-center justify-center gap-4">
          <h4 className="text-center!">{t("imageTitle")}</h4>
          <Typography as="p" className="text-center! muted ">
            {t("imageDesc")}
          </Typography>

          <Video src="/preview/type/menu-image.mp4" />
        </div>
      </Slider>
      <div className={"text-center mt-16 transition-all duration-500 ease-out"}>
        <h3 className="text-2xl font-semibold text-gray-900  mb-4">
          {t("threeTypesTitle")}
        </h3>
        <p className="text-lg text-gray-600  max-w-2xl mx-auto">
          {t("threeTypesBody")}
        </p>
      </div>
    </Container>
  );
}
