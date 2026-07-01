"use client";

import { useLanguage, type Language } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";

const languages: Language[] = ["pt", "en"];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <div className={`flex items-center ${className}`}>
      <div
        aria-label={t.language}
        className="relative grid h-10 w-[104px] grid-cols-2 rounded-full border border-outline-variant/80 bg-surface-container-low p-1 shadow-sm ring-1 ring-surface-bright/80"
        role="radiogroup"
      >
        <span aria-hidden="true" className="absolute left-1/2 top-2 h-6 w-px -translate-x-1/2 bg-outline-variant/70" />
        <motion.span
          animate={{ x: language === "pt" ? 0 : 46 }}
          className="absolute left-1 top-1 h-8 w-[46px] rounded-full bg-primary shadow-[0_8px_22px_-10px_rgba(65,0,1,0.85)]"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
        {languages.map((option) => (
          <button
            aria-checked={language === option}
            className={`relative z-10 rounded-full font-label-sm text-[11px] uppercase leading-8 transition-colors duration-200 ${
              language === option ? "text-on-primary" : "text-on-surface-variant hover:text-primary"
            }`}
            key={option}
            onClick={() => setLanguage(option)}
            role="radio"
            type="button"
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
