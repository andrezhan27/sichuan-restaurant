"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { translations } from "@/data/translations";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
<<<<<<< HEAD
  { href: "/", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#book", label: "Book a Table" },
  { href: "#contacts", label: "Contacts" },
];
=======
  { href: "#home", labelKey: "home" },
  { href: "#menu", labelKey: "menu" },
  { href: "#book", labelKey: "book" },
  { href: "#contacts", labelKey: "contacts" },
] as const;
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18

export function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].nav;

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 shadow-sm backdrop-blur-md transition-all duration-300"
      id="main-nav"
    >
      <div className="relative mx-auto flex max-w-container-max items-center justify-center px-margin-mobile py-4 md:justify-between md:px-margin-desktop">
        <div className="hidden flex-1 items-center gap-8 font-title-md text-title-md md:flex">
<<<<<<< HEAD
          {navItems.slice(0, 2).map((item, index) => {
            const className =
              index === 0
                ? "border-b-2 border-primary pb-1 text-primary transition-colors"
                : "text-on-surface-variant transition-colors hover:text-primary";

            return item.href === "/" ? (
              <Link className={className} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ) : (
              <a className={className} href={item.href} key={item.href}>
                {item.label}
              </a>
            );
          })}
=======
          {navItems.slice(0, 2).map((item, index) => (
            <a
              className={
                index === 0
                  ? "border-b-2 border-primary pb-1 text-primary transition-colors"
                  : "text-on-surface-variant transition-colors hover:text-primary"
              }
              href={item.href}
              key={item.href}
            >
              {t[item.labelKey]}
            </a>
          ))}
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
        </div>

        <div className="pointer-events-none flex min-w-0 flex-shrink-0 justify-center px-12 text-center md:pointer-events-auto md:absolute md:left-1/2 md:px-0 md:-translate-x-1/2">
          <Link
            className="pointer-events-auto inline-flex min-w-0 items-center justify-center gap-2.5 text-primary transition-opacity hover:opacity-80 sm:gap-3"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-10 w-10 flex-shrink-0 rounded-full object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
              height={96}
              src="/brand/old-house-logo-round.png"
              width={96}
            />
            <span className="truncate font-display-lg text-[25px] leading-9 tracking-tight sm:text-headline-lg-mobile md:text-headline-lg">
              {restaurantInfo.name}
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-7 font-title-md text-title-md md:flex">
          {navItems.slice(2).map((item) => (
            <a className="text-on-surface-variant transition-colors hover:text-primary" href={item.href} key={item.href}>
              {t[item.labelKey]}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? t.closeMenu : t.openMenu}
          className="absolute right-margin-mobile top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary-fixed/70 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ height: "auto", opacity: 1, y: 0 }}
            className="overflow-hidden border-t border-outline-variant/30 bg-surface/95 shadow-lg backdrop-blur-xl md:hidden"
            exit={{ height: 0, opacity: 0, y: -10 }}
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate="open"
              className="mx-auto flex max-w-container-max flex-col gap-2 px-margin-mobile py-3"
              initial="closed"
              variants={{
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                open: { transition: { delayChildren: 0.08, staggerChildren: 0.055 } },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    closed: { opacity: 0, x: 10, filter: "blur(4px)" },
                    open: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                >
<<<<<<< HEAD
                  {item.href === "/" ? (
                    <Link
                      className="block rounded-lg px-4 py-3 font-title-md text-[17px] leading-6 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      className="block rounded-lg px-4 py-3 font-title-md text-[17px] leading-6 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
=======
                  {t[item.labelKey]}
                </motion.a>
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
              ))}
              <motion.div
                className="px-4 pb-3 pt-2"
                variants={{
                  closed: { opacity: 0, x: 10, filter: "blur(4px)" },
                  open: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
              >
                <LanguageSwitcher />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
