import { MenuPageClient } from "@/app/menu/MenuPageClient";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Sichuan Restaurant",
  description:
    "Menu bilingue do Sichuan Restaurant em Lisboa, com destaques de Sichuan. Bilingual Sichuan Restaurant menu in Lisbon with Sichuan highlights.",
};

export default function MenuPage() {
  return (
    <>
      <MenuPageClient />
      <Footer />
    </>
  );
}
