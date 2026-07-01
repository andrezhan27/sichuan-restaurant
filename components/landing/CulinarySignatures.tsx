"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { dishes } from "@/data/landing";
import { localize, translations } from "@/data/translations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CulinarySignatures() {
  const { language } = useLanguage();
  const t = translations[language].menu;
  const feature = dishes.find((dish) => dish.featured) ?? dishes[0];
  const standardDishes = dishes.filter((dish) => dish !== feature);

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
          <div className="bento-hover lantern-shadow relative col-span-1 h-[400px] cursor-pointer overflow-hidden rounded-[1rem] md:col-span-2 md:h-[600px] lg:col-span-2 lg:row-span-2">
            <Image
              alt={localize(feature.alt, language)}
              className="object-cover transition-transform duration-700"
              fill
              sizes="(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw"
              src={feature.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
              <div>
                <h3 className="mb-2 font-display-lg text-headline-lg text-white">{localize(feature.title, language)}</h3>
              </div>

            </div>
          </div>

          {standardDishes.map((dish) => (
            <div
              className="bento-hover lantern-shadow relative h-[280px] cursor-pointer overflow-hidden rounded-[1rem]"
              key={dish.src}
            >
              <Image
                alt={localize(dish.alt, language)}
                className="object-cover transition-transform duration-700"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                src={dish.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
                <div>
                  <h3 className="mb-1 font-title-md text-white">{localize(dish.title, language)}</h3>
                </div>
              </div>
            </div>
          ))}

          <a
            className="group flex items-center justify-center gap-2 font-headline-lg text-xl italic font-normal tracking-wide text-on-surface-variant transition-colors duration-200 hover:text-primary"
            href="/menu"
          >
            {t.cta}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
