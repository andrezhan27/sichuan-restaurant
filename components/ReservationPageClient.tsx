"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { localize, translations } from "@/data/translations";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function ReservationPageClient() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const t = translations[language].reservation;
  return (
    <main className="booking-page">
      <div className="booking-content">
        <p className="eyebrow">川渝印象 / {pt ? "RESERVAS" : "RESERVATIONS"}</p>
        <h1>{pt ? "Guardamos-lhe um lugar." : "A place at our table."}</h1>
        <p>{t.intro}</p>
        <a className="button button-reserve" href={restaurantInfo.phoneUrl}>
          {restaurantInfo.phone}
        </a>
        <div className="booking-location">
          <p>{restaurantInfo.address}</p>
          {restaurantInfo.openingHours.map((hours) => (
            <p key={hours.en}>{localize(hours, language)}</p>
          ))}
          <p>
            {pt
              ? "Confirme os dias de abertura por telefone."
              : "Please call to confirm opening days."}
          </p>
          <a
            className="text-link"
            href={restaurantInfo.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.openMap}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="booking-image">
        <Image
          src="/restaurant/space-dining-room.webp"
          alt={
            pt
              ? "Mesas e luz quente no Sichuan Restaurant"
              : "Tables and warm lighting at Sichuan Restaurant"
          }
          fill
          priority
          sizes="(min-width: 600px) 50vw, 100vw"
        />
      </div>
    </main>
  );
}
