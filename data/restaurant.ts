export const restaurantInfo = {
  name: "The Old House",
  locationName: "The Old House Lisbon",
  tagline: "Signature Chinese Culinary Excellence, Artfully Curated in Lisbon.",
  heroTitle: "The Old House",
<<<<<<< HEAD
  address: "R. da Pimenta 61, 1990-254 Lisboa, Portugal",
  openingHours: ["Tue - Sun: 12:00 - 15:00, 19:00 - 23:00", "Monday: Closed"],
  phone: "+351 21 893 2341",
  email: "geral@theoldhouseportugal.pt",
=======
  address: "R. da Pimenta 9, 1990-254 Lisboa, Portugal",
  openingHours: ["Mon - Fri: 12:00 - 15:00 | 19:00 - 23:30", "Sat: 12:30 - 23:00", "Sun: 12:30 - 22:30"],
  phone: "+351 21 896 9075",
  email: "reservations@theoldhouse.pt",
>>>>>>> 08eecf72b994b078013a5a14e7d27dda3129de18
  reservationUrl: process.env.NEXT_PUBLIC_DIG_IN_RESERVATION_WIDGET_URL || "#book",
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

export const footerLinks = [
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Contactos",
    href: "#contacts",
  },
  {
    label: "Book a Table",
    href: restaurantInfo.reservationUrl,
  },
  {
    label: "Privacy",
    href: "#",
  },
  {
    label: "Livro de Reclamação",
    href: "#",
  },
] as const;
