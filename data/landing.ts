import { menuLandingImages } from "@/data/menu";
import type { LocalizedText } from "@/data/translations";

export type LandingImage = {
  alt: LocalizedText;
  src: string;
};

export type Dish = {
  title: LocalizedText;
  alt: LocalizedText;
  src: string;
  featured?: boolean;
  description?: LocalizedText;
};

export const heroImage = "/space/dining-room-set-tables.webp";

export const ambienceTop: LandingImage[] = [
  {
    alt: {
      en: "The Old House dining room with red lanterns",
      pt: "Sala de jantar do The Old House com lanternas vermelhas",
    },
    src: "/space/DSC01749%20copiar.webp",
  },
  {
    alt: {
      en: "The Old House interior with red lantern and porcelain shelves",
      pt: "Interior do The Old House com lanterna vermelha e prateleiras de porcelana",
    },
    src: "/space/interior-lantern-shelves.webp",
  },
  // {
  //   alt: {
  //     en: "The Old House kitchen preparation",
  //     pt: "Preparação na cozinha do The Old House",
  //   },
  //   src: "/space/DSC07570%20copiar.webp",
  // },
  {
    alt: {
      en: "Dining room with red lanterns and carved wood screens",
      pt: "Sala de jantar com lanternas vermelhas e biombos de madeira esculpida",
    },
    src: "/space/dining-room-red-lanterns.webp",
  },
  {
    alt: {
      en: "The Old House chef at work",
      pt: "Chef do The Old House em trabalho",
    },
    src: "/space/DSC07618%20copiar.webp",
  },
  {
    alt: {
      en: "The Old House exterior terrace at night",
      pt: "Terraço exterior do The Old House à noite",
    },
    src: "/space/exterior-night-terrace.webp",
  },
  {
    alt: {
      en: "The Old House kitchen detail",
      pt: "Detalhe da cozinha do The Old House",
    },
    src: "/space/DSC07713%20copiar.webp",
  },
  {
    alt: {
      en: "The Old House wood partition dining area",
      pt: "Zona de refeições do The Old House com divisórias de madeira",
    },
    src: "/space/DSC05026%20copiar.webp",
  },
  {
    alt: {
      en: "The Old House interior dining room",
      pt: "Sala interior do The Old House",
    },
    src: "/space/DSC01784%20copiar.webp",
  },
];

export const ambienceBottom: LandingImage[] = [
  {
    alt: {
      en: "Private dining room with round table and wall mural",
      pt: "Sala privada com mesa redonda e mural na parede",
    },
    src: "/space/private-dining-room.webp",
  },
  {
    alt: {
      en: "Chef preparing wontons in the kitchen",
      pt: "Chef a preparar wontons na cozinha",
    },
    src: "/space/chef-prep-wontons.webp",
  },
  {
    alt: {
      en: "Outdoor terrace with covered tables",
      pt: "Terraço exterior com mesas cobertas",
    },
    src: "/space/outdoor-terrace.webp",
  },
  {
    alt: {
      en: "Dining room with set tables and warm lantern light",
      pt: "Sala de jantar com mesas postas e luz quente de lanternas",
    },
    src: "/space/dining-room-set-tables.webp",
  },
  {
    alt: {
      en: "The Old House exterior sign lit at night",
      pt: "Letreiro exterior do The Old House iluminado à noite",
    },
    src: "/space/night-exterior-sign.webp",
  },
  {
    alt: {
      en: "Chef cooking over wok flame",
      pt: "Chef a cozinhar sobre a chama do wok",
    },
    src: "/space/wok-flame-kitchen.webp",
  },
  {
    alt: {
      en: "Handmade noodles held by chef",
      pt: "Noodles feitos à mão segurados pelo chef",
    },
    src: "/space/handmade-noodles.webp",
  },
  {
    alt: {
      en: "Interior corridor with wood partitions and red lanterns",
      pt: "Corredor interior com divisórias de madeira e lanternas vermelhas",
    },
    src: "/space/interior-wood-partitions.webp",
  },
  {
    alt: {
      en: "Red lanterns suspended above a dining table",
      pt: "Lanternas vermelhas suspensas sobre uma mesa de jantar",
    },
    src: "/space/lanterns-over-dining.webp",
  },
];

export const dishes: Dish[] = [
  {
    title: {
      en: "Signature Chicken",
      pt: "Frango The Old House",
    },
    alt: menuLandingImages[0].alt,
    featured: true,
    description: {
      en: "Our signature preparation, served with hand-rolled pancakes, scallions, and hoisin sauce.",
      pt: "A nossa preparação de assinatura, servida com panquecas enroladas à mão, cebolinho e molho hoisin.",
    },
    src: menuLandingImages[0].src,
  },
  {
    title: {
      en: "Sichuan Style Noodles with/without Spicy",
      pt: "Noodles com Estilo Sichuan com/sem Picante",
    },
    alt: menuLandingImages[1].alt,
    src: menuLandingImages[1].src,
  },
  {
    title: {
      en: "Chicken with Sweet and Sour Sauce",
      pt: "Frango Agridoce",
    },
    alt: menuLandingImages[2].alt,
    src: menuLandingImages[2].src,
  },
  {
    title: {
      en: "Steamed Shrimp Ball",
      pt: "Gambas a Vapor com Noodles Translúcido",
    },
    alt: menuLandingImages[3].alt,
    src: menuLandingImages[3].src,
  },
  {
    title: {
      en: "Sea Bass in Hot Chili Oil",
      pt: "Robalo Cozido em Molho Picante",
    },
    alt: menuLandingImages[4].alt,
    src: menuLandingImages[4].src,
  },
  {
    title: {
      en: "Prawn with Tomato Sauce",
      pt: "Gambas com Molho de Tomate",
    },
    alt: menuLandingImages[5].alt,
    src: menuLandingImages[5].src,
  },
  {
    title: {
      en: "Sliced Beef in Hot Chili Oil",
      pt: "Bife com Molho Picante",
    },
    alt: menuLandingImages[6].alt,
    src: menuLandingImages[6].src,
  },
  {
    title: {
      en: "Tofu in Hot Sauce",
      pt: "Tofu em Molho Picante",
    },
    alt: menuLandingImages[7].alt,
    src: menuLandingImages[7].src,
  },
];

export const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCp8jEDhJYteb7E1Yaz741yxI5MvpDTll9tifqMI4StB1HfRnI7gzIfTU89mtGzWp4hQYAECH2mthp3wBBe28ZDbzn4-9f2xC5Aq8NoXPi12zWwxI0mXNXV490t5b_Hrf0qkHF9EczpN-KhwTBecHMFcnApgjkswSSfuP12zZhlKzFovYXiYUjrL5kJIFvei1KWturkMVXhSBe8XozR7UH9ffqXvWunNFunFpokjW-ip81IC_TzZweQKfEFE5ONE1IXmksBtIzX-UE";
