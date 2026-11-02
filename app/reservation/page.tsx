import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReservationPageClient } from "@/components/ReservationPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservas | Sichuan Restaurant",
  description:
    "Reserve a sua mesa no Sichuan Restaurant 川渝印象 em Lisboa. Table reservations by phone: +351 960 017 524.",
};
export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <ReservationPageClient />
      <Footer />
    </>
  );
}
