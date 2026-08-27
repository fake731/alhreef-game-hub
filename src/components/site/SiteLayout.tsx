import { useState, type ReactNode } from "react";
import { CartProvider } from "@/lib/cart";
import { CartUIContext } from "@/lib/cart-ui";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartSheet } from "./CartSheet";
import { FloatingWhatsapp } from "./FloatingWhatsapp";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <CartUIContext.Provider value={{ openCart: () => setCartOpen(true) }}>
        <Navbar onOpenCart={() => setCartOpen(true)} />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
        <FloatingWhatsapp />
      </CartUIContext.Provider>
    </CartProvider>
  );
}


export function PageHeader({
  no,
  eyebrow,
  title,
  desc,
}: {
  no: number;
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 pb-2 pt-28 sm:px-6 sm:pt-32">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-gold)] text-base font-extrabold text-gold-foreground">
          {no}
        </span>
        <p className="text-sm font-bold text-accent">{eyebrow}</p>
      </div>
      <h1 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">{desc}</p>
    </header>
  );
}
