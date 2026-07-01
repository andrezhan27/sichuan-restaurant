import { menuLandingImages } from "@/data/menu";

export type LandingImage = {
  alt: string;
  src: string;
};

export type Dish = {
  title: string;
  price: string;
  alt: string;
  src: string;
  featured?: boolean;
  description?: string;
};

export const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAp1kCt75SVFYcQyyBKc3VK9zA6kWrZTTikssu2c_KllX1UODprobdvYC1tBB0OTiL05y_apyVcaKMi0zFJnbw_3gqC2xDHs8b3HikJhMHVxAjHVrBxQLx13S0jzDdb_9V3fjJM3aFl10avXQejLZDOwdzd16LcHbgqBnCSxT35REkhFTYj6y-1pDQH4p8JhrQp5PGoea2BDgJrmxXL666I1tlgTubSelffkP29vbeIsl16o8x1_mZESUT9IUy_XTsN-UDRc7-8xBc";

export const ambienceTop: LandingImage[] = [
  {
    alt: "The Old House dining room with red lanterns",
    src: "/space/DSC01749%20copiar.webp",
  },
  {
    alt: "The Old House interior dining room",
    src: "/space/DSC01784%20copiar.webp",
  },
  {
    alt: "The Old House wood partition dining area",
    src: "/space/DSC05026%20copiar.webp",
  },
  {
    alt: "The Old House kitchen preparation",
    src: "/space/DSC07570%20copiar.webp",
  },
  {
    alt: "The Old House chef at work",
    src: "/space/DSC07618%20copiar.webp",
  },
  {
    alt: "The Old House kitchen detail",
    src: "/space/DSC07713%20copiar.webp",
  },
  {
    alt: "The Old House interior with red lantern and porcelain shelves",
    src: "/space/interior-lantern-shelves.webp",
  },
  {
    alt: "The Old House exterior terrace at night",
    src: "/space/exterior-night-terrace.webp",
  },
  {
    alt: "Dining room with red lanterns and carved wood screens",
    src: "/space/dining-room-red-lanterns.webp",
  },
];

export const ambienceBottom: LandingImage[] = [
  {
    alt: "Dining room with set tables and warm lantern light",
    src: "/space/dining-room-set-tables.webp",
  },
  {
    alt: "Private dining room with round table and wall mural",
    src: "/space/private-dining-room.webp",
  },
  {
    alt: "Chef preparing wontons in the kitchen",
    src: "/space/chef-prep-wontons.webp",
  },
  {
    alt: "Outdoor terrace with covered tables",
    src: "/space/outdoor-terrace.webp",
  },
  {
    alt: "The Old House exterior sign lit at night",
    src: "/space/night-exterior-sign.webp",
  },
  {
    alt: "Chef cooking over wok flame",
    src: "/space/wok-flame-kitchen.webp",
  },
  {
    alt: "Handmade noodles held by chef",
    src: "/space/handmade-noodles.webp",
  },
  {
    alt: "Interior corridor with wood partitions and red lanterns",
    src: "/space/interior-wood-partitions.webp",
  },
  {
    alt: "Red lanterns suspended above a dining table",
    src: "/space/lanterns-over-dining.webp",
  },
];

export const dishes: Dish[] = [
  {
    title: "Imperial Peking Duck",
    price: "€48.00",
    alt: menuLandingImages[0].alt,
    featured: true,
    description: "Our signature preparation, served with hand-rolled pancakes, scallions, and hoisin sauce.",
    src: menuLandingImages[0].src,
  },
  {
    title: "Signature Mapo Tofu",
    price: "€22.00",
    alt: menuLandingImages[1].alt,
    src: menuLandingImages[1].src,
  },
  {
    title: "Dan Dan Noodles",
    price: "€18.00",
    alt: menuLandingImages[2].alt,
    src: menuLandingImages[2].src,
  },
  {
    title: "Gong Bao Chicken",
    price: "€24.00",
    alt: menuLandingImages[3].alt,
    src: menuLandingImages[3].src,
  },
  {
    title: "Steamed Fish with Chili",
    price: "€32.00",
    alt: menuLandingImages[4].alt,
    src: menuLandingImages[4].src,
  },
  {
    title: "Dim Sum Selection",
    price: "€26.00",
    alt: menuLandingImages[5].alt,
    src: menuLandingImages[5].src,
  },
  {
    title: "Kung Pao Chicken",
    price: "€24.00",
    alt: menuLandingImages[6].alt,
    src: menuLandingImages[6].src,
  },
  {
    title: "Sichuan Hot Pot",
    price: "€45.00",
    alt: menuLandingImages[7].alt,
    src: menuLandingImages[7].src,
  },
];

export const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCp8jEDhJYteb7E1Yaz741yxI5MvpDTll9tifqMI4StB1HfRnI7gzIfTU89mtGzWp4hQYAECH2mthp3wBBe28ZDbzn4-9f2xC5Aq8NoXPi12zWwxI0mXNXV490t5b_Hrf0qkHF9EczpN-KhwTBecHMFcnApgjkswSSfuP12zZhlKzFovYXiYUjrL5kJIFvei1KWturkMVXhSBe8XozR7UH9ffqXvWunNFunFpokjW-ip81IC_TzZweQKfEFE5ONE1IXmksBtIzX-UE";
