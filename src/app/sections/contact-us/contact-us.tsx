"use client";

import { Container } from "@/components/container/container";
import ContactUsInfo from "./contact-us-info";
import ContactUsForm from "./contact-us-form";
import { Typography } from "@/components/typography/typography";

export default function ContactUsSection() {
  return (
    <Container
      className="relative isolate z-20 flex flex-col gap-10"
      id="contact-us"
    >
      <Typography as="h2" className="text-center">
        Contacta con nosotros
      </Typography>
      <div className="w-full flex flex-col md:flex-row gap-10 py-24 sm:py-32 lg:flex  lg:gap-x-10 lg:py-20">
        <ContactUsInfo />
        <ContactUsForm />
      </div>
    </Container>
  );
}
