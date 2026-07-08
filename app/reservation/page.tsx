import { Navbar } from "@/components/Navbar";
import { restaurantInfo } from "@/data/restaurant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations | The Old House",
  description:
    "Reserve a table at The Old House in Lisbon. Reserve a sua mesa no The Old House em Lisboa.",
};

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="h-svh overflow-hidden bg-surface pt-[72px] md:pt-20">
        <iframe
          className="block h-full min-h-0 w-full border-0 bg-surface"
          loading="lazy"
          src={restaurantInfo.reservationWidgetUrl}
          title="The Old House reservation form"
        />
      </main>
    </>
  );
}
