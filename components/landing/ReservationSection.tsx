"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { localize, translations } from "@/data/translations";
import { Clock, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function ReservationSection() {
  const { language } = useLanguage();
  const isExternalReservation = restaurantInfo.reservationUrl.startsWith("http");
  const t = translations[language].reservation;

  return (
    <section className="bg-surface-container-low py-16 md:py-24" id="book">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="mb-6 font-display-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
              {t.title}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="date">
                    {t.date}
                  </label>
                  <input
                    className="w-full rounded-md border border-outline-variant bg-surface px-4 py-3 font-body-md text-on-surface transition-colors focus:border-primary focus:ring-primary"
                    id="date"
                    type="date"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="time">
                    {t.time}
                  </label>
                  <select
                    className="w-full rounded-md border border-outline-variant bg-surface px-4 py-3 font-body-md text-on-surface transition-colors focus:border-primary focus:ring-primary"
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

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block font-label-sm uppercase tracking-wider text-on-surface-variant"
                    htmlFor="guests"
                  >
                    {t.guests}
                  </label>
                  <select
                    className="w-full rounded-md border border-outline-variant bg-surface px-4 py-3 font-body-md text-on-surface transition-colors focus:border-primary focus:ring-primary"
                    id="guests"
                  >
                    <option>{`2 ${t.people}`}</option>
                    <option>{`3 ${t.people}`}</option>
                    <option>{`4 ${t.people}`}</option>
                    <option>{t.peoplePlus}</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="name">
                    {t.name}
                  </label>
                  <input
                    className="w-full rounded-md border border-outline-variant bg-surface px-4 py-3 font-body-md text-on-surface transition-colors focus:border-primary focus:ring-primary"
                    id="name"
                    placeholder={t.namePlaceholder}
                    type="text"
                  />
                </div>
              </div>

              <a
                className="mt-4 flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container"
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
                {restaurantInfo.address}
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
        <p className="font-body-md text-on-surface-variant">{children}</p>
      </div>
    </div>
  );
}
