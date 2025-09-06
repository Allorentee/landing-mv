"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FadeIn } from "@/components/animations/fade-in";

const tiers = [
  {
    name: "Básico",
    id: "tier-basico",
    href: "#contact-us",
    priceMonthly: "8,99€",
    free: true,
    description:
      "Perfecto para restaurantes pequeños que quieren empezar con su carta digital.",
    features: [
      "Hasta 50 platos",
      "Filtros de alérgenos básicos",
      "Categorías de platos",
      "Soporte por email",
      "QR personalizable",
      "Estadísticas básicas",
    ],
    featured: false,
  },
  {
    name: "Profesional",
    id: "tier-profesional",
    href: "#contact-us",
    priceMonthly: "19,99€",
    free: true,
    description:
      "Solución completa para restaurantes que buscan la máxima personalización.",
    features: [
      "Platos ilimitados",
      "Filtros avanzados de alérgenos",
      "Categorías personalizables",
      "Soporte prioritario 24/7",
      "QR personalizado con logo",
      "Estadísticas detalladas",
      "Gestión de ingredientes",
      "Modo offline disponible",
    ],
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="relative isolate z-20 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-primary">Precios</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Elige el plan perfecto para tu restaurante
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Elige un plan económico que incluya las mejores características para
        atraer a tu público, crear lealtad de tus clientes y aumentar tus
        ventas.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
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
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
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
            {tier.free && (
              <p className="mt-4 text-base text-gray-500">
                Prueba de 30 días gratis
              </p>
            )}
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
                      tier.featured ? "text-primary-400" : "text-primary",
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
