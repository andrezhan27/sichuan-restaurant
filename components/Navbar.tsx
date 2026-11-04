"use client";

import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { restaurantInfo } from "@/data/restaurant";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  useEffect(() => {
    if (!isHome) return;
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    }, { rootMargin: "-92px 0px 0px 0px", threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);
  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!dropdownRef.current?.contains(target) && !toggleRef.current?.contains(target)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 851px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);
  const links = [
    { href: "/", label: t.home },
    { href: "/#menu", label: t.menu },
    { href: "/#space", label: language === "pt" ? "O espaço" : "The space" },
    { href: "/#contacts", label: t.contacts },
  ];
  return (
    <nav
      className={`site-nav${isHome ? " nav-over-hero" : ""}${isScrolled ? " nav-scrolled" : ""}${isOpen ? " nav-menu-open" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
      aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}
    >
      <div className="nav-inner container">
        <Brand />
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a className="button button-small button-reserve" href={restaurantInfo.phoneUrl}>
            {t.book}
          </a>
        </div>
        <button
          className="mobile-toggle"
          ref={toggleRef}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? t.closeMenu : t.openMenu}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
        <div ref={dropdownRef} className={`mobile-nav${isOpen ? " is-open" : ""}`} id="mobile-navigation" inert={!isOpen}>
          <div className="mobile-nav-inner">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="button button-reserve" href={restaurantInfo.phoneUrl} onClick={() => setIsOpen(false)}>
            {t.book}
          </a>
          <LanguageSwitcher />
          </div>
        </div>
    </nav>
  );
}
