import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CartProvider } from "@/lib/cart";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { LocationSection } from "@/components/site/LocationSection";
import { Reviews } from "@/components/site/Reviews";
import { Delivery } from "@/components/site/Delivery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CartSheet } from "@/components/site/CartSheet";
import { LOGO_URL } from "@/lib/store-data";

const TITLE = "الحريف ستور | بيع وشراء أجهزة بلايستيشن في عمّان";
const DESC =
  "الحريف ستور في عمّان: أجهزة PS4 و PS3 مكفولة مع 200 لعبة ويد وكيبلات، وخدمات بيع وشراء وتبديل وصيانة وأقراص ألعاب مع توصيل لكل الأردن.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "الحريف ستور",
          image: LOGO_URL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "ش عبد الله شعبانة",
            addressLocality: "عمّان",
            addressCountry: "JO",
          },
          geo: { "@type": "GeoCoordinates", latitude: 31.964498795875844, longitude: 35.846608773544006 },
          telephone: "+962793355255",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Products onOpenCart={() => setCartOpen(true)} />
        <Services />
        <Reviews />
        <LocationSection />
        <Delivery />
        <Contact />
      </main>
      <Footer />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </CartProvider>
  );
}
