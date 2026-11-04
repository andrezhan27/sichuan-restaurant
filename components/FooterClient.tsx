"use client";
import { Brand } from "@/components/Brand";
import { useLanguage } from "@/components/LanguageProvider";
import { restaurantInfo } from "@/data/restaurant";
import { translations } from "@/data/translations";
import type { LegalLinks } from "@/lib/legal-links";
import Link from "next/link";

export function FooterClient({ legalLinks }: { legalLinks: LegalLinks }) {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Brand />
          <p>{t.tagline}</p>
          <nav aria-label={t.navigation}>
            <Link href="/#menu">{t.menu}</Link>
            <Link href="/#contacts">{t.contacts}</Link>
            <a href={restaurantInfo.phoneUrl}>{t.book}</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sichuan Restaurant. {t.rights}
          </p>
          <nav aria-label={t.legal}>
            {legalLinks.privacyPolicyUrl && (
              <a
                href={legalLinks.privacyPolicyUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.privacyPolicy}
              </a>
            )}
            {legalLinks.termsAndConditionsUrl && (
              <a
                href={legalLinks.termsAndConditionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.termsAndConditions}
              </a>
            )}
            <a
              href={restaurantInfo.complaintsBookUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.complaints}
            </a>
          </nav>
          <a className="footer-credit" href="https://intelis.pt" target="_blank" rel="noreferrer">Powered by <span>Intelis</span></a>
        </div>
      </div>
    </footer>
  );
}
