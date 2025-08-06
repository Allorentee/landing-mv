import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AppScreenshot } from "@/components/icons";
import { Heading } from "@/components/typography/heading";

export default function HeroSection() {
  return (
    <div>
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full  px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-primary">
                  ¿Quieres una demo?
                </span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="#contact-us" className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Contacta con nosotros
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="-mr-2 size-5 text-gray-400"
                  />
                </a>
              </div>
            </div>
            <Heading
              level={1}
              size="8xl"
              className="text-left dark:text-black text-6xl"
            >
              La
              <br />
              <span className="title">CARTA DIGITAL QR</span>
              <br />
              diferencial
            </Heading>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Con esta carta digital, su restaurante podrá ofrecer la mejor
              experiencia posible, mostrando los platos del menu y dando la
              posibilidad de filtrar por alérgenos o preferencias.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#contact-us"
                className="rounded-md hover:scale-105 transition-all duration-300 bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            <AppScreenshot>
              <video autoPlay loop muted src="/preview/preview.mp4" />
            </AppScreenshot>
          </div>
        </div>
      </div>
    </div>
  );
}
