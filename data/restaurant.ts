import type { LocalizedText } from "@/data/translations";

export const restaurantInfo = {
  name: "Sichuan Restaurant",
  chineseName: "川渝印象",
  address: "Av. Visconde de Valmor 15A, 1000-290 Lisboa",
  phone: "+351 960 017 524",
  phoneUrl: "tel:+351960017524",
  mapUrl: "https://maps.app.goo.gl/mgASs7hh9nhriLa99",
  openingHours: [
    { en: "Lunch · 12:00 – 15:00", pt: "Almoço · 12:00 – 15:00" },
    { en: "Dinner · 18:30 – 23:00", pt: "Jantar · 18:30 – 23:00" },
  ] satisfies LocalizedText[],
  reservationUrl: "tel:+351960017524",
  complaintsBookUrl: "https://www.livroreclamacoes.pt/Inicio/",
} as const;
