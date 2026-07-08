"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { localize, translations } from "@/data/translations";
import { ArrowRight, CalendarCheck, Clock, ExternalLink, MapPin, Phone, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function ReservationSection() {
  const { language } = useLanguage();
  const t = translations[language].reservation;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address)}`;

  return (
    <section className="scroll-mt-24 bg-surface-container-low py-12 md:scroll-mt-28 md:py-24" id="book">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col justify-center">
            <CalendarCheck className="mb-5 text-primary" size={40} strokeWidth={1.7} />
            <h2 className="mb-5 font-display-lg text-headline-lg-mobile text-on-surface md:mb-6 md:text-headline-lg">
              {t.title}
            </h2>
            <p className="mb-8 max-w-md font-body-lg text-body-lg text-on-surface-variant">{t.intro}</p>
            <Link
              className="lantern-shadow group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-all hover:bg-on-surface sm:w-auto"
              href={restaurantInfo.reservationUrl}
            >
              {t.confirm}
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
            </Link>
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
