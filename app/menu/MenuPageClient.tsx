"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { menuImages } from "@/data/menu";
import { localize, translations } from "@/data/translations";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MenuPageClient() {
  const { language } = useLanguage();
  const t = translations[language].menuPage;
  return (
    <>
      <Navbar />
      <main className="menu-page">
        <div className="container">
          <div className="page-heading">
            <p className="eyebrow">
              川渝印象 / {language === "pt" ? "À MESA" : "AT THE TABLE"}
            </p>
            <h1>
              {language === "pt"
                ? "O sabor de Sichuan."
                : "A taste of Sichuan."}
            </h1>
            <p>{t.intro}</p>
            <div className="hero-buttons">
              <a
                className="button"
                href="/restaurant/menu.webp"
                target="_blank"
                rel="noreferrer"
              >
                {t.fullMenu}
                <ArrowUpRight size={16} />
              </a>
              <Link className="text-link" href="/">
                <ArrowLeft size={16} />
                {t.backHome}
              </Link>
            </div>
          </div>
          <div className="dish-grid menu-grid">
            {menuImages.map((dish, index) => (
              <article className="dish-card" key={dish.src}>
                <div className="dish-image">
                  <Image
                    src={dish.src}
                    alt={localize(dish.alt, language)}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={index < 3}
                  />
                  <span className="dish-number">0{index + 1}</span>
                </div>
                <h3>{localize(dish.title, language)}</h3>
                <p>{localize(dish.description, language)}</p>
              </article>
            ))}
          </div>
          <p className="menu-note">
            {language === "pt"
              ? "Fotografias do restaurante. O menu fotografado pode não refletir a oferta e os preços atuais. Informe a equipa sobre alergias ou restrições alimentares antes de pedir."
              : "Photographs from the restaurant. The photographed menu may not reflect current availability and prices. Please tell our team about any allergies or dietary requirements before ordering."}
          </p>
        </div>
      </main>
    </>
  );
}
