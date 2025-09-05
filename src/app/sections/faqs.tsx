import { Container } from "@/components/container/container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Qué es MenuVision?",
    answer:
      "MenuVision es una plataforma digital que permite a los restaurantes mostrar su carta de manera interactiva, moderna y accesible desde cualquier dispositivo mediante un código QR.",
  },
  {
    question: "¿Cómo puedo actualizar mi carta?",
    answer:
      "Puedes actualizar tu carta en tiempo real desde el panel de control. Los cambios se reflejan al instante en todos los dispositivos de tus clientes, sin necesidad de imprimir nada.",
  },
  {
    question: "¿Es necesario instalar alguna aplicación?",
    answer:
      "No, tus clientes solo necesitan escanear el código QR con la cámara de su móvil para acceder a la carta digital. No hace falta descargar ninguna app.",
  },
  {
    question: "¿Puedo destacar platos recomendados o alérgenos?",
    answer:
      "Sí, puedes marcar platos como recomendados y añadir información sobre alérgenos y preferencias alimentarias para que tus clientes filtren fácilmente.",
  },
  {
    question: "¿Qué ventajas tiene respecto a una carta tradicional?",
    answer:
      "La carta digital es más higiénica, siempre está actualizada, permite mostrar imágenes y descripciones, y mejora la experiencia del cliente con filtros y recomendaciones.",
  },
  {
    question: "¿Cómo puedo contratar MenuVision?",
    answer:
      "Contáctanos a través del formulario de la web o por email y te ayudaremos a poner en marcha tu carta digital personalizada en muy poco tiempo.",
  },
];

export default function FaqsSection() {
  return (
    <Container id="faq">
      <div className="w-full flex flex-col pb-20">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Preguntas frecuentes
        </h2>
        <dl className="mt-16 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure
              key={faq.question}
              as="div"
              className="py-6 first:pt-0 last:pb-0"
            >
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base/7 font-semibold">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-data-open:hidden"
                    />
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-not-data-open:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>{" "}
      </div>
    </Container>
  );
}
