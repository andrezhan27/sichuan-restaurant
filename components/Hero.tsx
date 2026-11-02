"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { heroImage } from "@/data/landing";
import { restaurantInfo } from "@/data/restaurant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { language } = useLanguage();
  const pt = language === "pt";
  return (
    <header className="hero" id="home">
      <div className="hero-photo">
        {/* Account for the full width of the 4:3 image covering a portrait hero. */}
        <Image
          src={heroImage}
          alt={
            pt
              ? "Escadaria do Sichuan Restaurant com murais coloridos, lanternas e letreiros de néon"
              : "Sichuan Restaurant stairway with colourful murals, lanterns and neon signs"
          }
          fill
          priority
          placeholder="blur"
          sizes="(max-width: 600px) max(100vw, clamp(800px, 133.333svh, 987px)), 100vw"
        />
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
            <Link className="button button-outline" href="/menu">
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
