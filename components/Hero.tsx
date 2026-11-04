"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { heroImage, heroMobileImage } from "@/data/landing";
import { restaurantInfo } from "@/data/restaurant";
import { ArrowRight } from "lucide-react";
import { getImageProps } from "next/image";
import Link from "next/link";

export function Hero() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const imageProps = {
    alt: pt
      ? "Uma mesa de especialidades de Sichuan com carne com malagueta, tofu mapo, noodles, raviolis e pato assado"
      : "A spread of Sichuan specialities with chilli beef, mapo tofu, noodles, dumplings and roast duck",
    fill: true,
    sizes: "100vw",
    style: { objectPosition: "center" },
    loading: "eager" as const,
    fetchPriority: "high" as const,
  };
  const { props: desktop } = getImageProps({ ...imageProps, src: heroImage });
  const { props: mobile } = getImageProps({ ...imageProps, src: heroMobileImage });
  return (
    <header className="hero" id="home">
      <div className="hero-photo">
        <picture>
          <source media="(max-width: 850px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
          <img {...desktop} alt={imageProps.alt} />
        </picture>
        <div className="hero-photo-shade" />
      </div>
      <div className="hero-inner container">
        <div className="hero-copy">
          <h1>
            SICHUAN <span className="hero-restaurant">Restaurant</span>{" "}
            <span className="hero-chinese" lang="zh">川渝印象</span>
          </h1>
          <p className="hero-description">
            {pt
              ? "O calor da malagueta. O aroma da pimenta. Os sabores de Sichuan, à sua mesa em Lisboa."
              : "The warmth of chilli. The fragrance of peppercorns. The flavours of Sichuan, at your table in Lisbon."}
          </p>
          <div className="hero-buttons">
            <Link className="button button-outline" href="/#menu">
              {pt ? "Descobrir o menu" : "Discover the menu"}
              <ArrowRight size={17} />
            </Link>
            <a className="button button-reserve" href={restaurantInfo.phoneUrl}>
              {pt ? "Reservar mesa" : "Book a table"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
