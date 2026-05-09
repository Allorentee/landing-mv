"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Typography } from "@/components/typography/typography";
import Shadow from "@/components/shadow/shadow";

const tiers = [
  {
    name: "Básico",
    id: "tier-basico",
    href: "#contact-us",
    priceMonthly: "15,99€",
    promoHeading: "¡Hasta 2027 gratuito!",
    free: true,
    description: "6 meses gratis sin compromiso; después, solo 15,99 € al mes.",
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
];

/** Destaca «6 meses» frente al resto cuando el formato es español ¡… gratis! */
function PromoHeadingRich({
  heading,
  featured,
}: {
  heading: string;
  featured: boolean;
}) {
  const match = /^¡(.+?)\s+(gratis!?)$/iu.exec(heading.trim());
  if (!match) {
    return (
      <span
        className={clsx(
          featured ? "text-primary" : "text-secondary-dark",
          "text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl",
        )}
      >
        {heading}
      </span>
    );
  }
  const [, lead, gratis] = match;
  return (
    <span className="inline-flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 text-balance">
      <span
        className={clsx(
          featured ? "text-primary/90" : "text-secondary-dark",
          "text-3xl font-extrabold leading-none sm:text-4xl",
        )}
      >
        ¡
      </span>
      <span
        className={clsx(
          featured
            ? "text-primary drop-shadow-[0_1px_14px_color-mix(in_srgb,var(--color-primary)_28%,transparent)]"
            : "text-secondary-dark drop-shadow-[0_1px_12px_color-mix(in_srgb,var(--color-secondary)_18%,transparent)]",
          "text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl",
        )}
      >
        {lead}
      </span>
      <span
        className={clsx(
          featured ? "text-white/92" : "text-accent-dark/90",
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
        )}
      >
        {gratis}
      </span>
    </span>
  );
}

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
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 max-w-lg",
            )}
          >
            <h3 id={tier.id} className={clsx("text-base/7 font-semibold")}>
              {tier.name}
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              {"promoHeading" in tier && tier.promoHeading ? (
                <>
                  <div
                    className={clsx(
                      "relative w-full overflow-hidden rounded-2xl px-5 py-5 text-center shadow-sm sm:px-7 sm:py-6",
                      tier.featured
                        ? "bg-linear-to-br from-white/16 to-accent/14 ring-1 ring-white/20"
                        : "bg-linear-to-br from-primary/55 via-primary/40 to-accent/18 ring-1 ring-secondary-dark/12",
                    )}
                  >
                    <div
                      className="pricing-promo-sheen pointer-events-none absolute -top-1/2 bottom-0 left-0 z-0 w-[38%] min-w-22 bg-linear-to-r from-transparent via-white/55 to-transparent dark:via-white/25"
                      aria-hidden
                    />
                    <p className="relative z-10 text-balance">
                      <PromoHeadingRich
                        heading={tier.promoHeading}
                        featured={tier.featured}
                      />
                    </p>
                    <p
                      className={clsx(
                        tier.featured
                          ? "text-primary/80"
                          : "text-secondary-dark/70",
                        "relative z-10 mt-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm",
                      )}
                    >
                      Sin compromiso
                    </p>
                  </div>
                  <p
                    className={clsx(
                      tier.featured ? "text-gray-300" : "text-gray-600",
                      "flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 text-lg sm:justify-start",
                    )}
                  >
                    <span className="font-semibold">Luego</span>
                    <span
                      className={clsx(
                        tier.featured ? "text-white" : "text-gray-900",
                        "text-4xl font-bold tracking-tight tabular-nums sm:text-5xl",
                      )}
                    >
                      {tier.priceMonthly}
                    </span>
                    <span
                      className={clsx(
                        tier.featured ? "text-gray-400" : "text-gray-500",
                        "text-lg font-semibold sm:text-xl",
                      )}
                    >
                      /mes
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <span
                    className={clsx(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-semibold tracking-tight",
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={clsx(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base",
                    )}
                  >
                    /mes
                  </span>
                </>
              )}
            </div>
            <p
              className={clsx(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7",
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={clsx(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10",
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
                      "h-6 w-5 flex-none",
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
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
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
