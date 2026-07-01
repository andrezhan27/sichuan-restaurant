import type { LocalizedText } from "@/data/translations";

export type MenuImage = {
  alt: LocalizedText;
  src: string;
  title?: LocalizedText;
};

export const menuLandingImages: MenuImage[] = [
  {
    alt: {
      en: "The Old House signature dish",
      pt: "Prato de assinatura do The Old House",
    },
    src: "/menu-landing/signature-dish.webp",
  },
  {
    alt: {
      en: "The Old House Sichuan dish",
      pt: "Prato de Sichuan do The Old House",
    },
    src: "/menu-landing/sichuan-dish.webp",
  },
  {
    alt: {
      en: "The Old House plated specialty",
      pt: "Especialidade empratada do The Old House",
    },
    src: "/menu-landing/plated-specialty.webp",
  },
  {
    alt: {
      en: "The Old House chef selection",
      pt: "Seleção do chef do The Old House",
    },
    src: "/menu-landing/chef-selection.webp",
  },
  {
    alt: {
      en: "The Old House seafood dish",
      pt: "Prato de marisco do The Old House",
    },
    src: "/menu-landing/seafood-dish.webp",
  },
  {
    alt: {
      en: "The Old House dim sum dish",
      pt: "Prato de dim sum do The Old House",
    },
    src: "/menu-landing/dim-sum-dish.webp",
  },
  {
    alt: {
      en: "The Old House Sichuan chicken dish",
      pt: "Prato de frango de Sichuan do The Old House",
    },
    src: "/menu-landing/sichuan-chicken.webp",
  },
  {
    alt: {
      en: "The Old House hot pot dish",
      pt: "Prato hot pot do The Old House",
    },
    src: "/menu-landing/hot-pot-dish.webp",
  },
];

