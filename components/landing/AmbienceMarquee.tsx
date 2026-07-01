"use client";

/* eslint-disable @next/next/no-img-element */

import { useLanguage } from "@/components/LanguageProvider";
import { ambienceBottom, ambienceTop } from "@/data/landing";
import { translations } from "@/data/translations";

type AmbienceImage = (typeof ambienceTop)[number];

export function AmbienceMarquee() {
  const { language } = useLanguage();
  const t = translations[language].ambience;

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-4 font-display-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
          {t.title}
        </h2>
        <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          {t.intro}
        </p>
      </div>

      <div className="marquee-container relative flex w-full flex-col gap-4 overflow-hidden">
        <MarqueeRow images={ambienceTop} />
        <MarqueeRow images={ambienceBottom} reverse />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      </div>
    </section>
  );
}

function MarqueeRow({ images, reverse = false }: { images: readonly AmbienceImage[]; reverse?: boolean }) {
  const beltImages = Array.from({ length: 4 }, () => images).flat();

  return (
    <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
      {[0, 1].map((beltIndex) => (
        <div aria-hidden={beltIndex === 1} className="marquee-belt" key={beltIndex}>
          {beltImages.map((image, imageIndex) => (
            <div
              className="lantern-shadow h-56 w-80 flex-shrink-0 overflow-hidden rounded-lg md:h-64 md:w-96"
              key={`${image.src}-${beltIndex}-${imageIndex}`}
            >
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
