const rawSiteUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.menuvision.es";

/** URL principal del sitio, sin barra final (excepto si es únicamente origin). */
export const siteUrl = rawSiteUrl.replace(/\/+$/, "") || rawSiteUrl;

export const siteConfig = {
  name: "MenuVision",
  legalName: "MenuVision",
  /** Título corto útil para navegadores y enlaces sociales */
  title: "MenuVision | Carta digital QR para restaurantes",
  description:
    "MenuVision es una carta digital con código QR para restaurantes en España y Latinoamérica. Actualiza platos en tiempo real, muestra alérgenos, filtros para dietas y vídeos de platos desde un único panel. Sin app para el cliente.",
  twitterHandle: undefined as string | undefined,
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${normalized}`;
}
