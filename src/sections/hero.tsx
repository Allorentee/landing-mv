import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { BackgroundPattern, AppScreenshot } from "@/components/icons";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <BackgroundPattern />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#14b8a6] to-[#2dd4bf] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-teal-600">
                  ¿Quieres una demo?
                </span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="#" className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Contacta con nosotros
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="-mr-2 size-5 text-gray-400"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10  text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
              La CARTA DIGITAL QR diferencial
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Con esta carta digital, su restaurante podrá ofrecer la mejor
              experiencia posible, mostrando los platos del menu y dando la
              posibilidad de filtrar por alérgenos o preferencias.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md hover:scale-105 transition-all duration-300 bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Contacta con nosotros
              </a>
              <a
                target="_blank"
                href="https://qr.menuvision.es/cf6911fd-c795-4f59-a00a-99a9ff75ea67"
                className="text-sm/6 font-semibold text-gray-900"
              >
                DEMO <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <AppScreenshot />
          </div>
        </div>
      </div>
    </div>
  );
}
