"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { dishes } from "@/data/landing";
import { localize, translations } from "@/data/translations";
import Image from "next/image";
import { ContinuousCarousel } from "./ContinuousCarousel";

export function CulinarySignatures() {
  const { language } = useLanguage();
  const t = translations[language].menu;
  return (
    <section className="section signatures" id="menu">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              01 / {language === "pt" ? "A NOSSA COZINHA" : "OUR KITCHEN"}
            </p>
            <h2>{t.title}</h2>
          </div>
          <div className="section-heading-aside">
            <p>{t.intro}</p>
          </div>
        </div>
      </div>
      <ContinuousCarousel label={t.title} className="specialties-carousel" showControls={false} renderItems={() => (
        <>
          {dishes.map((dish, index) => (
            <article className="dish-card" key={dish.src}>
              <div className="dish-image">
                <Image
                  alt={localize(dish.alt, language)}
                  src={dish.src}
                  fill
                  sizes="(min-width: 850px) 380px, 78vw"
                />
                <span className="dish-number">0{index + 1}</span>
              </div>
              <h3>{localize(dish.title, language)}</h3>
              <p>{localize(dish.description, language)}</p>
            </article>
          ))}
        </>
      )} />
    </section>
  );
}
