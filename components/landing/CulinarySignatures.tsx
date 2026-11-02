"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { dishes } from "@/data/landing";
import { localize, translations } from "@/data/translations";
import Image from "next/image";
import Link from "next/link";
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
            <Link className="text-link" href="/menu">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
      <ContinuousCarousel label={t.title} className="specialties-carousel" showControls={false} renderItems={(duplicate) => (
        <>
          {dishes.map((dish, index) => (
            <article className="dish-card" key={dish.src}>
              <Link href="/menu" className="dish-image" tabIndex={duplicate ? -1 : undefined}>
                <Image
                  alt={localize(dish.alt, language)}
                  src={dish.src}
                  fill
                  sizes="(min-width: 850px) 380px, 78vw"
                />
                <span className="dish-number">0{index + 1}</span>
                <span className="sr-only">
                  {localize(dish.title, language)}
                </span>
              </Link>
              <h3>{localize(dish.title, language)}</h3>
              <p>{localize(dish.description, language)}</p>
            </article>
          ))}
        </>
      )} />
    </section>
  );
}
