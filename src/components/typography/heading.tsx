import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "quinary"
    | "senary"
    | "septenary"
    | "octonary"
    | "nonary"
    | "denary";
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function Heading({
  className,
  level = 1,
  size = "md",
  ...props
}: HeadingProps) {
  const sizeClass = {
    sm: "text-2xl/8 sm:text-4xl/8",
    md: "text-4xl/8 sm:text-6xl/8",
    lg: "text-6xl/8 sm:text-8xl/8",
    xl: "text-8xl/8 sm:text-10xl/8",
    "2xl": "text-10xl/8 sm:text-12xl/8",
    "3xl": "text-12xl/8 sm:text-14xl/8",
    "4xl": "text-14xl/8 sm:text-16xl/8",
    "5xl": "text-16xl/8 sm:text-18xl/8",
    "6xl": "text-18xl/8 sm:text-20xl/8",
    "7xl": "text-20xl/8 sm:text-22xl/8",
    "8xl": "text-22xl/8 sm:text-24xl/8",
    "9xl": "text-24xl/8 sm:text-26xl/8",
  }[size];
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx("font-semibold text-zinc-950", sizeClass, className)}
    />
  );
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        "text-base/7 font-normal text-zinc-950 sm:text-sm/6 dark:text-white/80",
        className
      )}
    />
  );
}
