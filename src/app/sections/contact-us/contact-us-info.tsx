import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactUsInfo() {
  return (
    <div className="relative lg:static">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
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
        <p className="mt-6 text-lg/8 text-gray-600">
          ¿Quieres llevar tu restaurante al siguiente nivel con una carta
          digital QR? Estamos aquí para ayudarte a implementar la mejor solución
          para tu negocio.
        </p>
        <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Dirección</span>
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-7 w-6 text-gray-400"
              />
            </dt>
            <dd className="dark:text-gray-400">
              Madrid, España
              <br />
              Disponible en toda España
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Teléfono</span>
              <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
            </dt>
            <dd>
              <a
                href="tel:+34 628 530 092"
                className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-primary!"
              >
                +34 628 530 092
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-gray-400 "
              />
            </dt>
            <dd>
              <a
                href="mailto:info@menuvision.es"
                className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-primary!"
              >
                info@menuvision.es
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
