"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { heroImage } from "@/data/landing";
import { restaurantInfo } from "@/data/restaurant";
import { translations } from "@/data/translations";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const isExternalReservation = restaurantInfo.reservationUrl.startsWith("http");
  const t = translations[language].hero;

  return (
    <header
      className="relative flex h-[84svh] min-h-[540px] w-full items-center justify-center overflow-hidden md:h-[90vh] md:min-h-[600px]"
      id="home"
    >
      <div className="absolute inset-0 h-full w-full">
        <div
          className="h-full w-full scale-105 bg-cover bg-center transition-transform duration-[20s] ease-out hover:scale-110"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      <div className="relative z-10 mx-auto mt-10 flex w-full max-w-container-max -translate-y-3 flex-col items-center justify-center px-margin-mobile text-center md:mt-16 md:translate-y-0 md:px-margin-desktop">
        <h1 className="mb-4 max-w-[18rem] font-display-lg text-[40px] leading-[46px] tracking-tight text-surface-bright drop-shadow-lg sm:max-w-none sm:text-5xl sm:leading-tight md:mb-6 md:text-[80px]">
          {restaurantInfo.heroTitle}
        </h1>
        <p className="mb-8 max-w-[20rem] font-title-md text-[15px] font-light leading-6 tracking-wide text-surface-variant opacity-90 sm:max-w-md sm:text-base md:mb-12 md:max-w-2xl md:text-title-md">
          {t.tagline}
        </p>
        <a
          className="lantern-shadow group inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 font-label-sm text-[11px] uppercase tracking-[0.18em] text-on-primary transition-all duration-300 hover:bg-surface-bright hover:text-primary md:px-10 md:py-4 md:text-label-sm md:tracking-widest"
          href={restaurantInfo.reservationUrl}
          rel={isExternalReservation ? "noreferrer" : undefined}
          target={isExternalReservation ? "_blank" : undefined}
        >
          {t.cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 md:h-[18px] md:w-[18px]" strokeWidth={2.2} />
        </a>
      </div>
    </header>
  );
}
