import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/background/background";
import { GTMProvider } from "@/stores/GTM-provider";
import { ThemeProvider } from "@/stores/theme-provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Menuvision",
  description: "Carta digital QR",
  alternates: {
    canonical: "https://www.menuvision.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`antialiased relative min-h-dvh mx-auto w-full`}>
        <ThemeProvider>
          <GTMProvider>
            <Background />
            <Toaster />
            {children}
          </GTMProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
