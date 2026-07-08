import type { Language } from "@/components/LanguageProvider";

export type LocalizedText = Record<Language, string>;

export function localize(value: LocalizedText, language: Language) {
  return value[language];
}

const copy = {
  nav: {
    home: {
      en: "Home",
      pt: "Início",
    },
    menu: {
      en: "Menu",
      pt: "Menu",
    },
    book: {
      en: "Book a Table",
      pt: "Reservar",
    },
    contacts: {
      en: "Contacts",
      pt: "Contactos",
    },
    openMenu: {
      en: "Open menu",
      pt: "Abrir menu",
    },
    closeMenu: {
      en: "Close menu",
      pt: "Fechar menu",
    },
    language: {
      en: "Language",
      pt: "Idioma",
    },
  },
  hero: {
    taglineLines: [
      {
        en: "Signature Chinese culinary excellence,",
        pt: "Excelência culinária Chinesa de assinatura,",
      },
      {
        en: "artfully curated in Lisbon.",
        pt: "cuidadosamente criada em Lisboa.",
      },
    ],
    tagline: {
      en: "Signature Chinese culinary excellence, artfully curated in Lisbon.",
      pt: "Excelência culinária Chinesa de assinatura, cuidadosamente criada em Lisboa.",
    },
    cta: {
      en: "Book Your Table",
      pt: "Reservar Mesa",
    },
  },
  ambience: {
    title: {
      en: "Our Space",
      pt: "O Nosso Espaço",
    },
    intro: {
      en: "Step into a realm where minimalist elegance meets the rich textures of traditional Chinese artistry.",
      pt: "Entre num ambiente onde a elegância minimalista encontra as texturas ricas da arte tradicional Chinesa.",
    },
  },
  menu: {
    title: {
      en: "Our Signature Dishes",
      pt: "Pratos de Assinatura",
    },
    intro: {
      en: "A curated journey through the bold and nuanced flavors of Sichuan.",
      pt: "Uma viagem cuidada pelos sabores intensos e subtis de Sichuan.",
    },
    cta: {
      en: "Explore our menu",
      pt: "Explorar menu",
    },
  },
  menuPage: {
    title: {
      en: "Menu",
      pt: "Menu",
    },
    intro: {
      en: "A generous Sichuan menu from The Old House, moving from handmade dim sum and slow-built soups to wok-fired vegetables, seafood, hot dishes, and house signatures.",
      pt: "Um menu generoso de Sichuan no The Old House, dos dim sum feitos à mão e sopas apuradas aos legumes no wok, mariscos, pratos quentes e assinaturas da casa.",
    },
    backHome: {
      en: "Back to home",
      pt: "Voltar ao início",
    },
    fullMenu: {
      en: "View Full Menu",
      pt: "Ver Menu Completo",
    },
    highlights: {
      en: "Menu Highlights",
      pt: "Destaques do Menu",
    },
  },
  reservation: {
    title: {
      en: "Reserve Your Table",
      pt: "Reserve a Sua Mesa",
    },
    intro: {
      en: "Choose your date, time, and party size through our secure online booking experience.",
      pt: "Escolha a data, a hora e o número de pessoas através da nossa experiência de reserva online segura.",
    },
    date: {
      en: "Date",
      pt: "Data",
    },
    time: {
      en: "Time",
      pt: "Hora",
    },
    guests: {
      en: "Guests",
      pt: "Pessoas",
    },
    name: {
      en: "Name",
      pt: "Nome",
    },
    namePlaceholder: {
      en: "Full name",
      pt: "Nome completo",
    },
    confirm: {
      en: "Book a Table",
      pt: "Reservar Mesa",
    },
    people: {
      en: "People",
      pt: "Pessoas",
    },
    peoplePlus: {
      en: "5+ People",
      pt: "5+ Pessoas",
    },
    visit: {
      en: "Visit Us",
      pt: "Visite-nos",
    },
    address: {
      en: "Address",
      pt: "Morada",
    },
    hours: {
      en: "Hours",
      pt: "Horário",
    },
    contact: {
      en: "Contact",
      pt: "Contacto",
    },
    openMap: {
      en: "Open map",
      pt: "Abrir mapa",
    },
    mapAlt: {
      en: "Map location",
      pt: "Localização no mapa",
    },
  },
  footer: {
    tagline: {
      en: "Signature Chinese culinary excellence, artfully curated in Lisbon.",
      pt: "Excelência culinária Chinesa de assinatura, cuidadosamente criada em Lisboa.",
    },
    menu: {
      en: "Menu",
      pt: "Menu",
    },
    contacts: {
      en: "Contacts",
      pt: "Contactos",
    },
    book: {
      en: "Book a Table",
      pt: "Reservar Mesa",
    },
    privacy: {
      en: "Privacy",
      pt: "Privacidade",
    },
    complaints: {
      en: "Complaints Book",
      pt: "Livro de Reclamações",
    },
    designedBy: {
      en: "Designed by",
      pt: "Designed by",
    },
    rights: {
      en: "All rights reserved.",
      pt: "All rights reserved.",
    },
  },
} as const satisfies Record<string, unknown>;

function localizeObject<T>(value: T, language: Language): Localized<T> {
  if (Array.isArray(value)) {
    return value.map((item) => localizeObject(item, language)) as Localized<T>;
  }

  if (isLocalizedText(value)) {
    return value[language] as Localized<T>;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, localizeObject(child, language)]),
    ) as Localized<T>;
  }

  return value as Localized<T>;
}

function isLocalizedText(value: unknown): value is LocalizedText {
  return Boolean(
    value &&
      typeof value === "object" &&
      "en" in value &&
      "pt" in value &&
      typeof (value as LocalizedText).en === "string" &&
      typeof (value as LocalizedText).pt === "string",
  );
}

type Localized<T> = T extends LocalizedText
  ? string
  : T extends readonly (infer Item)[]
    ? Localized<Item>[]
    : T extends object
      ? { [Key in keyof T]: Localized<T[Key]> }
      : T;

export const translations: Record<Language, Localized<typeof copy>> = {
  en: localizeObject(copy, "en"),
  pt: localizeObject(copy, "pt"),
};
