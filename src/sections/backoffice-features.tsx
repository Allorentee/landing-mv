import { Lock, ClockArrowUp, Sparkles, Cog, ShoppingCart } from "lucide-react";
import RotateCard from "@/components/animations/rotate-card";
import { DesktopMockup } from "@/components/icons/desktop-mockup";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const BACKOFFICE_FEATURES: Feature[] = [
  {
    id: "gestionar-carta",
    title: "Gestionar la carta",
    description:
      "Modifique precios, unidades, alérgenos, disponibilidad, sugerencias del chef y muchas más opciones",
    icon: Lock,
  },
  {
    id: "gestionar-videos",
    title: "Gestionar los videos",
    description:
      "Modifique los videos de los platos para que sean más atractivos",
    icon: Lock,
  },
  {
    id: "gestionar-comentarios",
    title: "Gestionar los comentarios",
    description: "Lea los comentarios de los clientes y responda a sus dudas",
    icon: ClockArrowUp,
  },
  {
    id: "gestionar-sugerencias",
    title: "Gestionar las sugerencias",
    description: "Lea las sugerencias de los clientes y responda a sus dudas",
    icon: Sparkles,
  },
  {
    id: "gestionar-estadisticas",
    title: "Gestionar las estadísticas",
    description: "Acceda a las estadísticas de la carta y de los clientes",
    icon: Cog,
  },
  {
    id: "gestionar-notificaciones",
    title: "Gestionar las notificaciones",
    description: "Reciba notificaciones de los clientes y responda a sus dudas",
    icon: ShoppingCart,
  },
];

interface BackofficeFeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const BackofficeFeaturesSection: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-primary-400">
            Todo lo que necesitas para gestionar tu carta
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl sm:text-balance text-primary-dark">
            Un panel de gestión para actualizar la carta en tiempo real
          </p>
          <p className="mt-6 text-lg/8 text-gray-800">
            Modifique precios, unidades, alérgenos, disponibilidad, sugerencias
            del chef y muchas más opciones
          </p>
        </div>
      </div>
      <div className="flex gap-10 justify-start items-start h-auto">
        <RotateCard>
          <DesktopMockup>
            <img
              alt="App screenshot"
              src="/images/backoffice-dark.webp"
              width={1200}
              height={1200}
              className="rounded-xl ring-1 shadow-2xl ring-white/10 object-cover border-10 border-black/50"
            />
          </DesktopMockup>
        </RotateCard>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {BACKOFFICE_FEATURES.map((feature) => (
            <BackofficeFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </dl>
      </div>
    </section>
  );
};

function BackofficeFeatureCard({
  title,
  description,
  icon: Icon,
}: BackofficeFeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg p-6 bg-primary/30 border border-primary/80">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-400/20 text-primary-400">
        <Icon className="h-6 w-6 text-primary-dark" />
      </div>
      <dt className="text-lg font-semibold text-white dark:text-black">
        {title}
      </dt>
      <dd className="text-base text-gray-300 dark:text-black">{description}</dd>
    </div>
  );
}
export default BackofficeFeaturesSection;
