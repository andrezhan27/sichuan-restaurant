import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Old House | Restaurante Chinês Premium em Lisboa | Premium Chinese Restaurant in Lisbon",
  description:
    "Restaurante chinês premium em Lisboa dedicado à cozinha de Sichuan. Premium Chinese restaurant in Lisbon dedicated to Sichuan cuisine.",
  icons: {
    icon: "/brand/old-house-logo-square.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt">
      <body className="bg-background font-body-md text-on-background antialiased selection:bg-primary selection:text-on-primary">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
