"use client";

import { Container } from "@/components/container/container";
import ContactUsForm from "./contact-us-form";
import { Typography } from "@/components/typography/typography";
import Shadow from "@/components/shadow/shadow";
import { useTranslations } from "next-intl";

export default function ContactUsSection() {
  const t = useTranslations("Contact");

  return (
    <Container
      className="relative isolate z-20 flex flex-col gap-6"
      id="contact-us"
    >
      <Typography as="h2" className="text-center">
        {t("heading")}
      </Typography>
      <Typography as="p" className="text-lg/8 text-gray-600 text-center">
        {t("subtitle")}
      </Typography>
      <Shadow />
      <div className="w-full flex flex-col items-center gap-4 lg:flex lg:max-w-3xl lg:gap-x-10">
        <ContactUsForm />
      </div>
    </Container>
  );
}
