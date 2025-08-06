import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Gestión en cualquier momento",
    description:
      "Puedes gestionar los datos de tu carta digital en cualquier momento desde el panel de control, de forma sencilla y rápida.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Subida de imágenes y vídeos",
    description:
      "Se pueden subir imágenes y vídeos para mostrar tus platos de la mejor manera posible y destacar tu oferta gastronómica.",
    icon: LockClosedIcon,
  },
  {
    name: "Gestión de filtros y más",
    description:
      "Gestiona filtros de alérgenos, preferencias, categorías, platos recomendados y mucho más para personalizar la experiencia de tus clientes.",
    icon: ServerIcon,
  },
];

export default function BackofficeFeaturesSection() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                Gestiona tu carta digital
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Edita tu carta digital en todo momento
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                Desde el panel de control puedes modificar tu carta digital,
                gestionar la visibilidad de los platos, añadir imágenes, vídeos,
                categorías, filtros y mucho más, de forma fácil y rápida.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-primary"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline"> {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Panel de control de la carta digital"
            src="/preview/backoffice.webp"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
