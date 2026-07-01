"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { localize, translations } from "@/data/translations";
import { Clock, ExternalLink, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function ReservationSection() {
  const { language } = useLanguage();
  const isExternalReservation = restaurantInfo.reservationUrl.startsWith("http");
  const t = translations[language].reservation;
  const fieldClass =
    "h-13 min-w-0 w-full rounded-md border border-outline-variant bg-surface px-3.5 font-body-md text-base text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:h-auto md:px-4 md:py-3";
  const labelClass = "mb-2 block font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant md:text-label-sm";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address)}`;

  return (
    <section className="scroll-mt-24 bg-surface-container-low py-12 md:scroll-mt-28 md:py-24" id="book">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="mb-5 font-display-lg text-headline-lg-mobile text-on-surface md:mb-6 md:text-headline-lg">
              {t.title}
            </h2>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="min-w-0">
                  <label className={labelClass} htmlFor="date">
                    {t.date}
                  </label>
                  <input
                    className={fieldClass}
                    id="date"
                    type="date"
                  />
                </div>
                <div className="min-w-0">
                  <label className={labelClass} htmlFor="time">
                    {t.time}
                  </label>
                  <select
                    className={fieldClass}
                    id="time"
                  >
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="min-w-0">
                  <label
                    className={labelClass}
                    htmlFor="guests"
                  >
                    {t.guests}
                  </label>
                  <select
                    className={fieldClass}
                    id="guests"
                  >
                    <option>{`2 ${t.people}`}</option>
                    <option>{`3 ${t.people}`}</option>
                    <option>{`4 ${t.people}`}</option>
                    <option>{t.peoplePlus}</option>
                  </select>
                </div>
                <div className="min-w-0">
                  <label className={labelClass} htmlFor="name">
                    {t.name}
                  </label>
                  <input
                    className={fieldClass}
                    id="name"
                    placeholder={t.namePlaceholder}
                    type="text"
                  />
                </div>
              </div>

              <a
                className="mt-2 flex h-13 w-full items-center justify-center rounded-md bg-primary px-5 font-label-sm text-label-sm uppercase tracking-widest text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container md:mt-4 md:h-auto md:rounded-full md:px-6 md:py-4"
                href={restaurantInfo.reservationUrl}
                rel={isExternalReservation ? "noreferrer" : undefined}
                target={isExternalReservation ? "_blank" : undefined}
              >
                {t.confirm}
              </a>
            </form>
          </div>

          <div className="flex flex-col justify-center" id="contacts">
            <h2 className="mb-6 font-display-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">{t.visit}</h2>
            <div className="mb-8 space-y-6">
              <ContactItem icon={MapPin} title={t.address}>
                <span className="block">{restaurantInfo.address}</span>
                <a
                  className="mt-3 inline-flex h-10 items-center gap-2 rounded-md border border-outline-variant px-3 font-label-sm text-label-sm uppercase tracking-wider text-primary transition-colors hover:border-primary hover:bg-primary-fixed/40"
                  href={mapUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {t.openMap}
                  <ExternalLink size={15} strokeWidth={1.9} />
                </a>
              </ContactItem>
              <ContactItem icon={Clock} title={t.hours}>
                {restaurantInfo.openingHours.map((hours) => (
                  <span className="block" key={hours.en}>
                    {localize(hours, language)}
                  </span>
                ))}
              </ContactItem>
              <ContactItem icon={Phone} title={t.contact}>
                <a className="transition-colors hover:text-primary" href={`tel:${restaurantInfo.phone.replaceAll(" ", "")}`}>
                  {restaurantInfo.phone}
                </a>
                <a className="block transition-colors hover:text-primary" href={`mailto:${restaurantInfo.email}`}>
                  {restaurantInfo.email}
                </a>
              </ContactItem>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  children,
  icon: Icon,
  title,
}: {
  children: ReactNode;
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="mt-1 text-primary" size={24} strokeWidth={1.8} />
      <div>
        <h4 className="mb-1 font-title-md text-on-surface">{title}</h4>
        <div className="font-body-md text-on-surface-variant">{children}</div>
      </div>
    </div>
  );
}
