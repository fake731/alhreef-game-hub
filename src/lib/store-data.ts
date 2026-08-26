import ps4Slim from "@/assets/ps4-slim.jpg.asset.json";
import ps4Pro from "@/assets/ps4-pro.jpg.asset.json";
import ps4Fat from "@/assets/ps4-fat.jpg.asset.json";
import ps3 from "@/assets/ps3.jpg.asset.json";
import ps5FatDigital from "@/assets/ps5-fat-digital.jpg.asset.json";
import ps5FatDisc from "@/assets/ps5-fat-disc.jpg.asset.json";
import ps5SlimDigital from "@/assets/ps5-slim-digital.jpg.asset.json";
import ps5SlimDisc from "@/assets/ps5-slim-disc.jpg.asset.json";
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
export const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
export const MAP_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&z=17&hl=ar&output=embed`;

export const DELIVERY_FEE = 3;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SECTIONS = [
  { no: 1, to: "/1", label: "الأجهزة" },
  { no: 2, to: "/2", label: "خدماتنا" },
  { no: 3, to: "/3", label: "موقعنا" },
  { no: 4, to: "/4", label: "المراجعات" },
  { no: 5, to: "/5", label: "التوصيل" },
  { no: 6, to: "/6", label: "تواصل معنا" },
] as const;

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  condition?: string;
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "ps5-slim-disc",
    name: "بلايستيشن 5 سليم ديسك",
    subtitle: "PS 5 SLIM DISC",
    price: 460,
    image: ps5SlimDisc.url,
    features: ["مكفول سنة", "مع يد", "مع أسلاكه"],
  },
  {
    id: "ps5-slim-digital",
    name: "بلايستيشن 5 سليم ديجيتال",
    subtitle: "PS 5 SLIM DIGITAL",
    price: 440,
    image: ps5SlimDigital.url,
    features: ["مكفول سنة", "مع يد", "مع أسلاكه"],
  },
  {
    id: "ps5-fat-disc",
    name: "بلايستيشن 5 فات ديسك",
    subtitle: "PS 5 FAT DISC",
    price: 430,
    image: ps5FatDisc.url,
    features: ["مكفول سنة", "مع يد", "مع أسلاكه"],
  },
  {
    id: "ps5-fat-digital",
    name: "بلايستيشن 5 فات ديجيتال",
    subtitle: "PS 5 FAT DIGITAL",
    price: 400,
    image: ps5FatDigital.url,
    features: ["مكفول سنة", "مع يد", "مع أسلاكه"],
  },
  {
    id: "ps4-pro",
    name: "بلايستيشن 4 برو",
    subtitle: "PS 4 PRO",
    price: 170,
    image: ps4Pro.url,
    features: ["200 لعبة", "مكفول سنة", "مع يد", "مع كيبلاته"],
  },
  {
    id: "ps4-slim",
    name: "بلايستيشن 4 سليم",
    subtitle: "PS 4 SLIM",
    price: 135,
    image: ps4Slim.url,
    features: ["200 لعبة", "مكفول سنة", "مع يد", "مع كيبلاته"],
  },
  {
    id: "ps4-fat",
    name: "بلايستيشن 4 فات",
    subtitle: "PS 4 FAT",
    price: 115,
    image: ps4Fat.url,
    features: ["200 لعبة", "مكفول سنة", "مع يد", "مع كيبلاته"],
  },
  {
    id: "ps3",
    name: "بلايستيشن 3",
    subtitle: "PS 3",
    price: 74,
    image: ps3.url,
    condition: "ألعاب مهداة",
    features: ["ألعاب مهداة", "مع يد", "مع كيبلاته"],
  },
];

export const REVIEW_IMAGES = [
  review5.url,
  review4.url,
  review3.url,
  review2.url,
  review1.url,
];

export type Testimonial = {
  name: string;
  meta: string;
  when: string;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "أدهم العثامنة",
    meta: "مراجعتان (2)",
    when: "قبل شهرين",
    text: "الشباب فهمانين جدا وبنصحوك بلي بناسبك بعد تجربتي الشخصية بنصح وبشدة مع انهم بغلبو شوي لبين ما يردو عليك بس لما رحت وشفت عذرتهم الله يباركلهم على السمعة الطيبة والبضاعة الي جد نضيفة وخلي الزبون يجيب زبون",
  },
  {
    name: "Jeaner",
    meta: "3 مراجعات · صورتان (2)",
    when: "قبل 5 أشهر",
    text: "والله الحريف ما قصر محل مرتب والشياب فعلا فهمانين جدا وبعطوك الي بناسبك صراحة جدا بنصح كانت الي تجربة سيئه مع محل ثاني وللحقيقة الحريف زبطني شكرا ❤️",
  },
  {
    name: "Hayat Alserhan",
    meta: "3 مراجعات · صورتان (2)",
    when: "قبل 4 أشهر",
    text: "محل فخم جدا وتعاملهم مرتب جد بعد تجربة بحسسوك انو المحل الك كنت متوقع لانو المحل مشهور رح تطلع فاتورتي كثير بس جد راعوني والله مرتبين بذات الحريف شخصيا عبدالله القدومي جد فخم وشكرا على الهدية",
  },
  {
    name: "Ahmad Kall",
    meta: "مراجعة واحدة · صورة واحدة",
    when: "قبل 3 أشهر",
    text: "والله الجماعة مرتبين وما شاء الله عليهم وتعاملهم جد احسن محل",
  },
];
