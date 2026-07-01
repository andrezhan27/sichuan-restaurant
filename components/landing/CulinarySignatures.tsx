"use client";

/* eslint-disable @next/next/no-img-element */

import { useLanguage } from "@/components/LanguageProvider";
import { dishes } from "@/data/landing";
import { translations } from "@/data/translations";
import { ArrowRight } from "lucide-react";

export function CulinarySignatures() {
  const { language } = useLanguage();
  const t = translations[language].menu;

  return (
    <section className="bg-surface py-16 md:py-24" id="menu">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {t.title}
          </h2>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            {t.intro}
          </p>
          <a
            className="lantern-shadow mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container"
            href="/menu"
          >
            {t.cta}
            <ArrowRight className="ml-2" size={18} strokeWidth={2.2} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
<<<<<<< HEAD
          <div className="bento-hover lantern-shadow relative col-span-1 h-[400px] cursor-pointer overflow-hidden rounded-[1rem] md:col-span-2 md:h-[600px] lg:col-span-2 lg:row-span-2">
            <img alt={feature.alt} className="h-full w-full object-cover transition-transform duration-700" src={feature.src} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
              <div>
                <h3 className="mb-2 font-display-lg text-headline-lg text-white">{feature.title}</h3>
              </div>
              <div className="text-right">
                <span className="mb-2 block font-title-md text-white">{feature.price}</span>
              </div>
            </div>
          </div>

          {standardDishes.map((dish) => (
=======
          {dishes.map((dish) => (
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
            <div
              className="bento-hover lantern-shadow relative h-[280px] cursor-pointer overflow-hidden rounded-[1rem]"
              key={dish.title}
            >
              <img alt={dish.alt} className="h-full w-full object-cover transition-transform duration-700" src={dish.src} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
<<<<<<< HEAD
              <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
                <div>
                  <h3 className="mb-1 font-title-md text-white">{dish.title}</h3>
                  <span className="font-body-md text-white/90">{dish.price}</span>
                </div>
=======
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="mb-1 font-title-md text-white">{dish.title}</h3>
                <span className="font-body-md text-white/90">{dish.price}</span>
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
