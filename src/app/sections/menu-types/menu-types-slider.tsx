"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Container } from "@/components/container/container";
import { Typography } from "@/components/typography/typography";
import { PhoneShowcaseVideo } from "@/components/video/phone-showcase-video";
import { useTranslations } from "next-intl";

export default function MenuTypesSlider() {
  const t = useTranslations("MenuTypesSlider");

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipeToSlide: true,
    touchThreshold: 12,
    centerMode: false,
  };

  const slides = [
    {
      src: "/preview/type/menu-basic.mp4",
      title: t("basicTitle"),
      desc: t("basicDesc"),
    },
    {
      src: "/preview/type/menu-video.mp4",
      title: t("videoTitle"),
      desc: t("videoDesc"),
    },
    {
      src: "/preview/type/menu-image.mp4",
      title: t("imageTitle"),
      desc: t("imageDesc"),
    },
  ];

  return (
    <Container className="max-w-full" id="menu-styles">
      <div className="text-center mb-10 flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-gray-900">{t("title")}</h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("subtitle")}</p>
      </div>

      <div className="relative pb-16">
        <Slider {...sliderSettings} className="menu-types-mobile-slider">
          {slides.map((slide) => (
            <div key={slide.src} className="outline-none px-4">
              <div className="menu-types-slide mx-auto flex min-h-[min(620px,calc(100dvh-8rem))] max-w-lg flex-col items-stretch gap-5 sm:min-h-[640px]">
                <div className="flex min-h-[7.75rem] flex-col justify-start gap-2 text-center sm:min-h-[8.25rem]">
                  <h4 className="text-balance">{slide.title}</h4>
                  <Typography as="p" className="muted text-pretty px-1">
                    {slide.desc}
                  </Typography>
                </div>

                <div className="flex flex-1 items-start justify-center pt-1">
                  <PhoneShowcaseVideo
                    src={slide.src}
                    wrapperClassName="mx-auto w-[min(280px,calc(100vw-2.5rem))] min-h-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-14 text-center transition-all duration-500 ease-out">
        <h3 className="mb-4 text-2xl font-semibold text-gray-900">
          {t("threeTypesTitle")}
        </h3>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          {t("threeTypesBody")}
        </p>
      </div>
    </Container>
  );
}
