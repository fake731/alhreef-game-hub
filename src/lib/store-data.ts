import ps4Slim from "@/assets/ps4-slim.jpg.asset.json";
import ps4Pro from "@/assets/ps4-pro.jpg.asset.json";
import ps4Fat from "@/assets/ps4-fat.jpg.asset.json";
import ps3 from "@/assets/ps3.jpg.asset.json";
import logo from "@/assets/logo.jpg.asset.json";
import review1 from "@/assets/review-1.jpg.asset.json";
import review2 from "@/assets/review-2.jpg.asset.json";
import review3 from "@/assets/review-3.jpg.asset.json";
import review4 from "@/assets/review-4.jpg.asset.json";
import review5 from "@/assets/review-5.png.asset.json";

export const LOGO_URL = logo.url;

export const WHATSAPP_NUMBER = "962793355255";
export const WHATSAPP_DISPLAY = "07 9335 5255";
export const INSTAGRAM_URL = "https://www.instagram.com/alhreefstore";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61572359860727";
export const ADDRESS = "ش عبد الله شعبانة، عمّان، الأردن";
export const LAT = 31.964498795875844;
export const LNG = 35.846608773544006;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  condition: string;
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "ps4-slim",
    name: "بلايستيشن 4 سليم",
    subtitle: "PS 4 SLIM",
    price: 130,
    image: ps4Slim.url,
    condition: "مكفول",
    features: ["200 لعبة", "مكفول سنة", "مع يد", "مع كيبلاته", "مع توصيل"],
  },
  {
    id: "ps4-pro",
    name: "بلايستيشن 4 برو",
    subtitle: "PS 4 PRO",
    price: 165,
    image: ps4Pro.url,
    condition: "مكفول",
    features: ["200 لعبة", "مكفول سنة", "مع يد", "مع كيبلاته", "مع توصيل"],
  },
  {
    id: "ps4-fat",
    name: "بلايستيشن 4 فات",
    subtitle: "PS 4 FAT",
    price: 110,
    image: ps4Fat.url,
    condition: "مكفول",
    features: ["200 لعبة", "مكفول سنة", "مع يد", "مع كيبلاته", "مع توصيل"],
  },
  {
    id: "ps3",
    name: "بلايستيشن 3",
    subtitle: "PS 3",
    price: 69,
    image: ps3.url,
    condition: "ألعاب مهداة",
    features: ["ألعاب مهداة", "مع يد", "مع كيبلاته", "مع توصيل"],
  },
];

export const REVIEW_IMAGES = [
  review5.url,
  review4.url,
  review3.url,
  review2.url,
  review1.url,
];
