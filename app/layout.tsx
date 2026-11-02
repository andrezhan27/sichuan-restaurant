import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sichuan Restaurant 川渝印象 | Cozinha de Sichuan em Lisboa",
  description:
    "Restaurante chinês premium em Lisboa dedicado à cozinha de Sichuan. Premium Chinese restaurant in Lisbon dedicated to Sichuan cuisine.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
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
        <Analytics />
      </body>
    </html>
  );
}
