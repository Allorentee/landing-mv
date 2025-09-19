"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FadeIn } from "@/components/animations/fade-in";
import { Typography } from "@/components/typography/typography";
import Shadow from "@/components/shadow/shadow";

const tiers = [
  {
    name: "Básico",
    id: "tier-basico",
    href: "#contact-us",
    priceMonthly: "19,99€",
    free: true,
    description: "Pruebe 2 meses gratis sin compromiso",
    features: [
      "Platos ilimitados",
      "Filtros de alérgenos básicos",
      "Categorías de platos",
      "Soporte personalizado",
      "QR personalizable con logo",
      "Estadísticas básicas de uso",
      "Gestión de platos",
    ],
    featured: false,
  },
  // {
  //   name: "Profesional",
  //   id: "tier-profesional",
  //   href: "#contact-us",
  //   priceMonthly: "19,99€",
  //   free: true,
  //   description:
  //     "Solución completa para restaurantes que buscan la máxima personalización.",
  //   features: [
  //     "Platos ilimitados",
  //     "Filtros avanzados de alérgenos",
  //     "Categorías personalizables",
  //     "Soporte prioritario 24/7",
  //     "QR personalizado con logo",
  //     "Estadísticas detalladas",
  //     "Gestión de ingredientes",
  //     "Modo offline disponible",
  //   ],
  //   featured: true,
  // },
];

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="relative isolate z-20 px-4 lg:px-0 my-24 md:my-40 scroll-mt-[100px] flex flex-col gap-8"
    >
      <Shadow />
      <div className="mx-auto max-w-4xl text-center flex flex-col gap-4">
        <Typography as="h2" className="text-base/7 font-semibold text-primary">
          Precios
        </Typography>
        <Typography
          as="h3"
          className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl"
        >
          Elige el plan perfecto para tu restaurante
        </Typography>
        <Typography
          as="p"
          className="mx-auto max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8"
        >
          Elige un plan económico que incluya las mejores características para
          atraer a tu público, crear lealtad de tus clientes y aumentar tus
          ventas.
        </Typography>
      </div>
      <div className="grid place-content-center">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={clsx(
              "glass-effect",
              tier.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 max-w-lg"
            )}
          >
            <h3 id={tier.id} className={clsx("text-base/7 font-semibold")}>
              {tier.name}
            </h3>
            <span
              className={clsx(
                tier.featured ? "text-white" : "text-gray-900",
                "text-5xl font-semibold tracking-tight"
              )}
            >
              {tier.priceMonthly}
            </span>
            <span
              className={clsx(
                tier.featured ? "text-gray-400" : "text-gray-500",
                "text-base"
              )}
            >
              /mes
            </span>
            <p
              className={clsx(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={clsx(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 dark:text-gray-300">
                  <CheckIcon
                    aria-hidden="true"
                    className={clsx(
                      tier.featured
                        ? "text-primary-dark"
                        : "dark:text-primary text-green-500",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={clsx(
                tier.featured
                  ? "bg-primary-dark hover:bg-primary-400 text-white shadow-xs focus-visible:outline-primary"
                  : "text-primary-dark hover:text-primary-400 inset-ring inset-ring-primary-200 hover:inset-ring-primary-300 focus-visible:outline-primary",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Solicitar información
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
