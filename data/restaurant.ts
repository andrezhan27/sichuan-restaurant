import type { LocalizedText } from "@/data/translations";

export const restaurantInfo = {
  name: "The Old House",
  locationName: "The Old House Lisbon",
  tagline: "Signature Chinese Culinary Excellence, Artfully Curated in Lisbon.",
  heroTitle: "The Old House",
  address: "R. da Pimenta 9, 1990-254 Lisboa, Portugal",
  openingHours: [
    {
      en: "Mon - Fri: 12:00 - 15:00 | 19:00 - 23:30",
      pt: "Seg - Sex: 12:00 - 15:00 | 19:00 - 23:30",
    },
    {
      en: "Sat: 12:30 - 23:00",
      pt: "Sáb: 12:30 - 23:00",
    },
    {
      en: "Sun: 12:30 - 22:30",
      pt: "Dom: 12:30 - 22:30",
    },
  ] satisfies LocalizedText[],
  phone: "+351 21 896 9075",
  email: "reservations@theoldhouse.pt",
  reservationUrl: "/reservation",
  reservationWidgetUrl:
    process.env.NEXT_PUBLIC_DIG_IN_RESERVATION_WIDGET_URL ||
    "https://reserve.intelis.pt/theoldhouse",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/thisoldhouse/",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@the.old.house.res",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/TheOldHousePortugal/",
    },
  ],
  designer: {
    label: "Intelis",
    href: "https://intelis.pt/",
  },
} as const;