export const menuImages: MenuImage[] = [
  {
    alt: {
      en: "Crisp golden starter served with dipping sauce",
      pt: "Entrada dourada e crocante servida com molho",
    },
    src: "/menu/roasted-black-pork.webp",
    title: {
      en: "Roasted Black Pork",
      pt: "Porco Preto na Chapa",
    },
  },
  {
    alt: {
      en: "Sichuan cold appetizer with chili oil",
      pt: "Entrada fria de Sichuan com óleo de malagueta",
    },
    src: "/menu/old-house-hot-pot.webp",
    title: {
      en: "Sauteed Crab in Hot and Spicy Sauce",
      pt: "Spateira salteada em Molho Picante",
    },
  },
  {
    alt: {
      en: "Delicate Old House appetizer plate",
      pt: "Prato delicado de entrada do Old House",
    },
    src: "/menu/fish-pickled-mustard-greens.webp",
    title: {
      en: "Spicy Cuttlefish",
      pt: "Choco com Malagueta",
    },
  },
  {
    alt: {
      en: "Premium Sichuan dish served on a dark plate",
      pt: "Prato premium de Sichuan servido em prato escuro",
    },
    src: "/menu/steamed-scallop.webp",
    title: {
      en: "Steamed Shimp Ball",
      pt: "Gambas a Vapor com Noodles Translúcido",
    },
  },
  {
    alt: {
      en: "Old House plated dish with rich sauce",
      pt: "Prato do Old House com molho intenso",
    },
    src: "/menu/dan-dan-noodles.webp",
    title: {
      en: "Noodles Sichuan Style",
      pt: "Noodles ao Estilo de Sichuan/sem picante",
    },
  },
  {
    alt: {
      en: "Sichuan hot dish with vegetables",
      pt: "Prato quente de Sichuan com legumes",
    },
    src: "/menu/chinese-bun-omelet.webp",
    title: {
      en: "Nuts Bread",
      pt: "Pãozinho com Nozes",
    },
  },
  {
    alt: {
      en: "Chinese specialty served with chili oil",
      pt: "Especialidade chinesa servida com óleo de malagueta",
    },
    src: "/menu/old-house-roll.webp",
    title: {
      en: "Chinese Pancake",
      pt: "Panqueca Fina Chinesa",
    },
  },
  {
    alt: {
      en: "Old House meat dish with Sichuan seasoning",
      pt: "Prato de carne do Old House com tempero de Sichuan",
    },
    src: "/menu/xiaolong-bao.webp",
    title: {
      en: "Lao Fang Zi Xiao Long Bao",
      pt: "Lao Fang Zi Xiao Long Bao",
    },
  },
  {
    alt: {
      en: "House poultry dish with peppers",
      pt: "Prato de aves da casa com pimentos",
    },
    src: "/menu/wonton.webp",
    title: {
      en: "The Old House Wonton",
      pt: "Wonton te Old House com/sem picante",
    },
  },
  {
    alt: {
      en: "Dry pot dish in a metal serving pan",
      pt: "Prato dry pot servido em recipiente metálico",
    },
    src: "/menu/signature-chicken.webp",
    title: {
      en: "Chicken with Sweet and Sour Sauce",
      pt: "Frango Agridoce",
    },
  },
  {
    alt: {
      en: "Dry pot specialty served in a silver pan",
      pt: "Especialidade dry pot servida em recipiente prateado",
    },
    src: "/menu/sliced-pork-garlic-sauce.webp",
    title: {
      en: "Signature Chicken",
      pt: "Frango the Old House",
    },
  },
  // {
  //   alt: {
  //     en: "Sichuan dish with bright chili garnish",
  //     pt: "Prato de Sichuan com guarnição de malagueta",
  //   },
  //   src: "/menu/dry-beef.webp",
  //   title: {
  //     en: "Dry Beef",
  //     pt: "Vaca Seca",
  //   },
  // },
  {
    alt: {
      en: "Spicy seafood dish served in a metal pan",
      pt: "Prato picante de marisco servido em recipiente metálico",
    },
    src: "/menu/dry-pot-cauliflower.webp",
    title: {
      en: "Special Noodles with Seafood (or Beef/Chicken/Pork)",
      pt: "Noodles Salteada com Marisco (ou Vaca/Frango/Porco)",
    },
  },
  {
    alt: {
      en: "Rich soup dish with Sichuan aromatics",
      pt: "Sopa rica com aromas de Sichuan",
    },
    src: "/menu/kung-fu-soup.webp",
    title: {
      en: "Hot and Sour Soup",
      pt: "Sopa Àcida Picante",
    },
  },
  {
    alt: {
      en: "Delicate dim sum selection",
      pt: "Seleção delicada de dim sum",
    },
    src: "/menu/shredded-beef-old-fashioned.webp",
    title: {
      en: "Shredded Duck Casserole",
      pt: "Pato Desfiado na Caçarola",
    },
  },
  {
    alt: {
      en: "Hot pot dish from The Old House",
      pt: "Prato hot pot do The Old House",
    },
    src: "/menu/tofu-hot-sauce.webp",
    title: {
      en: "Tofu in Hot Sauce",
      pt: "Tofu em Molho Picante",
    },
  },
  {
    alt: {
      en: "House noodle dish with toppings",
      pt: "Prato de noodles da casa com guarnições",
    },
    src: "/menu/green-beans-pork.webp",
    title: {
      en: "Dry-Fried Green Beans with Pork",
      pt: "Feijão Verde com Carne Picada",
    },
  },
  {
    alt: {
      en: "Chef's noodle dish with Sichuan sauce",
      pt: "Prato do chef com molho de Sichuan",
    },
    src: "/menu/eggplant-garlic-sauce.webp",
    title: {
      en: "Eggplant with Garlic Sauce",
      pt: "Beringela com Molho de Alho",
    },
  },
  {
    alt: {
      en: "Wok-fried rice or noodle specialty",
      pt: "Especialidade de arroz ou noodles salteada no wok",
    },
    src: "/menu/noodles-soybean-paste.webp",
    title: {
      en: "Transparent Noodle with Minced Pork",
      pt: "Noodles translúcidos com Carne de Porco Picada/ sem picante",
    },
  },
  {
    alt: {
      en: "Golden fried prawns with dark dipping sauce",
      pt: "Gambas fritas douradas com molho escuro",
    },
    src: "/menu/sauteed-prawns.webp",
    title: {
      en: "Prawn with Tomato Sauce",
      pt: "Gambas com Molho de Tomate",
    },
  },
  {
    alt: {
      en: "Vegetable dish with Sichuan seasoning",
      pt: "Prato de legumes com tempero de Sichuan",
    },
    src: "/menu/pepper-beef-2.webp",
    title: {
      en: "Beef with Mushroom",
      pt: "Bife com Cogumelos",
    },
  },
  {
    alt: {
      en: "Classic chicken dish with peppers and sauce",
      pt: "Prato clássico de frango com pimentos e molho",
    },
    src: "/menu/beef-cumin.webp",
    title: {
      en: "Sliced Beef in Hot Chili Oil",
      pt: "Bife com Molho Picante",
    },
  },
  {
    alt: {
      en: "Seafood dish with fragrant sauce",
      pt: "Prato de marisco com molho aromático",
    },
    src: "/menu/tea-duck-cold.webp",
    title: {
      en: "Sweet Duck",
      pt: "Pato Delicioso",
    },
  },
  {
  //   alt: {
  //     en: "Roasted or grilled meat specialty",
  //     pt: "Especialidade de carne assada ou grelhada",
  //   },
  //   src: "/menu/sichuan-ribs.webp",
  //   title: {
  //     en: "Sichuan-Style Ribs",
  //     pt: "Entrecosto à Sichuan",
  //   },
  // },
  // {
    alt: {
      en: "Old House signature roasted dish",
      pt: "Prato assado de assinatura do Old House",
    },
    src: "/menu/dry-beef-pepper.webp",
    title: {
      en: "Beef with Cumin",
      pt: "Bife com Cominho",
    },
  },
  {
    alt: {
      en: "Seafood specialty with red chili and garnish",
      pt: "Especialidade de marisco com malagueta vermelha e guarnição",
    },
    src: "/menu/steamed-fish-chili.webp",
    title: {
      en: "Sea Bass in Hot Chili Oil",
      pt: "Robalo Cozido em Molho Picante",
    },
  },
  // {
  //   alt: {
  //     en: "Elegant seafood dish on dark tableware",
  //     pt: "Prato elegante de marisco em loiça escura",
  //   },
  //   src: "/menu/sweet-duck.webp",
  //   title: {
  //     en: "Sweet Duck",
  //     pt: "Pato Doce",
  //   },
  // },
  {
    alt: {
      en: "Sweet finishing dish from The Old House",
      pt: "Prato final doce do The Old House",
    },
    src: "/menu/stir-fried-chineseyam.webp",
    title: {
      en: "Chinese Water Plant Salad",
      pt: "Salada de Alga Chinesa",
    },
  },
  {
    alt: {
      en: "Final plated dessert or specialty dish",
      pt: "Sobremesa ou especialidade final empratada",
    },
    src: "/menu/old-house-fried-rice-2.webp",
    title: {
      en: "Soy Sauce Fried Rice",
      pt: "Arroz com Molho de Soja",
    },
  },
];
