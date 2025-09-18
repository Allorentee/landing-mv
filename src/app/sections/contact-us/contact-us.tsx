"use client";

import { Container } from "@/components/container/container";
import ContactUsForm from "./contact-us-form";
import { Typography } from "@/components/typography/typography";
import Shadow from "@/components/shadow/shadow";

export default function ContactUsSection() {
  return (
    <Container
      className="relative isolate z-20 flex flex-col gap-6"
      id="contact-us"
    >
      <Typography as="h2" className="text-center">
        Contacta con nosotros
      </Typography>
      <Typography as="p" className="text-lg/8 text-gray-600">
        ¿Quieres llevar tu restaurante al siguiente nivel con una carta digital
        QR? Estamos aquí para ayudarte a implementar la mejor solución para tu
        negocio.
      </Typography>
      <Shadow />
      <div className="w-full flex flex-col items-center gap-4 lg:flex md:max-w-3xl lg:gap-x-10">
        <ContactUsForm />
      </div>
    </Container>
  );
}
