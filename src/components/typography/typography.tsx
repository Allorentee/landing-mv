import React from "react";

type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  children: React.ReactNode;
};

const baseClassNames: Record<string, string> = {
  h1: "title",
  h2: "",
  h3: "",
  h4: "",
  p: "",
  span: "",
};

export function Typography({
  as = "p",
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  const Tag = as;
  const baseClass = baseClassNames[as] || "";
  return (
    <Tag className={`${baseClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
