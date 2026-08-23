import { useEffect, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { LOGO_URL, whatsappLink } from "@/lib/store-data";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "./icons";

const LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#devices", label: "الأجهزة" },
  { href: "#services", label: "خدماتنا" },
  { href: "#location", label: "موقعنا" },
  { href: "#reviews", label: "المراجعات" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="التنقل الرئيسي"
        className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6"
      >
        <a href="#home" className="flex min-w-0 shrink-0 items-center gap-3">
          <img
            src={LOGO_URL}
            alt="شعار الحريف ستور"
            className="h-12 w-12 rounded-xl object-cover ring-1 ring-border"
          />
          <span className="hidden text-lg font-extrabold sm:block">
            الحريف <span className="text-gold-gradient">ستور</span>
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="me-0 ms-auto flex shrink-0 items-center gap-2 lg:ms-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="سلة المشتريات"
            className="relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface transition-colors hover:border-primary"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1.5 -start-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <Button asChild variant="whatsapp" className="hidden sm:inline-flex">
            <a
              href={whatsappLink("مرحبًا الحريف ستور، أريد الاستفسار عن الأجهزة المتوفرة.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="h-4 w-4" />
              واتساب
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
