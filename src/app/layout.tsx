import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/background/background";
import { GTMProvider } from "@/stores/GTM-provider";

export const metadata: Metadata = {
  title: "Menuvision",
  description: "Carta digital QR",
  alternates: {
    canonical: "https://menuvision.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased relative min-h-dvh mx-auto w-full`}>
        <GTMProvider>
          <Background />
          {children}
        </GTMProvider>
      </body>
    </html>
  );
}
