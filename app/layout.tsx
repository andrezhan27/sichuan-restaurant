import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Old House | Restaurante Chinês Premium em Lisboa",
  description:
<<<<<<< HEAD
    "A premium Chinese restaurant in Lisbon celebrating traditional Sichuan craft, refined hospitality, and elegant dining.",
  icons: {
    icon: "/brand/old-house-logo-square.svg",
  },
=======
    "Um restaurante chinês premium em Lisboa, dedicado à cozinha tradicional de Sichuan, hospitalidade cuidada e uma experiência elegante.",
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
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
