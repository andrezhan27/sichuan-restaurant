"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { translations } from "@/data/translations";
import { Facebook, Instagram, Music2, type LucideIcon } from "lucide-react";
import Image from "next/image";

const socialIcons: Record<(typeof restaurantInfo.socials)[number]["label"], LucideIcon> = {
  Instagram,
  TikTok: Music2,
  Facebook,
};

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const footerLinks = [
    {
      label: t.menu,
      href: "#menu",
    },
    {
      label: t.contacts,
      href: "#contacts",
    },
    {
      label: t.book,
      href: restaurantInfo.reservationUrl,
    },
    {
      label: t.privacy,
      href: "#",
    },
    {
      label: t.complaints,
      href: "#",
    },
  ];

  return (
    <footer className="flat no shadows w-full border-t border-outline-variant bg-surface-container-highest py-10 dark:bg-surface-dim md:py-12">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-10 px-margin-mobile md:grid-cols-[minmax(260px,1fr)_minmax(0,2.4fr)] md:px-margin-desktop">
        <div className="flex min-h-36 flex-col justify-between gap-8">
<<<<<<< HEAD
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                aria-hidden="true"
                className="h-16 w-16 flex-shrink-0 rounded-full object-contain"
                height={128}
                src="/brand/old-house-logo-round.png"
                width={128}
              />
              <span className="font-display-lg text-headline-lg-mobile leading-9 tracking-tight text-primary">
                {restaurantInfo.name}
              </span>
            </div>
            <p className="max-w-xs font-title-md text-sm text-on-surface-variant">{restaurantInfo.address}</p>
=======
          <div className="flex flex-col gap-3">
            <span className="font-display-lg text-headline-lg-mobile tracking-tight text-primary">{restaurantInfo.name}</span>
            <p className="max-w-xs font-title-md text-sm text-on-surface-variant">{t.tagline}</p>
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
          </div>

          <FooterCredit className="hidden md:block" designedBy={t.designedBy} rights={t.rights} />
        </div>

        <div className="flex flex-col gap-8 md:items-end">
          <div className="flex flex-wrap items-center gap-x-9 gap-y-4 md:justify-end">
            {footerLinks.map((link) => (
              <FooterLink href={link.href} key={link.label}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            {restaurantInfo.socials.map((social) => {
              const Icon = socialIcons[social.label];

              return (
                <a
                  aria-label={social.label}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:bg-primary-fixed/40 hover:text-primary"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={20} strokeWidth={1.9} />
                </a>
              );
            })}
          </div>
        </div>

        <FooterCredit className="md:hidden" designedBy={t.designedBy} rights={t.rights} />
      </div>
    </footer>
  );
}

function FooterLink({ children, href }: { children: string; href: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-on-surface-variant opacity-90 transition-colors hover:text-primary hover:opacity-100"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

function FooterCredit({ className = "", designedBy, rights }: { className?: string; designedBy: string; rights: string }) {
  return (
    <p className={`font-body-md text-sm text-on-surface opacity-70 dark:text-on-surface-variant ${className}`}>
      <a className="transition-colors hover:text-primary" href={restaurantInfo.designer.href} rel="noreferrer" target="_blank">
        {`${designedBy} ${restaurantInfo.designer.label}. ${rights}`}
      </a>
    </p>
  );
}
