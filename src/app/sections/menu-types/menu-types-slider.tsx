import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Container } from "@/components/container/container";
import Video from "@/components/video/video";
import { Typography } from "@/components/typography/typography";

export default function SimpleSlider() {
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
        <h2 className="text-4xl font-bold text-gray-900">
          Crea Menús Únicos para tu Restaurante
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Diseña experiencias gastronómicas memorables con nuestros tres tipos
          de menús digitales
        </p>
      </div>
      <Slider {...settings} className="mx-6">
        <div className="flex! flex-col items-center justify-center gap-4">
          <h4 className="text-center!">Menú Básico</h4>
          <Typography as="p" className="text-center! muted">
            Sin fotos, sin videos, solo texto, puedes combinar platos con fotos
            o videos
          </Typography>

          <Video src="/preview/type/menu-basic.mp4" />
        </div>
        <div className="flex! flex-col items-center justify-center gap-4">
          <h4 className="text-center!">Menú Video</h4>
          <Typography as="p" className="text-center! muted ">
            Muestre sus platos en acción, permitiendo a tus clientes ver la
            preparación y presentación.
          </Typography>

          <Video src="/preview/type/menu-video.mp4" />
        </div>
        <div className="flex! flex-col items-center justify-center gap-4">
          <h4 className="text-center!">Menú Foto</h4>
          <Typography as="p" className="text-center! muted ">
            Muestra tus platos con imágenes atractivas para cautivar a tus
            clientes
          </Typography>

          <Video src="/preview/type/menu-image.mp4" />
        </div>
      </Slider>
      <div className={"text-center mt-16 transition-all duration-500 ease-out"}>
        <h3 className="text-2xl font-semibold text-gray-900  mb-4">
          Tres Tipos de Menú para Cada Necesidad
        </h3>
        <p className="text-lg text-gray-600  max-w-2xl mx-auto">
          Desde el menú básico perfecto para comenzar, hasta experiencias
          inmersivas con fotos y videos que cautivarán a tus clientes y
          aumentarán tus ventas.
        </p>
      </div>
    </Container>
  );
}
