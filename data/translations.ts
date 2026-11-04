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
        en: "The bold flavours of Sichuan,",
        pt: "Os sabores intensos de Sichuan,",
      },
      {
        en: "shared at your table in Lisbon.",
        pt: "à sua mesa em Lisboa.",
      },
    ],
    tagline: {
      en: "The bold flavours of Sichuan, shared at your table in Lisbon.",
      pt: "Os sabores intensos de Sichuan, à sua mesa em Lisboa.",
    },
    cta: {
      en: "Book Your Table",
      pt: "Reservar Mesa",
    },
  },
  ambience: {
    title: {
      en: "Stay a little longer.",
      pt: "Sinta-se à mesa.",
    },
    intro: {
      en: "A little of Sichuan, in the heart of Lisbon.",
      pt: "Um pouco de Sichuan, no coração de Lisboa.",
    },
  },
  menu: {
    title: {
      en: "Our Specialties",
      pt: "As nossas especialidades",
    },
    intro: {
      en: "Fragrant peppercorns, vibrant chillies and dishes best enjoyed together.",
      pt: "Pimenta aromática, malaguetas vibrantes e pratos que sabem melhor partilhados.",
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
      en: "Discover a selection of dishes photographed at Sichuan Restaurant. Ask our team for the current menu, prices and allergen information.",
      pt: "Descubra uma seleção de pratos fotografados no Sichuan Restaurant. Consulte a nossa equipa para o menu atual, preços e informação sobre alergénios.",
    },
    backHome: {
      en: "Back to home",
      pt: "Voltar ao início",
    },
    highlights: {
      en: "Menu Highlights",
      pt: "Destaques do Menu",
    },
  },
  reservation: {
    title: {
      en: "Good company. Great flavour.",
      pt: "Boa companhia. Muito sabor.",
    },
    intro: {
      en: "Bring your appetite. Call us to arrange your table and confirm availability.",
      pt: "Traga o apetite. Ligue-nos para reservar a sua mesa e confirmar a disponibilidade.",
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
      en: "The bold flavours of Sichuan, shared at your table in Lisbon.",
      pt: "Os sabores intensos de Sichuan, à sua mesa em Lisboa.",
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
    navigation: {
      en: "Footer navigation",
      pt: "Navegação do rodapé",
    },
    legal: {
      en: "Legal",
      pt: "Legal",
    },
    privacyPolicy: {
      en: "Privacy Policy",
      pt: "Política de Privacidade",
    },
    termsAndConditions: {
      en: "Terms and Conditions",
      pt: "Termos e Condições",
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
      pt: "Todos os direitos reservados.",
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
      Object.entries(value).map(([key, child]) => [
        key,
        localizeObject(child, language),
      ]),
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
