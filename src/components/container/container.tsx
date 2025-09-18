import clsx from "clsx";

type ContainerProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      // Clases base para el contenedor principal
      className={clsx(
        "mx-auto px-4 md:px-0 relative isolate z-20",
        // Ancho máximo para diferentes tamaños de pantalla
        "max-w-5xl xl:max-w-7xl",
        // Espaciado vertical y márgenes responsivos
        "my-24 sm:my-40",
        // Estilos para layout en pantallas grandes
        "lg:flex lg:items-center lg:gap-x-10",
        // Clases adicionales que se pasen por props
        "scroll-mt-[100px]",
        className
      )}
    >
      {children}
    </div>
  );
}
