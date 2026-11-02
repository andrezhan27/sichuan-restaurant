"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { ambienceImages } from "@/data/landing";
import { restaurantInfo } from "@/data/restaurant";
import { localize, translations } from "@/data/translations";
import Image from "next/image";

export function AmbienceMarquee() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const t = translations[language].ambience;
  return (
    <section className="section ambience" id="space">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / {pt ? "O NOSSO ESPAÇO" : "OUR SPACE"}</p>
            <h2>{t.title}</h2>
          </div>
          <div className="section-heading-aside">
            <p>{t.intro} {pt ? "Luz quente, boa companhia e uma mesa à sua espera." : "Warm light, good company and a table waiting for you."}</p>
            <a className="text-link" href={restaurantInfo.phoneUrl}>{pt ? "Reservar mesa" : "Book a table"}</a>
          </div>
        </div>
      </div>
      <div className="ambience-gallery">
        <div className="ambience-mosaic">
          {ambienceImages.map((photo, index) => (
            <figure className={`mosaic-tile mosaic-tile-${index + 1}`} key={photo.src}>
              <Image
                src={photo.src}
                alt={localize(photo.alt, language)}
                fill
                loading="eager"
                style={{ objectPosition: photo.objectPosition }}
                sizes={[
                  "(max-width: 600px) 100vw, (min-width: 1632px) 667px, 42vw",
                  "(max-width: 600px) 50vw, (min-width: 1632px) 933px, 59vw",
                  "(max-width: 600px) 50vw, (min-width: 1632px) 533px, 34vw",
                  "(max-width: 600px) 100vw, (min-width: 1632px) 1067px, 67vw",
                  "(max-width: 600px) 50vw, (min-width: 1632px) 933px, 59vw",
                  "(max-width: 600px) 50vw, (min-width: 1632px) 667px, 42vw",
                ][index]}
              />
            </figure>
          ))}
        </div>
        <p className="image-caption">SICHUAN RESTAURANT · AVENIDAS NOVAS, LISBOA</p>
      </div>
    </section>
  );
}
