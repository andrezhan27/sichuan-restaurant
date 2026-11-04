import type { LocalizedText } from "@/data/translations";

export type MenuImage = {
  alt: LocalizedText;
  src: string;
  title: LocalizedText;
  description: LocalizedText;
};

// Menu images supplied by the user on 2026-11-02.
export const menuImages: MenuImage[] = [
  {
    src: "/restaurant/menu-sichuan-noodles.webp",
    title: { en: "Sichuan noodles", pt: "Noodles de Sichuan" },
    alt: {
      en: "Noodles with minced meat, spring onion and chilli oil in a white bowl",
      pt: "Noodles com carne picada, cebolinho e óleo de malagueta numa taça branca",
    },
    description: {
      en: "A comforting bowl of noodles with minced meat, fresh greens and chilli oil.",
      pt: "Uma taça reconfortante de noodles com carne picada, legumes frescos e óleo de malagueta.",
    },
  },
  {
    src: "/restaurant/menu-chilli-beef.webp",
    title: { en: "Sichuan chilli beef", pt: "Vaca com malagueta" },
    alt: {
      en: "Sliced beef in red chilli broth with coriander in a blue-and-white bowl",
      pt: "Vaca fatiada num caldo de malagueta com coentros numa taça azul e branca",
    },
    description: {
      en: "Sliced beef, dried chillies and fresh coriander in a rich red broth.",
      pt: "Vaca fatiada, malaguetas secas e coentros frescos num caldo vermelho intenso.",
    },
  },
  {
    src: "/restaurant/menu-chilli-fish.webp",
    title: { en: "Fish with chilli oil", pt: "Peixe com óleo de malagueta" },
    alt: {
      en: "Whole fish with red chillies and garlic, alongside fresh vegetables and tofu strips",
      pt: "Peixe inteiro com malaguetas vermelhas e alho, acompanhado de legumes e tiras de tofu",
    },
    description: {
      en: "Whole fish with chillies and garlic, served with a colourful selection of vegetables.",
      pt: "Peixe inteiro com malaguetas e alho, acompanhado de uma seleção de legumes cheia de cor.",
    },
  },
  {
    src: "/restaurant/menu-mapo-tofu.webp",
    title: { en: "Mapo tofu", pt: "Tofu mapo" },
    alt: {
      en: "Mapo tofu in a red sauce topped with spring onion, with stir-fried dishes and rice",
      pt: "Tofu mapo num molho vermelho com cebolinho, acompanhado de pratos salteados e arroz",
    },
    description: {
      en: "Tofu in a rich, spicy sauce, finished with fresh spring onion.",
      pt: "Tofu num molho intenso e picante, finalizado com cebolinho fresco.",
    },
  },
  {
    src: "/restaurant/menu-crispy-dumplings.webp",
    title: { en: "Pan-fried dumplings", pt: "Raviolis chineses crocantes" },
    alt: {
      en: "Golden pan-fried dumplings joined by a crisp lace skirt on a blue plate",
      pt: "Raviolis chineses dourados unidos por uma fina camada crocante num prato azul",
    },
    description: {
      en: "Golden dumplings with a delicate, crisp lace skirt.",
      pt: "Raviolis dourados com uma fina e delicada camada crocante.",
    },
  },
  {
    src: "/restaurant/menu-roast-duck.webp",
    title: { en: "Roast duck", pt: "Pato assado" },
    alt: {
      en: "Sliced roast duck with cucumber, spring onion, carrot and a sesame-topped dipping sauce",
      pt: "Pato assado fatiado com pepino, cebolinho, cenoura e molho com sésamo",
    },
    description: {
      en: "Crisp-skinned duck with fresh vegetables and a sesame-topped dipping sauce.",
      pt: "Pato de pele crocante com legumes frescos e um molho com sésamo.",
    },
  },
  {
    src: "/restaurant/menu-sesame-peas.webp",
    title: { en: "Peas with chilli & sesame", pt: "Ervilhas com malagueta e sésamo" },
    alt: {
      en: "Glossy green pea pods with dried chillies, garlic and sesame on a white plate",
      pt: "Vagens de ervilhas com malaguetas secas, alho e sésamo num prato branco",
    },
    description: {
      en: "Green pea pods tossed with chillies, garlic and a scattering of sesame.",
      pt: "Vagens de ervilhas salteadas com malaguetas, alho e um toque de sésamo.",
    },
  },
  {
    src: "/restaurant/menu-scallion-pancakes.webp",
    title: { en: "Scallion pancakes", pt: "Panquecas de cebolinho" },
    alt: {
      en: "Golden scallion pancake wedges served in a woven bamboo tray",
      pt: "Fatias douradas de panquecas de cebolinho servidas num tabuleiro de bambu",
    },
    description: {
      en: "Golden, flaky pancakes served in a bamboo tray. Made for sharing.",
      pt: "Panquecas douradas e estaladiças servidas em bambu. Feitas para partilhar.",
    },
  },
  {
    src: "/restaurant/menu-sharing-feast.webp",
    title: { en: "A table to share", pt: "Uma mesa para partilhar" },
    alt: {
      en: "A shared table of stir-fried dishes, roast duck, rice and thin wraps in a bamboo steamer",
      pt: "Uma mesa de pratos salteados, pato assado, arroz e crepes finos num cesto de bambu",
    },
    description: {
      en: "Stir-fried dishes, roast duck and delicate wraps, best enjoyed together.",
      pt: "Pratos salteados, pato assado e crepes delicados que sabem melhor partilhados.",
    },
  },
];
