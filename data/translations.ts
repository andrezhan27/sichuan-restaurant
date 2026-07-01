import type { Language } from "@/components/LanguageProvider";

export const translations: Record<
  Language,
  {
    nav: {
      home: string;
      menu: string;
      book: string;
      contacts: string;
      openMenu: string;
      closeMenu: string;
      language: string;
    };
    hero: {
      tagline: string;
      cta: string;
    };
    ambience: {
      title: string;
      intro: string;
    };
    menu: {
      title: string;
      intro: string;
      cta: string;
    };
    reservation: {
      title: string;
      date: string;
      time: string;
      guests: string;
      name: string;
      namePlaceholder: string;
      confirm: string;
      people: string;
      peoplePlus: string;
      visit: string;
      address: string;
      hours: string;
      contact: string;
      mapAlt: string;
    };
    footer: {
      tagline: string;
      menu: string;
      contacts: string;
      book: string;
      privacy: string;
      complaints: string;
      designedBy: string;
      rights: string;
    };
  }
> = {
  pt: {
    nav: {
      home: "Início",
      menu: "Menu",
      book: "Reservar",
      contacts: "Contactos",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      language: "Idioma",
    },
    hero: {
      tagline: "Excelência culinária chinesa de assinatura, cuidadosamente criada em Lisboa.",
      cta: "Reservar Mesa",
    },
    ambience: {
      title: "O Nosso Espaço",
      intro: "Entre num ambiente onde a elegância minimalista encontra as texturas ricas da arte tradicional chinesa.",
    },
    menu: {
      title: "Pratos de Assinatura",
      intro: "Uma viagem cuidada pelos sabores intensos e subtis de Sichuan.",
      cta: "Explorar menu",
    },
    reservation: {
      title: "Reserve a Sua Mesa",
      date: "Data",
      time: "Hora",
      guests: "Pessoas",
      name: "Nome",
      namePlaceholder: "Nome completo",
      confirm: "Confirmar Reserva",
      people: "Pessoas",
      peoplePlus: "5+ Pessoas",
      visit: "Visite-nos",
      address: "Morada",
      hours: "Horário",
      contact: "Contacto",
      mapAlt: "Localização no mapa",
    },
    footer: {
      tagline: "Excelência culinária chinesa de assinatura, cuidadosamente criada em Lisboa.",
      menu: "Menu",
      contacts: "Contactos",
      book: "Reservar Mesa",
      privacy: "Privacidade",
      complaints: "Livro de Reclamação",
      designedBy: "Desenvolvido por",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      book: "Book a Table",
      contacts: "Contacts",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    hero: {
      tagline: "Signature Chinese culinary excellence, artfully curated in Lisbon.",
      cta: "Book Your Table",
    },
    ambience: {
      title: "Our Space",
      intro: "Step into a realm where minimalist elegance meets the rich textures of traditional Chinese artistry.",
    },
    menu: {
      title: "Our Signature Dishes",
      intro: "A curated journey through the bold and nuanced flavors of Sichuan.",
      cta: "Explore our menu",
    },
    reservation: {
      title: "Reserve Your Table",
      date: "Date",
      time: "Time",
      guests: "Guests",
      name: "Name",
      namePlaceholder: "John Doe",
      confirm: "Confirm Reservation",
      people: "People",
      peoplePlus: "5+ People",
      visit: "Visit Us",
      address: "Address",
      hours: "Hours",
      contact: "Contact",
      mapAlt: "Map Location",
    },
    footer: {
      tagline: "Signature Chinese culinary excellence, artfully curated in Lisbon.",
      menu: "Menu",
      contacts: "Contacts",
      book: "Book a Table",
      privacy: "Privacy",
      complaints: "Complaints Book",
      designedBy: "Designed by",
      rights: "All Rights Reserved.",
    },
  },
};
