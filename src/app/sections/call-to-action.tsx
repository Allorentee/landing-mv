import { Container } from "@/components/container/container";
import Shadow from "@/components/shadow/shadow";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Diseño personalizado",
  "Panel de control",
  "Gestión de platos",
  "Gestión de categorías",
  "Gestión de imágenes",
  "Gestión de alérgenos",
  "Gestión de preferencias",
  "Gestión de platos recomendados",
  "Gestión de platos visibles o no",
];

export default function CallToActionSection() {
  return (
    <Container className="overflow-hidden bg-neutral-500 py-24 sm:py-32 relative isolate z-20 max-w-full grid place-content-center">
      <div className="relative isolate grid place-content-center">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/3 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt="Team"
              width={400}
              height={400}
              src="/images/team.webp"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Contacta con nosotros
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-400">
                Si tienes alguna duda, no dudes en contactar con nosotros.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-200 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-gray-200"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Link
                  href="#contact-us"
                  className="text-sm/6 font-semibold text-primary-dark hover:text-primary-300"
                >
                  Contacta con nosotros
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Shadow />
      </div>
    </Container>
  );
}
