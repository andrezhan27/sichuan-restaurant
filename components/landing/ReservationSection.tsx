"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { localize, translations } from "@/data/translations";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

export function ReservationSection() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const t = translations[language].reservation;
  return (
    <section className="section visit" id="contacts">
      <div className="container visit-layout">
        <div className="visit-intro">
          <p className="eyebrow">03 / {pt ? "À SUA ESPERA" : "COME ON IN"}</p>
          <h2>{pt ? "O seu lugar à mesa." : "A place at our table."}</h2>
          <p>{t.intro}</p>
          <a className="button button-reserve visit-reserve-desktop" href={restaurantInfo.phoneUrl}>{pt ? "Reservar mesa" : "Book a table"}</a>
          <span className="visit-seal" lang="zh" aria-hidden="true">川渝印象</span>
        </div>
        <div className="contact-panel">
          <div className="contact-row">
            <MapPin size={21} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>{t.address}</h3>
              <address>{restaurantInfo.address}</address>
              <a className="text-link" href={restaurantInfo.mapUrl} target="_blank" rel="noreferrer">{pt ? "Como chegar" : "Get directions"}<ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="contact-row">
            <Clock3 size={21} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>{t.hours}</h3>
              <dl className="opening-times">
                {restaurantInfo.openingHours.map((hours) => {
                  const [meal, time] = localize(hours, language).split(" · ");
                  return <div key={hours.en}><dt>{meal}</dt><dd>{time}</dd></div>;
                })}
              </dl>
              <p className="hours-note">{pt ? "Confirme os dias de abertura por telefone." : "Please call to confirm opening days."}</p>
            </div>
          </div>
          <div className="contact-row">
            <Phone size={21} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>{pt ? "Contacto e reservas" : "Contact & reservations"}</h3>
              <a className="contact-number" href={restaurantInfo.phoneUrl}>{restaurantInfo.phone}</a>
              <p className="hours-note">{pt ? "Ligue-nos. Tratamos da sua mesa." : "Give us a call. We’ll take care of your table."}</p>
              <a className="button button-reserve visit-reserve-mobile" href={restaurantInfo.phoneUrl}>{pt ? "Reservar mesa" : "Book a table"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
