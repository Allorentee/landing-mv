import { Container } from "@/components/container/container";
import { Typography } from "@/components/typography/typography";
import { getTranslations, getMessages } from "next-intl/server";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

type FAQModel = { question: string; answer: string };

export default async function FaqsSection() {
  const t = await getTranslations("Faqs");
  const messages = await getMessages();

  const items = (messages.Faqs as { items: FAQModel[] }).items ?? [];

  return (
    <Container id="faqs" className="flex flex-col gap-8">
      <Typography as="h2" className="text-center">
        {t("title")}
      </Typography>
      <dl className="divide-y divide-gray-900/10 w-full">
        {items.map((faq) => (
          <Disclosure
            key={faq.question}
            as="div"
            className="py-6 first:pt-0 last:pb-0"
          >
            <dt>
              <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 cursor-pointer">
                <span className="text-lg! font-bold! text-black dark:text-primary!">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusSmallIcon
                    aria-hidden="true"
                    className="size-6 group-data-open:hidden text-black dark:text-primary!"
                  />
                  <MinusSmallIcon
                    aria-hidden="true"
                    className="size-6 group-not-data-open:hidden text-black dark:text-primary!"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 pr-12">
              <p className="text-base/7 text-gray-600">{faq.answer}</p>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </dl>
    </Container>
  );
}
