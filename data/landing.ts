import { menuImages } from "@/data/menu";
import type { LocalizedText } from "@/data/translations";
import heroPhoto from "@/public/restaurant/sichuan-hero-desktop.webp";
import heroMobilePhoto from "@/public/restaurant/sichuan-hero-mobile.webp";

export const heroImage = heroPhoto;
export const heroMobileImage = heroMobilePhoto;
export const dishes = menuImages;
export const ambienceImages: { src: string; alt: LocalizedText; objectPosition?: string }[] = [
  {
    src: "/restaurant/space-dining-room.webp",
    objectPosition: "50% 58%",
    alt: {
      en: "Sichuan Restaurant dining room with cream seating, set tables and warm pendant lighting",
      pt: "Sala do Sichuan Restaurant com cadeiras em tons creme, mesas postas e iluminação quente",
    },
  },
  {
    src: "/restaurant/space-corner.webp",
    objectPosition: "50% 90%",
    alt: {
      en: "A warmly lit dining corner with cream banquettes and framed Chinese street photographs",
      pt: "Um recanto com iluminação quente, bancos em tons creme e fotografias de ruas chinesas",
    },
  },
  {
    src: "/restaurant/space-bonsai-detail.webp",
    objectPosition: "50% 50%",
    alt: {
      en: "Illuminated circular ornament with a miniature tree, ceramic mountains and a seated figure",
      pt: "Peça decorativa circular iluminada com uma árvore em miniatura, montanhas de cerâmica e uma figura sentada",
    },
  },
  {
    src: "/restaurant/sichuan-hero.webp",
    objectPosition: "50% 20%",
    alt: {
      en: "Colourful Chinese street murals, red lanterns and neon signs along the restaurant stairway",
      pt: "Murais coloridos de ruas chinesas, lanternas vermelhas e letreiros de néon junto à escadaria do restaurante",
    },
  },
  {
    src: "/restaurant/space-skylight.webp",
    objectPosition: "50% 78%",
    alt: {
      en: "Skylight and pendant lights above the restaurant’s cream banquette seating",
      pt: "Clarabóia e candeeiros suspensos sobre os bancos em tons creme do restaurante",
    },
  },
  {
    src: "/restaurant/space-stairway.webp",
    objectPosition: "48% 56%",
    alt: {
      en: "Warmly lit steps with wood panelling, plants and red lantern decorations",
      pt: "Degraus com iluminação quente, painéis de madeira, plantas e decorações de lanternas vermelhas",
    },
  },
];
