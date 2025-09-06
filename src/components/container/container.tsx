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
      className={clsx(
        "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-20",
        className
      )}
    >
      {children}
    </div>
  );
}
