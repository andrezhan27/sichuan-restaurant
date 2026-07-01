import { MenuPageClient } from "@/app/menu/MenuPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | The Old House",
  description:
    "Menu bilingue do The Old House em Lisboa, com destaques de Sichuan. Bilingual The Old House menu in Lisbon with Sichuan highlights.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
